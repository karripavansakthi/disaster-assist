import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SosModal from './SosModal';
import {
  Home,
  Tent,
  AlertTriangle,
  Radio,
  User
} from 'lucide-react';

export default function MobileBottomNav() {
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [sosOpen, setSosOpen] = useState(false);

  const getDashboardPath = () => {
    if (!isAuthenticated) return '/login';
    if (user?.role === 'admin') return '/admin/dashboard';
    if (user?.role === 'volunteer') return '/volunteer/dashboard';
    return '/victim/dashboard';
  };

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Shelters', path: '/shelters', icon: Tent },
    { label: 'SOS', isSos: true },
    { label: 'Alerts', path: '/alerts', icon: Radio },
    { label: isAuthenticated ? 'Profile' : 'Login', path: getDashboardPath(), icon: User },
  ];

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0b1320]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg px-2 py-1.5 flex items-center justify-around select-none">
        {navItems.map((item, idx) => {
          if (item.isSos) {
            return (
              <button
                key="sos-mobile-btn"
                type="button"
                onClick={() => setSosOpen(true)}
                className="relative -top-3 w-14 h-14 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 text-white flex flex-col items-center justify-center shadow-lg shadow-red-500/40 ring-4 ring-white dark:ring-[#0b1320] active:scale-95 transition-transform"
                aria-label="Send Emergency SOS"
              >
                <span className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping pointer-events-none" />
                <AlertTriangle className="w-5 h-5 text-white relative z-10" />
                <span className="text-[9px] font-black uppercase tracking-wider text-white relative z-10">
                  SOS
                </span>
              </button>
            );
          }

          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-bold transition-colors ${
                isActive
                  ? 'text-[#1268E8] dark:text-blue-400'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Embedded Global SOS Trigger Modal */}
      <SosModal isOpen={sosOpen} onClose={() => setSosOpen(false)} />
    </>
  );
}
