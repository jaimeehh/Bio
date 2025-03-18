import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const sections = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/experience', label: t('nav.experience') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/courses', label: t('nav.courses') },
    { path: '/community', label: t('nav.community') }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {sections.map(section => (
              <Link
                key={section.path}
                to={section.path}
                className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors
                  ${location.pathname === section.path ? 'text-blue-600 dark:text-blue-400' : ''}`}
              >
                {section.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            <Globe className="w-4 h-4" />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            {sections.map(section => (
              <Link
                key={section.path}
                to={section.path}
                className="block w-full text-left px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}