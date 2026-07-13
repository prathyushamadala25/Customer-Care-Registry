# Customer Care Registry

A MERN-stack Customer Care Registry system for tracking customer complaints,
feedback, and support interactions.

## Tech Stack
- Frontend: React (Vite) + Tailwind CSS + Recharts
- Backend: Node.js + Express.js
- Database: MongoDB (Mongoose)
- Auth: JWT

## Setup

### Backend
```
cd server
npm install
cp .env.example .env   # fill in MONGO_URI and JWT_SECRET
npm run dev
```

### Frontend
```
cd client
npm install
cp .env.example .env
npm run dev
```

Backend runs on http://localhost:5000 (adjust PORT in server/.env).
Frontend runs on http://localhost:5173.
