// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "eng",
    resources: {
      eng: {
        translation: {
          welcome: "Welcome to EduDev",
          login: "Login",
          register: "Sign Up",
          create_account: "Create Account",
          name: "Name",
          email: "Email",
          password: "Password",
          send_otp: "Send OTP",
          verify_otp: "Verify OTP",
          otp_sent: "OTP sent to your email.",
          enter_otp: "Enter OTP",
          otp_expires_in: "OTP expires in",
          resend_otp: "Resend OTP",
          continue_google: "Continue with Google",
          already_have_account: "Already have an account?",
          dont_have_account: "Don't have an account?",
          submit: "Submit",
          forgotPassword: "Forgot Password?",
          resetPassword: "Reset Password",
          sendResetLink: "Send Reset Link",
          backToLogin: "Back to Login",
          dashboard: "Dashboard",
          profile: "Profile",
          courses: "Courses",
          about: "About",
          contact: "Contact",
          upload: "Upload",
          users: "Users",
          courses: "Courses",
          settings: "Settings",
          logout: "Logout",
          unlock_potential: "Unlock Your Potential",
          smart_lms_desc:
            "Dive into tailored courses, solve engaging questions, and learn at your own pace with our smart LMS.",
          start_learning: "Start Learning",
          platform_impact: "Platform Impact",
          learners_enrolled: "Learners Enrolled",
          courses_completed: "Courses Completed",
          user_rating: "User Rating",
          what_learners_say: "What Learners Say",
          ready_to_start: "Ready to start your journey?",
          transform_skills:
            "Join a course and begin transforming your skills today.",
          get_started: "Get Started",
          features: {
            personalized_learning: {
              title: "Personalized Learning",
              desc: "Adaptive difficulty & progression based on your performance.",
            },
            interactive_challenges: {
              title: "Interactive Challenges",
              desc: "Solve topic-wise problems and level up as you go!",
            },
            track_progress: {
              title: "Track Your Progress",
              desc: "Visualize course completion and boost your motivation.",
            },
            gamified_experience: {
              title: "Gamified Experience",
              desc: "Earn badges and achievements to keep your learning exciting.",
            },
            expert_mentors: {
              title: "Expert Mentors",
              desc: "Get guidance from industry professionals and educators.",
            },
            seamless_access: {
              title: "Seamless Access",
              desc: "Learn anytime, anywhere across all your devices.",
            },
          },
          error: "Error",
          oops: "Oops",
          NotLogin: "You are not logged in",
          contactUs: "Contact Us",
          reachOut:
            "We'd love to hear from you! Reach out to us through the details below or visit our office.",
          contactDetails: "Contact Details",
          company: "Company",
          phone: "Phone",
          email: "Email",
          timings: "Timings",
          locateUs: "Locate Us",
          address: "Eduvibe Technologies Pvt. Ltd.",
          contactPhone: "+91 98765 XXXXX",
          contactEmail: "contact@eduvibe.in",
          workTimings: "Mon - Fri, 9:00 AM - 6:00 PM",
          heading: "Welcome to Eduvibe",
          description: `Eduvibe is a dynamic and adaptive learning platform designed to
          empower students of all levels. Whether you're preparing for
          competitive exams, brushing up concepts, or diving into a new subject
          — Eduvibe offers a smooth, gamified, and personalized experience that
          evolves with you.`,
          marquee:
            "🚀 Empowering Students • 📈 Personalized Learning • 💡 Smart Analytics • 🎓 Future of Education • 🔥",
          whyChoose: "Why Choose Eduvibe?",
          aboutfeatures: {
            personalized: {
              title: "Personalized Learning",
              desc: "Eduvibe adapts as you grow.",
            },
            ui: {
              title: "Interactive UI",
              desc: "Sleek, clean, focus-first design.",
            },
            gamified: {
              title: "Gamified Progress",
              desc: "Levels, rewards & goals.",
            },
            admin: {
              title: "Admin Tools",
              desc: "Full control over content.",
            },
            responsive: {
              title: "Responsive",
              desc: "Learn anywhere, anytime.",
            },
          },
          vision: {
            title: "Our Vision",
            desc: ` We believe education should be personalized, fun, and easily
            accessible. Eduvibe bridges the gap between learning and real-time
            engagement using smart analytics, adaptive content, and gamified
            challenges — all tailored to help students stay motivated and
            progress confidently.`,
          },
          steps: {
            pick_course: {
              title: "Pick Your Course",
              desc: "Choose from a range of topics and skill levels.",
            },
            learn_way: {
              title: "Learn Your Way",
              desc: "Eduvibe adapts lessons based on your progress.",
            },
            earn_rewards: {
              title: "Earn Rewards",
              desc: "Achieve goals and unlock new levels.",
            },
            track_growth: {
              title: "Track Growth",
              desc: "Smart analytics show your learning path clearly.",
            },
          },
          imageAlt: "Learning Illustration",
          enroll: "Enroll to Course",
          availableCourses: "Available Courses",
          completed: "Completed",
          continueCourse: "Continue Course",
          welcomeBack: "Welcome Back",
          level: "Level",
          progressanalytics: "Progress Analytics",
          courseCompletion: "Course Completion",
          noProgress: "No course progress yet. Enroll to begin your journey!",
          difficulty: "Difficulty",
          streak: "Streak",
          days: "Days",
          topics: "Topics",
        },
      },
      hin: {
        translation: {
          welcome: "EduDev में आपका स्वागत है",
          login: "लॉगिन",
          register: "साइन अप",
          create_account: "खाता बनाएं",
          name: "नाम",
          email: "ईमेल",
          password: "पासवर्ड",
          send_otp: "OTP भेजें",
          verify_otp: "OTP सत्यापित करें",
          otp_sent: "OTP आपके ईमेल पर भेजा गया है।",
          enter_otp: "OTP दर्ज करें",
          otp_expires_in: "OTP की अवधि समाप्त होने में",
          resend_otp: "OTP पुनः भेजें",
          continue_google: "गूगल से जारी रखें",
          already_have_account: "क्या आपके पास पहले से खाता है?",
          dont_have_account: "क्या आपके पास खाता नहीं है?",

          forgotPassword: "पासवर्ड भूल गए?",
          resetPassword: "पासवर्ड रीसेट करें",
          sendResetLink: "रीसेट लिंक भेजें",
          backToLogin: "लॉगिन पर वापस जाएं",
          dashboard: "डैशबोर्ड",
          profile: "प्रोफाइल",
          courses: "पाठ्यक्रम",
          about: "के बारे में",
          contact: "संपर्क करें",
          upload: "अपलोड करें",
          users: "उपयोगकर्ता",

          settings: "सेटिंग्स",
          logout: "लॉगआउट",
          unlock_potential: "अपनी क्षमता को अनलॉक करें",
          smart_lms_desc:
            "व्यक्तिगत पाठ्यक्रमों में गोता लगाएँ, रोचक प्रश्न हल करें, और हमारे स्मार्ट LMS के साथ अपने समय पर सीखें।",
          start_learning: "सीखना शुरू करें",
          platform_impact: "प्लेटफ़ॉर्म प्रभाव",
          learners_enrolled: "नामांकित शिक्षार्थी",
          courses_completed: "पूरा किए गए पाठ्यक्रम",
          user_rating: "उपयोगकर्ता रेटिंग",
          what_learners_say: "शिक्षार्थी क्या कहते हैं",
          ready_to_start: "क्या आप अपनी यात्रा शुरू करने के लिए तैयार हैं?",
          transform_skills:
            "एक कोर्स में शामिल हों और आज ही अपने कौशल को बदलना शुरू करें।",
          get_started: "शुरू करें",
          features: {
            personalized_learning: {
              title: "व्यक्तिगत सीखने की प्रक्रिया",
              desc: "आपके प्रदर्शन के आधार पर अनुकूल कठिनाई और प्रगति।",
            },
            interactive_challenges: {
              title: "इंटरएक्टिव चुनौतियाँ",
              desc: "विषय-वार समस्याओं को हल करें और स्तर बढ़ाएं!",
            },
            track_progress: {
              title: "अपनी प्रगति को ट्रैक करें",
              desc: "कोर्स की प्रगति को देखें और प्रेरित रहें।",
            },
            gamified_experience: {
              title: "गेमिफाइड अनुभव",
              desc: "बैज और उपलब्धियाँ अर्जित करें और सीखने को मज़ेदार बनाएं।",
            },
            expert_mentors: {
              title: "विशेषज्ञ मार्गदर्शक",
              desc: "उद्योग विशेषज्ञों से मार्गदर्शन प्राप्त करें।",
            },
            seamless_access: {
              title: "सुलभ सीखने का अनुभव",
              desc: "किसी भी समय, किसी भी डिवाइस पर सीखें।",
            },
          },
          error: "त्रुटि",
          oops: "उफ्फ",
          NotLogin: "आप लॉग इन नहीं हैं",
          contactUs: "संपर्क करें",
          reachOut:
            "हम आपसे सुनने के लिए उत्साहित हैं! नीचे दिए गए विवरण के माध्यम से हमसे संपर्क करें या हमारे कार्यालय में आएं।",
          contactDetails: "संपर्क विवरण",
          company: "कंपनी",
          phone: "फोन",
          email: "ईमेल",
          timings: "समय",
          locateUs: "हमसे संपर्क करें",
          address: "एडूवाइब टेक्नोलॉजीज प्राइवेट लिमिटेड",
          contactPhone: "+91 98765 XXXXX",
          contactEmail: "contact@eduvibe.in",
          workTimings: "सोम - शुक्र, 9:00 AM - 6:00 PM",
          heading: "एडुवाइब में आपका स्वागत है",
          description:
            "एडुवाइब एक गतिशील और अनुकूलनशील शिक्षण मंच है जो सभी स्तरों के छात्रों को सशक्त बनाने के लिए डिज़ाइन किया गया है। चाहे आप प्रतियोगी परीक्षाओं की तैयारी कर रहे हों, अवधारणाओं को सुधार रहे हों, या किसी नए विषय में गोता लगाना चाहते हों - एडुवाइब एक सहज, गेमिफाइड और व्यक्तिगत अनुभव प्रदान करता है जो आपके साथ विकसित होता है।",
          marquee:
            "🚀 छात्रों को सशक्त बनाना • 📈 व्यक्तिगत लर्निंग • 💡 स्मार्ट एनालिटिक्स • 🎓 शिक्षा का भविष्य • 🔥",
          whyChoose: "एडुवाइब क्यों चुनें?",
          aboutfeatures: {
            personalized: {
              title: "व्यक्तिगत लर्निंग",
              desc: "एडुवाइब आपके विकास के अनुसार ढलता है।",
            },
            ui: {
              title: "इंटरएक्टिव यूआई",
              desc: "साफ़, सुंदर और केंद्रित डिज़ाइन।",
            },
            gamified: {
              title: "गेमिफाइड प्रगति",
              desc: "स्तर, इनाम और लक्ष्य।",
            },
            admin: {
              title: "प्रशासनिक टूल्स",
              desc: "संपूर्ण सामग्री नियंत्रण।",
            },
            responsive: {
              title: "संगत डिज़ाइन",
              desc: "कहीं भी, कभी भी सीखें।",
            },
          },
          vision: {
            title: "हमारा विज़न",
            desc: `हम मानते हैं कि शिक्षा को व्यक्तिगत, मजेदार और आसानी से सुलभ होना चाहिए। एडुवाइब स्मार्ट एनालिटिक्स, अनुकूलनशील सामग्री और गेमिफाइड चुनौतियों का उपयोग करके सीखने और वास्तविक समय की भागीदारी के बीच की खाई को पाटता है - सभी छात्रों को प्रेरित रखने और आत्मविश्वास से प्रगति करने में मदद करने के लिए अनुकूलित।`,
          },
          steps: {
            pick_course: {
              title: "अपना कोर्स चुनें",
              desc: "विषयों और कौशल स्तरों की एक श्रृंखला से चुनें।",
            },
            learn_way: {
              title: "अपना तरीका सीखें",
              desc: "Eduvibe आपकी प्रगति के अनुसार पाठों को अनुकूलित करता है।",
            },
            earn_rewards: {
              title: "इनाम प्राप्त करें",
              desc: "लक्ष्य हासिल करें और नए स्तर अनलॉक करें।",
            },
            track_growth: {
              title: "विकास को ट्रैक करें",
              desc: "स्मार्ट विश्लेषण आपके सीखने के रास्ते को स्पष्ट रूप से दिखाते हैं।",
            },
          },

          imageAlt: "शिक्षा चित्रण",
          enroll: "कोर्स में नामांकन करें",
          availableCourses: "उपलब्ध पाठ्यक्रम",
          completed: "पूर्ण",
          continueCourse: "कोर्स जारी रखें",
          welcomeBack: "आपका स्वागत है",
          level: "स्तर",
          progressanalytics: "प्रगति विश्लेषण",
          courseCompletion: "कोर्स पूरा करना",
          noProgress:
            "अभी तक कोई पाठ्यक्रम प्रगति नहीं है। यात्रा शुरू करने के लिए नामांकन करें!",
          difficulty: "कठिनाई",
          streak: "स्ट्रिक",
          days: "दिन",
          topics: "विषय",
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue sur EduDev",
          login: "Se connecter",
          register: "S'inscrire",
          create_account: "Créer un compte",
          name: "Nom",
          email: "Email",
          password: "Mot de passe",
          send_otp: "Envoyer OTP",
          verify_otp: "Vérifier OTP",
          otp_sent: "OTP envoyé à votre email.",
          enter_otp: "Entrer OTP",
          otp_expires_in: "L'OTP expire dans",
          resend_otp: "Renvoyer OTP",
          continue_google: "Continuer avec Google",
          already_have_account: "Vous avez déjà un compte ?",
          dont_have_account: "Vous n'avez pas de compte ?",
          forgotPassword: "Mot de passe oublié?",
          resetPassword: "Réinitialiser le mot de passe",
          sendResetLink: "Envoyer le lien de réinitialisation",
          backToLogin: "Retour à la connexion",
          dashboard: "Tableau de bord",
          profile: "Profil",
          courses: "Cours",
          about: "À propos",
          contact: "Contact",
          upload: "Télécharger",
          users: "Utilisateurs",

          settings: "Paramètres",
          logout: "Se déconnecter",
          unlock_potential: "Libérez votre potentiel",
          smart_lms_desc:
            "Plongez dans des cours personnalisés, résolvez des questions engageantes et apprenez à votre rythme avec notre LMS intelligent.",
          start_learning: "Commencer à apprendre",
          platform_impact: "Impact de la Plateforme",
          learners_enrolled: "Apprenants inscrits",
          courses_completed: "Cours terminés",
          user_rating: "Évaluation des utilisateurs",
          what_learners_say: "Ce que disent les apprenants",
          ready_to_start: "Prêt à commencer votre voyage ?",
          transform_skills:
            "Rejoignez un cours et commencez à transformer vos compétences dès aujourd'hui.",
          get_started: "Commencer",
          features: {
            personalized_learning: {
              title: "Apprentissage personnalisé",
              desc: "Difficulté adaptative et progression basée sur vos performances.",
            },
            interactive_challenges: {
              title: "Défis interactifs",
              desc: "Résolvez des problèmes par sujet et progressez !",
            },
            track_progress: {
              title: "Suivez vos progrès",
              desc: "Visualisez l'avancement du cours et restez motivé.",
            },
            gamified_experience: {
              title: "Expérience ludique",
              desc: "Gagnez des badges et des récompenses pour rendre l'apprentissage amusant.",
            },
            expert_mentors: {
              title: "Mentors experts",
              desc: "Recevez des conseils de professionnels du secteur.",
            },
            seamless_access: {
              title: "Accès fluide",
              desc: "Apprenez à tout moment, sur tous vos appareils.",
            },
          },
          error: "Erreur",
          oops: "Oups",
          NotLogin: "Vous n'êtes pas connecté",
          contactUs: "Contactez-nous",
          reachOut:
            "Nous aimerions avoir de vos nouvelles ! Contactez-nous par les détails ci-dessous ou visitez notre bureau.",
          contactDetails: "Détails de contact",
          company: "Entreprise",
          phone: "Téléphone",
          email: "E-mail",
          timings: "Horaires",
          locateUs: "Localisez-nous",
          address: "Eduvibe Technologies Pvt. Ltd.",
          contactPhone: "+91 98765 XXXXX",
          contactEmail: "contact@eduvibe.in",
          workTimings: "Lun - Ven, 9:00 AM - 6:00 PM",
          heading: "Bienvenue sur Eduvibe",
          description:
            "Eduvibe est une plateforme d'apprentissage dynamique et adaptative conçue pour autonomiser les étudiants de tous niveaux. Que vous prépariez des examens compétitifs, que vous révisiez des concepts ou que vous plongiez dans un nouveau sujet - Eduvibe offre une expérience fluide, ludique et personnalisée qui évolue avec vous.",
          marquee:
            "🚀 Autonomiser les étudiants • 📈 Apprentissage personnalisé • 💡 Analytique intelligente • 🎓 Avenir de l'éducation • 🔥",
          whyChoose: "Pourquoi choisir Eduvibe ?",
          aboutfeatures: {
            personalized: {
              title: "Apprentissage personnalisé",
              desc: "Eduvibe s'adapte à votre progression.",
            },
            ui: {
              title: "Interface interactive",
              desc: "Design épuré, moderne et intuitif.",
            },
            gamified: {
              title: "Progression ludique",
              desc: "Niveaux, récompenses et objectifs.",
            },
            admin: {
              title: "Outils administrateur",
              desc: "Contrôle total sur le contenu.",
            },
            responsive: {
              title: "Responsive",
              desc: "Apprenez partout, à tout moment.",
            },
          },
          vision: {
            title: "Notre vision",
            desc: `Nous croyons que l'éducation doit être personnalisée, amusante et facilement accessible. Eduvibe comble le fossé entre l'apprentissage et l'engagement en temps réel grâce à des analyses intelligentes, un contenu adaptatif et des défis ludiques - le tout conçu pour aider les étudiants à rester motivés et à progresser avec confiance.`,
          },
          steps: {
            pick_course: {
              title: "Choisissez votre cours",
              desc: "Choisissez parmi une gamme de sujets et de niveaux.",
            },
            learn_way: {
              title: "Apprenez à votre rythme",
              desc: "Eduvibe adapte les leçons en fonction de vos progrès.",
            },
            earn_rewards: {
              title: "Gagnez des récompenses",
              desc: "Atteignez des objectifs et débloquez de nouveaux niveaux.",
            },
            track_growth: {
              title: "Suivez vos progrès",
              desc: "Des analyses intelligentes montrent clairement votre parcours d’apprentissage.",
            },
          },
          imageAlt: "Illustration éducative",
          enroll: "S'inscrire au cours",
          availableCourses: "Cours disponibles",
          completed: "Terminé",
          continueCourse: "Continuer le cours",
          welcomeBack: "Bon retour",
          level: "Niveau",
          progressanalytics: "Analyse de la progression",
          courseCompletion: "Achèvement du cours",
          noProgress:
            "Aucun progrès de cours pour le moment. Inscrivez-vous pour commencer votre parcours !",
          difficulty: "Difficulté",
          streak: "Série",
          days: "Jours",
          topics: "Sujets",
        },
      },
    },
  });

export default i18n;
