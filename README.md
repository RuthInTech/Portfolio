# ☕ Ruth — Frontend & Design Developer Portfolio (MERN)

A modern, polished, and authentic personal portfolio for **Ruth**, a 4th-year Software Engineering student at **Addis Ababa University** and aspiring **Frontend & Design Developer** based in Ethiopia.

Designed with a warm **Ethiopian Coffee aesthetic** (rich espresso `#2E1E14`, steamed oat milk `#F7F2EA`, warm caramel crema `#C88346`, and delicate latte tones).

---

## 🌟 Core Philosophy

> *"I don't just write the interface. I think about the interface."*

Ruth sits at the intersection of:
**Frontend Engineering × UI/UX Craft × Product Thinking**

She translates handcrafted Figma wireframes and design systems directly into pixel-precise, responsive, and performant code across **React, the MERN stack, and Flutter**.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons, Google Fonts (*Fraunces*, *Plus Jakarta Sans*, *JetBrains Mono*)
- **Backend**: Node.js, Express.js, RESTful APIs, Morgan logger, CORS
- **Database**: MongoDB & Mongoose (with automated graceful in-memory fallback store)
- **Deployment Ready**: Vercel (Client), Render / Railway / Node (Server)

---

## ☕ Key Sections & Features

1. **Hero Section**:
   - Clear positioning: *Software Engineer • Frontend & Design Developer*
   - Live Addis Ababa (EAT, UTC+3) clock badge
   - Interactive code card showcasing Ruth's developer DNA and design tokens
   - Direct CTA to projects and contact

2. **About Ruth**:
   - Story of an Addis Ababa University engineering student who bridges visual design and software execution
   - The 3 Pillars: Frontend Engineering, UI/UX Craft, and Product Thinking
   - Hands-on builder mindset with zero corporate cliché buzzwords

3. **Interactive Skills Explorer**:
   - Categorized by: Frontend, Backend & MERN, Mobile & Services, UI/UX Design, and Tools & Workflow
   - Honest proficiency tags (Core Stack, Design Hub, Architecture) — no fake 99% meters
   - Interactive preview drawer for each skill

4. **Featured Projects with Case Study Modals**:
   - **Pick One Cause**: Social-impact cause discovery and engagement platform
   - **Crust & Crumbs**: Artisanal bakery ordering prototype (Figma → React + Tailwind, deployed live on Vercel)
   - **Queueless**: MERN stack hackathon physical queue manager with virtual tickets
   - **Flutter Weather App**: Live weather forecast app consuming OpenWeather API
   - **BMI Calculator**: Open-source Flutter mobile utility with tactile sliders
   - *Interactive Case Study Modal* on every project detailing Problem Statement, Solution, Features, and Tech Stack

5. **In the Lab (Experimental Projects)**:
   - Honest showcase of ongoing learning repos (Express APIs, MongoDB schemas, EJS templates, Figma design systems)

6. **Design + Development (The Bridge)**:
   - Interactive comparison stage: Figma design tokens & layout frames vs. Production React implementation

7. **Experience Timeline**:
   - Flutter Developer Intern — *Sof Omar Technologies*
   - Frontend / UI Development Internship — *Crust & Crumbs prototype*
   - BSc in Software Engineering — *Addis Ababa University (AAU)*

8. **Hackathons & Rapid Building**:
   - Highlighting Ruth's love for 24-48h hackathons, problem-first solutions, and rapid prototyping under constraints

9. **Currently Learning Live Ticker**:
   - Live status cards showing what Ruth is exploring this semester (React hooks, MERN scalability, Figma design systems)

10. **Buna Corner (Ethiopian Coffee Ceremony & Guestbook)**:
    - Celebration of Ethiopia as the birthplace of coffee (*Buna* / ቡና)
    - Visitors can pick an Ethiopian roast (Yirgacheffe, Sidama, Harrar, Guji), brew virtual cups, and post a friendly greeting note
    - Persisted live via the MERN backend!

11. **Working MERN Contact Form**:
    - Submits inquiries to Express backend and persists to MongoDB
    - Includes preferred coffee roast dropdown and direct copyable email

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- npm or pnpm

### 2. Quick Run (Both Frontend & Backend concurrently)

From the project root:

```bash
# Start both server (:5000) and client (:3000)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 3. Running Individually

**Client (Vite Dev Server with HMR):**
```bash
npm run client
# Runs on http://localhost:3000
```

**Server (Express API):**
```bash
npm run server
# Runs on http://localhost:5000
```

---

## 🍃 MongoDB Setup ("I will deal with the MongoDB")

The backend is fully wired with Mongoose models for:
- `Contact` (`server/models/Contact.js`)
- `Project` (`server/models/Project.js`)
- `CoffeeNote` (`server/models/CoffeeNote.js`)

### Connecting your MongoDB Cluster:
1. Open `server/.env`
2. Add your MongoDB connection string:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ruth_portfolio?retryWrites=true&w=majority
   NODE_ENV=development
   ```
3. Restart the server (`npm run server` or `npm run dev`).
4. That's it! The server will automatically connect to your live database.

> **Note on Fallback**: Even without a MongoDB connection string, the application operates on a graceful in-memory store so that all forms, guestbooks, and endpoints function 100% without crashing.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status & DB connection state |
| `GET` | `/api/projects` | Fetch all featured projects |
| `GET` | `/api/projects/:slug` | Fetch single project by slug |
| `POST` | `/api/contact` | Submit contact form inquiry |
| `GET` | `/api/contact` | Retrieve contact inquiries |
| `GET` | `/api/coffee-notes` | Retrieve Buna Corner visitor notes & cup counter |
| `POST` | `/api/coffee-notes` | Brew a virtual coffee & post visitor note |

---

## 🎨 Design Tokens

- **Espresso Dark**: `#2E1E14`
- **Mocha Dark Surface**: `#463020`
- **Warm Crema Crema**: `#FDFBF7`
- **Steamed Oat Milk**: `#F7F2EA`
- **Caramel Amber Accent**: `#C88346`
- **Coffee Leaf Green**: `#5D7E54`

---

Crafted with care for **Ruth** • Addis Ababa University • 2026
