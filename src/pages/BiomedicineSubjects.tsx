import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Heart, 
  Cog, 
  Binary,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const CategoryCard = ({ 
  title, 
  items, 
  icon: Icon, 
  color 
}: { 
  title: string; 
  items: string[]; 
  icon: React.ElementType; 
  color: string;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden
        transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-[280px]'}`}
    >
      <div 
        className={`p-6 cursor-pointer ${color} transition-colors duration-300`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="space-y-2">
          <motion.ul
            animate={{ height: isExpanded ? 'auto' : '160px' }}
            className="space-y-2 overflow-hidden"
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={false}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-white/90"
              >
                <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <button
            className="text-white/80 hover:text-white text-sm mt-2 transition-colors"
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export function BiomedicineSubjects() {
  const { t } = useTranslation();
  const categories = t('education.biomedicine.categories', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-4 bg-blue-600 rounded-2xl mb-6"
            >
              <GraduationCap className="w-12 h-12 text-white" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            >
              {t('education.biomedicine.title')}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              {t('education.biomedicine.introduction')}
            </motion.p>
          </div>

          {/* Back Button */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
                rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 dark:text-gray-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('education.biomedicine.backButton')}
            </Link>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              title={t('education.biomedicine.saludTitle')}
              items={categories.salud}
              icon={Heart}
              color="bg-gradient-to-br from-rose-500 to-pink-500"
            />
            <CategoryCard
              title={t('education.biomedicine.ingenieriaTitle')}
              items={categories.ingenieria}
              icon={Cog}
              color="bg-gradient-to-br from-blue-500 to-indigo-500"
            />
            <CategoryCard
              title={t('education.biomedicine.informaticaTitle')}
              items={categories.informatica}
              icon={Binary}
              color="bg-gradient-to-br from-emerald-500 to-teal-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}