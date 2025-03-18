import React from 'react';
import { Activity, Brain, Database, FlaskRound as Flask } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function About() {
  const { t } = useTranslation();

  const skills = [
    {
      icon: Brain,
      title: t('about.skills.ai'),
      desc: t('about.skills.aiDesc'),
    },
    {
      icon: Activity,
      title: t('about.skills.medical'),
      desc: t('about.skills.medicalDesc'),
    },
    {
      icon: Database,
      title: t('about.skills.data'),
      desc: t('about.skills.dataDesc'),
    },
    {
      icon: Flask,
      title: t('about.skills.research'),
      desc: t('about.skills.researchDesc'),
    },
  ];

  const educationList = t('about.education.list', { returnObjects: true });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t('about.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-12">
          {t('about.description')}
        </p>

        <h3 className="text-2xl font-semibold text-center mb-6">
          {t('about.education.title')}
        </h3>
        <div className="space-y-6 mb-16">
          {educationList.map((eduItem, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-lg">{eduItem.degree}</h4>
                  {eduItem.institution && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {eduItem.institution}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {eduItem.dateRange}
                    {eduItem.status && <span className="ml-2">- {eduItem.status}</span>}
                  </p>
                </div>
                {eduItem.detailsLink && (
                  <Link
                    to={eduItem.detailsLink}
                    className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    {t('about.education.viewDetailsButton')}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-center mb-6">
          {t('about.skills.title')}
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 w-full sm:w-64 shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-lg">{item.title}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}