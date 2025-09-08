import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/About";
import CoursesShimmer from "./Components/CourseShimmer";
import Applayout from "./Components/Applayout";

const Error = lazy(() => import("./Components/Error"));
const Login = lazy(() => import("./Components/Login"));
const AdminUpload = lazy(() => import("./Components/AdminUpload"));
const CoursesPage = lazy(() => import("./Components/Courses"));
const StartCourse = lazy(() => import("./Components/StartCourse"));
const Dashboard = lazy(() => import("./Components/Dashboard"));
const AdminUserList = lazy(() => import("./Components/Users"));
const UpdatePassword = lazy(() => import("./Components/ForgetPassword"));

const LoadingSpinner = lazy(() => import("./Components/LoadingSpinner"));

const root = ReactDOM.createRoot(document.getElementById("root"));
import "./i18n.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/admin-upload",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <AdminUpload />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/courses",
        element: (
          <Suspense fallback={<CoursesShimmer />}>
            <CoursesPage />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/course/:courseId",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StartCourse />
          </Suspense>
        ),
      },
      {
        path: "/forget-password",
        element: <UpdatePassword />,
      },
      {
        path: "/users",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <AdminUserList />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<LoadingSpinner />}>
        <Error />
      </Suspense>
    ),
  },
]);

root.render(<RouterProvider router={router} />);
