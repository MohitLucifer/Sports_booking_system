# Sports Booking  (COLLEGE ID : IIT2021059)

Sport Booking is a web application built using the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS for a sleek user interface. Sport Booking includes an admin panel to manage ground content seamlessly.

![Screenshot (79)](https://github.com/krisgoswami/ground-booking-app/assets/91143716/7bcd5596-b3a2-48b2-a2a3-c635258e3362)

## Features

### Client Side

- Browse for available grounds.
- View detailed ground information with Google Maps embedded.
- Book grounds for specific time slots.
- View user bookings.

![Screenshot (82)](https://github.com/krisgoswami/ground-booking-app/assets/91143716/3b1009f6-f35e-4fbc-ba0b-f18bc9ec1edb)

### Admin Panel

- Secure login with admin credentials.
- Create, edit, and delete ground information.
- Publish/unpublish grounds, reflected on the client-side.

![Screenshot (80)](https://github.com/krisgoswami/ground-booking-app/assets/91143716/0bf367df-651d-42d8-9fce-caeddf10b379)

## Technologies Used

- **MongoDB**: Database for managing ground and booking data.
- **Express**: Server-side framework for building RESTful APIs.
- **React**: Frontend library for building user interfaces.
- **Redux**: State management for handling data.
- **Node.js**: Backend runtime environment.
- **Tailwind CSS**: CSS framework for styling.
- **Vite**: Fast build tool for the frontend.

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **MongoDB** (Local or MongoDB Atlas)
- **npm** (Node Package Manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/Sports_booking_system.git
   cd Sports_booking_system
   ```
2. **Backend Setup**:

   - Navigate to the `backend` folder and install the dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Create a `.env` file in the `backend` directory and add the following environment variables:
     ```bash
     MONGO_URI=mongodb://localhost:27017/bookaground
     JWT_SECRET=your_jwt_secret
     PORT=8080
     ```
   - Start the backend server:
     ```bash
     npm start
     ```
3. **Frontend Setup**:

   - Navigate to the `frontend` folder and install the dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Create a `.env` file in the `frontend` directory and add the following environment variable:
     ```bash
     BASE_URL=http://localhost:5000
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

The backend server will run on `http://localhost:8080` and the frontend on `http://localhost:5000`.

## Deployment

### Frontend

You can deploy the React frontend using platforms like **Vercel** or **Netlify**.

### Backend

Deploy the Node.js backend using **Heroku**, **Railway**, or similar cloud services. Use **MongoDB Atlas** for a cloud-based database.

## API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user/admin.
- **POST** `/api/auth/login`: Log in and retrieve a JWT token.

### Centre Management

- **GET** `/api/grounds`: Retrieve all published grounds.
- **POST** `/api/grounds`: Create a new ground (admin only).
- **PUT** `/api/grounds/:id`: Edit an existing ground (admin only).
- **DELETE** `/api/grounds/:id`: Delete a ground (admin only).

### Booking Management

- **GET** `/api/bookings?centreId={centreId}&date={date}`: Get all bookings for a centre and date.
- **POST** `/api/bookings`: Create a new booking.

## Assumptions and Limitations

- Admins can only create, edit, and delete grounds through the admin panel.
- Users can only view published grounds.
- Each ground has specific available time slots that are 60 minutes long.
- The application does not account for multiple time zones.

## Screenshots

- **Client-Side** (Ground List and Details):

![Ground List](https://github.com/krisgoswami/ground-booking-app/assets/91143716/7bcd5596-b3a2-48b2-a2a3-c635258e3362)

- **Admin Panel**:

![Admin Dashboard](https://github.com/krisgoswami/ground-booking-app/assets/91143716/0bf367df-651d-42d8-9fce-caeddf10b379)

## Links to Deployed Applications

- **Frontend**: [Frontend Link](https://your-frontend-link.com)
- **Backend**: [Backend Link](https://your-backend-link.com)
