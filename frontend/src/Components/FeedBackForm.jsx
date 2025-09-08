import { useState } from "react";
import { api } from "../utils/api";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Alert from "./Alert";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    message: "",
  });
  const userEmail = useSelector((state) => state.user?.user?.email);
  const [hover, setHover] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (userEmail) {
      setFormData((prev) => ({ ...prev, email: userEmail }));
    }
  }, [userEmail]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating < 1) {
      toast.error("Please provide a rating between 1 and 5 stars.");
      return;
    }

    try {
      data = await api.post("feedback", formData);
      setSuccess(true);
      setFormData({ name: "", email: userEmail || "", rating: 0, message: "" });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.response.data.message);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className='p-6 sm:p-8 max-w-2xl mx-auto mt-16 rounded-3xl bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl border border-indigo-200 dark:border-gray-700'
    >
      <h2 className='text-3xl font-extrabold text-center text-indigo-700 dark:text-pink-400 mb-6'>
        🌟 We Value Your Feedback
      </h2>
      {error && <Alert message={error} type='error' />}
      <form onSubmit={handleSubmit} className='space-y-5'>
        <input
          type='text'
          name='name'
          value={formData.name}
          required
          placeholder='Full Name'
          onChange={handleChange}
          className='w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-400 outline-none transition-all'
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          required
          placeholder='Email'
          onChange={handleChange}
          className='w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-400 outline-none transition-all'
        />

        <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
          <p className='font-semibold dark:text-white'>Your Rating:</p>
          <div className='flex space-x-1'>
            {[...Array(5)].map((_, i) => {
              const ratingVal = i + 1;
              return (
                <label key={ratingVal}>
                  <input
                    type='radio'
                    name='rating'
                    value={ratingVal}
                    onClick={() =>
                      setFormData({ ...formData, rating: ratingVal })
                    }
                    className='hidden'
                  />
                  <FaStar
                    size={28}
                    className='cursor-pointer transition-transform hover:scale-125'
                    color={
                      ratingVal <= (hover || formData.rating)
                        ? "#fbbf24"
                        : "#d1d5db"
                    }
                    onMouseEnter={() => setHover(ratingVal)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>

        <textarea
          name='message'
          required
          value={formData.message}
          placeholder='Share your thoughts...'
          onChange={handleChange}
          rows='4'
          className='w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-400 outline-none transition-all'
        />

        <button
          type='submit'
          className='w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 shadow-lg dark:shadow-pink-800/50 hover:cursor-pointer active:scale-95'
        >
          Submit Feedback
        </button>

        <AnimatePresence>
          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className='text-green-600 dark:text-green-400 font-semibold text-center mt-3'
            >
              ✅ Thank you for your valuable feedback!
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
