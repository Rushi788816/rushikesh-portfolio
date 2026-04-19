import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About          from '../components/About';
import Experience     from '../components/Experience';
import Certifications from '../components/Certifications';
import Skills         from '../components/Skills';
import Projects       from '../components/Projects';
import Contact        from '../components/Contact';
import NotFound       from '../components/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/about"          element={<About />} />
    <Route path="/experience"     element={<Experience />} />
    <Route path="/skills"         element={<Skills />} />
    <Route path="/projects"       element={<Projects />} />
    <Route path="/certifications" element={<Certifications />} />
    <Route path="/contact"        element={<Contact />} />
    <Route path="*"               element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
