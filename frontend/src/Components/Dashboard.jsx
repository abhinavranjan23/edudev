import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { api } from "../utils/api";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Confetti from "react-confetti";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [level, setLevel] = useState(0);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const prevLevel = useRef(0);
  const [showFullNames, setShowFullNames] = useState(false);
  const { t } = useTranslation();
  const { name } = useSelector((state) => state.user?.user || {});

  useEffect(() => {
    const updateWindowSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    api.get("user/dashboard").then((res) => {
      const data = res.data;
      setDashboardData(data.dashboard || []);
      setXp(data.xp || 0);
      setStreak(data.streak || 0);
      setLevel(data.level || 0);

      if (data.level > prevLevel.current) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      }
      prevLevel.current = data.level;
    });

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  const percentToNextLevel = xp % 100;

  const courseAnalytics = dashboardData.map((course) => ({
    name: course.title,
    Progress: Math.round(course.progressPercent),
  }));

  return (
    <div className='p-6 md:p-10 bg-gradient-to-br from-[#1f2937] to-[#111827] min-h-screen text-white'>
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      {/* Header Section */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-10'>
        <motion.div
          className='flex items-center gap-4 bg-gray-800 p-5 rounded-2xl shadow-xl w-full md:w-fit'
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className='w-20 h-20'>
            <CircularProgressbar
              value={percentToNextLevel}
              text={`Lv ${level}`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#4ade80",
                trailColor: "#374151",
                textSize: "22px",
              })}
            />
          </div>
          <div>
            <h1 className='text-2xl font-bold'>
              {t("welcomeBack")}, {name?.split(" ")[0] || "Learner"} 👋
            </h1>
            <p className='text-sm text-gray-300'>
              XP: {xp} • {t("streak")}: 🔥 {streak} {t("days")}
            </p>
          </div>
        </motion.div>

        <motion.div
          className='bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-xl shadow-lg font-semibold text-lg animate-pulse'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          🎖️{" "}
          <span className='text-white'>
            {t("level")} {level}
          </span>
        </motion.div>
      </div>

      {/* Course Progress Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
        {dashboardData.length > 0 ? (
          dashboardData.map((course, idx) => (
            <motion.div
              key={course.courseId}
              className='bg-gray-800 p-5 rounded-2xl shadow-2xl hover:shadow-indigo-500/20 transition-transform hover:scale-[1.02]'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className='w-full h-44 object-cover rounded-xl mb-4 border border-gray-700'
              />
              <h2 className='text-xl font-bold mb-1'>{course.title}</h2>
              <p className='text-sm text-gray-400 mb-2'>
                {t("difficulty")}:{" "}
                <span className='capitalize text-indigo-400'>
                  {course.difficulty}
                </span>
              </p>

              <div className='w-full bg-gray-700 h-3 rounded-full overflow-hidden mb-3'>
                <motion.div
                  className='bg-green-400 h-full'
                  style={{ width: `${course.progressPercent}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progressPercent}%` }}
                  transition={{ duration: 1.2 }}
                />
              </div>

              <p className='text-sm text-gray-300'>
                {course.completedCount}/{course.totalTopics} Topics •{" "}
                <span className='capitalize text-green-300'>
                  {course.status}
                </span>
              </p>
            </motion.div>
          ))
        ) : (
          <motion.p
            className='text-center text-gray-300 col-span-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {t("noProgress")}
          </motion.p>
        )}
      </div>

      <div className='bg-gray-900 p-6 rounded-xl shadow-xl'>
        <h2 className='text-2xl font-bold mb-6'>📊 {t("progressanalytics")}</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='w-full h-80 bg-gray-800 p-4 rounded-xl'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-semibold'>
                {t("courseCompletion")} %
              </h3>
              <button
                onClick={() => setShowFullNames(!showFullNames)}
                className='text-blue-400 text-sm hover:underline hidden sm:block'
              >
                {showFullNames ? "Hide Course Names" : "Show Course Names"}
              </button>
            </div>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                data={courseAnalytics}
                margin={{ top: 10, right: 10, left: 10, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                <XAxis
                  dataKey='name'
                  stroke='#fff'
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) =>
                    showFullNames
                      ? value
                      : value.length > 8
                      ? `${value.substring(0, 6)}...`
                      : value
                  }
                />
                <YAxis stroke='#fff' />
                <Tooltip />
                <Bar dataKey='Progress'>
                  {courseAnalytics.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        [
                          "#4ade80",
                          "#60a5fa",
                          "#f472b6",
                          "#f87171",
                          "#a78bfa",
                          "#34d399",
                        ][index % 3]
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
