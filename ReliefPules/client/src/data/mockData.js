// DisasterAssist Centralized Mock Data & LocalStorage Store

export const INITIAL_REQUESTS = [
  {
    id: 'REQ1024',
    type: 'Flood',
    priority: 'Critical',
    status: 'Assigned',
    assignedTeam: 'Rescue Team A',
    assignedVolunteer: 'Suresh',
    victimName: 'Ramesh Kumar',
    peopleAffected: 4,
    details: 'Water level rising quickly on ground floor. 2 children and 1 elderly person need boat evacuation.',
    location: 'Plot 42, River View Enclave, Ward 7',
    lat: 17.385044,
    lng: 78.486671,
    distance: '1.2 km',
    timeAgo: '2 hours ago',
    requiredAssistance: ['Food', 'Medical', 'Shelter', 'Rescue'],
    timeline: [
      { title: 'Request Received', time: '10 Aug 2026, 06:45 AM', done: true },
      { title: 'Volunteer Assigned', time: '10 Aug 2026, 09:30 AM', done: true },
      { title: 'Assistance Arriving', time: 'In Progress (ETA 25m)', current: true },
      { title: 'Completed', time: 'Pending', done: false }
    ]
  },
  {
    id: 'REQ1023',
    type: 'Medical',
    priority: 'High',
    status: 'Pending',
    assignedTeam: '-',
    assignedVolunteer: '-',
    victimName: 'Sunita Rao',
    peopleAffected: 2,
    details: 'Diabetic patient out of insulin and sterile bandage kits.',
    location: 'Sector 4, Gandhi Nagar',
    lat: 17.3912,
    lng: 78.4912,
    distance: '2.8 km',
    timeAgo: '3 hours ago',
    requiredAssistance: ['Medical'],
  },
  {
    id: 'REQ1022',
    type: 'Shelter',
    priority: 'Medium',
    status: 'Completed',
    assignedTeam: 'Team B',
    assignedVolunteer: 'Anita Roy',
    victimName: 'Mohd. Farhan',
    peopleAffected: 5,
    details: 'Family safely relocated to Safe Haven Relief Center.',
    location: 'Old Station Road',
    lat: 17.3789,
    lng: 78.4721,
    distance: '3.4 km',
    timeAgo: '5 hours ago',
    requiredAssistance: ['Shelter', 'Food'],
  },
  {
    id: 'REQ1021',
    type: 'Earthquake',
    priority: 'High',
    status: 'Assigned',
    assignedTeam: 'Team C',
    assignedVolunteer: 'Rajesh Verma',
    victimName: 'Kavita Patel',
    peopleAffected: 3,
    details: 'Cracks on building exterior, need safety inspection and temporary tarp.',
    location: 'Block C, Hill View',
    lat: 17.4011,
    lng: 78.4611,
    distance: '4.1 km',
    timeAgo: '5 hours ago',
    requiredAssistance: ['Shelter', 'Rescue'],
  },
  {
    id: 'REQ1020',
    type: 'Food',
    priority: 'Low',
    status: 'Pending',
    assignedTeam: '-',
    assignedVolunteer: '-',
    victimName: 'Anil Gupta',
    peopleAffected: 6,
    details: 'Need drinking water pouches and dry food ration for group.',
    location: 'Community Hall Lane',
    lat: 17.3688,
    lng: 78.4988,
    distance: '5.2 km',
    timeAgo: '6 hours ago',
    requiredAssistance: ['Food'],
  },
  {
    id: 'REQ1018',
    type: 'Medical',
    priority: 'High',
    status: 'Assigned',
    assignedTeam: 'Rescue Team B',
    assignedVolunteer: 'Suresh',
    victimName: 'Vikram Singh',
    peopleAffected: 1,
    details: 'Elderly person with fracture after falling near water drain.',
    location: 'Main Bazar Rd',
    lat: 17.3945,
    lng: 78.4812,
    distance: '2.8 km',
    timeAgo: '4 hours ago',
    roleNeeded: 'Visit & Support',
    requiredAssistance: ['Medical'],
  },
  {
    id: 'REQ1007',
    type: 'Shelter',
    priority: 'Medium',
    status: 'Assigned',
    assignedTeam: 'Team A',
    assignedVolunteer: 'Suresh',
    victimName: 'Fatima Begum',
    peopleAffected: 4,
    details: 'Roof leakage, needs relocation to nearby municipal school shelter.',
    location: 'Lake Side Colony',
    lat: 17.3712,
    lng: 78.4690,
    distance: '4.5 km',
    timeAgo: '6 hours ago',
    roleNeeded: 'Food & Shelter',
    requiredAssistance: ['Food', 'Shelter'],
  }
];

export const INITIAL_SHELTERS = [
  {
    id: 'shelter-1',
    name: 'Safe Haven Relief Center',
    distance: '1.2 km',
    distanceNum: 1.2,
    capacity: 500,
    occupied: 327,
    available: 173,
    address: 'Near Old Airport Road, Ward 5, Hyderabad',
    lat: 17.3885,
    lng: 78.4812,
    facilities: ['Food', 'Water', 'Medical', 'Beds'],
    contactPhone: '+91 40 2345 6781',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80',
    type: 'Relief Center'
  },
  {
    id: 'shelter-2',
    name: 'Green Valley Shelter',
    distance: '2.8 km',
    distanceNum: 2.8,
    capacity: 300,
    occupied: 120,
    available: 180,
    address: 'Green Valley Park Road, Sector 8, Hyderabad',
    lat: 17.3992,
    lng: 78.4735,
    facilities: ['Food', 'Water', 'Beds'],
    contactPhone: '+91 40 2345 6782',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80',
    type: 'Community Hall'
  },
  {
    id: 'shelter-3',
    name: 'City Govt. School',
    distance: '4.1 km',
    distanceNum: 4.1,
    capacity: 200,
    occupied: 80,
    available: 120,
    address: 'Civic Center Road, Ward 2, Hyderabad',
    lat: 17.3721,
    lng: 78.4925,
    facilities: ['Food', 'Water', 'Medical'],
    contactPhone: '+91 40 2345 6783',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    type: 'School Center'
  },
  {
    id: 'shelter-4',
    name: 'Metro Community Hall',
    distance: '5.8 km',
    distanceNum: 5.8,
    capacity: 450,
    occupied: 390,
    available: 60,
    address: 'Central Avenue, Near Metro Pillar 114',
    lat: 17.4115,
    lng: 78.4552,
    facilities: ['Food', 'Water', 'Medical', 'Beds'],
    contactPhone: '+91 40 2345 6784',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    type: 'Community Hall'
  }
];

export const INITIAL_RESOURCES = [
  {
    id: 'res-1',
    category: 'Food',
    name: 'Food Distribution Center',
    distance: '2.3 km',
    items: 'Rice, pulses, packed food, baby milk',
    status: 'Available', // Available, Limited, Unavailable
    statusColor: 'green',
    lat: 17.3821,
    lng: 78.4795,
    timings: '24 Hours Open',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=500&q=80',
    provider: 'Red Cross Relief Logistics'
  },
  {
    id: 'res-2',
    category: 'Medical',
    name: 'Medical Camp',
    distance: '3.1 km',
    items: 'First aid, medicines, doctors, oxygen cylinders',
    status: 'Available',
    statusColor: 'green',
    lat: 17.3942,
    lng: 78.4891,
    timings: '24 Hours Open',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=500&q=80',
    provider: 'District Health Mission'
  },
  {
    id: 'res-3',
    category: 'Water',
    name: 'Water Tanker Point',
    distance: '4.1 km',
    items: 'Clean drinking water, purification tablets, jerrycans',
    status: 'Available',
    statusColor: 'green',
    lat: 17.3761,
    lng: 78.4705,
    timings: '06:00 AM - 10:00 PM',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=500&q=80',
    provider: 'Municipal Water Board'
  },
  {
    id: 'res-4',
    category: 'Others',
    name: 'Essential Supplies Depot',
    distance: '6.2 km',
    items: 'Blankets, dry clothes, hygiene kits, tarpaulins',
    status: 'Limited',
    statusColor: 'orange',
    lat: 17.4045,
    lng: 78.4632,
    timings: '08:00 AM - 08:00 PM',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80',
    provider: 'Civil Defense Auxiliary'
  },
  {
    id: 'res-5',
    category: 'Food',
    name: 'Community Kitchen Unit',
    distance: '3.7 km',
    items: 'Cooked hot meals, boiled drinking water, biscuits',
    status: 'Available',
    statusColor: 'green',
    lat: 17.3877,
    lng: 78.4619,
    timings: '11:00 AM - 09:00 PM',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=500&q=80',
    provider: 'Seva Disaster Response'
  },
  {
    id: 'res-6',
    category: 'Medical',
    name: 'Mobile Trauma Unit',
    distance: '5.0 km',
    items: 'ICU ambulance, surgical triage, emergency transfusions',
    status: 'Limited',
    statusColor: 'orange',
    lat: 17.3699,
    lng: 78.4844,
    timings: 'On-Call Emergency Dispatch',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=500&q=80',
    provider: 'State Emergency Ambulance Service'
  }
];

export const INITIAL_ALERTS = [
  {
    id: 'alert-1',
    severity: 'red',
    type: 'critical',
    title: 'Severe Flood Warning',
    message: 'Heavy rainfall expected in your area. Stay indoors and avoid water bodies. Rescue units deployed in Ward 7.',
    timeAgo: '2 hours ago',
    timestamp: '10 Aug 2026, 08:30 AM',
    authority: 'National Disaster Management Authority (NDMA)',
    actionRequired: 'Move to second floor or nearest municipal shelter immediately.'
  },
  {
    id: 'alert-2',
    severity: 'orange',
    type: 'warning',
    title: 'Weather Alert',
    message: 'Cyclone alert issued for coastal and adjoining regions. Follow official instructions and prepare emergency grab bags.',
    timeAgo: '5 hours ago',
    timestamp: '10 Aug 2026, 05:30 AM',
    authority: 'Meteorological Department',
    actionRequired: 'Secure loose exterior items and keep power banks charged.'
  },
  {
    id: 'alert-3',
    severity: 'blue',
    type: 'info',
    title: 'Relief Update',
    message: 'Additional medical supplies and pediatric doctors arrived at Safe Haven Relief Center.',
    timeAgo: '7 hours ago',
    timestamp: '10 Aug 2026, 03:15 AM',
    authority: 'Health Emergency Task Force',
    actionRequired: 'Victims requiring regular dialysis or insulin may register at Counter 3.'
  },
  {
    id: 'alert-4',
    severity: 'green',
    type: 'success',
    title: 'All Clear',
    message: 'Situation is stable in Sector 2 and 3. Water receded from arterial highway. Continue to stay informed.',
    timeAgo: '12 hours ago',
    timestamp: '09 Aug 2026, 10:20 PM',
    authority: 'District Collector Office',
    actionRequired: 'Verify local road clearance before traveling.'
  }
];

export const INITIAL_VOLUNTEERS = [
  {
    id: 'vol-1',
    name: 'Suresh Kumar',
    email: 'volunteer@demo.com',
    phone: '+91 98765 43210',
    role: 'Rescue Team Leader',
    assignedCount: 3,
    completedCount: 5,
    totalHours: 48,
    status: 'Active',
    skills: ['First Aid', 'Boat Operation', 'Flood Rescue'],
    currentLocation: 'Sector 5, Relief Post 2'
  },
  {
    id: 'vol-2',
    name: 'Priya Sharma',
    email: 'priya.s@demo.com',
    phone: '+91 98765 43211',
    role: 'Medical First Responder',
    assignedCount: 2,
    completedCount: 12,
    totalHours: 94,
    status: 'Active',
    skills: ['Nursing', 'Triage', 'Pediatrics'],
    currentLocation: 'Safe Haven Relief Center'
  },
  {
    id: 'vol-3',
    name: 'Rajesh Verma',
    email: 'rajesh.v@demo.com',
    phone: '+91 98765 43212',
    role: 'Logistics Coordinator',
    assignedCount: 4,
    completedCount: 8,
    totalHours: 62,
    status: 'Available',
    skills: ['Supply Distribution', 'Heavy Vehicle Driving'],
    currentLocation: 'Warehouse Depot 4'
  },
  {
    id: 'vol-4',
    name: 'Anita Roy',
    email: 'anita.r@demo.com',
    phone: '+91 98765 43213',
    role: 'Shelter Field Manager',
    assignedCount: 1,
    completedCount: 15,
    totalHours: 110,
    status: 'Active',
    skills: ['Crowd Management', 'Child Care', 'Counseling'],
    currentLocation: 'City Govt. School Shelter'
  }
];

export const INITIAL_USERS = [
  {
    id: 'usr-1',
    name: 'Ramesh Kumar',
    email: 'victim@demo.com',
    role: 'victim',
    phone: '+91 98451 23456',
    location: 'Plot 42, River View Enclave, Ward 7',
    registeredDate: '09 Aug 2026',
    familyCount: 4,
    status: 'Active Request'
  },
  {
    id: 'usr-2',
    name: 'Suresh Kumar',
    email: 'volunteer@demo.com',
    role: 'volunteer',
    phone: '+91 98765 43210',
    location: 'Sector 5, Relief Post 2',
    registeredDate: '01 Aug 2026',
    familyCount: 1,
    status: 'Field Responder'
  },
  {
    id: 'usr-3',
    name: 'Operations Admin',
    email: 'admin@demo.com',
    role: 'admin',
    phone: '+91 99000 11223',
    location: 'State Command Center',
    registeredDate: '15 Jul 2026',
    familyCount: 1,
    status: 'Command Staff'
  },
  {
    id: 'usr-4',
    name: 'Sunita Rao',
    email: 'sunita.rao@example.com',
    role: 'victim',
    phone: '+91 98123 45678',
    location: 'Sector 4, Gandhi Nagar',
    registeredDate: '10 Aug 2026',
    familyCount: 2,
    status: 'Pending Assistance'
  },
  {
    id: 'usr-5',
    name: 'Mohd. Farhan',
    email: 'farhan.m@example.com',
    role: 'victim',
    phone: '+91 97234 56789',
    location: 'Old Station Road',
    registeredDate: '08 Aug 2026',
    familyCount: 5,
    status: 'Sheltered'
  }
];

// LocalStorage Persistent Store Helpers
const STORAGE_KEYS = {
  REQUESTS: 'da_emergency_requests',
  SHELTERS: 'da_shelters',
  RESOURCES: 'da_resources',
  ALERTS: 'da_alerts',
  VOLUNTEERS: 'da_volunteers',
  USERS: 'da_users',
};

export const getStoredData = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Storage parse error:', err);
    return fallback;
  }
};

export const setStoredData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new Event('da_data_updated'));
  } catch (err) {
    console.error('Storage save error:', err);
  }
};

export const getRequests = () => getStoredData(STORAGE_KEYS.REQUESTS, INITIAL_REQUESTS);
export const saveRequests = (reqs) => setStoredData(STORAGE_KEYS.REQUESTS, reqs);

export const getShelters = () => {
  const list = getStoredData(STORAGE_KEYS.SHELTERS, INITIAL_SHELTERS);
  return list.map((s) => {
    if (s.id === 'shelter-2') {
      return { ...s, image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80' };
    }
    return s;
  });
};
export const saveShelters = (shelters) => setStoredData(STORAGE_KEYS.SHELTERS, shelters);

export const getResources = () => getStoredData(STORAGE_KEYS.RESOURCES, INITIAL_RESOURCES);
export const saveResources = (res) => setStoredData(STORAGE_KEYS.RESOURCES, res);

export const getAlerts = () => getStoredData(STORAGE_KEYS.ALERTS, INITIAL_ALERTS);
export const saveAlerts = (alerts) => setStoredData(STORAGE_KEYS.ALERTS, alerts);

export const getVolunteers = () => getStoredData(STORAGE_KEYS.VOLUNTEERS, INITIAL_VOLUNTEERS);
export const getUsers = () => getStoredData(STORAGE_KEYS.USERS, INITIAL_USERS);

// Convenience function to create a new emergency request
export const createEmergencyRequest = (formData) => {
  const existing = getRequests();
  const nextNum = 1025 + existing.length - INITIAL_REQUESTS.length;
  const newId = `REQ${nextNum}`;
  
  const newRequest = {
    id: newId,
    type: formData.type || 'Flood',
    priority: formData.priority || 'Critical',
    status: 'Pending',
    assignedTeam: '-',
    assignedVolunteer: '-',
    victimName: formData.name || 'Ramesh Kumar',
    peopleAffected: Number(formData.peopleAffected) || 1,
    details: formData.details || '',
    location: formData.location || '17.3850, 78.4867 (Live GPS)',
    lat: 17.3850 + (Math.random() - 0.5) * 0.02,
    lng: 78.4867 + (Math.random() - 0.5) * 0.02,
    distance: '0.8 km',
    timeAgo: 'Just now',
    requiredAssistance: formData.requiredAssistance || ['Rescue'],
    timeline: [
      { title: 'Request Received', time: 'Just now', done: true },
      { title: 'Volunteer Assigned', time: 'Dispatching...', current: true },
      { title: 'Assistance Arriving', time: 'Pending', done: false },
      { title: 'Completed', time: 'Pending', done: false }
    ]
  };

  const updated = [newRequest, ...existing];
  saveRequests(updated);
  return newRequest;
};
