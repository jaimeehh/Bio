import React from 'react';
import { motion } from 'framer-motion';
import { Users, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Community() {
  const { t } = useTranslation();

  return (
    <section
      id="community"
      className="py-20 bg-gradient-to-br from-lime-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-teal-600 dark:from-lime-400 dark:to-teal-400"
        >
          {t('community.title')} 🤝
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Left Column: Community Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-lime-100 dark:bg-lime-900 rounded-lg">
                <Users className="w-6 h-6 text-lime-600 dark:text-lime-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t('community.gdg.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {t('community.gdg.role')}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('community.gdg.description')}
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg mt-auto">
              <img
                src="https://images.pexels.com/photos/29257597/pexels-photo-29257597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Community"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Right Column: Placeholder for Future Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
              <Plus className="w-8 h-8 text-gray-600 dark:text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-300">
              {t('community.placeholder.title', 'Coming Soon')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {t('community.placeholder.description', 'Stay tuned for more community initiatives!')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
