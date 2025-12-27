# Real-Time Collaboration Backend

## Overview
This project is a backend service for real-time collaboration built as part of a backend developer assessment.

---

## Testing
- Health check API test
- Authentication login test

---

## API Endpoints (Sample)

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Projects
- `POST /api/projects` (Owner only)
- `GET /api/projects`
- `GET /api/projects/:id`
- `PUT /api/projects/:id` (Owner only)
- `DELETE /api/projects/:id` (Owner only)

### Workspaces
- `GET /api/workspaces/:id`

---

## WebSocket Events
- `join-workspace`
- `send-update`
- `receive-update`

---

## Running Locally

```bash
npm install
npm run dev

## Live Deployment
https://real-time-collaboration-backend-yxsu.onrender.com

## API Documentation
https://real-time-collaboration-backend-yxsu.onrender.com/api-docs

## Run Locally
npm install
npm run dev

## Testing
npm test
