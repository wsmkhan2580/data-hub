# AI Prompts Log — Data Hub (Sprint 9)

This file documents every instance where AI assistance was used during Sprint 9 development. All code was written manually — AI was used strictly for concept explanation and debugging support.

---

## Policy Compliance

Per Sprint 9 AI Policy:
- AI was used for debugging and concept explanation only
- No code was copy-pasted directly from AI output
- All logic was written independently after understanding the concept

---

## Prompt Log

---

### 1. Understanding Express Setup

**Prompt:**
> What does `const app = express()` do and why do we need it?

**Purpose:** Understand what Express returns and why we store it in a variable before using it.

**What I learned:** `express()` creates an application instance. All routes and middleware are attached to this object. Without it, there's no server to configure.

---

### 2. Understanding Middleware

**Prompt:**
> What is middleware in Express and why does `next()` need to be called?

**Purpose:** My server was hanging — requests weren't reaching routes.

**What I learned:** Middleware intercepts every request. If `next()` isn't called, the request gets stuck and never reaches the route handler. Always call `next()` in custom middleware unless you're sending a response.

---

### 3. Understanding req.body

**Prompt:**
> Why is req.body returning undefined on my POST request?

**Purpose:** POST data wasn't coming through.

**What I learned:** Express doesn't parse JSON automatically. `app.use(express.json())` must be added before routes — it tells Express to read the request body and parse it as JSON.

---

### 4. Understanding CRUD Logic

**Prompt:**
> What is the difference between filter and findIndex for array operations?

**Purpose:** Needed to understand which method to use for DELETE vs PUT.

**What I learned:**
- `filter` — returns a new array excluding matched items (used for DELETE)
- `findIndex` — returns the index number of a matched item (used for PUT so we can replace it)

---

### 5. Understanding REST Methods

**Prompt:**
> Why do we use different HTTP methods (GET, POST, PUT, DELETE) instead of just GET for everything?

**Purpose:** Conceptual understanding of REST architecture.

**What I learned:** Each method communicates intent. GET means read, POST means create, PUT means update, DELETE means remove. Same URL `/posts` behaves differently depending on the method — this is what makes REST predictable and standardized.

---

### 6. Debugging DELETE Route

**Prompt:**
> My DELETE route is not removing the post — it's keeping only the deleted post instead.

**Purpose:** Bug — wrong operator in filter.

**Root cause:** Used `===` instead of `!==` in the filter condition. `filter` keeps items that return true — so `=== id` was keeping only the matching post instead of removing it.

**Fix:** Changed to `!==` — keep everything that does NOT match the ID.

---

### 7. Understanding Spread Operator in PUT

**Prompt:**
> What does `{ ...blogPosts[index], ...req.body }` do?

**Purpose:** Understand the spread syntax used in the PUT route.

**What I learned:** It merges two objects. Existing post data comes first, then new data from `req.body` overwrites only the fields that were sent. Fields not included in the request body remain unchanged.

---

### 8. Understanding Mock JWT

**Prompt:**
> What is a JWT and why are we returning a mock string instead of a real one?

**Purpose:** Understand the login endpoint requirement.

**What I learned:** JWT (JSON Web Token) is a string used to verify identity after login. In this sprint, we're not implementing real authentication — just scaffolding the endpoint structure. A real implementation would use a library like `jsonwebtoken` to sign a token with a secret key.

---

### 9. Nodemon Setup

**Prompt:**
> What is nodemon and why is it a devDependency?

**Purpose:** Understand the difference between dependencies and devDependencies.

**What I learned:** Nodemon watches for file changes and restarts the server automatically. It's only needed during development — not in production — so it's installed with `-D` flag as a devDependency.

---

### 10. Deployment on Render

**Prompt:**
> Why can't I deploy an Express server on Vercel?

**Purpose:** Sprint instructions mentioned Render or Railway — wanted to understand why.

**What I learned:** Vercel is optimized for serverless functions and static sites. Express runs as a persistent process (long-running server) which doesn't fit Vercel's execution model. Render and Railway support persistent Node.js processes properly.

