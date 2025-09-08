# 📚 Personalized Learning Management System (LMS)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Project-blue?style=for-the-badge)](https://edudev.abhinavranjan.me/)

## 🚀 Overview

**Personalized LMS** is an intelligent, adaptive learning management system that dynamically adjusts course difficulty based on individual user performance. Built with modern web technologies, it provides a seamless learning experience with real-time progress tracking, personalized content delivery, and comprehensive analytics.

### 🧠 Key Features

- **🎯 Dynamic Difficulty Adaptation**: Automatically adjusts course difficulty based on user performance
- **📊 Real-time Progress Tracking**: Monitor learning progress with detailed analytics
- **🔐 Secure Authentication**: JWT-based auth with OAuth and Firebase integration
- **📱 Responsive Design**: Mobile-first approach with dark/light theme support
- **⚡ Performance Optimized**: Code splitting, lazy loading, and Redis caching
- **👨‍💼 Admin Dashboard**: Complete course and user management system
- **💬 Feedback System**: User feedback collection and management
- **🌐 Multi-language Support**: Internationalization ready

---

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   Database      │
│   (React 19)    │◄──►│   (Node.js)     │◄──►│   (MongoDB)     │
│                 │    │                 │    │                 │
│ • Redux Toolkit │    │ • Express.js    │    │ • User Data     │
│ • TailwindCSS   │    │ • JWT Auth      │    │ • Course Data   │
│ • Firebase Auth │    │ • Redis Cache   │    │ • Progress Data │
│ • Vite Build    │    │ • Rate Limiting │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

- **⚛️ React 19** with lazy loading and Suspense
- **🧭 React Router DOM v6.30** for dynamic routing
- **🗃️ Redux Toolkit** for efficient state management
- **🎨 TailwindCSS & DaisyUI** for modern UI and theme switching
- **⚡ Vite** for ultra-fast builds and development
- **🔐 Firebase Auth** for secure authentication
- **💫 Framer Motion, SweetAlert2, React Toastify** for smooth UX

### Backend

- **🟢 Node.js + Express.js** — Backend Framework
- **🍃 MongoDB + Mongoose** — Database
- **🔴 Redis** — Caching & Performance Optimization
- **🔑 OAuth & Firebase** — Authentication
- **🍪 Cookies** — Secure Token Management
- **📧 Nodemailer** — Email OTP Verification
- **🛡️ Rate Limiting** — DDoS Protection
- **🌐 CORS** — Secure Cross-Origin Requests

---

## 📁 Project Structure

```
📦 personalized-lms/
├── 📁 frontend/                    # React Frontend Application
│   ├── 📁 src/
│   │   ├── 📁 Components/          # React Components
│   │   │   ├── 📁 forms/           # Form Components
│   │   │   ├── About.jsx
│   │   │   ├── AdminUpload.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── QuestionView.jsx
│   │   │   └── StartCourse.jsx
│   │   ├── 📁 hooks/               # Custom React Hooks
│   │   │   ├── useCourseProgress.js
│   │   │   ├── useLogin.js
│   │   │   └── useSignup.js
│   │   ├── 📁 redux/               # Redux Store & Slices
│   │   ├── 📁 utils/               # Utility Functions
│   │   └── app.jsx                 # Main App Component
│   ├── package.json
│   └── vite.config.js
│
├── 📁 backend/                     # Node.js Backend API
│   ├── 📁 server/
│   │   ├── 📁 config/              # Configuration Files
│   │   │   ├── dbConfig.js
│   │   │   ├── email.js
│   │   │   └── firebase.js
│   │   ├── 📁 controller/          # Route Controllers
│   │   │   ├── adminController.js
│   │   │   ├── authController.js
│   │   │   ├── progressController.js
│   │   │   └── userController.js
│   │   ├── 📁 middleware/          # Custom Middleware
│   │   │   ├── authmiddleware.js
│   │   │   └── adminmiddleware.js
│   │   ├── 📁 models/              # Database Schemas
│   │   │   ├── CourseSchema.js
│   │   │   ├── QuestionSchema.js
│   │   │   ├── TopicSchema.js
│   │   │   ├── UserProgressSchema.js
│   │   │   └── UserSchema.js
│   │   ├── 📁 routes/              # API Routes
│   │   │   ├── adminRoutes.js
│   │   │   ├── authRoutes.js
│   │   │   ├── progressRoutes.js
│   │   │   └── questionRoutes.js
│   │   └── 📁 utils/               # Utility Functions
│   │       ├── getNextDifficulty.js    # 🧠 Core Algorithm
│   │       ├── recommendNextTopic.js   # 🎯 Topic Recommendation
│   │       └── redisClient.js
│   ├── server.js                   # Main Server File
│   └── package.json
│
└── README.md
```

---

## 🧠 Intelligent Difficulty Adaptation

### How It Works

The system uses a sophisticated algorithm to adapt course difficulty in real-time:

```javascript
// Core Algorithm Logic
function getNextDifficulty(performance) {
  const MIN_ATTEMPTS = 3;
  const STRUGGLING_THRESHOLD = 0.6; // 60% success rate
  const EXCELLING_THRESHOLD = 0.9; // 90% success rate

  // Analyze performance across difficulty levels
  if (isExcellingOnEasy && !isStrugglingOnMedium) return "medium";
  if (isExcellingOnMedium && !isStrugglingOnHard) return "hard";
  if (isStrugglingOnMedium) return "easy";
  if (isStrugglingOnHard) return "medium";

  return "easy"; // Default for new users
}
```

### Adaptation Triggers

- **📈 Increase Difficulty**: When user excels (>90% success rate) on current level
- **📉 Decrease Difficulty**: When user struggles (<60% success rate) on current level
- **⏱️ Minimum Attempts**: Requires 3+ questions before adaptation
- **🎯 Smart Fallbacks**: Graceful handling when preferred difficulty topics aren't available

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18+ recommended)
- **MongoDB** (local or cloud instance)
- **Redis** (for caching)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/abhinavranjan23/edudev.git
cd personalized-lms
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

**Configure your `.env` file:**

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/personalized-lms
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_super_secret_jwt_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FIREBASE_API_KEY=your_firebase_api_key
```

```bash
# Start the backend server
npm start
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 4. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

---

## 📚 API Documentation

### 🔐 Authentication Routes

| Method | Endpoint                  | Description                     |
| ------ | ------------------------- | ------------------------------- |
| `POST` | `/api/auth/register`      | Register new user               |
| `POST` | `/api/auth/sendOtp`       | Send OTP for email verification |
| `POST` | `/api/auth/verifyOtp`     | Verify OTP                      |
| `POST` | `/api/auth/login`         | Login with email/password       |
| `POST` | `/api/auth/firebaseLogin` | Login with Firebase             |
| `POST` | `/api/auth/logout`        | Logout user                     |

### 📈 Progress & Learning Routes

| Method | Endpoint                             | Description                    |
| ------ | ------------------------------------ | ------------------------------ |
| `POST` | `/api/progress/init`                 | Initialize course progress     |
| `POST` | `/api/progress/update`               | Update progress after question |
| `GET`  | `/api/progress/current/:courseId`    | Get current progress           |
| `GET`  | `/api/progress/next-topic/:courseId` | Get next recommended topic     |

### 🧑‍🏫 Admin Routes

| Method | Endpoint                  | Description      |
| ------ | ------------------------- | ---------------- |
| `POST` | `/api/admin/add-course`   | Add new course   |
| `POST` | `/api/admin/add-topic`    | Add new topic    |
| `POST` | `/api/admin/add-question` | Add new question |
| `GET`  | `/api/admin/users`        | View all users   |

### 💬 Feedback Routes

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| `POST` | `/api/feedback` | Submit feedback   |
| `GET`  | `/api/feedback` | View all feedback |

---

## 🎯 Key Features Deep Dive

### 1. 🧠 Dynamic Difficulty Adaptation

The system continuously monitors user performance and adjusts difficulty:

```javascript
// Example: User struggling on medium difficulty
if (medium.attempted >= 3 && mediumRatio < 0.6) {
  return "easy"; // Move back to easier level
}
```

### 2. 📊 Progress Tracking

Comprehensive progress monitoring:

- **Topic Completion**: Track completed topics per course
- **Performance Metrics**: Success rates by difficulty level
- **Question History**: Individual question performance
- **Learning Analytics**: Time spent, accuracy trends

### 3. 🔐 Security Features

- **JWT Authentication**: Secure token-based auth
- **Rate Limiting**: 200 requests/hour per user
- **Cookie Security**: HTTP-only cookies prevent XSS
- **Input Validation**: Comprehensive data validation
- **CORS Protection**: Secure cross-origin requests

### 4. ⚡ Performance Optimizations

- **Redis Caching**: Fast data retrieval
- **Code Splitting**: Lazy-loaded components
- **Shimmer Loading**: Enhanced perceived performance
- **Database Indexing**: Optimized queries

---

## 🧪 Development Scripts

### Frontend

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend

```bash
npm start         # Start production server
npm run dev       # Start development server with nodemon
npm test          # Run tests
```

---

## 🌐 Deployment

### Frontend (Vercel)

The frontend is automatically deployed using Vercel:

```bash
# Push to main branch triggers deployment
git push origin main
```

### Backend (Vercel)

Configure `vercel.json` for serverless deployment:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

---

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   ```bash
   # Ensure MongoDB is running
   sudo systemctl start mongod
   ```

2. **Redis Connection Error**

   ```bash
   # Start Redis server
   redis-server
   ```

3. **Firebase Auth Issues**

   - Verify Firebase configuration
   - Check API keys in environment variables

4. **CORS Errors**
   - Ensure backend CORS is configured for frontend domain
   - Check environment variables

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Abhinav Ranjan**

- 📧 Email: [abhinavranjan1523@gmail.com](mailto:abhinavranjan1523@gmail.com)
- 🐙 GitHub: [@abhinavranjan23](https://github.com/abhinavranjan23)
- 🌐 Live Demo: [edudev.abhinavranjan.me](https://edudev.abhinavranjan.me/)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the flexible database
- Redis for the fast caching solution
- Vercel for the seamless deployment platform
- All open-source contributors who made this project possible

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/abhinavranjan23/edudev?style=social)
![GitHub forks](https://img.shields.io/github/forks/abhinavranjan23/edudev?style=social)
![GitHub issues](https://img.shields.io/github/issues/abhinavranjan23/edudev)
![GitHub pull requests](https://img.shields.io/github/issues-pr/abhinavranjan23/edudev)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Abhinav Ranjan](https://github.com/abhinavranjan23)

</div>
