import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import AboutLogo from "../assets/about-icon.webp";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className='min-h-screen w-full py-14 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-white via-indigo-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 overflow-x-hidden'>
      <div className='max-w-6xl mx-auto'>
        {/* Heading */}
        <motion.h2
          className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t("heading")}
        </motion.h2>

        <motion.p
          className='text-center text-gray-700 dark:text-gray-200 text-base sm:text-lg max-w-3xl mx-auto mb-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t("description")}
          <br />
        </motion.p>

        {/* Marquee */}
        <motion.div
          className='w-64 md:w-80 lg:w-full mb-10 overflow-hidden mx-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div className='whitespace-nowrap animate-marquee text-blue-700 dark:text-cyan-300 text-sm sm:text-base font-semibold'>
            {t("marquee")}
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className='flex flex-col lg:flex-row gap-10 items-center justify-center'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Tilt Card */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            transitionSpeed={1000}
            className='w-full max-w-md'
          >
            <motion.div
              className='bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20'
              whileHover={{ scale: 1.03 }}
            >
              <h3 className='text-lg sm:text-xl font-semibold text-indigo-700 mb-4'>
                {t("whyChoose")}
              </h3>
              <ul className='list-disc list-inside text-gray-800 text-sm sm:text-base space-y-3'>
                <li>
                  <strong>{t("aboutfeatures.personalized.title")}</strong>{" "}
                  {t("aboutfeatures.personalized.desc")}
                </li>
                <li>
                  <strong>{t("aboutfeatures.ui.title")}</strong>{" "}
                  {t("aboutfeatures.ui.desc")}
                </li>
                <li>
                  <strong>{t("aboutfeatures.gamified.title")}</strong>{" "}
                  {t("aboutfeatures.gamified.desc")}
                </li>
                <li>
                  <strong>{t("aboutfeatures.admin.title")}</strong>{" "}
                  {t("aboutfeatures.admin.desc")}
                </li>
                <li>
                  <strong>{t("aboutfeatures.responsive.title")}</strong>{" "}
                  {t("aboutfeatures.responsive.desc")}
                </li>
              </ul>
            </motion.div>
          </Tilt>

          {/* Right Image */}
          <motion.div
            className='w-full max-w-xs  justify-center hidden md:flex'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={AboutLogo}
              alt={t("imageAlt")}
              className='w-full h-auto object-contain'
            />
          </motion.div>
        </motion.div>
        {/* Platform Introduction */}

        {/* Vision Section */}
        <motion.div
          className='bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 mb-10 max-w-3xl mx-auto mt-5 md:mt-0.5'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className='text-lg sm:text-xl font-semibold text-indigo-700 mb-4 text-center'>
            {t("vision.title")}
          </h3>
          <p className='text-gray-800 text-sm sm:text-base text-center'>
            {t("vision.desc")}
          </p>
        </motion.div>

        {/* How it Works with Tilt */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              icon: "📚",
              title: t("steps.pick_course.title"),
              desc: t("steps.pick_course.desc"),
            },
            {
              icon: "🧠",
              title: t("steps.learn_way.title"),
              desc: t("steps.learn_way.desc"),
            },
            {
              icon: "🏆",
              title: t("steps.earn_rewards.title"),
              desc: t("steps.earn_rewards.desc"),
            },
            {
              icon: "📊",
              title: t("steps.track_growth.title"),
              desc: t("steps.track_growth.desc"),
            },
          ].map((step, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.03}
              transitionSpeed={1000}
              className='w-full'
            >
              <div className='bg-white/60 p-4 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow duration-300'>
                <div className='text-3xl mb-2'>{step.icon}</div>
                <h4 className='font-semibold text-indigo-700 mb-1'>
                  {step.title}
                </h4>
                <p className='text-gray-800  text-sm'>{step.desc}</p>
              </div>
            </Tilt>
          ))}
        </motion.div>
      </div>

      {/* Keyframes for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
