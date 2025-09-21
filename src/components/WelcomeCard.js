import React, { useState, useEffect } from "react";
import profile from "../assets/images/profile.jpg";

const WelcomeCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const skills = [
    { label: "React.js", color: "var(--accent-gradient)" },
    { label: "Laravel", color: "var(--secondary-gradient)" },
    { label: "PHP • MySQL", color: "var(--warning-gradient)" },
    { label: "Java", color: "var(--success-gradient)" }
  ];

  return (
    <div className="welcome-hero min-vh-100 d-flex align-items-center justify-content-center p-4 position-relative">

      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: -1 }}>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div
        className={`glass-card p-5 text-center position-relative overflow-hidden ${isVisible ? 'animate-fade-in-up' : ''}`}
        style={{
          maxWidth: '800px',
          borderRadius: '2rem',
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 50%, transparent 100%)`
        }}
        onMouseMove={handleMouseMove}
      >

        {/* Glowing border effect */}
        <div className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            borderRadius: '2rem',
            padding: '1px',
            background: 'var(--primary-gradient)',
            opacity: '0.3',
            zIndex: '-1'
          }}>
          <div className="w-100 h-100"
            style={{
              borderRadius: '2rem',
              background: 'var(--bg-glass)'
            }}></div>
        </div>

        {/* Profile Image with Animation */}
        <div className="mb-4 position-relative">
          <div className="d-inline-block position-relative">
            <div className="position-absolute top-50 start-50 translate-middle"
              style={{
                width: '200px',
                height: '200px',
                background: 'var(--primary-gradient)',
                borderRadius: '50%',
                opacity: '0.2',
                animation: 'pulse-glow 3s ease-in-out infinite',
                zIndex: '-1'
              }}></div>
            <img
              src={profile}
              alt="Rushikesh Sonar"
              className="rounded-circle shadow-lg"
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                border: '4px solid rgba(255,255,255,0.2)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          </div>
        </div>

        {/* Name with Gradient */}
        <h1 className="gradient-text mb-3"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            lineHeight: '1.1'
          }}>
          Hi, I'm Rushikesh Sonar
        </h1>

        {/* Title */}
        <h5 className="text-secondary mb-4"
          style={{
            fontSize: '1.3rem',
            fontWeight: '600'
          }}>
          Junior Software Engineer | Full Stack Developer
        </h5>

        {/* Current Company Badge */}
        <div className="mb-4">
          <div className="glass-card d-inline-block px-4 py-2"
            style={{ borderRadius: '25px' }}>
            <span className="text-accent me-2">Currently at</span>
            <strong className="gradient-text">CodeMingle</strong>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-5">
          <h6 className="text-accent mb-3" style={{ fontSize: '1rem', fontWeight: '600' }}>
            Core Technologies:
          </h6>
          <div className="row g-3 justify-content-center">
            {skills.map((skill, index) => (
              <div key={index} className={`col-6 col-md-3 ${isVisible ? 'stagger-item' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-badge glass-card p-3 h-100 d-flex flex-column align-items-center justify-content-center"
                  style={{
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}>
                  <span className="fw-semibold" style={{ fontSize: '0.9rem' }}>
                    {skill.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="mb-5">
          <p className="lead" style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            I'm passionate about building{" "}
            <span className="fw-bold" style={{ color: '#f093fb' }}>scalable</span>,{" "}
            <span className="fw-bold" style={{ color: '#764ba2' }}>user-friendly</span>, and{" "}
            <span className="fw-bold" style={{ color: '#4facfe' }}>visually appealing</span>{" "}
            web applications. Transforming{" "}
            <span className="fw-bold gradient-text position-relative">
              ideas into impactful solutions
            </span>{" "}
            using clean code and modern technologies.
          </p>
          <div className="mt-3 text-muted">
            <span className="d-inline-flex align-items-center">
              <span className="me-2">📍</span>
              Pune, Maharashtra, India
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
          <a
            href="/Rushikesh Sonar Resume.pdf"
            download="Rushikesh_Sonar_Resume.pdf"
            className="btn btn-outline-light btn-lg px-4 py-3 btn-animated"
            style={{
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1rem',
              minWidth: '180px',
              borderColor: 'rgba(255,255,255,0.3)',
              backgroundColor: 'rgba(255,255,255,0.1)'
            }}
          >
            <span className="me-2">📄</span>
            Download Resume
          </a>
        </div>


        {/* Social Links */}
        <div className="mt-4 d-flex justify-content-center gap-3">
          <a href="https://www.linkedin.com/in/rushikesh-sonar-771636187/"
            target="_blank"
            rel="noreferrer"
            className="social-link text-decoration-none"
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0077b5',
              fontSize: '1.2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'scale(1.1) translateY(-2px)';
              e.target.style.background = 'rgba(0,119,181,0.2)';
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'scale(1) translateY(0)';
              e.target.style.background = 'rgba(255,255,255,0.1)';
            }}>
            💼
          </a>

          <a href="https://github.com/Rushi788816"
            target="_blank"
            rel="noreferrer"
            className="social-link text-decoration-none"
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333',
              fontSize: '1.2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'scale(1.1) translateY(-2px)';
              e.target.style.background = 'rgba(51,51,51,0.2)';
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'scale(1) translateY(0)';
              e.target.style.background = 'rgba(255,255,255,0.1)';
            }}>
            🔗
          </a>
        </div>
      </div>

      {/* Additional Styles */}
      <style jsx>{`
        .welcome-hero {
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 8s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          background: var(--secondary-gradient);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 120px;
          height: 120px;
          background: var(--accent-gradient);
          top: 20%;
          right: 15%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 60px;
          height: 60px;
          background: var(--success-gradient);
          bottom: 25%;
          left: 15%;
          animation-delay: 4s;
        }

        .shape-4 {
          width: 100px;
          height: 100px;
          background: var(--warning-gradient);
          bottom: 15%;
          right: 10%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1); 
            opacity: 0.2; 
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1); 
            opacity: 0.3; 
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        @media (max-width: 768px) {
          .skill-badge {
            padding: 1rem !important;
          }
          
          .skill-icon {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeCard;