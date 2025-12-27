# Real-Time Collaboration Backend

## Overview
This project is a backend service for real-time collaboration, built as part of a backend developer assessment.  
It provides authentication, role-based authorization, project & workspace management, real-time updates using WebSockets, API documentation, and basic testing.

---

## Tech Stack
- Node.js
- Express.js
- SQLite (for simplicity)
- Socket.IO (real-time communication)
- JWT (authentication)
- Swagger (API documentation)
- Jest + Supertest (testing)

---

## Features Implemented

### Authentication & Authorization
- User registration and login
- JWT-based authentication
- Role-based access control (`Owner`, `Member`)
- Rate limiting middleware

### Projects API
- Create, read, update, delete projects
- Owner-only permissions for write operations

### Workspaces API
- Create and fetch workspaces
- Workspace-based access control

### Real-Time Collaboration
- WebSocket connection using Socket.IO
- Join workspace rooms
- Broadcast updates to connected clients

### API Documentation
- Swagger UI available at:
