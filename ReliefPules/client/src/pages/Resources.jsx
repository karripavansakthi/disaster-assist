import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import StatusBadge from '../components/StatusBadge';
import { getResources } from '../data/mockData';
import {
  Utensils,
  HeartPulse,
  Droplet,
  Package,
  MapPin,
  Clock,
  Eye,
  X,
  Phone
} from 'lucide-react';

export default function Resources() {
  const allResources = getResources();
  const [activeTab, setActiveTab] = useState('Food');
  const [selectedResource, setSelectedResource] = useState(null);

  const tabs = [
    { id: 'Food', label: 'Food', icon: Utensils },
    { id: 'Medical', label: 'Medical', icon: HeartPulse },
    { id: 'Water', label: 'Water', icon: Droplet },
    { id: 'Others', label: 'Others', icon: Package }
  ];

  const filteredResources = allResources.filter(
    (res) => activeTab === 'All' || res.category.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <DashboardLayout
      title="Food & Medical Resources"
      subtitle="Check available resources and facilities"
      roleOverride="victim"
    >
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Category Tabs matching reference image */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#1268E8] text-white shadow-sm'
                    : 'bg-white border border-[#E4EAF2] text-[#667085] hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Resource Cards List matching reference */}
        <div className="space-y-4">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-xl border border-[#E4EAF2] p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                {/* Thumbnail / Icon Image */}
                <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                  <img src={res.image} alt={res.name} className="w-full h-full object-cover" />
                </div>

                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-base font-bold text-[#172B4D]">{res.name}</h3>
                    <span className="text-xs font-semibold text-[#1268E8] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      {res.distance}
                    </span>
                  </div>

                  <p className="text-xs text-[#667085] mt-1 font-medium">
                    {res.items}
                  </p>

                  <div className="mt-1.5 flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {res.timings}
                    </span>
                    <span>•</span>
                    <span>{res.provider}</span>
                  </div>
                </div>
              </div>

              {/* Right: Status Badge & View Details button */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <StatusBadge status={res.status} />

                <button
                  type="button"
                  onClick={() => setSelectedResource(res)}
                  className="px-3.5 py-1.5 rounded-lg border border-[#E4EAF2] hover:border-[#1268E8] text-xs font-bold text-[#1268E8] hover:bg-blue-50 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Modal */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-[#172B4D]">{selectedResource.name}</h3>
              <button onClick={() => setSelectedResource(null)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-40 rounded-xl overflow-hidden bg-slate-100">
              <img src={selectedResource.image} alt={selectedResource.name} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-2 text-xs">
              <div><strong>Category:</strong> {selectedResource.category}</div>
              <div><strong>Stock items:</strong> {selectedResource.items}</div>
              <div><strong>Operational Hours:</strong> {selectedResource.timings}</div>
              <div><strong>Dispatch Agency:</strong> {selectedResource.provider}</div>
              <div><strong>Location Distance:</strong> {selectedResource.distance} from your current coordinates</div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedResource(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 text-xs font-bold text-slate-700"
              >
                Close
              </button>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedResource.lat},${selectedResource.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1268E8] text-white text-xs font-bold"
              >
                Navigate
              </a>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
