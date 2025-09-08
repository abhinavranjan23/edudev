import { useState, useEffect } from "react";
import { api } from "../utils/api";
import {
  validateCourse,
  validateTopic,
  validateQuestion,
} from "../utils/validators";

export const useAdminForm = () => {
  const [activeTab, setActiveTab] = useState("course");
  const [courses, setCourses] = useState([]);
  const [topics, setTopics] = useState([]);
  const [alert, setAlert] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!alert) {
      return;
    }
    const timer = setTimeout(() => {
      setAlert(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert]);

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    difficulty: "easy",
  });

  const [topicData, setTopicData] = useState({
    courseId: "",
    title: "",
    content: "",
    difficulty: "easy",
  });

  const [questionData, setQuestionData] = useState({
    topicId: "",
    questionText: "",
    options: ["", "", "", ""],
    correctAnswer: 0,
    difficulty: "easy",
  });

  const fetchData = async () => {
    try {
      const [courseRes, topicRes] = await Promise.all([
        api.get(`course`),
        api.get(`topic`),
      ]);
      setCourses(courseRes.data);
      setTopics(topicRes.data);
    } catch (error) {
      setAlert({ msg: "Error fetching data", type: "error" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validateForm = () => {
    let errors = [];
    if (activeTab === "course") {
      errors = validateCourse(courseData);
    } else if (activeTab === "topic") {
      errors = validateTopic(topicData);
    } else {
      errors = validateQuestion(questionData);
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setAlert({ msg: validationErrors.join(", "), type: "error" });
      setIsSubmitting(false);
      return;
    }

    try {
      let payload, endpoint;
      if (activeTab === "course") {
        payload = courseData;
        endpoint = "admin/add-course";
      } else if (activeTab === "topic") {
        payload = topicData;
        endpoint = "admin/add-topic";
      } else {
        payload = questionData;
        endpoint = "admin/add-question";
      }

      await api.post(`${endpoint}`, payload, {
        withCredentials: true,
      });

      setAlert({ msg: "Added successfully!", type: "success" });
      resetForm();
      if (activeTab !== "question") fetchData();
    } catch (error) {
      setAlert({
        msg: error?.response?.data?.message || "Error adding",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    if (activeTab === "course") {
      setCourseData({
        title: "",
        description: "",
        difficulty: "easy",
        imageUrl: "",
      });
    } else if (activeTab === "topic") {
      setTopicData({
        courseId: "",
        title: "",
        content: "",
        difficulty: "easy",
      });
    } else {
      setQuestionData({
        topicId: "",
        questionText: "",
        options: ["", "", "", ""],
        correctAnswer: 0,
        difficulty: "easy",
      });
    }
  };

  return {
    activeTab,
    setActiveTab,
    courses,
    topics,
    alert,
    setAlert,
    courseData,
    setCourseData,
    topicData,
    setTopicData,
    questionData,
    setQuestionData,
    handleSubmit,
    isSubmitting,
  };
};
