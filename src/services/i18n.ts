import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../locales/en';
const fallbackLng = 'en';
i18next.use(LanguageDetector).init({
  fallbackLng,
  resources: {
    en: {
      translation: en
    }
  }
});
console.debug(`I18n: detected lng: ${i18next.language}, fallback: ${fallbackLng}.`);
export default i18next;
