import React, { useState, useEffect } from "react";

const LoadingSpinner = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 2;
        }
        return prevProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800'>
      <div className='flex items-center mb-4'>
        <div className='w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin'></div>
        <p className='ml-4 text-xl text-gray-700 dark:text-gray-200'>
          Loading...
        </p>
      </div>

      <div className='w-1/2 h-2 bg-gray-300 rounded-full mt-4'>
        <div
          className='h-full bg-indigo-400 rounded-full'
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className='mt-2 text-gray-600 dark:text-gray-300'>{progress}%</p>
    </div>
  );
};

export default LoadingSpinner;
