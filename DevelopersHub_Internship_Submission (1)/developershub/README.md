# DevelopersHub Corporation — Website

A fully responsive, production-quality website for DevelopersHub Corporation — a technology agency offering software development, AI solutions, digital marketing, and more.

---

## 🚀 Live Demo

> Deploy to Vercel or Netlify (see Deployment section below)

---

## 📋 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, stats, projects, testimonials, CTA |
| About | `/about` | Story, team, mission/vision, values, timeline |
| Services | `/services` | All 6 services in detail + process steps |
| Portfolio | `/portfolio` | Filterable project showcase (8 projects) |
| Blog | `/blog` | Articles with search + category filters |
| Contact | `/contact` | Contact form + info cards |
| Meeting Scheduler | `/book-meeting` | Interactive calendar + booking form |

---

## 🛠️ Tech Stack

- **Framework:** React 18 (with Vite)
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React
- **Fonts:** Syne (headings) + Plus Jakarta Sans (body) — Google Fonts
- **Deployment:** Vercel / Netlify

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have **Node.js v18+** and **npm** installed.

```bash
node -v   # Should be v18 or higher
npm -v
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/developershub-website.git
cd developershub-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

This generates a `dist/` folder with optimized static files.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**
5. Done! Your site is live in ~30 seconds

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → **"Add new site"** → **"Import from Git"**
3. Set Build Command: `npm run build`
4. Set Publish Directory: `dist`
5. Click **Deploy site**

---

## 📁 Project Structure

```
developershub/
├── index.html                  # Entry HTML with Google Fonts
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Router setup
    ├── index.css               # Global styles + Tailwind directives
    ├── components/
    │   ├── Navbar.jsx          # Sticky navbar with mobile menu
    │   ├── Footer.jsx          # Footer with newsletter signup
    │   └── ScrollToTop.jsx     # Auto scroll on route change
    └── pages/
        ├── Home.jsx            # Landing page with all sections
        ├── About.jsx           # Company, team, timeline
        ├── Services.jsx        # Detailed service pages
        ├── Portfolio.jsx       # Filterable project grid
        ├── Contact.jsx         # Contact form + info
        ├── MeetingScheduler.jsx# Interactive booking calendar
        └── Blog.jsx            # Blog posts with search
```

---

## ✨ Key Features

- **Fully Responsive** — Mobile-first design, tested on all screen sizes
- **Interactive UI** — Animated counter stats, hover effects, smooth transitions
- **Functional Forms** — Contact form and meeting booking with success state
- **Interactive Calendar** — Date/time slot picker for meeting scheduler
- **Blog Search & Filters** — Real-time search + category filtering
- **Portfolio Filters** — Filter projects by category
- **SEO Ready** — Semantic HTML, meta tags, descriptive alt text
- **Clean Architecture** — Component-based, easy to extend

---

## 🎨 Design System

| Property | Value |
|----------|-------|
| Background | `#080C16` |
| Card Background | `#0F1629` |
| Primary Accent | `#4F8EF7` (Blue) |
| Secondary Accent | `#06D6C0` (Cyan) |
| Display Font | Syne (600, 700, 800) |
| Body Font | Plus Jakarta Sans |

---

## 📄 Environment Variables

No environment variables are required for this project. All data is currently static/mock.

If you integrate a backend, create a `.env` file:

```
VITE_API_URL=https://your-api.com
VITE_EMAIL_SERVICE_KEY=your_key_here
```

---

## 👤 Author

**[Your Name]**  
Frontend Development Intern — DevelopersHub Corporation  
Submitted: April 2026

---

## 📝 License

This project was built as part of a frontend internship task.
