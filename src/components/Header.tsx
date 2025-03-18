import React from 'react';
import { Brain, Mail, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      <div className="relative z-10 text-center p-8">
        <div className="mb-6 inline-block p-4 rounded-full bg-blue-500/10 dark:bg-blue-400/10">
          <Brain className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          {t('header.title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {t('header.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="mailto:j.hernandezher.2020@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{t('header.email')}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jaime-hernández-hernández-aa1703313"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>{t('header.linkedin')}</span>
          </a>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {t('header.emailAddress')}
        </div>
      </div>
    </header>
  );
}