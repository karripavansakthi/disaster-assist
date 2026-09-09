import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import InteractiveMapCard from '../components/InteractiveMapCard';
import StatusBadge from '../components/StatusBadge';
import { useAuth } from '../context/AuthContext';
import { getRequests } from '../data/mockData';
import {
  FileText,
  CheckCircle2,
  Clock,
  MapPin,
  Flame,
  Droplets,
  HeartPulse,
  Home,
  Shield,
  ArrowRight,
  UserCheck,
  ChevronRight,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VolunteerDashboard() {
  const { user } = useAuth();
  const allRequests = getRequests();

  // Filter requests assigned to Suresh matching Screen 5 in reference
  const assignedRequests = [
    {
      id: 'REQ1024',
      type: 'Flood',
      timeAgo: '2 hrs ago',
      priority: 'Critical',
      status: 'In Progress',
      distance: '1.2 km',
      roleNeeded: 'Rescue Team',
      icon: Droplets,
      victimName: 'Ramesh Kumar',
      phone: '+91 98451 23456',
      location: 'Ward 7, River View'
    },
    {
      id: 'REQ1018',
      type: 'Medical',
      timeAgo: '4 hrs ago',
      priority: 'High',
      status: 'In Progress',
      distance: '2.8 km',
      roleNeeded: 'Medical Team',
      icon: HeartPulse,
      victimName: 'Sunita Rao',
      phone: '+91 98123 45678',
      location: 'Sector 4, Gandhi Nagar'
    },
    {
      id: 'REQ1007',
      type: 'Shelter',
      timeAgo: '6 hrs ago',
      priority: 'Medium',
      status: 'Pending',
      distance: '4.5 km',
      roleNeeded: 'Food & Shelter',
      icon: Home,
      victimName: 'Fatima Begum',
      phone: '+91 98765 11223',
      location: 'Lake Side Colony'
    }
  ];

  const [selectedReq, setSelectedReq] = useState(null);

  return (
    <DashboardLayout
      title={`Hello, ${user?.name ? user.name.split(' ')[0] : 'Suresh'},`}
      subtitle="Thank you for helping communities!"
      roleOverride="volunteer"
    >
      <div className="space-y-6">
        {/* Volunteer Active Badge & Alert strip */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1268E8] text-xs font-bold border border-blue-200">
            <UserCheck className="w-3.5 h-3.5" /> Certified Field Responder
          </span>
          <span className="text-xs text-[#667085]">
            Sector: Hyderabad West Disaster Triage
          </span>
        </div>

        {/* 3 Summary Cards matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* 1. Assigned Requests */}
          <div className="bg-white rounded-xl p-5 border border-[#E4EAF2] border-t-4 border-t-[#1268E8] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#667085]">Assigned Requests</span>
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#1268E8] flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl font-black text-[#172B4D] tracking-tight mt-2">
              3
            </div>
          </div>

          {/* 2. Completed */}
          <div className="bg-white rounded-xl p-5 border border-[#E4EAF2] border-t-4 border-t-[#20A464] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#667085]">Completed</span>
              <span className="w-8 h-8 rounded-lg bg-emerald-50 text-[#20A464] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl font-black text-[#172B4D] tracking-tight mt-2">
              5
            </div>
          </div>

          {/* 3. Total Hours */}
          <div className="bg-white rounded-xl p-5 border border-[#E4EAF2] border-t-4 border-t-purple-600 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#667085]">Total Hours</span>
              <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl font-black text-[#172B4D] tracking-tight mt-2">
              48
            </div>
          </div>
        </div>

        {/* Main Card: My Assigned Requests */}
        <div className="bg-white rounded-xl p-6 border border-[#E4EAF2] shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div>
              <h3 className="text-base font-bold text-[#172B4D]">My Assigned Requests</h3>
              <p className="text-xs text-[#667085]">Requests currently allocated to your field responder kit</p>
            </div>
            <Link
              to="/volunteer/assigned"
              className="text-xs font-bold text-[#1268E8] hover:underline inline-flex items-center gap-1"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Requests Rows matching reference */}
          <div className="divide-y divide-slate-100">
            {assignedRequests.map((req) => {
              const Icon = req.icon;
              return (
                <div
                  key={req.id}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 p-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#172B4D]">{req.id}</span>
                        <span className="text-xs text-[#667085]">• {req.type}</span>
                        <span className="text-[11px] text-slate-400">({req.timeAgo})</span>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <StatusBadge status={req.priority} />
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" /> {req.distance}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                    <div className="text-right">
                      <div className="text-[11px] text-slate-400 font-semibold">Role: <span className="text-[#172B4D] dark:text-white font-bold">{req.roleNeeded}</span></div>
                    </div>

                    <StatusBadge status={req.status} />

                    <button
                      type="button"
                      onClick={() => setSelectedReq(req)}
                      className="px-3 py-1.5 rounded-lg border border-[#E4EAF2] dark:border-slate-700 hover:border-[#1268E8] bg-white dark:bg-slate-800 text-xs font-bold text-[#1268E8] dark:text-blue-400 hover:bg-blue-50 transition-colors"
                    >
                      Action
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nearby Victims Map Card matching reference */}
        <div className="bg-white rounded-xl p-6 border border-[#E4EAF2] shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <div>
              <h3 className="text-base font-bold text-[#172B4D]">Nearby Victims</h3>
              <p className="text-xs text-[#667085]">Geo-coordinates of victims reporting urgent aid in your perimeter</p>
            </div>
            <Link
              to="/volunteer/available"
              className="px-3 py-1.5 rounded-lg bg-[#1268E8] hover:bg-blue-700 text-white text-xs font-bold transition-colors"
            >
              View on Map
            </Link>
          </div>

          <InteractiveMapCard height="280px" showLegend={true} zoom={13} />
        </div>
      </div>

      {/* Action Modal */}
      {selectedReq && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 shadow-xl space-y-4">
            <h3 className="font-bold text-base text-[#172B4D]">
              Dispatch Action for {selectedReq.id}
            </h3>
            <div className="space-y-2 text-xs bg-slate-50 p-3 rounded-xl">
              <div><strong>Victim:</strong> {selectedReq.victimName}</div>
              <div><strong>Contact:</strong> {selectedReq.phone}</div>
              <div><strong>Location:</strong> {selectedReq.location} ({selectedReq.distance})</div>
              <div><strong>Task:</strong> {selectedReq.roleNeeded}</div>
            </div>

            <div className="flex gap-2 justify-end pt-2">
              <button
                onClick={() => setSelectedReq(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 text-xs font-bold text-slate-700"
              >
                Close
              </button>
              <a
                href={`tel:${selectedReq.phone}`}
                className="px-4 py-2 rounded-lg bg-emerald-600 text-xs font-bold text-white flex items-center gap-1"
              >
                <Phone className="w-3 h-3" /> Call Citizen
              </a>
              <button
                onClick={() => {
                  alert(`Status updated for ${selectedReq.id}: Arrived at location.`);
                  setSelectedReq(null);
                }}
                className="px-4 py-2 rounded-lg bg-[#1268E8] text-xs font-bold text-white"
              >
                Mark Arrived
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
