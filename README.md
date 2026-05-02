# SkillSphere 🎓

> **A modern online learning platform** where users can explore courses, watch lessons, and enroll in skill-based programs — from Web Development and Design to Marketing, AI, and more.

<div align="center">
[![Live Demo](https://skillsphere-flame.vercel.app/)]
</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Live URL](#-live-url)
- [Key Features](#-key-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [NPM Packages Used](#-npm-packages-used)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Author](#-author)

---

## 🚀 About the Project

**SkillSphere** is a full-featured online learning platform built with **Next.js App Router**. It allows users to browse hundreds of expert-led courses, view detailed course pages with full curriculum, and enroll for free. The platform includes secure authentication via **Firebase** (Email/Password + Google OAuth), a protected course detail route, a personalized profile dashboard with progress tracking, and a search-enabled course listing — all wrapped in a sleek, responsive dark-mode UI.

---

## 🌐 Live URL

🔗 **[https://skillsphere-flame.vercel.app/]**

> ⚠️ All routes are configured for client-side navigation. Reloading from any route will **not** throw a 404 error.

---

## ✨ Key Features

### 🏠 Home Page
- Animated hero banner with call-to-action
- Top 3 highest-rated **Popular Courses** section
- **Learning Tips** section with study techniques and time management advice
- **Top Instructors** showcase with student counts
- **Trending Now** / New Releases section
- Fully responsive layout

### 📚 All Courses Page
- Displays all 6+ courses from local JSON data
- **Search functionality** — filter courses by title in real time
- Category filter tabs (Development, Design, Marketing, AI/ML, Mobile, Security)
- Each card shows image, title, instructor, rating, enrollments, and a View Details button

### 📖 Course Detail Page *(Protected Route)*
- Only accessible to **logged-in users**
- Redirects to Login if not authenticated; redirects back after login
- Shows full course description, metadata (rating, duration, instructor, reviews, enrollments)
- Complete **course curriculum** with lesson titles and durations
- Instructor profile card

### 🔐 Authentication
- **Login** — Email/Password + Google OAuth
- **Register** — Name, Email, Photo URL, Password + Google OAuth
- Toast notifications for success and error states
- Redirects to Home on successful auth
- Links between Login ↔ Register pages

### 👤 My Profile Page
- Displays logged-in user's name, email, and avatar
- Stats: Enrolled courses, Completed courses, Total learning time
- Course progress bars for each enrolled course
- **Update Profile** — dedicated route with form to update Name and Photo URL

### 🎨 UI / UX
- Fully **responsive** across mobile, tablet, and desktop
- Dark mode design with vibrant gradient accents
- Skeleton loaders during data fetching
- Toast notifications (success, error)
- Custom **404 Not Found** page
- Persistent Navbar and Footer across all routes

---


## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** (App Router) | React framework, routing, SSR |
| **React 19** | UI component library |
| **Tailwind CSS** | Utility-first styling |
| **Firebase** | Authentication (Email + Google OAuth) |
| **React Hot Toast** | Toast notifications |
| **Swiper.js** | Hero banner / slider |
| **Vercel** | Deployment & hosting |

---

## 📦 NPM Packages Used

```bash
# Core
next
react
react-dom

# Styling
tailwindcss
@tailwindcss/forms

# Authentication
firebase

# Notifications
react-hot-toast

# Slider / Carousel
swiper

# Icons
react-icons

# Utilities
clsx
```

---

## 🏁 Getting Started

Follow these steps to run SkillSphere locally:

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/anikh174/SkillSphere.git

# 2. Navigate into the project directory
cd skillsphere

# 3. Install dependencies
npm install

# 4. Create your environment variables file
cp .env.example .env.local

# 5. Add your Firebase config to .env.local (see below)

# 6. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root of your project and add the following Firebase configuration keys:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

> ⚠️ Never commit your `.env.local` file to version control. It is already included in `.gitignore`.

---


## 👨‍💻 Author

**Your Name**
- GitHub: [[anikh174](https://github.com/anikh174)]
- LinkedIn: [[linkedin.com/in/yourprofile](https://www.linkedin.com/in/anik-hossain174/)]
- Email: hossainanik174@gamil.com

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ for SkillSphere

⭐ **Star this repo** if you found it helpful!

</div>