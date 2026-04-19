import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ padding: '80px 20px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
          top: '10%', left: '10%', filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
          bottom: '10%', right: '10%', filter: 'blur(60px)'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="text-center position-relative"
        style={{ zIndex: 1 }}
      >
        {/* 404 number */}
        <div style={{
          fontSize: 'clamp(6rem, 18vw, 10rem)',
          fontWeight: 900,
          lineHeight: 1,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.04em',
          marginBottom: 16,
          userSelect: 'none'
        }}>
          404
        </div>

        {/* Decorative line */}
        <div style={{
          width: 60, height: 3,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          borderRadius: 2,
          margin: '0 auto 24px'
        }} />

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f0f6fc', marginBottom: 12 }}>
          Page Not Found
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', maxWidth: 380, margin: '0 auto 36px', lineHeight: 1.7 }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Buttons */}
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <button
            onClick={() => navigate(-1)}
            className="btn-outline-custom d-inline-flex align-items-center gap-2"
          >
            <FiArrowLeft size={15} />
            Go Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="btn-primary-custom d-inline-flex align-items-center gap-2"
          >
            <FiHome size={15} />
            Home
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;
