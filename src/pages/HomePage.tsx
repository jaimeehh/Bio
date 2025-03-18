import React from 'react';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Courses } from '../components/Courses';
import { Community } from '../components/Community';

export function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Courses />
      <Community />
    </>
  );
}