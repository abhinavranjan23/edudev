import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./ScrollToTop";

const Applayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const hideLayout = ["/login", "/register"].includes(location.pathname);

  return (
    <Provider store={appStore}>
      <ScrollToTop />
      <div className='min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900'>
        <ToastContainer position='top-center' autoClose={2000} />

        <div className='fixed top-0 left-0 right-0 z-40'>
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </div>

        {!hideLayout && (
          <>
            {isSidebarOpen && (
              <div
                className='fixed inset-0 z-30 bg-white/10 backdrop-blur-sm md:hidden transition-opacity duration-300 ease-in-out'
                onClick={toggleSidebar}
              />
            )}

            <div
              className={`
                fixed top-16 z-40 h-[calc(100vh-4rem)] transition-all duration-300
                bg-white dark:bg-gray-800 border-r shadow
                ${isSidebarOpen ? "left-0" : "-left-full"}
                w-64
                md:left-0 md:z-20
                ${!isSidebarOpen ? "md:w-16" : "md:w-64"}
              `}
              onMouseOver={() => setIsSidebarOpen(true)}
              onMouseLeave={() => setIsSidebarOpen(false)}
            >
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
          </>
        )}

        {/* Main Content */}
        <div
          className={`pt-16 transition-all duration-300 ${
            hideLayout ? "" : "md:ml-16 " + (isSidebarOpen ? "md:ml-64" : "")
          }`}
        >
          <div
            className={`min-h-[calc(100vh-4rem)] flex flex-col ${
              hideLayout ? "bg-white dark:bg-gray-800" : "dark:bg-gray-800"
            }`}
          >
            <main className='flex-1 overflow-y-auto min-h-screen scroll-smoothn md:scroll-auto'>
              <Outlet />
            </main>
            {!hideLayout && <Footer />}
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Applayout;
