import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import mr from './locales/mr.json';

const resources = {
  en: { translation: en },
  mr: { translation: mr },
};

i18n
  .use(LanguageDetector) // auto-detect browser language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'mr', // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
