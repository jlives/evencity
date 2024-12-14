# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Evencity - Event Management System

## Project Overview

Evencity is a comprehensive event management platform that allows users to discover, create, and manage events. Users can RSVP to events, track their bookings, and organizers can manage event details and attendees.

## Deployment Links

- Frontend: [https://evencity.vercel.app](https://evencity.vercel.app)
- Backend API: [https://evencity.onrender.com](https://evencity.onrender.com)

## Test Login Credentials

- Admin Account:

  - Email: admin@test.com
  - Password: Admin1234

- User Account:
  - Email: user@test.com
  - Password: User1234

## Feature Checklist

✅ User Authentication

- [x] Sign up
- [x] Login
- [x] Role-based access control (Admin/User)

✅ Event Management

- [x] Create events (Admin only)
- [x] View all events
- [x] Filter events by date and category
- [x] Search events
- [x] RSVP to events
- [x] Cancel RSVP

✅ User Dashboard

- [x] View booked events
- [x] Calendar view
- [x] Event history

✅ Admin Features

- [x] Event creation and management
- [x] View attendee lists
- [x] Event analytics

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Installation Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Frontend Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/evencity.git
cd evencity/frontend
```

2. Install dependencies

```bash
npm install
```

3. Create .env file

```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server

```bash
npm start
```

### Backend Setup

1. Navigate to backend directory

```bash
cd ../backend
```

2. Install dependencies

```bash
npm install
```

3. Create .env file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server

```bash
npm run dev
```

## API Documentation

### Authentication Endpoints

- POST /api/auth/register - Create new user account
- POST /api/auth/login - User login
- GET /api/auth/profile - Get user profile

### Event Endpoints

- GET /api/events - Get all events
- POST /api/events - Create new event (Admin only)
- GET /api/events/:id - Get event details
- PUT /api/events/:id - Update event (Admin only)
- DELETE /api/events/:id - Delete event (Admin only)

### Booking Endpoints

- POST /api/events/:id/rsvp - RSVP to event
- DELETE /api/events/:id/rsvp - Cancel RSVP
- GET /api/events/my-events - Get user's booked events

[Include Postman API Test Screenshots here]

## Technologies Used

- Frontend: React.js, TailwindCSS, Framer Motion
- Backend: Node.js, Express.js, MongoDB
- Authentication: JWT
- Deployment: Vercel (Frontend), Render (Backend)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
