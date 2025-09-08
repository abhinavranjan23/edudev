import React from "react";

const HeroShimmer = () => {
  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 bg-[#f8fbff] animate-pulse'>
      <div className='flex-1 w-full md:w-1/2 mb-10 md:mb-0'>
        <div className='h-10 w-2/3 bg-gray-300 rounded mb-6'></div>
        <div className='h-5 w-full bg-gray-200 rounded mb-4'></div>
        <div className='h-5 w-4/5 bg-gray-200 rounded mb-6'></div>
        <div className='h-10 w-40 bg-gray-300 rounded'></div>
      </div>

      <div className='flex-1 w-full md:w-1/2 flex justify-center'>
        <div className='w-80 h-80 bg-gray-300 rounded-lg'></div>
      </div>
    </div>
  );
};

export default HeroShimmer;
