import React from 'react';
import { FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

const projectGradients = [
  'linear-gradient(135deg, #6366f1, #8b5cf6)',
  'linear-gradient(135deg, #06b6d4, #3b82f6)',
  'linear-gradient(135deg, #10b981, #34d399)'
];

const Projects = () => (
  <section className="py-5">
    <div className="container">

      {/* Header */}
      <motion.div className="text-center mb-5" {...fadeUp()}>
        <h2 className="gradient-text section-title mb-3">Featured Projects</h2>
        <div className="section-divider"><div className="section-divider-dot" /></div>
        <p className="section-subtitle mt-3">Production-grade projects I've built and shipped</p>
      </motion.div>

      <div className="row g-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="col-lg-4 col-md-6"
            {...fadeUp(index * 0.12)}
          >
            <div className="project-card d-flex flex-column h-100">
              <div style={{ height: 3, background: projectGradients[index % projectGradients.length], borderRadius: '16px 16px 0 0' }} />

              <div className="p-4 d-flex flex-column flex-grow-1">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className={project.status === 'Live' ? 'status-live' : 'status-completed'}>
                    {project.status === 'Live' && (
                      <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#10b981', marginRight: 5, verticalAlign: 'middle', animation: 'pulse-dot 2s infinite' }} />
                    )}
                    {project.status}
                  </span>
                  <span className="badge-type">{project.type}</span>
                </div>

                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f6fc', lineHeight: 1.3, marginBottom: 10 }}>
                  {project.title}
                </h4>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                  {project.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} className="d-flex align-items-start gap-2 mb-2">
                      <FiCheckCircle size={13} style={{ color: '#10b981', flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{h}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ flex: 1 }} />

                <div className="mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-badge me-1 mb-1 d-inline-block">{tech}</span>
                  ))}
                </div>

                <div className="d-flex gap-2">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link-btn">
                      <FiExternalLink size={13} /> Live Demo
                    </a>
                  ) : (
                    <span className="project-link-btn" style={{ opacity: 0.4, cursor: 'default' }}>
                      <FiExternalLink size={13} /> Private
                    </span>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-btn" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
                      <FiGithub size={13} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div className="text-center mt-5" {...fadeUp(0.2)}>
        <a href="https://github.com/Rushi788816" target="_blank" rel="noreferrer"
          className="btn-outline-custom d-inline-flex align-items-center gap-2"
          style={{ textDecoration: 'none' }}>
          <FiGithub size={16} /> View More on GitHub
        </a>
      </motion.div>
    </div>

    <style>{`
      @keyframes pulse-dot {
        0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
        50%       { box-shadow: 0 0 0 5px rgba(16,185,129,0); }
      }
    `}</style>
  </section>
);

export default Projects;
