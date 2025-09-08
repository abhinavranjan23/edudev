export const ErrorView = ({ message, onRetry }) => {
  return (
    <div className='p-4 text-center text-red-600'>
      <p>{message}</p>
      <button
        onClick={onRetry}
        className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
      >
        Try Again
      </button>
    </div>
  );
};
