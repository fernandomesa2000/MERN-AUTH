# MERN-AUTH — Full-Stack Authentication System

A complete authentication system built with the **MERN stack** (MongoDB, Express, React, Node.js),
featuring secure JWT-based authentication, email verification via OTP, and password recovery.

---

## Tech Stack

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT (HttpOnly cookies)
- Resend (transactional email)

**Frontend**
- React + Vite
- Zustand (state management)
- React Router v6
- Tailwind CSS + Framer Motion

**Tools**
- Git / GitHub
- Postman (API testing)
- Render (cloud deployment)

---

## Features

- ✅ User registration with email verification (OTP)
- ✅ Secure login with JWT stored in HttpOnly cookies
- ✅ Logout with cookie invalidation
- ✅ Check authenticated session (`/check-auth`)
- ✅ Password recovery flow (request + reset)
- 🚧 Frontend UI (in progress)

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/verify-email` | Verify email with OTP |
| POST | `/api/auth/login` | Login and receive JWT cookie |
| POST | `/api/auth/logout` | Logout and clear cookie |
| GET | `/api/auth/check-auth` | Verify active session |
| POST | `/api/auth/forgot-password` | Request password reset |
| POST | `/api/auth/reset-password/:token` | Reset password with token |

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Resend account (for transactional emails)

### Installation

```bash
# Clone the repository
git clone https://github.com/fernandomesa2000/MERN-AUTH.git
cd MERN-AUTH
```

### Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RESEND_API_KEY=your_resend_api_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

```bash
npm run dev
```

### Frontend setup

```bash
cd frontend
npm install
npm run dev
```

## Security Notes

- JWT tokens are stored in **HttpOnly cookies** (not localStorage) to prevent XSS attacks
- OTP tokens expire after a set time window
- Password reset tokens are single-use and time-limited
- Environment variables are never committed to the repository

---

## Author

**Juan Fernando Bedoya Mesa**  
Systems Engineering Student — Universidad Católica Luis Amigó  
[LinkedIn](https://linkedin.com/in/juan-fernando-bedoya-mesa-129473411) · [GitHub](https://github.com/fernandomesa2000)
