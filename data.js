// data.js - Mock data for renovation management app

// Users include contractors and subcontractors
const MOCK_USERS = [
    { 
        id: 1, 
        username: 'admin', 
        password: 'admin123', 
        role: 'contractor',
        name: 'John Admin',
        email: 'admin@example.com',
        phone: '555-0100',
        profilePic: '/api/placeholder/50/50',
        dateJoined: '2024-01-01'
    },
    { 
        id: 2, 
        username: 'sub1', 
        password: 'sub123', 
        role: 'subcontractor',
        name: 'Bob Builder',
        email: 'bob@example.com',
        phone: '555-0101',
        specialty: 'General Construction',
        profilePic: '/api/placeholder/50/50',
        dateJoined: '2024-01-15'
    },
    { 
        id: 3, 
        username: 'sub2', 
        password: 'sub456', 
        role: 'subcontractor',
        name: 'Mike Plumber',
        email: 'mike@example.com',
        phone: '555-0102',
        specialty: 'Plumbing',
        profilePic: '/api/placeholder/50/50',
        dateJoined: '2024-02-01'
    },
    { 
        id: 4, 
        username: 'sub3', 
        password: 'sub789', 
        role: 'subcontractor',
        name: 'Sarah Electric',
        email: 'sarah@example.com',
        phone: '555-0103',
        specialty: 'Electrical',
        profilePic: '/api/placeholder/50/50',
        dateJoined: '2024-02-15'
    }
];

// Tasks with detailed information
const MOCK_TASKS = [
    {
        id: 1,
        title: 'Kitchen Renovation',
        description: 'Complete kitchen remodel including cabinets, countertops, and appliances',
        assignedTo: 'sub1',
        status: 'in-progress',
        priority: 'high',
        startDate: '2024-11-28',
        endDate: '2024-12-15',
        progress: 65,
        location: 'Main Floor',
        budget: 25000,
        currentSpent: 15000,
        comments: [
            { 
                id: 1, 
                user: 'admin', 
                text: 'Need to check the cabinet measurements', 
                timestamp: '2024-11-28T10:00:00' 
            },
            {
                id: 2,
                user: 'sub1',
                text: 'Cabinet measurements verified, proceeding with order',
                timestamp: '2024-11-28T14:30:00'
            }
        ],
        attachments: [],
        dependencies: [],
        materials: [
            { id: 1, name: 'Kitchen Cabinets', quantity: 10, unit: 'pieces', status: 'ordered', cost: 8000 },
            { id: 2, name: 'Granite Countertop', quantity: 45, unit: 'sqft', status: 'pending', cost: 5000 }
        ],
        milestones: [
            { id: 1, name: 'Demolition Complete', date: '2024-11-30', completed: true },
            { id: 2, name: 'Cabinets Installed', date: '2024-12-10', completed: false }
        ]
    },
    {
        id: 2,
        title: 'Bathroom Plumbing',
        description: 'Update all plumbing fixtures and install new water lines',
        assignedTo: 'sub2',
        status: 'pending',
        priority: 'medium',
        startDate: '2024-12-01',
        endDate: '2024-12-10',
        progress: 0,
        location: 'Second Floor',
        budget: 8000,
        currentSpent: 0,
        comments: [],
        attachments: [],
        dependencies: [],
        materials: [
            { id: 3, name: 'PVC Pipes', quantity: 100, unit: 'feet', status: 'delivered', cost: 500 },
            { id: 4, name: 'Bathroom Fixtures', quantity: 1, unit: 'set', status: 'ordered', cost: 2000 }
        ],
        milestones: [
            { id: 3, name: 'Old Fixtures Removed', date: '2024-12-02', completed: false },
            { id: 4, name: 'New Fixtures Installed', date: '2024-12-08', completed: false }
        ]
    },
    {
        id: 3,
        title: 'Electrical Wiring',
        description: 'Upgrade electrical panel and rewire kitchen circuits',
        assignedTo: 'sub3',
        status: 'planned',
        priority: 'high',
        startDate: '2024-12-05',
        endDate: '2024-12-20',
        progress: 0,
        location: 'Throughout House',
        budget: 12000,
        currentSpent: 0,
        comments: [],
        attachments: [],
        dependencies: [1],
        materials: [
            { id: 5, name: 'Electrical Panel', quantity: 1, unit: 'piece', status: 'pending', cost: 2500 },
            { id: 6, name: 'Copper Wire', quantity: 500, unit: 'feet', status: 'pending', cost: 1500 }
        ],
        milestones: [
            { id: 5, name: 'Panel Upgrade', date: '2024-12-07', completed: false },
            { id: 6, name: 'Circuit Testing', date: '2024-12-18', completed: false }
        ]
    }
];

// Project settings and details
const PROJECT_SETTINGS = {
    projectName: "123 Main Street Renovation",
    projectId: "REN-2024-001",
    projectAddress: "123 Main Street, Anytown, USA",
    startDate: "2024-11-25",
    expectedEndDate: "2024-12-31",
    totalBudget: 150000,
    currentSpent: 15000,
    clientName: "Alice Homeowner",
    clientEmail: "alice@example.com",
    clientPhone: "555-0123",
    status: "active",
    lastUpdated: "2024-11-27T09:00:00",
    projectManager: "John Admin",
    emergencyContact: "555-9999",
    workingHours: "7:00 AM - 5:00 PM",
    permitNumber: "PERM-2024-789",
    insurance: {
        provider: "SafeBuild Insurance",
        policyNumber: "SBI-12345-2024",
        expiryDate: "2024-12-31"
    }
};

// Status types and configurations
const STATUS_TYPES = {
    task: ['planned', 'pending', 'in-progress', 'completed', 'on-hold', 'cancelled'],
    material: ['pending', 'ordered', 'delivered', 'installed'],
    priority: ['low', 'medium', 'high', 'urgent']
};

// UI color schemes and styling
const UI_COLORS = {
    status: {
        'planned': { bg: 'bg-gray-100', text: 'text-gray-800' },
        'pending': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
        'in-progress': { bg: 'bg-blue-100', text: 'text-blue-800' },
        'completed': { bg: 'bg-green-100', text: 'text-green-800' },
        'on-hold': { bg: 'bg-orange-100', text: 'text-orange-800' },
        'cancelled': { bg: 'bg-red-100', text: 'text-red-800' }
    },
    priority: {
        'low': { bg: 'bg-gray-100', text: 'text-gray-800' },
        'medium': { bg: 'bg-blue-100', text: 'text-blue-800' },
        'high': { bg: 'bg-orange-100', text: 'text-orange-800' },
        'urgent': { bg: 'bg-red-100', text: 'text-red-800' }
    }
};

// Helper functions for data access
const DataHelpers = {
    getUser: (id) => MOCK_USERS.find(user => user.id === id),
    getTask: (id) => MOCK_TASKS.find(task => task.id === id),
    getTasksByUser: (userId) => MOCK_TASKS.filter(task => task.assignedTo === userId),
    getColorForStatus: (status) => UI_COLORS.status[status] || UI_COLORS.status['pending'],
    getColorForPriority: (priority) => UI_COLORS.priority[priority] || UI_COLORS.priority['medium']
};

// Export everything as a single object
const DATA = {
    users: MOCK_USERS,
    tasks: MOCK_TASKS,
    projectSettings: PROJECT_SETTINGS,
    statusTypes: STATUS_TYPES,
    uiColors: UI_COLORS,
    helpers: DataHelpers
};
