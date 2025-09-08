const ShimmerCard = () => (
  <div className='bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border-l-4 border-gray-300 animate-pulse space-y-4'>
    <div className='h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4'></div>
    <div className='h-4 bg-gray-200 dark:bg-gray-600 rounded w-full'></div>
    <div className='h-6 w-1/3 bg-indigo-200 dark:bg-indigo-600 rounded-full'></div>
  </div>
);
export default ShimmerCard;
