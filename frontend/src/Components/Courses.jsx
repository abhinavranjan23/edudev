import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import loginPopUp from "./loginNotification";
import ProgressBar from "./ProgressBar";
import { api } from "../utils/api";
import CoursesShimmer from "./CourseShimmer";
import { useTranslation } from "react-i18next";
const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user?.user?._id);
  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const [courseProgress, setCourseProgress] = useState({});
  const { t } = useTranslation();

  const getProgressPercent = (courseId) => {
    const progress = courseProgress[courseId];
    if (!progress) return 0;
    const { completedTopics, totalTopics } = progress;
    return Math.round((completedTopics / totalTopics) * 100);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const coursesRes = await api.get("course");
        setCourses(coursesRes.data);

        const progressData = {};
        const enrollmentChecks = coursesRes.data.map(async (course) => {
          try {
            const res = await api.get(`progress/current/${course._id}`);
            if (res.data) {
              progressData[course._id] = res.data;
              return course._id;
            }
          } catch (err) {
            if (err.response?.status !== 404) {
              console.error(`Error for ${course.title}:`, err);
            }
            return null;
          }
        });

        const enrolled = (await Promise.all(enrollmentChecks)).filter(Boolean);
        setEnrolledCourseIds(enrolled);
        setCourseProgress(progressData);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        setError("Failed to load courses. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleEnroll = async (courseId) => {
    try {
      if (!isLoggedIn) {
        console.log("User not logged in, redirecting to login");
        loginPopUp({ navigate, path: `/courses`, t });
        return;
      }
      await api.post("progress/init", { courseId });
      setEnrolledCourseIds([...enrolledCourseIds, courseId]);
      navigate(`/course/${courseId}`);
    } catch (err) {
      console.error("Failed to enroll:", err);
      setError("Failed to enroll in course. Please try again.");
    }
  };

  if (loading) {
    return <CoursesShimmer />;
  }

  if (error) {
    return (
      <div className='p-6 text-center text-red-600'>
        {error}
        <button
          onClick={() => window.location.reload()}
          className='ml-4 bg-blue-500 text-white px-4 py-2 rounded'
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        {t("availableCourses")}
      </h1>
      <div className='grid md:grid-cols-3 gap-6'>
        {courses.map((course) => {
          const progress = getProgressPercent(course._id);
          const isCompleted = progress === 100;
          const isEnrolled = enrolledCourseIds.includes(course._id);

          return (
            <div
              key={course._id}
              className='bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden'
            >
              <img
                src={course.imageUrl || "/default-course.jpg"}
                alt={course.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h2 className='text-xl font-semibold'>{course.title}</h2>
                <p className='text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3'>
                  {course.description}
                </p>

                {/* Progress Bar */}
                {isEnrolled && (
                  <div className='mt-4'>
                    <ProgressBar
                      label='Progress'
                      completed={
                        courseProgress[course._id]?.completedTopicsCount || 0
                      }
                      total={courseProgress[course._id]?.totalTopics || 1}
                      color='bg-indigo-500'
                    />
                  </div>
                )}

                {isEnrolled ? (
                  isCompleted ? (
                    <button
                      disabled
                      className='inline-block mt-4 bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed'
                    >
                      {t("completed")}
                    </button>
                  ) : (
                    <Link
                      to={`/course/${course._id}`}
                      className='inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
                    >
                      {t("continueCourse")}
                    </Link>
                  )
                ) : (
                  <button
                    onClick={() => handleEnroll(course._id)}
                    className='inline-block mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700'
                  >
                    {t("enroll")}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesPage;
