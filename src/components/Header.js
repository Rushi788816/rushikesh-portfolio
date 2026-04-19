import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';
import profile from '../assets/images/profile.jpg';

const navItems = [
  { name: 'About',          path: '/about' },
  { name: 'Experience',     path: '/experience' },
  { name: 'Skills',         path: '/skills' },
  { name: 'Projects',       path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact',        path: '/contact' }
];

const Header = ({ onNameClick }) => {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path && location.pathname !== '/';

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: scrolled
          ? 'rgba(6, 8, 24, 0.97)'
          : 'rgba(6, 8, 24, 0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between" style={{ minHeight: 68 }}>

          {/* ── Brand ── */}
          <button
            onClick={onNameClick}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 12
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={profile}
                alt="Rushikesh Sonar"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(99,102,241,0.4)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#10b981',
                border: '2px solid rgba(6,8,24,0.97)'
              }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontWeight: 700,
                fontSize: '1rem',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.01em'
              }}>
                Rushikesh Sonar
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 1, display: 'flex', alignItems: 'center', gap: 4 }}>
                <FiCode size={10} />
                Full Stack Developer
              </div>
            </div>
          </button>

          {/* ── Desktop Nav ── */}
          <div className="d-none d-md-flex align-items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  fontWeight: isActive(item.path) ? 600 : 500,
                  color: isActive(item.path) ? '#fff' : '#8892a4',
                  background: isActive(item.path)
                    ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                    : 'transparent',
                  borderRadius: 8,
                  padding: '7px 16px',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  letterSpacing: '0.3px',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive(item.path) ? '0 2px 12px rgba(99,102,241,0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = '#f0f6fc';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = '#8892a4';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className="d-md-none"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: 8,
              color: '#818cf8',
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {isOpen && (
          <div
            className="d-md-none pb-3"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: 12
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  fontWeight: isActive(item.path) ? 600 : 500,
                  color: isActive(item.path) ? '#fff' : '#8892a4',
                  background: isActive(item.path)
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))'
                    : 'transparent',
                  borderLeft: isActive(item.path) ? '3px solid #6366f1' : '3px solid transparent',
                  borderRadius: '0 8px 8px 0',
                  padding: '10px 16px',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  marginBottom: 4,
                  transition: 'all 0.2s ease'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
