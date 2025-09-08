# EduVibe 📚⚡

Live Project: [edudev.abhinavranjan.me](https://edudev.abhinavranjan.me/)

## 🚀 Overview

**EduVibe** is a modern, feature-rich educational web platform designed to make learning interactive, intuitive, and intelligent. It enables users to explore structured courses, track progress, and interact with personalized content. The application leverages intelligent algorithms to adapt course difficulty dynamically based on user performance, particularly the number and complexity of questions solved.

Built using cutting-edge technologies like **React**, **Redux Toolkit**, **Firebase**, and **TailwindCSS**, LearnSphere emphasizes performance, responsiveness, and accessibility while offering a clean and minimal user experience.

---

## 📁 Project Structure

```
📦 EduVibe
├─ .gitignore
├─ dist/                   # Build output
│  ├─ assets/              # Static assets
│  └─ index.html           # Main entry point after build
├─ index.html              # Root HTML file
├─ package.json            # Project metadata and dependencies
├─ public/                 # Public files
│  ├─ icons8.ico           # Favicon
│  ├─ og-image.png         # Open Graph image for SEO
│  ├─ sitemap.xml, robots.txt, verification
├─ src/                    # Main source folder
│  ├─ Components/          # All React components
│  ├─ assets/              # Images and media
│  ├─ constants/           # Constants and configs
│  ├─ hooks/               # Custom React hooks
│  ├─ redux/               # Redux store and slices
│  ├─ utils/               # Utility functions
│  ├─ app.jsx              # Entry point
│  └─ global.css           # Global styles
├─ vite.config.js          # Vite configuration
├─ vercel.json             # Vercel deployment config
```

---

## 🔧 Technologies Used

- ⚛️ **React 19** with lazy loading and Suspense
- 🧭 **React Router DOM v6.30** for dynamic routing
- 🗃️ **Redux Toolkit** for efficient state management
- 🎨 **TailwindCSS & DaisyUI** for modern UI and theme switching
- ⚡ **Vite** for ultra-fast builds and development
- 🔐 **Firebase Auth** for secure authentication and user management
- 💫 **Framer Motion**, **SweetAlert2**, **React Toastify** for smooth UX
- 📦 **Vercel** for CI/CD and production hosting

---

## 🧠 Smart Features & Optimization Techniques

### 🧩 Dynamic Difficulty Adjustment

The platform automatically calibrates the difficulty of courses in real time based on the learner’s interaction history — particularly the number and accuracy of questions solved — ensuring a personalized learning path for each user.

### 🚀 Code Splitting & Lazy Loading

```js
const Login = lazy(() => import("./Components/Login"));
```

Speeds up initial load times by asynchronously loading only the necessary components.

### ⚡ Shimmer Loading Effects

Components like `CourseShimmer` and `HeroShimmer` enhance perceived performance during data loading.

### 📱 Fully Responsive UI

Built with TailwindCSS for seamless experience across all screen sizes, ensuring mobile-first design.

### 🧰 Custom React Hooks

Encapsulated logic using reusable hooks such as:

- `useLogin`
- `useSignup`
- `useOtpVerification`
- `useCourseProgress`

### 🧾 SEO & Metadata

- `robots.txt`, `sitemap.xml`, and `og-image.png` for better search engine indexing
- Custom `favicon` and metadata for rich previews on social platforms

### 📊 Progress Tracking

Learners can monitor their completion status and get real-time feedback on their advancement through visual indicators like progress bars and completion badges.

### 🎨 Theme Support

Light/Dark mode toggle with persistent state through local storage.

---

## 🧪 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 📦 Installation & Usage

### 🔧 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node.js)

### 🛠️ Steps to Run Locally

```bash
# Clone the repository
https://github.com/abhinavranjan/edudev.git


# Install dependencies
npm install

# Start the development server
npm run dev

# Visit the app in your browser
http://localhost:5173
```

### 🌐 Deployment

The app is automatically deployed using **Vercel** via the `vercel.json` configuration file for CI/CD. Push changes to the main branch to trigger deployment.

---

## 🔍 Notable Features

- ✅ Admin dashboard with secure login, user listing, and content upload interface
- ✅ Real-time feedback collection form
- ✅ OTP-based secure authentication
- ✅ Dynamic course difficulty adjustment
- ✅ Sidebar navigation, responsive layout, and error boundaries
- ✅ Progress analytics and visual cues for course milestones

---

## 👩‍💻 Author

**Abhinav Ranjan**\
📧 [GitHub](https://github.com/abhinavranjan23)

---
