import React from 'react';
import { FiAward, FiTag } from 'react-icons/fi';
import { motion } from 'framer-motion';
import certifications from '../data/certifications';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

const Certifications = () => (
  <section className="py-5">
    <div className="container">

      {/* Header */}
      <motion.div className="text-center mb-5" {...fadeUp()}>
        <h2 className="gradient-text section-title mb-3">Certifications</h2>
        <div className="section-divider"><div className="section-divider-dot" /></div>
        <p className="section-subtitle mt-3">Continuous learning across AI, cloud, and computer science fundamentals</p>
      </motion.div>

      <div className="row g-4">
        {certifications.map((cert, index) => (
          <motion.div key={cert.id} className="col-md-6" {...fadeUp(index * 0.1)}>
            <div className="cert-card p-4 h-100 position-relative">
              {/* Accent bar */}
              <div style={{ height: 3, background: `linear-gradient(90deg, ${cert.color}, ${cert.color}44)`, position: 'absolute', top: 0, left: 0, right: 0, borderRadius: '14px 14px 0 0' }} />

              <div className="d-flex align-items-start gap-3" style={{ marginTop: 6 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${cert.color}18`, border: `1px solid ${cert.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <FiAward size={22} style={{ color: cert.color }} />
                </div>

                <div style={{ flex: 1 }}>
                  <h5 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f6fc', marginBottom: 4, lineHeight: 1.3 }}>{cert.title}</h5>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: cert.color }}>{cert.issuer}</span>
                    <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-muted)', fontSize: '0.72rem', fontWeight: 500, padding: '2px 8px', borderRadius: 20 }}>{cert.year}</span>
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    {cert.topics.map(topic => (
                      <span key={topic} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: `${cert.color}10`, border: `1px solid ${cert.color}25`, color: `${cert.color}dd`, fontSize: '0.73rem', fontWeight: 500, padding: '3px 10px', borderRadius: 20 }}>
                        <FiTag size={10} />{topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <motion.div className="glass-card p-4 mt-5 text-center" {...fadeUp(0.3)}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0, lineHeight: 1.7 }}>
          Committed to <strong style={{ color: '#f0f6fc' }}>continuous learning</strong> — especially in
          AI/ML, cloud technologies, and modern development practices.
          These certifications reflect a passion for staying current with industry trends.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Certifications;
