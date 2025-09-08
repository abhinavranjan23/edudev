import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = i18n.language;
  const selectedLang = {
    eng: { label: "English", emoji: "🇬🇧" },
    hin: { label: "हिन्दी", emoji: "🇮🇳" },
    fr: { label: "Français", emoji: "🇫🇷" },
  }[currentLang] || { label: "Language", emoji: "🌐" };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: "eng", label: "English", emoji: "🇬🇧" },
    { code: "hin", label: "हिन्दी", emoji: "🇮🇳" },
    { code: "fr", label: "Français", emoji: "🇫🇷" },
  ];

  return (
    <div className='relative inline-block text-left'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-blue-100 transition duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-600'
      >
        <span>{selectedLang.emoji}</span>
        {selectedLang.label}
        <FaChevronDown className='text-xs' />
      </button>

      {isOpen && (
        <div className='absolute right-0 z-10 mt-2 w-40 origin-top-right bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg'>
          <ul className='py-2'>
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-blue-100 dark:hover:bg-gray-700 ${
                    currentLang === lang.code
                      ? "font-bold text-blue-600 dark:text-blue-400"
                      : ""
                  }`}
                >
                  <span>{lang.emoji}</span>
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
