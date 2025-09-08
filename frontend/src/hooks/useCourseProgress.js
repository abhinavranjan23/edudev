import { useState, useEffect } from "react";
import { api } from "../utils/api";

export const useCourseProgress = (courseId) => {
  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [showTopicIntro, setShowTopicIntro] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = async (optionIndex, question) => {
    if (selectedOption !== null) return;

    setSelectedOption(optionIndex);
    const correct = optionIndex === question.correctAnswer;
    setIsCorrect(correct);

    try {
      await updateProgress(question._id, correct);
      return correct;
    } catch (err) {
      setSelectedOption(null);
      setIsCorrect(null);
      throw err;
    }
  };

  const handleNextQuestion = async () => {
    // Reset question state
    setSelectedOption(null);
    setIsCorrect(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0);
      await loadNextTopic();
    }
  };

  const initializeCourse = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check existing progress or initialize
      try {
        await api.get(`progress/current/${courseId}`);
      } catch (err) {
        if (err.response?.status === 404) {
          await api.post("progress/init", { courseId });
        } else {
          throw err;
        }
      }

      await loadNextTopic();
    } catch (err) {
      setError(err.message || "Failed to initialize course");
    } finally {
      setLoading(false);
    }
  };

  const loadNextTopic = async () => {
    try {
      const { data } = await api.get(`progress/next-topic/${courseId}`);

      if (!data?.nextTopic) {
        setCourseCompleted(true);
        return;
      }

      setTopic(data.nextTopic);
      setShowTopicIntro(true);
      const questionsRes = await api.get(
        `questions/topic/${data.nextTopic._id}`
      );
      setQuestions(questionsRes.data?.questions || []);
    } catch (err) {
      setError("Failed to load topic");
      throw err;
    }
  };

  const updateProgress = async (questionId, isCorrect) => {
    await api.post("progress/update", {
      courseId,
      topicId: topic._id,
      level: topic.difficulty,
      questionId,
      isCorrect,
      difficulty: topic.difficulty,
    });
  };

  const startQuestions = () => {
    setShowTopicIntro(false);
  };

  return {
    topic,
    questions,
    loading,
    error,
    courseCompleted,
    showTopicIntro,
    initializeCourse,
    loadNextTopic,
    updateProgress,
    startQuestions,
    currentQuestionIndex,
    selectedOption,
    isCorrect,
    handleAnswer,
    handleNextQuestion,
  };
};
