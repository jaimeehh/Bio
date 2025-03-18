import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Define some pastel gradient classes for each card
// (one per experience, or you can cycle them if you have more experiences)
const pastelGradients = [
  'bg-gradient-to-br from-lime-200 to-lime-300 dark:from-lime-700 dark:to-lime-800',
  'bg-gradient-to-br from-sky-200 to-sky-300 dark:from-sky-700 dark:to-sky-800'
];

export function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      role: t('experience.intern.role'),
      company: 'Hospital Universitario del Sureste',
      period: 'Oct 2024 - Dec 2024',
      description: t('experience.intern.description'),
      achievements: [
        t('experience.intern.achievements.0'),
        t('experience.intern.achievements.1'),
        t('experience.intern.achievements.2'),
        t('experience.intern.achievements.3'),
      ],
    },
    {
      role: t('experience.conference.role'),
      company: 'Health 4.0 Conference',
      period: 'Sep 2024 - Oct 2024',
      description: t('experience.conference.description'),
      achievements: [
        t('experience.conference.achievements.0'),
        t('experience.conference.achievements.1'),
        t('experience.conference.achievements.2'),
        t('experience.conference.achievements.3'),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('experience.title')}
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => {
            // Pick a pastel gradient for each card
            const gradientClass = pastelGradients[index % pastelGradients.length];

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className={`relative rounded-xl p-6 shadow-lg text-gray-800 dark:text-gray-100 ${gradientClass}`}
              >
                {/* Speech Bubble Tail (optional) */}
                <div className="absolute bottom-[-20px] left-8">
                  <div className="w-0 h-0 border-t-[20px] border-t-transparent
                                  border-r-[20px] border-r-transparent
                                  border-b-0 border-l-0
                                  /* 
                                     For a perfect bubble tail, 
                                     you'd typically match the card's background.
                                     Because it's a gradient, the tail won't be perfect, 
                                     but this still gives a bubble-like feel.
                                  */
                  " />
                </div>

                {/* Header: Icon + Role + Company/Period */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/90 mb-4">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-white/90"
                    >
                      <span className="mt-1 w-1.5 h-1.5 bg-white rounded-full" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
