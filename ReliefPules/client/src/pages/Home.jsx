import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  AlertTriangle,
  Home as HomeIcon,
  HeartHandshake,
  Radio,
  MapPin,
  Users,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  Activity
} from 'lucide-react';
import { getShelters, getAlerts } from '../data/mockData';

export default function Home() {
  const shelters = getShelters().slice(0, 3);
  const alerts = getAlerts();
  const latestAlert = alerts[0];

  const serviceCards = [
    {
      title: 'Emergency Help',
      desc: 'Report & get immediate assistance',
      icon: AlertTriangle,
      color: 'bg-red-500',
      lightColor: 'bg-red-50 text-red-600',
      link: '/emergency'
    },
    {
      title: 'Shelters Nearby',
      desc: 'Find safe places near you',
      icon: HomeIcon,
      color: 'bg-[#1268E8]',
      lightColor: 'bg-blue-50 text-[#1268E8]',
      link: '/shelters'
    },
    {
      title: 'Food & Medical',
      desc: 'Get food, water & medical support',
      icon: HeartHandshake,
      color: 'bg-[#20A464]',
      lightColor: 'bg-emerald-50 text-emerald-600',
      link: '/resources'
    },
    {
      title: 'Disaster Alerts',
      desc: 'Stay updated with real-time alerts',
      icon: Radio,
      color: 'bg-[#FF8A1F]',
      lightColor: 'bg-orange-50 text-orange-600',
      link: '/alerts'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F7FC] text-[#172B4D] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden">
        {/* Background Image: Flood rescue boat with responders in orange vests */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=2000&q=80')`
          }}
        />

        {/* Dark Cinematic Gradient Overlay for readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041A2E]/95 via-[#062B4C]/85 to-[#062B4C]/60" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-10 py-16 sm:py-24 w-full">
          <div className="max-w-2xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F52D3D] animate-pulse"></span>
              SMART DISASTER VICTIM ASSISTANCE PLATFORM
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Get Help. Stay Safe.{' '}
              <span className="text-[#F52D3D] block sm:inline">Recover Faster.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
              Intelligent disaster assistance connecting victims with shelters, volunteers, food, medical aid and emergency services.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/emergency"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#F52D3D] hover:bg-[#dc2030] text-white text-sm sm:text-base font-bold shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02]"
              >
                <AlertTriangle className="w-5 h-5 text-white" />
                <span>Request Emergency Help</span>
              </Link>

              <Link
                to="/shelters"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#062B4C] text-sm sm:text-base font-bold shadow-md transition-all hover:scale-[1.02] border border-slate-200"
              >
                <MapPin className="w-5 h-5 text-[#1268E8]" />
                <span>Find Nearby Shelter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Service Cards directly beneath hero matching screenshot */}
      <section className="relative -mt-10 sm:-mt-14 z-20 max-w-[1400px] mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                to={card.link}
                className="bg-white rounded-xl p-6 border border-[#E4EAF2] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${card.color} text-white shadow-sm mb-4 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-[#172B4D] group-hover:text-[#1268E8] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#667085] mt-1 font-normal">
                  {card.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Live Operational Status Banner */}
      {latestAlert && (
        <section className="max-w-[1400px] mx-auto px-5 sm:px-8 w-full mt-10">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">Active Alert</span>
                  <span className="text-xs text-slate-500">• {latestAlert.timeAgo}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">{latestAlert.title}: {latestAlert.message}</div>
              </div>
            </div>
            <Link
              to="/alerts"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors"
            >
              View All Alerts <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      )}

      {/* Quick Shelter & Resource Overview */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 w-full py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">Immediate Relief Centers</h2>
            <p className="text-xs sm:text-sm text-[#667085]">Safe hubs providing medical, food, and beds in your sector</p>
          </div>
          <Link to="/shelters" className="text-xs sm:text-sm font-bold text-[#1268E8] hover:underline inline-flex items-center gap-1">
            Browse All Shelters <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {shelters.map((shelter) => (
            <div key={shelter.id} className="bg-white rounded-xl border border-[#E4EAF2] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 relative bg-slate-100">
                <img src={shelter.image} alt={shelter.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-[#1268E8]">
                  {shelter.distance}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-[#172B4D]">{shelter.name}</h3>
                <p className="text-xs text-[#667085] mt-1">{shelter.address}</p>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400">Available:</span>{' '}
                    <span className="font-bold text-[#20A464]">{shelter.available} Beds</span>
                  </div>
                  <Link
                    to="/shelters"
                    className="text-[#1268E8] font-bold hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Hotline Footer Strip */}
      <section className="bg-[#062B4C] text-white py-8 border-t border-[#0A3D69] mt-auto">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-400/40 flex items-center justify-center text-[#F52D3D]">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-300 font-medium">State Emergency Disaster Helpline</div>
              <div className="text-lg font-extrabold text-white tracking-wide">Dial 112 / 1070 (Toll Free 24/7)</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>DisasterAssist Emergency Operations Network</span>
            <span>•</span>
            <Link to="/about" className="hover:text-white">About System</Link>
            <span>•</span>
            <Link to="/login" className="hover:text-white">Responder Login</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
