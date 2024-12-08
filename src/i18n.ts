import { createI18n } from 'vue-i18n';

// Définir les messages de traduction
const messages = {
  en: {
    welcome: "Welcome",
    language: "Language",
  },
  fr: {
    welcome: "Bienvenue",
    language: "Langue",
  },
};

const i18n = createI18n({
  locale: 'fr', // Langue par défaut
  fallbackLocale: 'en', // Langue de secours
  messages,
});

export default i18n;
