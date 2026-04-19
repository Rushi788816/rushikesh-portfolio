import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  FiSend, FiUser, FiMail, FiMessageSquare,
  FiGithub, FiLinkedin, FiMapPin, FiPhone,
  FiCheckCircle, FiAlertCircle
} from 'react-icons/fi';
import { motion } from 'framer-motion';

// ─────────────────────────────────────────────
//  EmailJS (optional — form works without it):
//  1. Sign up free at https://www.emailjs.com
//  2. Add a Gmail service  → copy SERVICE_ID
//  3. Create a template    → copy TEMPLATE_ID
//     (vars: {{from_name}}, {{from_email}}, {{message}})
//  4. Account → copy PUBLIC_KEY
//  Replace the three constants below, then remove
//  the USE_MAILTO_FALLBACK line.
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

// Set to false once you've added real EmailJS credentials above
const USE_MAILTO_FALLBACK =
  EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
  EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
  EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY';

const OWNER_EMAIL = 'rushikeshsonar348@gmail.com';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

const contactItems = [
  { icon: FiMail,   label: 'Email',    value: OWNER_EMAIL,                  href: `mailto:${OWNER_EMAIL}`,   color: '#6366f1' },
  { icon: FiPhone,  label: 'Phone',    value: '+91 7888161622',              href: 'tel:+917888161622',        color: '#06b6d4' },
  { icon: FiMapPin, label: 'Location', value: 'Pune, Maharashtra, India',    href: null,                       color: '#10b981' }
];

const socials = [
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rushikesh-sonar-771636187/' },
  { icon: FiGithub,   label: 'GitHub',   href: 'https://github.com/Rushi788816' }
];

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const Contact = () => {
  const formRef = useRef(null);
  const [fields, setFields]   = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus]   = useState('idle'); // idle | sending | success | error

  const errors = {
    name:    !fields.name.trim()                ? 'Name is required' : '',
    email:   !fields.email.trim()               ? 'Email is required'
           : !isValidEmail(fields.email)        ? 'Enter a valid email' : '',
    message: fields.message.trim().length < 10  ? 'Message must be at least 10 characters' : ''
  };

  const isFormValid = !errors.name && !errors.email && !errors.message;

  const onChange = (field) => (e) => setFields(prev => ({ ...prev, [field]: e.target.value }));
  const onBlur   = (field) => ()  => setTouched(prev => ({ ...prev, [field]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isFormValid) return;

    setStatus('sending');

    // ── Mailto fallback (works without any backend) ──────────────────
    if (USE_MAILTO_FALLBACK) {
      const subject = encodeURIComponent(`Portfolio Contact from ${fields.name}`);
      const body    = encodeURIComponent(
        `Name: ${fields.name}\nEmail: ${fields.email}\n\nMessage:\n${fields.message}`
      );
      window.open(`mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`, '_blank');
      setStatus('success');
      setFields({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
      return;
    }

    // ── EmailJS (when credentials are configured) ────────────────────
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFields({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="py-5">
      <div className="container">

        {/* Header */}
        <motion.div className="text-center mb-5" {...fadeUp()}>
          <h2 className="gradient-text section-title mb-3">Get In Touch</h2>
          <div className="section-divider"><div className="section-divider-dot" /></div>
          <p className="section-subtitle mt-3">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="row g-5 align-items-start">

          {/* ── Left: Info ── */}
          <div className="col-lg-4">
            <motion.div {...fadeUp(0.1)}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 32 }}>
                I'm currently{' '}
                <strong style={{ color: '#34d399' }}>open to new opportunities</strong>.
                Whether it's a full-time role, freelance project, or just a chat — feel free to reach out!
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                  <div key={label} className="d-flex align-items-center gap-3">
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: `${color}15`, border: `1px solid ${color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {label}
                      </div>
                      {href
                        ? <a href={href} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>{value}</a>
                        : <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 20 }}>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12 }}>
                  Connect with me
                </p>
                <div className="d-flex gap-2">
                  {socials.map(({ icon: Icon, label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="social-icon-btn" title={label}>
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Form ── */}
          <div className="col-lg-8">
            <motion.div {...fadeUp(0.15)}>
              <div className="glass-card p-4 p-lg-5">

                {status === 'success' && (
                  <div style={{
                    background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
                    borderRadius: 12, padding: '14px 20px',
                    display: 'flex', alignItems: 'center', gap: 10,
                    color: '#34d399', fontSize: '0.92rem', fontWeight: 500, marginBottom: 24
                  }}>
                    <FiCheckCircle size={18} />
                    {USE_MAILTO_FALLBACK
                      ? 'Your email client has opened with the message pre-filled. Just hit Send!'
                      : "Message sent! I'll get back to you soon."
                    }
                  </div>
                )}

                {status === 'error' && (
                  <div style={{
                    background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)',
                    borderRadius: 12, padding: '14px 20px',
                    display: 'flex', alignItems: 'center', gap: 10,
                    color: '#f87171', fontSize: '0.92rem', fontWeight: 500, marginBottom: 24
                  }}>
                    <FiAlertCircle size={18} />
                    Something went wrong. Email me directly at{' '}
                    <a href={`mailto:${OWNER_EMAIL}`} style={{ color: '#f87171' }}>{OWNER_EMAIL}</a>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div className="row g-3 mb-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <label style={labelSt}>
                        <FiUser size={12} style={{ marginRight: 5, color: '#818cf8' }} />Name
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        value={fields.name}
                        onChange={onChange('name')}
                        onBlur={onBlur('name')}
                        placeholder="Your full name"
                        style={inputSt(touched.name && !!errors.name)}
                      />
                      {touched.name && errors.name && <span style={errSt}>{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label style={labelSt}>
                        <FiMail size={12} style={{ marginRight: 5, color: '#22d3ee' }} />Email
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        value={fields.email}
                        onChange={onChange('email')}
                        onBlur={onBlur('email')}
                        placeholder="you@example.com"
                        style={inputSt(touched.email && !!errors.email)}
                      />
                      {touched.email && errors.email && <span style={errSt}>{errors.email}</span>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label style={labelSt}>
                      <FiMessageSquare size={12} style={{ marginRight: 5, color: '#34d399' }} />Message
                    </label>
                    <textarea
                      name="message"
                      value={fields.message}
                      onChange={onChange('message')}
                      onBlur={onBlur('message')}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      style={{ ...inputSt(touched.message && !!errors.message), resize: 'vertical', minHeight: 140 }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                      {touched.message && errors.message
                        ? <span style={errSt}>{errors.message}</span>
                        : <span />
                      }
                      <span style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}>
                        {fields.message.length} chars
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      background: status === 'sending' ? 'rgba(99,102,241,0.4)' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      border: 'none', borderRadius: 10, color: '#fff',
                      fontWeight: 600, fontSize: '0.95rem', padding: '12px 32px',
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      transition: 'all 0.3s ease',
                      boxShadow: status === 'sending' ? 'none' : '0 4px 20px rgba(99,102,241,0.3)'
                    }}
                  >
                    {status === 'sending' ? (
                      <>
                        <span style={{ width: 15, height: 15, border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
                        Sending...
                      </>
                    ) : (
                      <><FiSend size={15} /> Send Message</>
                    )}
                  </button>

                  {USE_MAILTO_FALLBACK && (
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 12, marginBottom: 0 }}>
                      * This will open your email client with the message pre-filled.
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
};

const labelSt = {
  display: 'block', fontSize: '0.8rem', fontWeight: 600,
  color: '#94a3b8', marginBottom: 7, letterSpacing: '0.3px'
};

const inputSt = (hasErr) => ({
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: `1px solid ${hasErr ? '#ef4444' : 'rgba(255,255,255,0.07)'}`,
  borderRadius: 10, color: '#f0f6fc', fontSize: '0.92rem',
  padding: '11px 14px', outline: 'none',
  transition: 'border-color 0.2s ease',
  fontFamily: 'Inter, sans-serif'
});

const errSt = {
  fontSize: '0.75rem', color: '#f87171', marginTop: 4, display: 'block'
};

export default Contact;
