import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import InteractiveMapCard from '../components/InteractiveMapCard';
import { useAuth } from '../context/AuthContext';
import { getRequests, getShelters } from '../data/mockData';
import {
  AlertTriangle,
  Home,
  Users,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  Shield,
  Phone,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VictimDashboard() {
  const { user } = useAuth();
  const requests = getRequests();
  const shelters = getShelters();

  // Find active request for victim
  const activeRequest = requests[0] || {
    id: 'REQ1024',
    type: 'Flood',
    priority: 'Critical',
    assignedTeam: 'Rescue Team A',
    peopleAffected: 4,
    details: 'Water level rising quickly on ground floor. 2 children and 1 elderly person need boat evacuation.',
    distance: '1.2 km'
  };

  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const timelineSteps = [
    { title: 'Request Received', time: '12 Aug 2026, 08:45 AM', completed: true },
    { title: 'Volunteer Assigned', time: '12 Aug 2026, 09:30 AM', completed: true },
    { title: 'Assistance Arriving', time: 'In Progress', inProgress: true },
    { title: 'Completed', time: 'Pending', pending: true }
  ];

  return (
    <DashboardLayout
      title={`Welcome, ${user?.name || 'Ramesh Kumar'}`}
      subtitle="Stay safe. We are here to help you"
      roleOverride="victim"
    >
      <div className="space-y-6">
        {/* Red Emergency Active Alert Banner matching reference image */}
        <div className="bg-[#F52D3D] text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm shadow-red-500/20">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold leading-tight">
                Your request is active!
              </div>
              <div className="text-xs text-white/85 font-medium mt-0.5">
                Request #{activeRequest.id} • {activeRequest.type} ({activeRequest.priority} Priority)
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowDetailsModal(true)}
            className="self-start sm:self-auto px-4 py-2 rounded-lg bg-white text-[#F52D3D] hover:bg-slate-50 text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-[1.02]"
          >
            View Details
          </button>
        </div>

        {/* 3 Summary Cards matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Active Request */}
          <div className="bg-white dark:bg-[#0d1726] rounded-xl p-5 border border-[#E4EAF2] dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#F52D3D] flex items-center justify-center shrink-0 border border-red-100 dark:border-red-900">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#667085] dark:text-slate-400">Active Request</div>
              <div className="text-xl font-extrabold text-[#172B4D] dark:text-white tracking-tight mt-0.5">
                #{activeRequest.id}
              </div>
              <div className="text-xs font-medium text-[#F52D3D]">
                Medical Assistance • <span className="text-slate-400 font-normal">12 min ago</span>
              </div>
            </div>
          </div>

          {/* Card 2: Nearby Shelter */}
          <div className="bg-white dark:bg-[#0d1726] rounded-xl p-5 border border-[#E4EAF2] dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-[#20A464] flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#667085] dark:text-slate-400">Nearby Shelters</div>
              <div className="text-xl font-extrabold text-[#172B4D] dark:text-white tracking-tight mt-0.5">
                Safe Haven
              </div>
              <div className="text-xs font-medium text-[#20A464]">
                1.2 km away
              </div>
            </div>
          </div>

          {/* Card 3: People with You */}
          <div className="bg-white dark:bg-[#0d1726] rounded-xl p-5 border border-[#E4EAF2] dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#1268E8] flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#667085] dark:text-slate-400">People with You</div>
              <div className="text-xl font-extrabold text-[#172B4D] dark:text-white tracking-tight mt-0.5">
                {activeRequest.peopleAffected || 4}
              </div>
              <div className="text-xs font-medium text-[#1268E8] dark:text-blue-400">
                2 Adults, 1 Elderly
              </div>
            </div>
          </div>
        </div>

        {/* Lower Two Cards Grid: Emergency Status & Nearby Shelters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT CARD: Emergency Status (Vertical Timeline) */}
          <div className="bg-white rounded-xl p-6 border border-[#E4EAF2] shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <h3 className="text-base font-bold text-[#172B4D]">Emergency Status</h3>
              <span className="text-[11px] font-bold text-[#F52D3D] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                Live Tracking
              </span>
            </div>

            {/* Vertical Timeline */}
            <div className="space-y-6 relative pl-3">
              {/* Vertical line connecting nodes */}
              <div className="absolute left-[23px] top-3 bottom-6 w-0.5 bg-slate-200" />

              {timelineSteps.map((step, idx) => (
                <div key={step.title} className="relative flex items-start gap-4">
                  {/* Node icon */}
                  {step.completed ? (
                    <div className="w-6 h-6 rounded-full bg-[#20A464] text-white flex items-center justify-center shrink-0 z-10 ring-4 ring-white shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : step.inProgress ? (
                    <div className="w-6 h-6 rounded-full bg-[#1268E8] text-white flex items-center justify-center shrink-0 z-10 ring-4 ring-white shadow-xs animate-pulse">
                      <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 z-10 ring-4 ring-white">
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 -mt-0.5">
                    <div className="flex items-center justify-between">
                      <div className="text-xs sm:text-sm font-bold text-[#172B4D]">
                        {step.title}
                      </div>
                      {step.inProgress && (
                        <span className="text-[11px] font-bold text-[#1268E8] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                          In Progress
                        </span>
                      )}
                      {step.pending && (
                        <span className="text-[11px] font-medium text-slate-400">
                          Pending
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#667085] mt-0.5">
                      {step.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Hotline Assistance Banner */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#667085]">
                <Shield className="w-4 h-4 text-[#1268E8]" />
                <span>Assigned Responder: Suresh (Rescue Lead)</span>
              </div>
              <a
                href="tel:112"
                className="text-xs font-bold text-[#F52D3D] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" /> Call Team
              </a>
            </div>
          </div>

          {/* RIGHT CARD: Nearby Shelters */}
          <div className="bg-white rounded-xl p-6 border border-[#E4EAF2] shadow-sm flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-[#172B4D]">Nearby Shelters</h3>
              <Link
                to="/victim/shelters"
                className="text-xs font-bold text-[#1268E8] hover:underline inline-flex items-center gap-1"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Small Map matching reference */}
            <div className="mb-4">
              <InteractiveMapCard height="180px" showLegend={false} zoom={13} />
            </div>

            {/* Shelter List Below Map matching reference */}
            <div className="space-y-2.5 flex-1">
              {shelters.slice(0, 3).map((shelter) => (
                <div
                  key={shelter.id}
                  className="p-3 rounded-lg border border-[#E4EAF2] hover:border-blue-200 bg-slate-50/50 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-[#20A464] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#172B4D]">{shelter.name}</div>
                      <div className="text-[11px] text-[#667085]">
                        {shelter.available} beds available • {shelter.facilities.join(', ')}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1268E8] shrink-0">
                    {shelter.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                <h3 className="font-bold text-base text-[#172B4D]">
                  Request #{activeRequest.id} Details
                </h3>
              </div>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg space-y-1.5">
                <div><span className="text-slate-500">Emergency Type:</span> <strong className="text-slate-800">{activeRequest.type}</strong></div>
                <div><span className="text-slate-500">Priority:</span> <span className="font-bold text-red-600 uppercase">{activeRequest.priority}</span></div>
                <div><span className="text-slate-500">Assigned Team:</span> <strong className="text-slate-800">{activeRequest.assignedTeam}</strong></div>
                <div><span className="text-slate-500">Victim Contact:</span> <strong className="text-slate-800">Ramesh Kumar (+91 98451 23456)</strong></div>
                <div><span className="text-slate-500">Location:</span> <strong className="text-slate-800">{activeRequest.location}</strong></div>
                <div><span className="text-slate-500">Situation:</span> <p className="text-slate-700 mt-0.5">{activeRequest.details}</p></div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-blue-800">
                <strong>Responder Note:</strong> Boat Unit 3 is 1.2 km away. ETA is 20-25 minutes. Please keep flashlights or brightly colored towels ready.
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold"
              >
                Close
              </button>
              <a
                href="tel:112"
                className="px-4 py-2 bg-[#F52D3D] hover:bg-red-700 text-white rounded-lg text-xs font-bold"
              >
                Call Emergency Desk
              </a>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
