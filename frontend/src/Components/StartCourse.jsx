// components/StartCourse.jsx
import { useCourseProgress } from "../hooks/useCourseProgress";
import { TopicIntroduction } from "./TopicIntroduction";
import { QuestionView } from "./QuestionView";
import { CourseCompletion } from "./CourseCompletion";
import LoadingSpinner from "./LoadingSpinner";
import { ErrorView } from "./ErrorView";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const StartCourse = () => {
  const { courseId } = useParams();
  const {
    topic,
    questions,
    loading,
    error,
    courseCompleted,
    showTopicIntro,
    currentQuestionIndex,
    selectedOption,
    isCorrect,
    initializeCourse,
    loadNextTopic,
    handleAnswer,
    handleNextQuestion,
    startQuestions,
  } = useCourseProgress(courseId);

  useEffect(() => {
    if (courseId) {
      initializeCourse();
    }
  }, [courseId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorView message={error} onRetry={initializeCourse} />;
  if (courseCompleted) return <CourseCompletion courseId={courseId} />;
  if (showTopicIntro && topic)
    return <TopicIntroduction topic={topic} onStart={startQuestions} />;

  if (!questions.length || !questions[currentQuestionIndex]) {
    return (
      <div className='p-4 text-center'>
        <p>No questions available for this topic</p>
        <button
          onClick={loadNextTopic}
          className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
        >
          Load Next Topic
        </button>
      </div>
    );
  }

  return (
    <QuestionView
      question={questions[currentQuestionIndex]}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={questions.length}
      selectedOption={selectedOption}
      isCorrect={isCorrect}
      onAnswer={handleAnswer}
      onNext={handleNextQuestion}
    />
  );
};

export default StartCourse;
