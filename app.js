// app.js - Main application logic

//Initialize Lucide icon

lucide.createIcons();

// Global state management
const AppState = {
    currentUser: null,
    currentView: 'dashboard',
    tasks: DATA.tasks,
    users: DATA.users,
    settings: DATA.projectSettings,

    // Update active view
    setView(viewName) {
        this.currentView = viewName;
        this.updateUI();
    },

    // Update user
    setUser(user) {
        this.currentUser = user;
        this.updateUI();
    },

    // Update UI based on state
    updateUI() {
        // Hide all views
        document.querySelectorAll('.view-content').forEach(view => {
            view.classList.add('hidden');
        });

        // Show current view
        const currentViewElement = document.getElementById(`${this.currentView}View`);
        if (currentViewElement) {
            currentViewElement.classList.remove('hidden');
        }

        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', 
                item.dataset.view === this.currentView);
        });
    },

    // Initialize the application
    init() {
        // Check for stored session
        const storedUser = sessionStorage.getItem('currentUser');
        if (storedUser) {
            this.currentUser = JSON.parse(storedUser);
            this.showApp();
        } else {
            this.showLogin();
        }

        // Initialize event listeners
        this.initEventListeners();
    },

    // Show login view
    showLogin() {
        document.getElementById('loginView').classList.remove('hidden');
        document.getElementById('appView').classList.add('hidden');
    },

    // Show main app
    showApp() {
        document.getElementById('loginView').classList.add('hidden');
        document.getElementById('appView').classList.remove('hidden');
        this.updateUI();
    },

    // Initialize global event listeners
    initEventListeners() {
        // Logout handler
        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.currentUser = null;
            sessionStorage.removeItem('currentUser');
            this.showLogin();
        });

        // Navigation handlers
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                this.setView(view);
            });
        });
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    AppState.init();
});

// Export AppState for use in components
window.AppState = AppState;
