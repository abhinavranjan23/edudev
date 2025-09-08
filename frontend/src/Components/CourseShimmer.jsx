import React from "react";

const CoursesShimmer = () => {
  const shimmerArray = Array(6).fill(0);

  return (
    <div className='p-6 sm:p-10 bg-white dark:bg-gray-900 min-h-screen'>
      <h2 className='text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6'></h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse'>
        {shimmerArray.map((_, index) => (
          <div
            key={index}
            className='bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md'
          >
            <div className='h-40 bg-gray-300 dark:bg-gray-700 rounded mb-4'></div>
            <div className='h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2'></div>
            <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-1'></div>
            <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4'></div>
            <div className='h-10 w-32 bg-blue-300 dark:bg-blue-700 rounded'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesShimmer;
