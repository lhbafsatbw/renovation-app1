// js/data.js

// User Data
const MOCK_USERS = [
    { 
        id: 1, 
        username: 'admin', 
        password: 'admin123', 
        role: 'contractor',
        fullName: 'John Smith',
        email: 'john@contractor.com',
        phone: '555-0100',
        projects: [1, 2, 3]
    },
    { 
        id: 2, 
        username: 'sub1', 
        password: 'sub123', 
        role: 'subcontractor',
        specialty: 'Carpenter',
        fullName: 'Mike Johnson',
        email: 'mike@sub.com',
        phone: '555-0201',
        projects: [1, 2]
    },
    { 
        id: 3, 
        username: 'sub2', 
        password: 'sub456', 
        role: 'subcontractor', 
        specialty: 'Plumbing',
        fullName: 'David Wilson',
        email: 'david@sub.com',
        phone: '555-0302',
        projects: [1, 3]
    },
    { 
        id: 4, 
        username: 'sub3', 
        password: 'sub789', 
        role: 'subcontractor', 
        specialty: 'Electrical',
        fullName: 'Sarah Brown',
        email: 'sarah@sub.com',
        phone: '555-0403',
        projects: [2, 3]
    }
];

// Projects Data
const MOCK_PROJECTS = [
    {
        id: 1,
        name: "Downtown Renovation",
        client: "City Bank",
        budget: 250000,
        startDate: "2024-11-01",
        endDate: "2025-02-28",
        status: "in-progress",
        completion: 35,
        location: "123 Main St"
    },
    {
        id: 2,
        name: "Suburban House Remodel",
        client: "Johnson Family",
        budget: 150000,
        startDate: "2024-12-01",
        endDate: "2025-01-15",
        status: "planned",
        completion: 0,
        location: "456 Oak Ave"
    },
    {
        id: 3,
        name: "Restaurant Upgrade",
        client: "Fine Dining Co",
        budget: 180000,
        startDate: "2024-11-15",
        endDate: "2024-12-30",
        status: "in-progress",
        completion: 65,
        location: "789 Restaurant Row"
    }
];

// Tasks Data
const MOCK_TASKS = [
    {
        id: 1,
        projectId: 1,
        title: 'Kitchen Renovation',
        description: 'Complete kitchen renovation including cabinets and countertops',
        assignedTo: 'sub1',
        status: 'in-progress',
        priority: 'high',
        startDate: '2024-11-28',
        endDate: '2024-12-15',
        progress: 65,
        dependencies: [],
        materials: ['cabinets', 'countertops', 'sink'],
        estimatedCost: 45000,
        actualCost: 42000,
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
                text: 'Cabinets are measured, ordering materials',
                timestamp: '2024-11-28T14:30:00'
            }
        ],
        files: []
    },
    {
        id: 2,
        projectId: 1,
        title: 'Bathroom Plumbing',
        description: 'Update all bathroom plumbing fixtures',
        assignedTo: 'sub2',
        status: 'pending',
        priority: 'medium',
        startDate: '2024-12-01',
        endDate: '2024-12-10',
        progress: 0,
        dependencies: [1],
        materials: ['pipes', 'fixtures', 'valves'],
        estimatedCost: 12000,
        actualCost: 0,
        comments: [],
        files: []
    },
    {
        id: 3,
        projectId: 1,
        title: 'Electrical Wiring',
        description: 'Upgrade electrical system and install new fixtures',
        assignedTo: 'sub3',
        status: 'planned',
        priority: 'high',
        startDate: '2024-12-05',
        endDate: '2024-12-20',
        progress: 0,
        dependencies: [2],
        materials: ['wiring', 'outlets', 'fixtures'],
        estimatedCost: 15000,
        actualCost: 0,
        comments: [],
        files: []
    }
];

// Timeline Data (Milestones)
const MOCK_MILESTONES = [
    {
        id: 1,
        projectId: 1,
        title: "Project Start",
        date: "2024-11-01",
        type: "start",
        description: "Official project kickoff",
        completed: true
    },
    {
        id: 2,
        projectId: 1,
        title: "Phase 1 Completion",
        date: "2024-12-15",
        type: "milestone",
        description: "Kitchen and initial renovations complete",
        completed: false
    },
    {
        id: 3,
        projectId: 1,
        title: "Project Completion",
        date: "2025-02-28",
        type: "end",
        description: "Final inspection and handover",
        completed: false
    }
];

// Messages/Communications Data
const MOCK_MESSAGES = [
    {
        id: 1,
        sender: 1, // admin
        recipients: [2, 3], // sub1, sub2
        subject: "Weekly Progress Update",
        content: "Please submit your progress reports by Friday",
        timestamp: "2024-11-27T09:00:00",
        read: true,
        projectId: 1
    },
    {
        id: 2,
        sender: 2, // sub1
        recipients: [1], // admin
        subject: "Material Delivery Delay",
        content: "Cabinet delivery delayed by 2 days",
        timestamp: "2024-11-28T11:30:00",
        read: false,
        projectId: 1
    }
];

// Material Inventory
const MOCK_INVENTORY = [
    {
        id: 1,
        name: "Kitchen Cabinets",
        quantity: 12,
        unit: "pieces",
        status: "ordered",
        expectedDelivery: "2024-12-01",
        supplier: "Cabinet Pro",
        projectId: 1,
        cost: 12000
    },
    {
        id: 2,
        name: "Copper Pipes",
        quantity: 100,
        unit: "feet",
        status: "in-stock",
        location: "Warehouse A",
        supplier: "Plumbing Supply Co",
        projectId: 1,
        cost: 1500
    }
];

// Menu Configuration
const MENU_ITEMS = [
    { id: 'dashboard', icon: 'home', label: 'Dashboard', url: 'dashboard.html' },
    { id: 'tasks', icon: 'clipboard-check', label: 'Tasks', url: 'tasks/index.html' },
    { id: 'calendar', icon: 'calendar', label: 'Calendar', url: 'calendar.html' },
    { id: 'timeline', icon: 'trending-up', label: 'Timeline', url: 'timeline.html' },
    { id: 'team', icon: 'users', label: 'Team', url: 'team.html' },
    { id: 'messages', icon: 'message-square', label: 'Messages', url: 'messages.html' }
];

// Utility Functions
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    }).format(amount);
}

function getProjectById(projectId) {
    return MOCK_PROJECTS.find(p => p.id === projectId);
}

function getTasksByProject(projectId) {
    return MOCK_TASKS.filter(t => t.projectId === projectId);
}

function getUserById(userId) {
    return MOCK_USERS.find(u => u.id === userId);
}

const DATA = {
    users: MOCK_USERS,
    projects: MOCK_PROJECTS,
    tasks: MOCK_TASKS,
    milestones: MOCK_MILESTONES,
    messages: MOCK_MESSAGES,
    inventory: MOCK_INVENTORY,
    menuItems: MENU_ITEMS
};
