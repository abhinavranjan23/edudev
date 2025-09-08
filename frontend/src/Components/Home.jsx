import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.webp";
import { useFeatures } from "../hooks/useFeatures";
import { api } from "../utils/api";
import { useEffect, useMemo, useState } from "react";
import HeroShimmer from "./HeroShimmer";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const { t } = useTranslation();
  const features = useFeatures();
  useEffect(() => {
    const fetchFeedback = async () => {
      setLoading(true);
      try {
        const res = await api.get("feedback");
        setFeedbacks(res.data);
      } catch (err) {
        console.error("Failed to fetch feedback:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  const selectedTestimonials = useMemo(() => {
    const filtered = feedbacks.filter((f) => f.rating > 3);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [feedbacks]);

  return loading ? (
    <HeroShimmer />
  ) : (
    <div className='min-h-screen bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white transition-colors'>
      {/* Hero Section */}
      <section className='py-20 px-5 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='max-w-xl'
        >
          <h1 className='text-5xl font-bold leading-tight mb-4'>
            {t("unlock_potential")}{" "}
          </h1>
          <p className='text-lg mb-6'>{t("smart_lms_desc")}</p>
          <Link
            to='/courses'
            className='px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition'
          >
            {t("start_learning")}
          </Link>
        </motion.div>

        <motion.img
          src={HeroImage}
          alt='LMS Illustration'
          className='w-full max-w-lg'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          loading='eager'
        />
      </section>

      {/* Feature Cards */}
      <section
        className='py-16 px-5 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
gap-8'
      >
        {features.map((feature, i) => (
          <Tilt
            key={i}
            glareEnable={true}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col h-full'
            >
              <div className='w-full h-40 mb-4 overflow-hidden rounded-md'>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              </div>
              <h2 className='text-xl font-semibold mb-2'>{feature.title}</h2>
              <p className='flex-grow'>{feature.desc}</p>
            </motion.div>
          </Tilt>
        ))}
      </section>

      <motion.section
        className='px-5 lg:px-20 py-14 bg-gray-100 dark:bg-gray-900 text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-3xl font-bold mb-10'>{t("platform_impact")}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-xl'>
          {/* Learners Enroled */}
          <div ref={ref1}>
            <span className='text-blue-600 font-bold text-4xl'>
              {inView1 && <CountUp end={200} duration={2} suffix='K+' />}
            </span>
            <p>{t("learners_enrolled")}</p>
          </div>

          {/* Courses Completed */}
          <div ref={ref2}>
            <span className='text-green-600 font-bold text-4xl'>
              {inView2 && <CountUp end={500} duration={2} suffix='+' />}
            </span>
            <p>{t("courses_completed")}</p>
          </div>

          {/* User Rating */}
          <div ref={ref3}>
            <span className='text-purple-600 font-bold text-4xl'>
              {inView3 && (
                <CountUp end={4.9} duration={2} decimals={1} suffix='/5' />
              )}
            </span>
            <p>{t("user_rating")}</p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className='py-16 px-5 lg:px-20 bg-white dark:bg-gray-800'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-3xl font-bold mb-10 text-center'>
          {t("what_learners_say")}
        </h2>
        <div className='grid md:grid-cols-2 gap-10'>
          {selectedTestimonials.map((t, i) => (
            <Tilt key={i} glareEnable tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className='bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg'>
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className='font-semibold text-lg'>{t.name}</h4>
                    <p className='text-sm text-gray-500 dark:text-gray-300'>
                      {t.email}
                    </p>
                  </div>
                </div>
                <p className='italic mb-2'>"{t.message}"</p>
                <div className='flex gap-1'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>
                      {index < Math.floor(t.rating) ? "⭐" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className='text-center py-16 px-6 bg-blue-100 dark:bg-blue-900'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-3xl font-bold mb-4'>{t("ready_to_start")}</h2>
        <p className='mb-6 text-lg'>{t("transform_skills")} </p>
        <Link
          to='/courses'
          className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition'
        >
          {t("get_started")}{" "}
        </Link>
      </motion.section>
    </div>
  );
};

export default HomePage;
