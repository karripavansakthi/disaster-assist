import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Create SVG colored pins for Leaflet
const createPinIcon = (colorHex, letter) => {
  return L.divIcon({
    className: 'custom-leaflet-pin',
    html: `
      <div style="
        background-color: ${colorHex};
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 700;
        font-size: 11px;
        font-family: sans-serif;
      ">
        ${letter}
      </div>
    `,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -14],
  });
};

const victimIcon = createPinIcon('#F52D3D', 'V');
const shelterIcon = createPinIcon('#20A464', 'S');
const medicalIcon = createPinIcon('#1268E8', 'M');
const rescueIcon = createPinIcon('#0891b2', 'R');

export default function InteractiveMapCard({
  height = '320px',
  center = [17.3850, 78.4867],
  zoom = 13,
  showLegend = true,
  interactive = true,
  items = []
}) {
  // Default sample pins if none provided
  const markers = items.length > 0 ? items : [
    { id: 1, type: 'victim', name: 'REQ1024 - Flood Victim', lat: 17.3850, lng: 78.4867, desc: 'Critical assistance required (4 people)' },
    { id: 2, type: 'victim', name: 'REQ1023 - Medical Alert', lat: 17.3912, lng: 78.4912, desc: 'Insulin required' },
    { id: 3, type: 'shelter', name: 'Safe Haven Relief Center', lat: 17.3885, lng: 78.4812, desc: '173 beds available' },
    { id: 4, type: 'shelter', name: 'Green Valley Shelter', lat: 17.3992, lng: 78.4735, desc: '180 beds available' },
    { id: 5, type: 'medical', name: 'District Medical Camp', lat: 17.3942, lng: 78.4891, desc: 'Doctors & Triage active' },
    { id: 6, type: 'rescue', name: 'Rescue Team Bravo', lat: 17.3789, lng: 78.4721, desc: 'En route to Ward 7' },
  ];

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-[#E4EAF2] shadow-sm bg-slate-100 isolate z-0" style={{ height }}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={interactive}
        dragging={interactive}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((m) => {
          let icon = victimIcon;
          if (m.type === 'shelter') icon = shelterIcon;
          else if (m.type === 'medical') icon = medicalIcon;
          else if (m.type === 'rescue') icon = rescueIcon;

          return (
            <Marker key={m.id || `${m.lat}-${m.lng}`} position={[m.lat, m.lng]} icon={icon}>
              <Popup>
                <div className="p-1 text-xs">
                  <div className="font-bold text-[#172B4D]">{m.name}</div>
                  <div className="text-slate-500 mt-0.5">{m.desc || m.address || 'Active location'}</div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Map Legend Overlay matching reference image */}
      {showLegend && (
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-2.5 rounded-lg border border-[#E4EAF2] shadow-md z-[1000] text-[11px] font-semibold space-y-1.5 text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F52D3D] ring-2 ring-red-200"></span>
            <span>Victims</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#20A464] ring-2 ring-emerald-200"></span>
            <span>Shelter</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1268E8] ring-2 ring-blue-200"></span>
            <span>Medical</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0891b2] ring-2 ring-cyan-200"></span>
            <span>Rescue Team</span>
          </div>
        </div>
      )}
    </div>
  );
}
