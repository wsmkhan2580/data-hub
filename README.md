# Data Hub — RESTful API Server

A lightweight REST API server built with Node.js and Express. Supports full CRUD operations for blog posts, request logging middleware, and mock authentication.

---

## What it does

This is a backend API server — no frontend, no UI. It listens for HTTP requests and responds with JSON data. You interact with it using a tool like Postman or any frontend client.

It stores data in memory (a simple array) — no database. Every time the server restarts, data resets. That's intentional for this sprint.

---

## Endpoints

### Blog Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /posts | Get all posts |
| GET | /posts/:id | Get a single post by ID |
| POST | /posts | Create a new post |
| PUT | /posts/:id | Update an existing post |
| DELETE | /posts/:id | Delete a post |

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /login | Mock login — returns a JWT token string |

---

## Request Examples

### Create a post
```
POST /posts
Content-Type: application/json

{
  "title": "My First Post",
  "content": "Hello World"
}
```

### Update a post
```
PUT /posts/:id
Content-Type: application/json

{
  "title": "Updated Title"
}
```

### Login
```
POST /login
Content-Type: application/json

{
  "email": "test@gmail.com",
  "password": "123456"
}
```

Response:
```json
{
  "token": "mock-jwt-token-12345"
}
```

---

## Middleware

Every incoming request is logged to the server console:

```
[GET] /posts - 10:13:12 am
[POST] /posts - 10:14:08 am
```

This runs before every route using `app.use()`.

---

## Tech used

- Node.js
- Express
- Nodemon (development)
- Postman (testing)

---

## Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/wsmkhan2580/data-hub.git
cd data-hub
npm install
```

Run locally:

```bash
npm run dev
```

Server starts on `http://localhost:5000`

---

## Live

Deployed on Render — [data-hub-izj1.onrender.com](https://data-hub-izj1.onrender.com)

---

## Notes

Built as Sprint 9 of an engineering residency. Focus was on understanding REST architecture, Express routing, middleware, and API testing with Postman — not UI or database integration.
