// components/CourseCompletion.jsx
export const CourseCompletion = () => {
  return (
    <div className='max-w-3xl mx-auto p-8 text-center'>
      <div className='mb-8'>
        <div className='w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
          <svg
            className='w-12 h-12 text-green-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 13l4 4L19 7'
            />
          </svg>
        </div>
        <h2 className='text-3xl font-bold text-gray-800 mb-2'>
          Course Completed!
        </h2>
        <p className='text-lg text-gray-600'>
          Congratulations on completing this course!
        </p>
      </div>

      <div className='bg-blue-50 p-6 rounded-lg mb-8'>
        <h3 className='text-xl font-semibold text-indigo-500 mb-3'>
          You did amazing!
        </h3>
        <p className='text-indigo-700'>
          Your hard work and dedication have paid off. Keep up the great work!
        </p>
      </div>

      <button
        onClick={() => (window.location.href = "/courses")}
        className='px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors'
      >
        Browse More Courses
      </button>
    </div>
  );
};
