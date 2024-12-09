# Renovation Management Application

## Overview
A PROTOTYPE browser-based renovation project management application that runs entirely on the client side. This application enables contractors and subcontractors to manage renovation projects, track tasks, schedule work, and coordinate team activities without requiring a backend server.

## Features
- User authentication (mock data)
- Dashboard with project overview
- Task management
- Interactive calendar
- Team management
- Material tracking
- Progress monitoring
- Budget tracking

## Technology Stack
- HTML5
- CSS3 (Tailwind CSS)
- Vanilla JavaScript
- Lucide Icons
- Local Storage for data persistence

## Project Structure
```
renovation-app/
├── index.html              # Main application entry
├── styles.css             # Custom styles
├── data.js               # Mock data and constants
├── app.js               # Core application logic
├── components/
│   ├── login.js        # Authentication handling
│   ├── dashboard.js    # Dashboard functionality
│   ├── tasks.js        # Task management
│   ├── calendar.js     # Calendar view
│   ├── team.js         # Team management
│   └── navigation.js   # Navigation handling
└── README.md           # Documentation
```

## Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, or Edge)
- Basic text editor or IDE
- Local web server (optional)

### Installation
1. Clone the repository:
```bash
git clone [repository-url]
cd renovation-app
```

2. Open with a local server:
- Using Python:
  ```bash
  python -m http.server 8000
  ```
- Using Node.js:
  ```bash
  npx serve
  ```
- Or any other local server solution

3. Access the application:
```
http://localhost:8000
```

### Test Credentials
```
Admin/Contractor:
Username: admin
Password: admin123

Subcontractor:
Username: sub1
Password: sub123
```

## Application Structure

### 1. Authentication (login.js)
- Handles user login/logout
- Manages user sessions
- Role-based access control

### 2. Dashboard (dashboard.js)
- Project overview
- Key metrics
- Progress indicators
- Budget summary

### 3. Task Management (tasks.js)
- Create/view tasks
- Track progress
- Manage materials
- Comment system

### 4. Calendar View (calendar.js)
- Schedule visualization
- Task timeline
- Date-based task filtering
- Interactive calendar

### 5. Data Management (data.js)
- Mock user data
- Task information
- Project settings
- UI configurations

## UI Components

### Navigation
- Dashboard
- Tasks
- Calendar
- Team
- Logout

### Task Cards
- Title and description
- Status and priority
- Progress bar
- Assigned team member
- Materials list
- Comments section

### Calendar
- Monthly view
- Task indicators
- Daily task list
- Navigation controls

## Data Structure

### Users
```javascript
{
    id: Number,
    username: String,
    role: "contractor" | "subcontractor",
    name: String,
    specialty: String (optional)
}
```

### Tasks
```javascript
{
    id: Number,
    title: String,
    description: String,
    assignedTo: String,
    status: String,
    priority: String,
    progress: Number,
    materials: Array,
    comments: Array
}
```

## Common Tasks

### Adding a New Task
1. Navigate to Tasks view
2. Fill in task details
3. Assign team member
4. Set priority and timeline
5. Add materials if needed

### Updating Task Progress
1. Open task card
2. Update progress percentage
3. Add comment if needed
4. Save changes

### Calendar Navigation
1. Use arrows to change months
2. Click on dates to see tasks
3. View task details from calendar

## Troubleshooting

### Common Issues
1. Icons not loading
   - Check Lucide CDN connection
   - Run IconHelper.createIcons()

2. Login issues
   - Verify credentials against MOCK_USERS
   - Check console for errors

3. Data persistence
   - Clear browser cache if needed
   - Check localStorage availability

### Support
For issues or questions:
1. Check console for errors
2. Review documentation
3. Contact development team

## Future Improvements
- Backend integration
- Real-time updates
- File upload functionality
- Advanced reporting
- Mobile application
- Email notifications

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create pull request
