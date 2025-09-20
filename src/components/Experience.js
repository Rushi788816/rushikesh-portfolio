import React, { useState, useEffect } from 'react';
import experience from '../data/experience.js';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

    const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time': return 'success';
      case 'Internship': return 'info';
      case 'Part-time': return 'warning';
      default: return 'secondary';
    }
  };

  const getCurrentPosition = (index) => {
    return index === 0 ? 'current' : 'past';
  };

  return (
    <section className="p-4">
      {/* Header */}
      <div className={`text-center mb-5 ${isVisible ? 'animate-fade-in-up' : ''}`}>
        <h2 className="gradient-text display-4 mb-3" style={{fontSize: '3.5rem', fontWeight: '800'}}>
          Professional Experience
        </h2>
        <div className="underline mx-auto" style={{
          width: '80px', 
          height: '4px', 
          background: 'var(--primary-gradient)', 
          borderRadius: '2px',
          animation: 'expand 1s ease-out'
        }}></div>
        <p className="lead text-secondary mt-3">My professional journey and growth</p>
      </div>

      {/* Experience Timeline */}
      <div className="experience-timeline position-relative">
        {/* Timeline Line */}
        <div className="timeline-line position-absolute" style={{
          left: '30px',
          top: '0',
          width: '3px',
          height: '100%',
          background: 'var(--primary-gradient)',
          borderRadius: '2px',
          zIndex: '1'
        }}></div>

        {experience.map((job, index) => (
          <div key={job.id} className={`timeline-item position-relative mb-5 ${isVisible ? 'stagger-item' : ''}`} 
               style={{animationDelay: `${index * 0.2}s`, paddingLeft: '80px'}}>
            
            {/* Timeline Dot */}
            <div className="timeline-dot position-absolute" style={{
              left: '19px',
              top: '20px',
              width: '25px',
              height: '25px',
              background: getCurrentPosition(index) === 'current' ? 'var(--success-gradient)' : 'var(--primary-gradient)',
              borderRadius: '50%',
              border: '4px solid var(--bg-primary)',
              zIndex: '2',
              boxShadow: getCurrentPosition(index) === 'current' ? '0 0 20px rgba(56, 239, 125, 0.5)' : 'var(--shadow-glow)'
            }}>
              {getCurrentPosition(index) === 'current' && (
                <div className="current-pulse position-absolute" style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '15px',
                  height: '15px',
                  background: 'rgba(56, 239, 125, 0.8)',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }}></div>
              )}
            </div>

            {/* Experience Card */}
            <div className="glass-card p-4 position-relative">
              <div className="row align-items-start">
                <div className="col-md-8">
                  <div className="d-flex align-items-center mb-3">
                    <div>
                      <h4 className="gradient-text mb-1" style={{fontSize: '1.5rem', fontWeight: '700'}}>
                        {job.role}
                      </h4>
                      <h6 className="text-accent mb-1" style={{fontSize: '1.2rem', fontWeight: '600'}}>
                        {job.company}
                      </h6>
                      <div className="d-flex flex-wrap align-items-center gap-2">
                        <span className="text-muted">
                          <i className="fas fa-calendar-alt me-1"></i>
                          {job.duration}
                        </span>
                        <span className="badge bg-secondary">
                          {job.period}
                        </span>
                        <span className={`badge bg-${getTypeColor(job.type)}`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-muted">
                      <i className="fas fa-map-marker-alt me-1"></i>
                      {job.location}
                    </span>
                  </div>

                  <p className="text-secondary mb-3" style={{fontSize: '1rem', lineHeight: '1.6'}}>
                    {job.description}
                  </p>
                </div>

                <div className="col-md-4">
                  {/* Technologies Used */}
                  <div className="mb-3">
                    <h6 className="text-accent mb-2" style={{fontSize: '0.95rem', fontWeight: '600'}}>
                      Technologies:
                    </h6>
                    <div className="d-flex flex-wrap gap-1">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="badge badge-animated bg-primary" style={{fontSize: '0.8rem'}}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-3">
                <h6 className="text-accent mb-2" style={{fontSize: '1rem', fontWeight: '600'}}>
                  Key Responsibilities:
                </h6>
                <ul className="responsibility-list" style={{paddingLeft: '0', listStyle: 'none'}}>
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="mb-1 d-flex align-items-start" style={{fontSize: '0.95rem'}}>
                      <span className="bullet-point me-2" style={{
                        color: 'var(--text-accent)',
                        fontWeight: 'bold',
                        minWidth: '8px'
                      }}>•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h6 className="text-accent mb-2" style={{fontSize: '1rem', fontWeight: '600'}}>
                  Key Achievements:
                </h6>
                <ul className="achievement-list" style={{paddingLeft: '0', listStyle: 'none'}}>
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="mb-1 d-flex align-items-start" style={{fontSize: '0.95rem'}}>
                      <span className="achievement-icon me-2" style={{color: 'var(--success-color)'}}>✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes expand {
          from { width: 0; }
          to { width: 80px; }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1); 
            opacity: 1; 
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.2); 
            opacity: 0.7; 
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .bullet-point {
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .achievement-icon {
          color: #38ef7d;
          font-weight: bold;
        }

        .company-logo {
          transition: transform 0.3s ease;
        }

        .company-logo:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Experience;