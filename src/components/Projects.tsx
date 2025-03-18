import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.petmr.title'),
      period: '2024-2025',
      description: t('projects.petmr.description'),
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
      technologies: ['Python', 'PyTorch', t('projects.technologies.medicalImaging'), t('projects.technologies.deepLearning')],
      githubUrl: 'https://github.com/jaimeehh'
    },
    {
      title: t('projects.ecg.title'),
      period: 'Jan 2024 - Jun 2024',
      description: t('projects.ecg.description'),
      image: 'https://images.pexels.com/photos/7723388/pexels-photo-7723388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['MATLAB', t('projects.technologies.signalProcessing'), t('projects.technologies.machineLearning')],
      githubUrl: 'https://github.com/jaimeehh/Electrocargiogram_diagnosis'
    },
    {
      title: t('projects.prosthesis.title'),
      period: 'Sep 2023 - Jan 2024',
      description: t('projects.prosthesis.description'),
      image: 'https://images.pexels.com/photos/6153067/pexels-photo-6153067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: [t('projects.technologies.3dPrinting'), 'CAD', t('projects.technologies.biomechanics')],
      githubUrl: 'https://github.com/jaimeehh'
    },
    {
      title: t('projects.mentalHealth.title'),
      period: t('projects.mentalHealth.period'),
      description: t('projects.mentalHealth.description'),
      image: logo,
      technologies: ['React Native', 'TensorFlow.js', 'Azure'],
      githubUrl: 'https://github.com/jaimeehh'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden 
                hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 
                        text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('projects.viewCode')}</span>
                  </a>
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('projects.liveDemo')}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
