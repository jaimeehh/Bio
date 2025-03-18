import { useState, useEffect } from 'react';
import i18next from 'i18next';

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  useEffect(() => {
    i18next.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => setLanguage(lang => lang === 'en' ? 'es' : 'en');

  return { language, toggleLanguage };
}