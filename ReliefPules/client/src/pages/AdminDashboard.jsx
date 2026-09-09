import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import InteractiveMapCard from '../components/InteractiveMapCard';
import StatusBadge from '../components/StatusBadge';
import { getRequests } from '../data/mockData';
import {
  Users,
  AlertTriangle,
  Home,
  Shield,
  ArrowRight,
  ExternalLink,
  Search,
  Filter,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const requests = getRequests();
  const [filterType, setFilterType] = useState('All');

  const filteredRequests = requests.filter(
    (r) => filterType === 'All' || r.type.toLowerCase() === filterType.toLowerCase()
  );

  return (
    <DashboardLayout
      title="Admin Dashboard"
      subtitle="Complete overview of disaster management"
      roleOverride="admin"
    >
      <div className="space-y-6">
        {/* 4 Statistics Cards matching reference image */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Total Victims */}
          <div className="bg-white dark:bg-[#0d1726] rounded-xl p-5 border border-[#E4EAF2] dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#1268E8] dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#667085] dark:text-slate-400">Total Victims</div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-black text-[#172B4D] dark:text-white tracking-tight">1,248</span>
                <span className="text-[11px] font-bold text-[#20A464] bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded">↑ 12%</span>
              </div>
            </div>
          </div>

          {/* Card 2: Active Emergencies */}
          <div className="bg-white dark:bg-[#0d1726] rounded-xl p-5 border border-[#E4EAF2] dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#F52D3D] dark:text-red-400 flex items-center justify-center shrink-0 border border-red-100 dark:border-red-900">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#667085] dark:text-slate-400">Active Emergencies</div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-black text-[#172B4D] dark:text-white tracking-tight">42</span>
                <span className="text-[11px] font-bold text-[#F52D3D] bg-red-50 dark:bg-red-950/40 px-1.5 py-0.5 rounded">↑ 8%</span>
              </div>
            </div>
          </div>

          {/* Card 3: Available Shelters */}
          <div className="bg-white dark:bg-[#0d1726] rounded-xl p-5 border border-[#E4EAF2] dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-[#20A464] dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#667085] dark:text-slate-400">Available Shelters</div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-black text-[#172B4D] dark:text-white tracking-tight">18</span>
                <span className="text-[11px] font-bold text-[#20A464] bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded">↑ 6%</span>
              </div>
            </div>
          </div>

          {/* Card 4: Volunteers */}
          <div className="bg-white dark:bg-[#0d1726] rounded-xl p-5 border border-[#E4EAF2] dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-900">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#667085] dark:text-slate-400">Volunteers</div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-black text-[#172B4D] dark:text-white tracking-tight">96</span>
                <span className="text-[11px] font-bold text-[#20A464] bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded">↑ 15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disaster Map Section matching reference image */}
        <div className="bg-white rounded-xl p-6 border border-[#E4EAF2] shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <div>
              <h3 className="text-base font-bold text-[#172B4D]">Disaster Map</h3>
              <p className="text-xs text-[#667085]">Real-time spatial visualization of incident density and assets</p>
            </div>
            <Link
              to="/admin/requests"
              className="text-xs font-bold text-[#1268E8] hover:underline inline-flex items-center gap-1"
            >
              View Full Map <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <InteractiveMapCard height="340px" showLegend={true} zoom={12} />
        </div>

        {/* Recent Emergency Requests Table matching reference image */}
        <div className="bg-white rounded-xl p-6 border border-[#E4EAF2] shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div>
              <h3 className="text-base font-bold text-[#172B4D]">Recent Emergency Requests</h3>
              <p className="text-xs text-[#667085]">Incoming SOS signals triaged by severity</p>
            </div>
            <Link
              to="/admin/requests"
              className="text-xs font-bold text-[#1268E8] hover:underline inline-flex items-center gap-1"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E4EAF2] text-[11px] font-bold text-[#667085] uppercase tracking-wider bg-slate-50/50">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Priority</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Assigned</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {filteredRequests.slice(0, 5).map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#172B4D] dark:text-white">{req.id}</td>
                    <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300 font-medium">{req.type}</td>
                    <td className="py-3.5 px-4">
                      <StatusBadge status={req.priority} />
                    </td>
                    <td className="py-3.5 px-4">
                      <StatusBadge status={req.status} />
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-600 dark:text-slate-400">
                      {req.assignedTeam !== '-' ? req.assignedTeam : 'Team A'}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 font-medium">
                      {req.timeAgo || '2h ago'}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        to="/admin/requests"
                        className="inline-flex items-center gap-1 text-[#1268E8] hover:underline font-bold"
                      >
                        <Eye className="w-3.5 h-3.5" /> Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
