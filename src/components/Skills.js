import React, { useState, useEffect } from 'react';
import skills from '../data/skills.js';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Updated skills data based on your actual experience
  

  // const categories = ['All', 'Frontend', 'Backend', 'Programming', 'Tools', 'Design', 'Database', 'Analytics'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      filteredSkills.forEach(skill => {
        animated[skill.id] = true;
      });
      setAnimatedSkills(animated);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const getSkillColor = (level) => {
    if (level >= 90) return 'success';
    if (level >= 80) return 'info';
    if (level >= 70) return 'warning';
    return 'secondary';
  };

  // const getExpertiseLevel = (level) => {
  //   if (level >= 90) return 'Expert';
  //   if (level >= 80) return 'Advanced';
  //   if (level >= 70) return 'Intermediate';
  //   return 'Beginner';
  // };

  const getGradientByLevel = (level) => {
    if (level >= 90) return 'var(--success-gradient)';
    if (level >= 80) return 'var(--accent-gradient)';
    if (level >= 70) return 'var(--warning-gradient)';
    return 'var(--secondary-gradient)';
  };

  return (
    <section className="p-4">
      {/* Header */}
      <div className={`text-center mb-5 ${isVisible ? 'animate-fade-in-up' : ''}`}>
        <h2 className="gradient-text display-4 mb-3" style={{fontSize: '3.5rem', fontWeight: '800'}}>
          Skills & Technologies
        </h2>
        <div className="underline mx-auto" style={{
          width: '80px', 
          height: '4px', 
          background: 'var(--primary-gradient)', 
          borderRadius: '2px',
          animation: 'expand 1s ease-out'
        }}></div>
      </div>

      {/* Skills Grid */}
      <div className="row g-4 mb-5">
        {filteredSkills.map((skill, index) => (
          <div key={skill.id} className={`col-lg-6 col-xl-4 ${isVisible ? 'stagger-item' : ''}`} 
               style={{animationDelay: `${index * 0.1}s`}}>
            <div className="skill-card glass-card p-4 h-100">
              
              {/* Skill Header */}
              <div className="d-flex align-items-center mb-3">
                
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="gradient-text mb-0" style={{fontSize: '1.3rem', fontWeight: '700'}}>
                      {skill.name}
                    </h5>
                    {/* <span className={`badge bg-${getSkillColor(skill.level)} px-2 py-1`}
                          style={{fontSize: '0.75rem', fontWeight: '600'}}>
                      {getExpertiseLevel(skill.level)}
                    </span> */}
                  </div>
                  {/* <p className="text-muted mb-0" style={{fontSize: '0.9rem'}}>
                    Experience: {skill.experience}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Currently Learning Section */}
      <div className="glass-card p-5 text-center">
        <h3 className="gradient-text mb-3" style={{fontSize: '2rem', fontWeight: '700'}}>
          Currently Learning
        </h3>
        <p className="text-secondary mb-4" style={{fontSize: '1.1rem'}}>
          I believe in continuous learning and staying updated with the latest technologies
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {[
            { name: "Next.js"},
            { name: "TypeScript" },
            { name: "Node.js" },
            { name: "MongoDB" },
            { name: "Docker" }
          ].map((tech, index) => (
            <div
              key={tech.name}
              className="learning-badge"
              style={{
                background: 'var(--primary-gradient)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'scale(1.05) translateY(-2px)';
                e.target.style.boxShadow = 'var(--shadow-glow)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'scale(1) translateY(0)';
                e.target.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <span className="me-2">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Styles */}
      <style jsx>{`
        @keyframes expand {
          from { width: 0; }
          to { width: 80px; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .learning-badge {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;