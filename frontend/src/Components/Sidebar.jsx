import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LogIn,
  LogOut,
  User,
  Book,
  Info,
  Phone,
  Key,
  FileUp,
  UsersRound,
} from "lucide-react";
import useHandleLogout from "../hooks/useHandleLogout";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = useHandleLogout();

  const { role } = useSelector((state) => state?.user?.user || {});
  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const isAdmin = role === "admin";
  const isTutorOrAdmin = role === "admin" || role === "tutor";

  if (location.pathname === "/login" || location.pathname === "/register")
    return null;
  const { t } = useTranslation();

  const sidebarItems = [
    {
      label: t("dashboard"),
      icon: <User size={20} />,
      path: "/dashboard",
      onlyforLoggedIn: true,
    },
    {
      label: t("courses"),
      icon: <Book size={20} />,
      path: "/courses",
    },
    {
      label: t("about"),
      icon: <Info size={20} />,
      path: "/about",
    },
    {
      label: t("contact"),
      icon: <Phone size={20} />,
      path: "/contact",
    },
    {
      label: t("upload"),
      icon: <FileUp size={20} />,
      path: "/admin-upload",
      onlyforTutorAndAdmin: true,
    },
    {
      label: t("users"),
      icon: <UsersRound size={20} />,
      path: "/users",
      onlyForAdmin: true,
    },
    {
      label: t("forgotPassword"),
      icon: <Key size={20} />,
      path: "/forget-password",
      onlyforLoggedIn: true,
    },
    {
      label: t("logout"),
      icon: <LogOut size={20} />,
      onClick: handleLogout,
      onlyforLoggedIn: true,
    },
    {
      label: t("login"),
      icon: <LogIn size={20} />,
      onClick: () => {
        navigate("/login");
      },
    },
  ];

  return (
    <div
      className={`h-screen shadow-md transition-all duration-300 flex-shrink-0    border-r-2 border-zinc-700 shadow-neutral-400 bg-neutral-100 dark:bg-gray-800 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <ul className='pt-4 space-y-2'>
        {sidebarItems
          .filter((item) => {
            if (item.onlyForAdmin && !isAdmin) return false;
            if (item.onlyforTutorAndAdmin && !isTutorOrAdmin) return false;
            if (item.onlyforLoggedIn && !isLoggedIn) return false;
            if (item.label === t("login") && isLoggedIn) return false;
            return true;
          })
          .map(({ label, icon, path, onClick }) => (
            <li key={label} onClick={toggleSidebar}>
              {path ? (
                <Link
                  to={path}
                  className='grid grid-cols-[40px_1fr] items-center px-2 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200'
                >
                  <div className='flex justify-center items-center'>{icon}</div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 w-0"
                    }`}
                  >
                    <span className='whitespace-nowrap'>{label}</span>
                  </div>
                </Link>
              ) : (
                <button
                  onClick={onClick}
                  className='w-full text-left grid grid-cols-[40px_1fr] items-center px-2 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200'
                >
                  <div className='flex justify-center items-center'>{icon}</div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 w-0"
                    }`}
                  >
                    <span className='whitespace-nowrap'>{label}</span>
                  </div>
                </button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
