import React, { useState } from "react";
import { api } from "../utils/api";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.put("user/update-password", {
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      });
      toast.success(res.data.msg);
      setForm({ currentPassword: "", newPassword: "" });
    } catch (err) {
      toast.error(err.response?.data?.msg || "Error updating password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 shadow-lg bg-white dark:bg-gray-800 rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>Update Password</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium'>Current Password</label>
          <input
            type='password'
            name='currentPassword'
            value={form.currentPassword}
            onChange={handleChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>New Password</label>
          <input
            type='password'
            name='newPassword'
            value={form.newPassword}
            onChange={handleChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-indigo-400 hover:bg-indigo-500 text-white  px-4 py-2 rounded '
          disabled={isLoading}
        >
          {isLoading ? (
            <span className='loading loading-dots loading-md'></span>
          ) : (
            "Update Password"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
