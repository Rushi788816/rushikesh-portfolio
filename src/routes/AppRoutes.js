import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../components/About';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import WelcomeCard from '../components/WelcomeCard';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/WelcomeCard" />} />
    <Route path="/about" element={<About />} />
    <Route path="/experience" element={<Experience />} />
    {/* <Route path="/certifications" element={<Certifications />} /> */}
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    {/* Add more routes as needed */}
  </Routes>
);

export default AppRoutes;