export const AdminFormTabs = ({ activeTab, setActiveTab }) => (
  <div className='flex justify-center gap-4 mb-8'>
    {["course", "topic", "question"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 
            ${
              activeTab === tab
                ? "bg-gradient-to-r from-orange-400 to-orange-700 text-white  shadow-md scale-105"
                : "bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:border-gray-100 dark:border"
            }`}
      >
        {tab === "course" && <i className='fas fa-book'></i>}
        {tab === "topic" && <i className='fas fa-tags'></i>}
        {tab === "question" && <i className='fas fa-question-circle'></i>}
        {tab === "course"
          ? "Add Course"
          : tab === "topic"
          ? "Add Topic"
          : "Add Question"}
      </button>
    ))}
  </div>
);
