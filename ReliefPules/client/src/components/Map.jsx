import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom HTML Icons for different disaster entities
const createHtmlIcon = (emoji, bgColor = '#ff3b3b', ringColor = 'rgba(255, 59, 59, 0.4)') => {
  return L.divIcon({
    html: `
      <div style="
        position: relative;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${bgColor};
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 0 14px ${ringColor};
        font-size: 18px;
      ">
        <span>${emoji}</span>
      </div>
    `,
    className: 'custom-map-icon',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -20],
  });
};

const victimIcon = createHtmlIcon('🔴', '#dc2626', 'rgba(220, 38, 38, 0.6)');
const shelterIcon = createHtmlIcon('🏠', '#059669', 'rgba(16, 185, 129, 0.6)');
const rescueIcon = createHtmlIcon('🚑', '#0284c7', 'rgba(14, 165, 233, 0.6)');
const volunteerIcon = createHtmlIcon('📍', '#d97706', 'rgba(245, 158, 11, 0.6)');
const userLocationIcon = createHtmlIcon('🎯', '#8b5cf6', 'rgba(139, 92, 246, 0.7)');

function CenterView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center && center[0] && center[1]) {
      map.setView(center, zoom || 13);
    }
    // Ensures Leaflet recalculates dimensions properly inside cards/tabs
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);
    return () => clearTimeout(timer);
  }, [center, zoom, map]);
  return null;
}

export default function Map({
  emergencies = [],
  shelters = [],
  rescueTeams = [],
  volunteers = [],
  userLocation,
  center = [17.3850, 78.4867],
  zoom = 13,
  height = '480px',
  onSelectMarker,
}) {
  const mapCenter = userLocation ? [userLocation.lat, userLocation.lng] : center;

  return (
    <div
      style={{ height, width: '100%' }}
      className="relative rounded-2xl overflow-hidden border border-[#E4EAF2] dark:border-slate-800 shadow-md z-0 isolate"
    >
      {/* Legend Badge */}
      <div className="absolute top-3 right-3 z-[1000] bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 shadow-md text-xs flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-1.5 font-bold text-red-600">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping inline-block" />
          🔴 Emergency
        </span>
        <span className="flex items-center gap-1 font-bold text-emerald-600">
          🏠 Shelters
        </span>
        <span className="flex items-center gap-1 font-bold text-blue-600">
          🚑 Rescue
        </span>
        <span className="flex items-center gap-1 font-bold text-amber-600">
          📍 Volunteer
        </span>
      </div>

      <MapContainer
        center={mapCenter}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <CenterView center={mapCenter} zoom={zoom} />
        
        {/* OpenStreetMap CartoDB Voyager / Light Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* User Location */}
        {userLocation && userLocation.lat && userLocation.lng && (
          <>
            <Marker position={[userLocation.lat, userLocation.lng]} icon={userLocationIcon}>
              <Popup>
                <div className="p-1 text-xs">
                  <strong className="text-purple-600 block mb-1">🎯 Your Current Location</strong>
                  <span>Lat: {userLocation.lat.toFixed(4)}, Lng: {userLocation.lng.toFixed(4)}</span>
                </div>
              </Popup>
            </Marker>
            <Circle
              center={[userLocation.lat, userLocation.lng]}
              radius={2000}
              pathOptions={{ color: '#8b5cf6', fillColor: '#8b5cf6', fillOpacity: 0.1 }}
            />
          </>
        )}

        {/* Emergencies / Victims (🔴) */}
        {emergencies.map((em, idx) => {
          const lat = em.lat || em.location?.coordinates?.lat || em.location?.lat;
          const lng = em.lng || em.location?.coordinates?.lng || em.location?.lng;
          if (!lat || !lng) return null;

          return (
            <Marker
              key={em._id || em.sosId || em.id || idx}
              position={[lat, lng]}
              icon={victimIcon}
              eventHandlers={{
                click: () => onSelectMarker?.({ type: 'emergency', data: em }),
              }}
            >
              <Popup>
                <div className="p-2 text-xs font-sans min-w-[200px]">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-extrabold text-red-600">
                      {em.sosId || em.id || '#REQ-EMERGENCY'}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-800 font-bold uppercase text-[10px]">
                      {em.severity || em.priority || 'Critical'}
                    </span>
                  </div>
                  <div className="font-bold text-slate-800 capitalize mb-0.5">
                    {em.disasterType || em.type || 'Flood'} · {em.peopleCount || em.peopleAffected || 1} Persons
                  </div>
                  <p className="text-slate-600 text-[11px] mb-2 line-clamp-2">
                    {em.description || em.details || em.location?.address || em.location}
                  </p>
                  <div className="text-[10px] text-slate-500 font-semibold mb-2">
                    Status: <span className="font-bold text-slate-700">{em.status || 'Pending'}</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center py-1 rounded bg-red-600 text-white font-bold text-[11px] no-underline"
                  >
                    Navigate to Victim 🚑
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* Shelters (🏠) */}
        {shelters.map((sh, idx) => {
          const lat = sh.lat || sh.location?.lat || sh.location?.coordinates?.lat;
          const lng = sh.lng || sh.location?.lng || sh.location?.coordinates?.lng;
          if (!lat || !lng) return null;

          const totalCap = sh.capacity || sh.totalCapacity || 500;
          const available = sh.available !== undefined ? sh.available : Math.max(0, totalCap - (sh.occupied || sh.currentOccupancy || 0));

          return (
            <Marker
              key={sh._id || sh.id || idx}
              position={[lat, lng]}
              icon={shelterIcon}
              eventHandlers={{
                click: () => onSelectMarker?.({ type: 'shelter', data: sh }),
              }}
            >
              <Popup>
                <div className="p-2 text-xs font-sans min-w-[210px]">
                  <div className="font-extrabold text-emerald-700 text-sm mb-0.5">
                    🏠 {sh.name}
                  </div>
                  <p className="text-slate-600 text-[11px] mb-2">{sh.address}</p>
                  <div className="grid grid-cols-2 gap-1 bg-slate-50 p-1.5 rounded mb-2 text-[11px]">
                    <div>Capacity: <strong>{totalCap}</strong></div>
                    <div>Available: <strong className="text-emerald-600">{available}</strong></div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center py-1 rounded bg-emerald-600 text-white font-bold text-[11px] no-underline"
                  >
                    Get Directions 📍
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* Rescue Teams (🚑) */}
        {rescueTeams.map((team, idx) => {
          const lat = team.lat || team.currentLocation?.lat || team.location?.lat;
          const lng = team.lng || team.currentLocation?.lng || team.location?.lng;
          if (!lat || !lng) return null;

          return (
            <Marker key={team._id || team.teamId || team.id || idx} position={[lat, lng]} icon={rescueIcon}>
              <Popup>
                <div className="p-2 text-xs font-sans min-w-[180px]">
                  <div className="font-bold text-cyan-800 text-xs mb-0.5">
                    🚑 {team.teamId || team.name || 'Rescue Unit'}
                  </div>
                  <div className="text-[11px] text-slate-600 mb-1">
                    Leader: <strong>{team.leaderName || team.leader || 'Commander'}</strong>
                  </div>
                  <div className="text-[11px] text-slate-500 mb-1">
                    Status: <span className="font-bold text-cyan-600">{team.status || 'Active'}</span>
                  </div>
                  {team.contactPhone && (
                    <div className="text-[11px] text-slate-700 font-bold">
                      Phone: {team.contactPhone}
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* Volunteers (📍) */}
        {volunteers.map((vol, idx) => {
          const lat = vol.lat || vol.location?.coordinates?.lat || vol.location?.lat;
          const lng = vol.lng || vol.location?.coordinates?.lng || vol.location?.lng;
          if (!lat || !lng) return null;

          return (
            <Marker key={vol._id || vol.id || idx} position={[lat, lng]} icon={volunteerIcon}>
              <Popup>
                <div className="p-1.5 text-xs font-sans">
                  <div className="font-bold text-amber-700">📍 Volunteer: {vol.name}</div>
                  <div className="text-[11px] text-slate-600">{vol.phone || 'Available for dispatch'}</div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
