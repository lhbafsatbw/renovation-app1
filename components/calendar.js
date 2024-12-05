// calendar.js - Calendar functionality

const CalendarComponent = {
    init() {
        this.calendar = document.getElementById('calendar');
        this.tasksContainer = document.getElementById('calendarTasks');
        this.currentDate = new Date();
        this.selectedDate = new Date();
        
        this.render();
    },

    render() {
        this.renderCalendar();
        this.renderTasks();
    },

    renderCalendar() {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        
        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const monthName = this.currentDate.toLocaleString('default', { month: 'long' });

        let calendarHTML = `
            <div class="p-4">
                <div class="flex justify-between items-center mb-4">
                    <button onclick="CalendarComponent.previousMonth()"
                            class="p-2 hover:bg-gray-100 rounded">
                        <i data-lucide="chevron-left"></i>
                    </button>
                    <h2 class="text-lg font-semibold">${monthName} ${year}</h2>
                    <button onclick="CalendarComponent.nextMonth()"
                            class="p-2 hover:bg-gray-100 rounded">
                        <i data-lucide="chevron-right"></i>
                    </button>
                </div>

                <div class="grid grid-cols-7 gap-1">
                    ${weekDays.map(day => `
                        <div class="text-center text-sm font-medium text-gray-500 py-2">
                            ${day}
                        </div>
                    `).join('')}
        `;

        // Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<div class="p-2"></div>';
        }

        // Calendar days
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isToday = date.toDateString() === today.toDateString();
            const isSelected = date.toDateString() === this.selectedDate.toDateString();
            const tasks = this.getTasksForDate(date);
            const hasTask = tasks.length > 0;

            calendarHTML += `
                <div class="relative p-2">
                    <button onclick="CalendarComponent.selectDate(${year}, ${month}, ${day})"
                            class="w-full h-full flex flex-col items-center p-2 rounded
                                   ${isSelected ? 'bg-blue-50 text-blue-600' : ''}
                                   ${isToday ? 'font-bold ring-2 ring-blue-200' : ''}
                                   hover:bg-gray-50">
                        <span>${day}</span>
                        ${hasTask ? `
                            <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                <div class="h-1 w-1 rounded-full bg-blue-500"></div>
                            </div>
                        ` : ''}
                    </button>
                </div>
            `;
        }

        calendarHTML += `
                </div>
            </div>
        `;

        this.calendar.innerHTML = calendarHTML;
        lucide.createIcons();
    },

    renderTasks() {
        const tasks = this.getTasksForDate(this.selectedDate);
        const dateStr = this.selectedDate.toLocaleDateString('default', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        this.tasksContainer.innerHTML = `
            <h3 class="font-medium mb-4">Tasks for ${dateStr}</h3>
            ${tasks.length === 0 ? `
                <p class="text-gray-500">No tasks scheduled</p>
            ` : `
                <div class="space-y-3">
                    ${tasks.map(task => `
                        <div class="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <div class="flex justify-between items-center">
                                <h4 class="font-medium">${task.title}</h4>
                                <span class="px-2 py-1 rounded text-sm ${
                                    DATA.uiColors.status[task.status].bg
                                } ${
                                    DATA.uiColors.status[task.status].text
                                }">${task.status}</span>
                            </div>
                            <p class="text-sm text-gray-500 mt-1">
                                Assigned to: ${task.assignedTo}
                            </p>
                            <div class="mt-2 h-1.5 bg-gray-100 rounded">
                                <div class="bg-blue-500 h-1.5 rounded"
                                     style="width: ${task.progress}%">
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `}
        `;
    },

    getTasksForDate(date) {
        return AppState.tasks.filter(task => {
            const taskStart = new Date(task.startDate);
            const taskEnd = new Date(task.endDate);
            taskStart.setHours(0, 0, 0, 0);
            taskEnd.setHours(0, 0, 0, 0);
            date.setHours(0, 0, 0, 0);
            return date >= taskStart && date <= taskEnd;
        });
    },

    selectDate(year, month, day) {
        this.selectedDate = new Date(year, month, day);
        this.render();
    },

    previousMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.render();
    },

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.render();
    }
};

// Initialize calendar component
document.addEventListener('DOMContentLoaded', () => {
    CalendarComponent.init();
});
