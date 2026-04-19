import React, { useState } from 'react';
import { FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';
import skills, { skillCategories, learningNow } from '../data/skills.js';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

const skillColorMap = {
  'React.js':           '#61dafb',
  'JavaScript (ES6+)':  '#f7df1e',
  'HTML5':              '#e34c26',
  'CSS3':               '#2965f1',
  'Tailwind CSS':       '#38bdf8',
  'Redux Toolkit':      '#764abc',
  'PHP':                '#7a86b8',
  'Laravel':            '#f05340',
  'Node.js':            '#68a063',
  'RESTful APIs':       '#06b6d4',
  'MySQL':              '#00758f',
  'PostgreSQL':         '#336791',
  'Git & GitHub':       '#f05032',
  'Postman / Apidog':   '#ff6c37',
  'Swagger':            '#85ea2d',
  'Shopify':            '#96bf48',
  'VS Code / XAMPP':    '#007acc'
};

const categoryMeta = {
  Frontend: { icon: '⚛️',  label: 'Frontend',       color: '#61dafb' },
  Backend:  { icon: '🔧',  label: 'Backend & APIs', color: '#f05340' },
  Database: { icon: '🗄️',  label: 'Database',       color: '#336791' },
  Tools:    { icon: '🛠️',  label: 'Tools & Workflow',color: '#ff6c37' }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  // Group skills by category for the "All" view
  const grouped = skillCategories
    .filter(c => c.key !== 'All')
    .map(c => ({
      ...c,
      meta: categoryMeta[c.key],
      items: skills.filter(s => s.category === c.key)
    }));

  return (
    <section className="py-5">
      <div className="container">

        {/* Header */}
        <motion.div className="text-center mb-5" {...fadeUp()}>
          <h2 className="gradient-text section-title mb-3">Skills & Technologies</h2>
          <div className="section-divider"><div className="section-divider-dot" /></div>
          <p className="section-subtitle mt-3">Technologies I've worked with professionally</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="d-flex flex-wrap justify-content-center gap-2 mb-5"
          {...fadeUp(0.1)}
        >
          {skillCategories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`category-pill${activeCategory === cat.key ? ' active' : ''}`}
            >
              {cat.key !== 'All' && <span style={{ marginRight: 6 }}>{categoryMeta[cat.key]?.icon}</span>}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* ── Grouped View (All) ── */}
        {activeCategory === 'All' ? (
          <div className="d-flex flex-column gap-4">
            {grouped.map((group, gi) => (
              <motion.div key={group.key} {...fadeUp(gi * 0.08)}>
                <div className="glass-card p-4">
                  {/* Group header */}
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div style={{
                      width: 34, height: 34, borderRadius: 8,
                      background: `${group.meta.color}15`,
                      border: `1px solid ${group.meta.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', flexShrink: 0
                    }}>
                      {group.meta.icon}
                    </div>
                    <div>
                      <h5 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#f0f6fc' }}>
                        {group.meta.label}
                      </h5>
                      <span style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}>
                        {group.items.length} technologies
                      </span>
                    </div>
                  </div>

                  {/* Skill tags */}
                  <div className="d-flex flex-wrap gap-2">
                    {group.items.map(skill => {
                      const color = skillColorMap[skill.name] || '#6366f1';
                      return (
                        <span
                          key={skill.name}
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 7,
                            background: `${color}10`,
                            border: `1px solid ${color}28`,
                            color: '#f0f6fc',
                            fontSize: '0.85rem', fontWeight: 500,
                            padding: '7px 14px', borderRadius: 50,
                            transition: 'all 0.2s ease',
                            cursor: 'default'
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = `${color}22`;
                            e.currentTarget.style.borderColor = `${color}55`;
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = `${color}10`;
                            e.currentTarget.style.borderColor = `${color}28`;
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <span style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* ── Filtered View ── */
          <motion.div
            className="d-flex flex-wrap gap-3 justify-content-center"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {filtered.map(skill => {
              const color = skillColorMap[skill.name] || '#6366f1';
              return (
                <motion.span
                  key={skill.name}
                  variants={{
                    hidden:   { opacity: 0, scale: 0.85, y: 12 },
                    visible:  { opacity: 1, scale: 1,    y: 0 }
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: `${color}10`,
                    border: `1px solid ${color}28`,
                    color: '#f0f6fc',
                    fontSize: '0.92rem', fontWeight: 500,
                    padding: '10px 20px', borderRadius: 50,
                    transition: 'all 0.2s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${color}22`;
                    e.currentTarget.style.borderColor = `${color}55`;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = `0 4px 16px ${color}20`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = `${color}10`;
                    e.currentTarget.style.borderColor = `${color}28`;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: color, flexShrink: 0 }} />
                  {skill.name}
                </motion.span>
              );
            })}
          </motion.div>
        )}

        {/* Currently Learning */}
        <motion.div
          className="glass-card p-4 p-lg-5 text-center mt-5"
          {...fadeUp(0.2)}
        >
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <FiZap size={20} style={{ color: '#f59e0b' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f0f6fc', margin: 0 }}>
              Currently Learning
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: 20 }}>
            Continuously exploring new technologies to stay ahead
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {learningNow.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))',
                  border: '1px solid rgba(99,102,241,0.22)',
                  color: '#818cf8',
                  fontSize: '0.88rem', fontWeight: 600,
                  padding: '8px 20px', borderRadius: 50,
                  cursor: 'default'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
