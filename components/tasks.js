// tasks.js - Task management functionality

const TasksComponent = {
    init() {
        this.tasksList = document.getElementById('tasksList');
        this.render();
    },

    render() {
        const tasks = AppState.tasks;
        this.tasksList.innerHTML = tasks.map(task => this.renderTaskCard(task)).join('');
        lucide.createIcons(); // Reinitialize icons
    },

    renderTaskCard(task) {
        const statusColor = DATA.uiColors.status[task.status];
        const priorityColor = DATA.uiColors.priority[task.priority];
        const assignedUser = DATA.users.find(u => u.username === task.assignedTo);

        return `
            <div class="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <div class="p-4 space-y-4">
                    <!-- Header -->
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-semibold text-lg">${task.title}</h3>
                            <p class="text-sm text-gray-500">${task.description}</p>
                        </div>
                        <div class="flex space-x-2">
                            <span class="px-2 py-1 rounded text-sm ${priorityColor.bg} ${priorityColor.text}">
                                ${task.priority}
                            </span>
                            <span class="px-2 py-1 rounded text-sm ${statusColor.bg} ${statusColor.text}">
                                ${task.status}
                            </span>
                        </div>
                    </div>

                    <!-- Progress -->
                    <div>
                        <div class="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>${task.progress}%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-500 h-2 rounded-full" 
                                 style="width: ${task.progress}%">
                            </div>
                        </div>
                    </div>

                    <!-- Details -->
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p class="text-gray-500">Assigned to</p>
                            <p>${assignedUser ? assignedUser.name : 'Unassigned'}</p>
                        </div>
                        <div>
                            <p class="text-gray-500">Location</p>
                            <p>${task.location}</p>
                        </div>
                        <div>
                            <p class="text-gray-500">Start Date</p>
                            <p>${new Date(task.startDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p class="text-gray-500">End Date</p>
                            <p>${new Date(task.endDate).toLocaleDateString()}</p>
                        </div>
                    </div>

                    <!-- Materials -->
                    <div class="space-y-2">
                        <h4 class="font-medium">Materials</h4>
                        <div class="space-y-1">
                            ${task.materials.map(material => `
                                <div class="flex justify-between items-center text-sm">
                                    <span>${material.name}</span>
                                    <span class="px-2 py-1 rounded bg-gray-100">
                                        ${material.status}
                                    </span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Comments -->
                    <div class="space-y-2">
                        <h4 class="font-medium">Comments</h4>
                        <div class="space-y-2">
                            ${task.comments.map(comment => `
                                <div class="bg-gray-50 p-2 rounded">
                                    <div class="flex justify-between text-sm">
                                        <span class="font-medium">${comment.user}</span>
                                        <span class="text-gray-500">
                                            ${new Date(comment.timestamp).toLocaleString()}
                                        </span>
                                    </div>
                                    <p class="text-sm mt-1">${comment.text}</p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="flex space-x-2 mt-2">
                            <input type="text" 
                                   placeholder="Add a comment..." 
                                   class="flex-1 px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   data-task-id="${task.id}">
                            <button onclick="TasksComponent.addComment(${task.id})"
                                    class="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    addComment(taskId) {
        const input = document.querySelector(`input[data-task-id="${taskId}"]`);
        const text = input.value.trim();
        
        if (!text) return;

        const task = AppState.tasks.find(t => t.id === taskId);
        if (task) {
            task.comments.push({
                id: Date.now(),
                user: AppState.currentUser.username,
                text: text,
                timestamp: new Date().toISOString()
            });
            
            input.value = '';
            this.render();
        }
    }
};

// Initialize tasks component
document.addEventListener('DOMContentLoaded', () => {
    TasksComponent.init();
});
