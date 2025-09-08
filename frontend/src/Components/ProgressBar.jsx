import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ label, completed, total, color = "bg-indigo-300" }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className='w-full mb-4'>
      <div className='flex justify-between mb-1 text-sm font-medium text-gray-700'>
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden'>
        <motion.div
          className={`h-3 rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
