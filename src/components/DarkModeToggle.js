import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? saved === 'true' : true; 
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.style.setProperty('--bs-body-bg', 'var(--bg-primary)');
      document.documentElement.style.setProperty('--bs-body-color', 'var(--text-primary)');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.style.removeProperty('--bs-body-bg');
      document.documentElement.style.removeProperty('--bs-body-color');
    }
    
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // Set dark mode as default on component mount
  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      className="dark-mode-toggle btn p-0"
      style={{
        background: 'transparent',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        color: darkMode ? '#ffd700' : '#ff6b6b',
        fontSize: '1.3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: darkMode 
          ? '0 0 15px rgba(255, 215, 0, 0.2)' 
          : '0 0 15px rgba(255, 107, 107, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.borderColor = darkMode ? '#ffd700' : '#ff6b6b';
        e.target.style.boxShadow = darkMode 
          ? '0 0 25px rgba(255, 215, 0, 0.4)' 
          : '0 0 25px rgba(255, 107, 107, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        e.target.style.boxShadow = darkMode 
          ? '0 0 15px rgba(255, 215, 0, 0.2)' 
          : '0 0 15px rgba(255, 107, 107, 0.2)';
      }}
    >
      {/* Background glow effect */}
      <div
        style={{
          position: 'absolute',
          inset: '0',
          background: darkMode 
            ? 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          opacity: darkMode ? 1 : 0.8,
          transition: 'all 0.3s ease'
        }}
      />
      
      {/* Icon with animation */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          transform: `rotate(${darkMode ? '0deg' : '180deg'}) scale(${darkMode ? '1' : '0.9'})`,
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
      </div>

      {/* Ripple effect container */}
      <div 
        className="ripple-container"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      />
    </button>
  );
};

export default DarkModeToggle;