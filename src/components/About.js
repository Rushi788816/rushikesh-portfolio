import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiDownload, FiBook } from 'react-icons/fi';
import { motion } from 'framer-motion';
import profile from '../assets/images/profile.jpg';
import about from '../data/about';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

const fadeLeft = (delay = 0) => ({
  initial:     { opacity: 0, x: -36 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

const fadeRight = (delay = 0) => ({
  initial:     { opacity: 0, x: 36 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

const About = () => (
  <section className="py-5">
    <div className="container">

      {/* Header */}
      <motion.div className="text-center mb-5" {...fadeUp()}>
        <h2 className="gradient-text section-title mb-3">About Me</h2>
        <div className="section-divider"><div className="section-divider-dot" /></div>
        <p className="section-subtitle mt-3">A little bit about who I am and what I do</p>
      </motion.div>

      {/* Profile + Bio */}
      <div className="row align-items-center g-5 mb-5">
        <div className="col-lg-4 text-center">
          <motion.div {...fadeLeft(0.05)}>
            <div className="position-relative d-inline-block">
              <div style={{
                position: 'absolute', inset: -8, borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
                padding: 3, animation: 'spin 8s linear infinite'
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg-primary)' }} />
              </div>
              <img
                src={profile}
                alt="Rushikesh Sonar"
                className="profile-image"
                style={{
                  width: 220, height: 220, objectFit: 'cover',
                  borderRadius: '50%', border: '4px solid var(--bg-primary)',
                  position: 'relative', zIndex: 1
                }}
              />
            </div>
            <div className="d-flex justify-content-center gap-2 mt-4">
              <a href={about.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn"><FiLinkedin size={16} /></a>
              <a href={about.github}   target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub"><FiGithub size={16} /></a>
              <a href={`mailto:${about.email}`}                         className="social-icon-btn" title="Email"><FiMail size={16} /></a>
            </div>
          </motion.div>
        </div>

        <div className="col-lg-8">
          <motion.div {...fadeRight(0.1)}>
            <div className="glass-card p-4 p-lg-5">
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f0f6fc', marginBottom: 4 }}>{about.name}</h3>
              <p className="gradient-text-cyan" style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 20 }}>{about.title}</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.97rem', marginBottom: 28 }}>{about.bio}</p>
              <div className="row g-3">
                {[
                  { icon: FiMail,  color: '#818cf8', label: about.email,    href: `mailto:${about.email}` },
                  { icon: FiPhone, color: '#22d3ee', label: about.phone,    href: null },
                  { icon: FiMapPin,color: '#34d399', label: about.location, href: null }
                ].map(({ icon: Icon, color, label, href }) => (
                  <div key={label} className="col-md-6">
                    <div className="d-flex align-items-center gap-2">
                      <span style={{ width: 32, height: 32, borderRadius: 8, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={14} style={{ color }} />
                      </span>
                      {href
                        ? <a href={href} style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>{label}</a>
                        : <span style={{ fontSize: '0.87rem', color: 'var(--text-secondary)' }}>{label}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        className="row g-3 mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {about.stats.map(s => (
          <motion.div
            key={s.label}
            className="col-6 col-md-3"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <div className="stat-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div {...fadeUp(0.05)}>
        <div className="d-flex align-items-center gap-3 mb-4">
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FiBook size={18} style={{ color: '#818cf8' }} />
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f0f6fc', margin: 0 }}>Education</h3>
        </div>
        <div className="row g-3">
          {about.education.map((edu, i) => (
            <motion.div key={edu.id} className="col-md-6" {...fadeUp(i * 0.1)}>
              <div className="education-card">
                <div className="d-flex align-items-start gap-3">
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                    {edu.icon}
                  </div>
                  <div>
                    <h5 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f6fc', marginBottom: 4, lineHeight: 1.3 }}>{edu.degree}</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 6, lineHeight: 1.4 }}>{edu.institution}, {edu.location}</p>
                    <div className="d-flex flex-wrap gap-2">
                      <span style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8', fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{edu.year}</span>
                      <span style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399', fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Download CV */}
      <motion.div className="text-center mt-5" {...fadeUp(0.1)}>
        <a href="/Rushikesh Sonar Resume.pdf" download="Rushikesh_Sonar_Resume.pdf"
          className="btn-primary-custom d-inline-flex align-items-center gap-2"
          style={{ textDecoration: 'none', fontSize: '0.95rem' }}>
          <FiDownload size={16} /> Download Resume
        </a>
      </motion.div>
    </div>

    <style>{`
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    `}</style>
  </section>
);

export default About;
