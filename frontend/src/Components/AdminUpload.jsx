import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAdminForm } from "../hooks/useAdminForm";
import { AdminFormTabs } from "./forms/AdminFormTabs";
import { FormInput, FormSelect, FormTextarea } from "./forms/FormElements";
import Alert from "./Alert";

const AdminUpload = () => {
  const { role } = useSelector((state) => state?.user?.user || {});
  const navigate = useNavigate();
  const isAdmin = role === "admin" || role === "tutor";

  const {
    activeTab,
    setActiveTab,
    courses,
    topics,
    alert,
    courseData,
    setCourseData,
    topicData,
    setTopicData,
    questionData,
    setQuestionData,
    handleSubmit,
    isSubmitting,
  } = useAdminForm();

  useEffect(() => {
    if (!isAdmin) {
      toast.error("You are not authorized to access this page.");
      navigate("/");
    }
  }, [isAdmin, navigate]);

  const renderForm = () => {
    const commonProps = {
      className:
        "w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",
      required: true,
    };

    return (
      <form
        onSubmit={handleSubmit}
        className='bg-white dark:bg-gray-800 dark:border-gray-500 border-2  p-6 rounded-2xl shadow-xl space-y-4'
      >
        {activeTab === "course" && (
          <>
            <FormInput
              label='Course Title'
              value={courseData.title}
              onChange={(e) =>
                setCourseData({ ...courseData, title: e.target.value })
              }
              placeholder='Title'
              required
            />
            <FormTextarea
              label='Description'
              value={courseData.description}
              onChange={(e) =>
                setCourseData({ ...courseData, description: e.target.value })
              }
              placeholder='Description'
              required
            />
            <FormInput
              label='Image URL'
              type='url'
              value={courseData.imageUrl}
              onChange={(e) =>
                setCourseData({ ...courseData, imageUrl: e.target.value })
              }
              placeholder='https://example.com/image.jpg'
              required
            />
            <FormSelect
              label='Difficulty'
              value={courseData.difficulty}
              onChange={(e) =>
                setCourseData({ ...courseData, difficulty: e.target.value })
              }
              options={[
                { value: "easy", label: "Easy" },
                { value: "medium", label: "Medium" },
                { value: "hard", label: "Hard" },
              ]}
            />
          </>
        )}

        {activeTab === "topic" && (
          <>
            <FormSelect
              label='Course'
              value={topicData.courseId}
              onChange={(e) =>
                setTopicData({ ...topicData, courseId: e.target.value })
              }
              options={[
                { value: "", label: "-- Select Course --", disabled: true },
                ...courses.map((c) => ({ value: c._id, label: c.title })),
              ]}
              required
            />
            <FormInput
              label='Topic Title'
              value={topicData.title}
              onChange={(e) =>
                setTopicData({ ...topicData, title: e.target.value })
              }
              placeholder='Title'
              required
            />
            <FormTextarea
              label='Content'
              value={topicData.content}
              onChange={(e) =>
                setTopicData({ ...topicData, content: e.target.value })
              }
              placeholder='Content'
              required
            />
            <FormSelect
              label='Difficulty'
              value={topicData.difficulty}
              onChange={(e) =>
                setTopicData({ ...topicData, difficulty: e.target.value })
              }
              options={[
                { value: "easy", label: "Easy" },
                { value: "medium", label: "Medium" },
                { value: "hard", label: "Hard" },
              ]}
            />
          </>
        )}

        {activeTab === "question" && (
          <>
            <FormSelect
              label='Topic'
              value={questionData.topicId}
              onChange={(e) =>
                setQuestionData({ ...questionData, topicId: e.target.value })
              }
              options={[
                { value: "", label: "-- Select Topic --", disabled: true },
                ...topics.map((t) => ({ value: t._id, label: t.title })),
              ]}
              required
            />
            <FormTextarea
              label='Question'
              value={questionData.questionText}
              onChange={(e) =>
                setQuestionData({
                  ...questionData,
                  questionText: e.target.value,
                })
              }
              placeholder='Question Text'
              required
            />
            {questionData.options.map((opt, idx) => (
              <FormInput
                key={idx}
                label={`Option ${idx + 1}`}
                value={opt}
                onChange={(e) => {
                  const newOptions = [...questionData.options];
                  newOptions[idx] = e.target.value;
                  setQuestionData({ ...questionData, options: newOptions });
                }}
                placeholder={`Option ${idx + 1}`}
                required
              />
            ))}
            <FormSelect
              label='Correct Answer'
              value={questionData.correctAnswer}
              onChange={(e) =>
                setQuestionData({
                  ...questionData,
                  correctAnswer: Number(e.target.value),
                })
              }
              options={[
                { value: 0, label: "Option 1" },
                { value: 1, label: "Option 2" },
                { value: 2, label: "Option 3" },
                { value: 3, label: "Option 4" },
              ]}
            />
            <FormSelect
              label='Difficulty'
              value={questionData.difficulty}
              onChange={(e) =>
                setQuestionData({
                  ...questionData,
                  difficulty: e.target.value,
                })
              }
              options={[
                { value: "easy", label: "Easy" },
                { value: "medium", label: "Medium" },
                { value: "hard", label: "Hard" },
              ]}
            />
          </>
        )}

        <button
          type='submit'
          disabled={isSubmitting}
          className={`w-full bg-orange-400 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition duration-200 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <span className='loading loading-spinner loading-md'></span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    );
  };

  return (
    <div className='p-6 max-w-3xl mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-8 text-balck drop-shadow'>
        Admin Panel -{" "}
        {activeTab === "course"
          ? "Add Course"
          : activeTab === "topic"
          ? "Add Topic"
          : "Add Question"}
      </h2>

      <AdminFormTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {alert && (
        <div className='mb-4'>
          <Alert message={alert.msg} type={alert.type} />
        </div>
      )}

      <div className='transition-all duration-500'>{renderForm()}</div>
    </div>
  );
};

export default AdminUpload;
