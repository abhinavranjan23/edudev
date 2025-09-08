import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { api } from "../utils/api";
import ShimmerCard from "./ShimmerCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const USERS_PER_PAGE = 6;

const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [roleFilter, setRoleFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const role = useSelector((store) => store?.user?.user?.role);
  // const [authorised,setAuthorised] = useState(true)
  useEffect(() => {
    if (!role || role !== "admin") {
      navigate("/");
    }
  }, [role, navigate]);

  useEffect(() => {
    fetchUsers();
  }, [currentPage, search, roleFilter]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get("admin/users", {
        params: {
          page: currentPage,
          limit: USERS_PER_PAGE,
          search,
          role: roleFilter,
        },
      });

      setUsers(res.data.users);
      setTotalPages(res.data.pages);
    } catch (err) {
      console.error("Error fetching users", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const exportCSV = () => {
    const csvContent = [
      ["Name", "Email", "Role"],
      ...filteredUsers.map(({ name, email, role }) => [name, email, role]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "user_list.csv";
    link.click();
  };
  if (!role || role != "admin") return <h4>Not Authorized</h4>;

  return (
    <div className='p-6 bg-gray-100 dark:bg-gray-900 min-h-screen'>
      <div className='flex flex-col sm:flex-row justify-between items-center mb-6 gap-4'>
        <h1 className='text-3xl font-bold text-gray-800 dark:text-white'>
          👥 All Users
        </h1>
        <div className='flex flex-col sm:flex-row gap-2'>
          <input
            type='text'
            placeholder='Search by name or email...'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className='px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <select
            value={roleFilter}
            onChange={(e) => {
              setRoleFilter(e.target.value);
              setCurrentPage(1);
            }}
            className='px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-700 dark:text-white'
          >
            <option value='all'>All Roles</option>
            <option value='admin'>Admin</option>
            <option value='student'>Student</option>
          </select>
          <button
            onClick={exportCSV}
            className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md'
          >
            📤 Export CSV
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {loading
          ? Array.from({ length: USERS_PER_PAGE }).map((_, idx) => (
              <ShimmerCard key={idx} />
            ))
          : filteredUsers.map((user, i) => (
              <motion.div
                key={user._id}
                className='bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border-l-4 border-indigo-500 hover:scale-[1.03] transition-all duration-200'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  {user.name}
                </h2>
                <p className='text-sm text-gray-600 dark:text-gray-300'>
                  {user.email}
                </p>
                <span className='inline-block mt-2 px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white rounded-full'>
                  Role: {user.role}
                </span>
              </motion.div>
            ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center mt-8 gap-2'>
        {totalPages > 1 && (
          <>
            {currentPage > 1 && (
              <button
                className='px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600'
                onClick={() => handlePageChange(currentPage - 1)}
              >
                ⬅ Prev
              </button>
            )}
            <span className='text-gray-700 dark:text-white px-4 py-2 font-semibold'>
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <button
                className='px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600'
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next ➡
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminUserList;
