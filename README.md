# Data Hub — RESTful API Server (Sprint 10)

A REST API server built with Node.js, Express, and MongoDB Atlas. 
Supports full CRUD operations for blog posts with persistent 
cloud storage and relational data modeling.

---

## What it does

This is a backend API server — no frontend, no UI. It listens 
for HTTP requests and responds with JSON data. You interact 
with it using Postman or any frontend client.

Data is stored permanently in MongoDB Atlas cloud database. 
Data persists even after server restarts.

---

## Endpoints

### Blog Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /posts | Get all posts (with author details) |
| POST | /posts | Create a new post |
| DELETE | /posts/:id | Delete a post |
| GET | /posts/recent | Get top 3 most recent posts |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Get all users |
| POST | /users | Create a new user |

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /login | Mock login — returns a JWT token |

---

## Request Examples

### Create a User
POST /users
Content-Type: application/json
{
"name": "John Doe",
"email": "john@gmail.com"
}
### Create a Post
POST /posts
Content-Type: application/json
{
"title": "My First Post",
"content": "Hello MongoDB!",
"authorId": "paste_user_id_here"
}
### Login
POST /login
Content-Type: application/json
{
"email": "test@gmail.com",
"password": "123456"
}
---

## Middleware

Every incoming request is logged to the server console:
[GET] /posts - 10:13:12 am
[POST] /posts - 10:14:08 am
---

## Tech Stack

- Node.js
- Express
- MongoDB Atlas
- Mongoose ODM
- dotenv
- Postman (testing)

---

## Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/wsmkhan2580/data-hub.git
cd data-hub
npm install
Create .env file:
MONGO_URI=your_mongodb_atlas_connection_string
Run locally:
node server.js
Server starts on http://localhost:5000
Live
Deployed on Render — data-hub-izj1.onrender.com
Notes
Built as Sprint 10 of an engineering residency. Focus was on
transitioning from in-memory arrays to persistent cloud storage
using MongoDB Atlas, Mongoose ODM, relational modeling with
.populate(), and aggregation queries.
---
