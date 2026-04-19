import React from 'react';
import { FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import experience from '../data/experience.js';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

const Experience = () => (
  <section className="py-5">
    <div className="container">

      {/* Header */}
      <motion.div className="text-center mb-5" {...fadeUp()}>
        <h2 className="gradient-text section-title mb-3">Work Experience</h2>
        <div className="section-divider"><div className="section-divider-dot" /></div>
        <p className="section-subtitle mt-3">My professional journey and the impact I've made</p>
      </motion.div>

      {/* Timeline */}
      <div className="position-relative" style={{ paddingLeft: 48 }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: 10, top: 0, bottom: 0, width: 2,
          background: 'linear-gradient(to bottom, #6366f1, #8b5cf6 50%, rgba(99,102,241,0.1))',
          borderRadius: 2
        }} />

        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            className="position-relative mb-5"
            {...fadeUp(index * 0.15)}
          >
            {/* Timeline dot */}
            <div style={{
              position: 'absolute', left: -38, top: 22,
              width: 18, height: 18, borderRadius: '50%',
              background: job.current
                ? 'linear-gradient(135deg, #10b981, #34d399)'
                : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              border: '3px solid var(--bg-primary)',
              boxShadow: job.current ? '0 0 14px rgba(16,185,129,0.5)' : '0 0 14px rgba(99,102,241,0.4)',
              zIndex: 2,
              animation: job.current ? 'pulse-dot 2s infinite' : 'none'
            }} />

            {/* Card */}
            <div className="glass-card p-4 p-lg-5">
              {/* Header row */}
              <div className="d-flex flex-column flex-md-row align-items-start justify-content-between gap-3 mb-4">
                <div>
                  <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f0f6fc', margin: 0 }}>{job.role}</h3>
                    {job.current && (
                      <span style={{ background: 'rgba(16,185,129,0.12)', color: '#34d399', border: '1px solid rgba(16,185,129,0.25)', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 20, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        Current
                      </span>
                    )}
                  </div>
                  <p className="gradient-text-cyan" style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>{job.company}</p>
                </div>
                <div className="d-flex flex-column gap-2" style={{ minWidth: 180 }}>
                  <div className="d-flex align-items-center gap-2" style={{ color: 'var(--text-muted)', fontSize: '0.83rem' }}>
                    <FiCalendar size={13} style={{ color: '#818cf8', flexShrink: 0 }} />{job.duration}
                  </div>
                  <div className="d-flex align-items-center gap-2" style={{ color: 'var(--text-muted)', fontSize: '0.83rem' }}>
                    <FiMapPin size={13} style={{ color: '#22d3ee', flexShrink: 0 }} />{job.location}
                  </div>
                  <span className={job.type === 'Full-time' ? 'badge-fulltime' : 'badge-internship'}>{job.type}</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.75, marginBottom: 24 }}>{job.description}</p>

              <div className="row g-4">
                <div className="col-lg-7">
                  <h6 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>Key Responsibilities</h6>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="d-flex align-items-start gap-2 mb-2" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <span className="highlight-bullet mt-1" style={{ fontSize: '0.7rem' }}>▸</span>{r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-5">
                  <h6 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>Achievements</h6>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {job.achievements.map((a, i) => (
                      <li key={i} className="d-flex align-items-start gap-2 mb-2" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <FiCheckCircle size={14} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />{a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginRight: 10 }}>Stack:</span>
                {job.technologies.map(tech => (
                  <span key={tech} className="tech-badge me-1 mb-1 d-inline-block">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <style>{`
      @keyframes pulse-dot {
        0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
        50%       { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
      }
    `}</style>
  </section>
);

export default Experience;
