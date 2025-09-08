import { useTranslation } from "react-i18next";

export const useFeatures = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("features.personalized_learning.title"),
      desc: t("features.personalized_learning.desc"),
      image:
        "https://www.21kschool.com/in/wp-content/uploads/sites/4/2022/09/5-Benefits-of-Personalized-Learning.png",
    },
    {
      title: t("features.interactive_challenges.title"),
      desc: t("features.interactive_challenges.desc"),
      image:
        "https://www.viewsonic.com/library/wp-content/uploads/2022/10/LB0332-7-Games-to-Play-in-the-Classroom.jpg",
    },
    {
      title: t("features.track_progress.title"),
      desc: t("features.track_progress.desc"),
      image:
        "https://static.vecteezy.com/system/resources/previews/004/669/650/non_2x/business-progress-or-career-path-step-to-reach-target-or-business-goal-success-step-or-motivation-for-improvement-concept-confidence-businesswoman-carrying-arrow-walk-up-stair-to-reach-target-vector.jpg",
    },
    {
      title: t("features.gamified_experience.title"),
      desc: t("features.gamified_experience.desc"),
      image:
        "https://edscoop.com/wp-content/uploads/sites/4/2020/01/gamified-learning-getty.jpg",
    },
    {
      title: t("features.expert_mentors.title"),
      desc: t("features.expert_mentors.desc"),
      image:
        "https://www.imec.org/wp-content/uploads/2024/12/mentorship-programs-cover.png",
    },
    {
      title: t("features.seamless_access.title"),
      desc: t("features.seamless_access.desc"),
      image:
        "https://www.hubraum.com/_Resources/Persistent/c/a/e/f/caef8ad4372514a7235ef68705adb6256738f46a/07-scaled2-2560x1441.jpg",
    },
  ];
};
