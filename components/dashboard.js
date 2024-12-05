// dashboard.js - Dashboard functionality

const DashboardComponent = {
    init() {
        this.statsContainer = document.getElementById('dashboardStats');
        this.chartsContainer = document.getElementById('dashboardCharts');
        
        // Initial render
        this.render();
    },

    render() {
        this.renderStats();
        this.renderCharts();
    },

    renderStats() {
        const tasks = AppState.tasks;
        const stats = [
            {
                title: 'Total Tasks',
                value: tasks.length,
                icon: 'check-square',
                color: 'blue'
            },
            {
                title: 'In Progress',
                value: tasks.filter(t => t.status === 'in-progress').length,
                icon: 'loader',
                color: 'yellow'
            },
            {
                title: 'Completed',
                value: tasks.filter(t => t.status === 'completed').length,
                icon: 'check-circle',
                color: 'green'
            }
        ];

        this.statsContainer.innerHTML = stats.map(stat => `
            <div class="bg-white p-6 rounded-lg shadow">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-500">${stat.title}</p>
                        <p class="text-2xl font-bold">${stat.value}</p>
                    </div>
                    <i data-lucide="${stat.icon}" 
                       class="text-${stat.color}-500">
                    </i>
                </div>
            </div>
        `).join('');

        // Reinitialize icons
        lucide.createIcons();
    },

    renderCharts() {
        // Progress by status
        const statusCounts = AppState.tasks.reduce((acc, task) => {
            acc[task.status] = (acc[task.status] || 0) + 1;
            return acc;
        }, {});

        this.chartsContainer.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-lg font-medium mb-4">Task Status</h3>
                <div class="space-y-4">
                    ${Object.entries(statusCounts).map(([status, count]) => `
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium">${status}</span>
                                <span class="text-sm text-gray-500">${count}/${AppState.tasks.length}</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-blue-500 h-2 rounded-full" 
                                     style="width: ${(count / AppState.tasks.length) * 100}%">
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-lg font-medium mb-4">Budget Overview</h3>
                <div class="space-y-2">
                    <p class="text-3xl font-bold">
                        $${AppState.settings.totalBudget.toLocaleString()}
                    </p>
                    <p class="text-sm text-gray-500">Total Budget</p>
                </div>
            </div>
        `;
    }
};

// Initialize dashboard component
document.addEventListener('DOMContentLoaded', () => {
    DashboardComponent.init();
});
