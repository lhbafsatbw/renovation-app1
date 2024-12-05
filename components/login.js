// login.js - Login functionality


const LoginComponent = {
    init() {
        this.form = document.getElementById('loginForm');
        this.errorDiv = document.getElementById('loginError');
        
        this.form.addEventListener('submit', (e) => this.handleLogin(e));
    },

    handleLogin(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Find user in mock data
        const user = DATA.users.find(u => 
            u.username === username && u.password === password
        );

        if (user) {
            // Store user in session
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            
            // Update app state
            AppState.setUser(user);
            AppState.showApp();
            
            // Clear form
            this.form.reset();
            this.errorDiv.classList.add('hidden');
        } else {
            // Show error
            this.errorDiv.textContent = 'Invalid username or password';
            this.errorDiv.classList.remove('hidden');
        }
    }
};

// Initialize login component
document.addEventListener('DOMContentLoaded', () => {
    LoginComponent.init();
});