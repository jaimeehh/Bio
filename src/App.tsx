import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CoursesPage } from './pages/CoursesPage';
import { CommunityPage } from './pages/CommunityPage';
import { BiomedicineSubjects } from './pages/BiomedicineSubjects';
import { EnglishLevelC1 } from './pages/EnglishLevelC1';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-16">
        <Navigation />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/biomedicine-subjects" element={<BiomedicineSubjects />} />
          <Route path="/english-level-c1" element={<EnglishLevelC1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;