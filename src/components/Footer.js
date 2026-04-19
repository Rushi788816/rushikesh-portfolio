import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '32px 0'
    }}>
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

          {/* Left: Brand */}
          <div>
            <div style={{
              fontWeight: 700,
              fontSize: '1rem',
              background: 'var(--primary-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 4
            }}>
              Rushikesh Sonar
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Full Stack Developer · Pune, India
            </div>
          </div>

          {/* Center: Copyright */}
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            © {year} Rushikesh Sonar · Built with{' '}
            <FiHeart size={12} style={{ color: '#f43f5e', verticalAlign: 'middle' }} />{' '}
            using React.js
          </div>

          {/* Right: Social links */}
          <div className="d-flex gap-2">
            <a
              href="https://www.linkedin.com/in/rushikesh-sonar-771636187/"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="https://github.com/Rushi788816"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="mailto:rushikeshsonar348@gmail.com"
              className="social-icon-btn"
              title="Email"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
