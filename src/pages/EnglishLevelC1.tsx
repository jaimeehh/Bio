import React from 'react';
import { Award, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function EnglishLevelC1() {
  const { t } = useTranslation();
  const details = t('education.english.details', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-3xl mx-auto relative rounded-2xl p-8 shadow-lg
                   bg-gradient-to-br from-yellow-400 to-yellow-600"
      >
        {/* Back Button at the top-left */}
        <div className="mb-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20
                       text-white rounded-full shadow hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('education.biomedicine.backButton')}
          </Link>
        </div>

       

        {/* Main Title & Icon */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/20 rounded-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">
            {t('education.english.title')}
          </h1>
        </div>

        {/* Introduction */}
        <p className="text-lg text-white/90 mb-8">
          {t('education.english.introduction')}
        </p>

        {/* Details List */}
        <ul className="space-y-4">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white/90">{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
