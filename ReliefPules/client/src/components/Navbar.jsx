import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DisasterLogo from './DisasterLogo';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';
import { Menu, X, AlertTriangle } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Showcase', path: '/showcase' },
    { label: 'Emergency Help', path: '/emergency' },
    { label: 'Shelters', path: '/shelters' },
    { label: 'Resources', path: '/resources' },
    { label: 'Alerts', path: '/alerts' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0b1320]/95 backdrop-blur-md border-b border-[#E4EAF2] dark:border-slate-800 shadow-xs transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
        {/* Left: DisasterAssist Logo */}
        <DisasterLogo size="default" to="/" />

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[14px] font-medium transition-colors ${
                  isActive
                    ? 'text-[#1268E8] dark:text-blue-400 font-semibold'
                    : 'text-[#172B4D] dark:text-slate-300 hover:text-[#1268E8] dark:hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3.5">
          {/* Light / Dark Mode Toggle */}
          <ThemeToggle />

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link
                to={user?.role === 'admin' ? '/admin/dashboard' : user?.role === 'volunteer' ? '/volunteer/dashboard' : '/victim/dashboard'}
                className="text-[14px] font-semibold text-[#172B4D] dark:text-slate-200 hover:text-[#1268E8]"
              >
                Dashboard ({user?.name?.split(' ')[0] || 'My Area'})
              </Link>
              <button
                onClick={logout}
                className="text-[13px] text-[#667085] dark:text-slate-400 hover:text-red-500 font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-[14px] font-semibold text-[#172B4D] dark:text-slate-200 hover:text-[#1268E8] transition-colors"
            >
              Login
            </Link>
          )}

          {/* Emergency Request Button */}
          <Link
            to="/emergency"
            className="inline-flex items-center gap-2 bg-[#F52D3D] hover:bg-[#dc2030] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm shadow-red-500/20 transition-all hover:shadow-md"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Emergency Request</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-[#172B4D] dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-[#0b1320] border-b border-[#E4EAF2] dark:border-slate-800 px-5 py-4 space-y-3 transition-colors">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-[#172B4D] dark:text-slate-200 hover:text-[#1268E8] py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-center py-2 text-[#172B4D] dark:text-slate-200"
            >
              Login
            </Link>
            <Link
              to="/emergency"
              onClick={() => setMobileOpen(false)}
              className="bg-[#F52D3D] text-white text-center py-2.5 rounded-lg text-sm font-bold shadow-sm"
            >
              Emergency Request
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
