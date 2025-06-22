import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="border border-gray-300 rounded-full px-3 py-1 text-sm"
    >
      {i18n.language === 'en' ? 'मराठी' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
