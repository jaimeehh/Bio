import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Courses() {
  const { t } = useTranslation();

  const courses = [
    {
      key: 'agile',
      icon: GraduationCap,
      summary: t('courses.list.agile.summary'),
      dateRange: '06/2024 - 07/2024',
      institution: 'Santander Academy',
    },
    {
      key: 'ai',
      icon: GraduationCap,
      summary: t('courses.list.ai.summary'),
      dateRange: '07/2024 - 08/2024',
      institution: 'Santander Academy',
    },
    {
      key: 'powerbi',
      icon: GraduationCap,
      summary: t('courses.list.powerbi.summary'),
      dateRange: '08/2024 - 09/2024',
      institution: 'Santander Academy',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('courses.title')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {courses.map((course) => (
              <div
                key={course.key}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Encabezado: Icono + Título a la izquierda y Fecha a la derecha */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <course.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      {t(`courses.list.${course.key}.title`)}
                    </h3>
                  </div>
                  <div className="mt-2 sm:mt-0 text-sm text-gray-500 dark:text-gray-400">
                    {course.dateRange}
                  </div>
                </div>

                {/* Institución */}
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {course.institution}
                </div>

                {/* Descripción y Resumen */}
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {t(`courses.list.${course.key}.description`)}
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 italic">
                  {course.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
