export const TopicIntroduction = ({ topic, onStart }) => {
  const difficultyColors = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800",
  };

  return (
    <div className='max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
      <div className='mb-6'>
        <h2 className='text-3xl font-bold text-gray-800 dark:text-gray-500 mb-2'>
          {topic.name}
        </h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            difficultyColors[topic.difficulty]
          }`}
        >
          {topic.difficulty}
        </span>
      </div>

      <div className='prose max-w-none mb-8'>
        <p className='text-gray-700 dark:text-gray-400 text-lg whitespace-pre-line'>
          {topic.description}
        </p>
      </div>

      <div className='flex justify-end'>
        <button
          onClick={onStart}
          className='px-6 py-3 bg-gradient-to-tl from-cyan-200 via-cyan-400 to-cyan-800 hover:scale-105 active:scale-95 hover:shadow-xl hover:pointer shadow-gray-800 dark:shadow-gray-300  font-medium rounded-lg transition-colors'
        >
          Start Questions
        </button>
      </div>
    </div>
  );
};
