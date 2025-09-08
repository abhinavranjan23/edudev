export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.edudev.taniyakamboj.info/api/"
    : "http://localhost:3000/api/";

export const DARK_MODE =
  "data:image/png;base64,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";
export const LIGHT_MODE =
  "https://img.icons8.com/pulsar-line/48/bright-moon.png";
export const features = [
  {
    title: "Personalized Learning",
    desc: "Adaptive difficulty & progression based on your performance.",
    image:
      "https://www.21kschool.com/in/wp-content/uploads/sites/4/2022/09/5-Benefits-of-Personalized-Learning.png",
  },
  {
    title: "Interactive Challenges",
    desc: "Solve topic-wise problems and level up as you go!",
    image:
      "https://www.viewsonic.com/library/wp-content/uploads/2022/10/LB0332-7-Games-to-Play-in-the-Classroom.jpg",
  },
  {
    title: "Track Your Progress",
    desc: "Visualize course completion and boost your motivation.",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/669/650/non_2x/business-progress-or-career-path-step-to-reach-target-or-business-goal-success-step-or-motivation-for-improvement-concept-confidence-businesswoman-carrying-arrow-walk-up-stair-to-reach-target-vector.jpg",
  },
  {
    title: "Gamified Experience",
    desc: "Earn badges and achievements to keep your learning exciting.",
    image:
      "https://edscoop.com/wp-content/uploads/sites/4/2020/01/gamified-learning-getty.jpg",
  },
  {
    title: "Expert Mentors",
    desc: "Get guidance from industry professionals and educators.",
    image:
      "https://www.imec.org/wp-content/uploads/2024/12/mentorship-programs-cover.png",
  },
  {
    title: "Seamless Access",
    desc: "Learn anytime, anywhere across all your devices.",
    image:
      "https://www.hubraum.com/_Resources/Persistent/c/a/e/f/caef8ad4372514a7235ef68705adb6256738f46a/07-scaled2-2560x1441.jpg",
  },
];
