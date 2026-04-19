import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload, FiArrowRight } from "react-icons/fi";
import profile from "../assets/images/profile.jpg";

const roles = [
  "Full Stack Developer",
  "React.js Developer",
  "Laravel / PHP Developer",
  "REST API Specialist"
];

const techStack = [
  { name: "React.js", color: "#61dafb" },
  { name: "Laravel", color: "#f05340" },
  { name: "PHP", color: "#7a86b8" },
  { name: "Node.js", color: "#68a063" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Redux", color: "#764abc" }
];

const WelcomeCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 45 : 75;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      className="min-vh-100 d-flex align-items-center position-relative"
      style={{ padding: "80px 0 60px" }}
    >
      {/* Ambient background blobs */}
      <div className="position-absolute" style={{ inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          top: "-100px", left: "-150px", filter: "blur(40px)"
        }} />
        <div style={{
          position: "absolute", width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          top: "10%", right: "-100px", filter: "blur(40px)"
        }} />
        <div style={{
          position: "absolute", width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          bottom: "5%", left: "30%", filter: "blur(40px)"
        }} />
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">

          {/* ── LEFT: Text Content ── */}
          <div className={`col-lg-7 ${isVisible ? "animate-fade-in-left" : ""}`}>

            {/* Available Badge */}
            <div className="mb-4">
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
                color: "#34d399", fontSize: "0.82rem", fontWeight: 600,
                padding: "6px 16px", borderRadius: 50, letterSpacing: "0.3px"
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#10b981",
                  animation: "pulse-dot 2s infinite",
                  display: "inline-block"
                }} />
                Open to opportunities
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f0f6fc",
              marginBottom: "12px"
            }}>
              Hi, I'm{" "}
              <span className="gradient-text">Rushikesh Sonar</span>
            </h1>

            {/* Typed Role */}
            <div style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 600,
              color: "#94a3b8",
              marginBottom: "24px",
              minHeight: "2rem"
            }}>
              <span className="gradient-text-cyan">{displayText}</span>
              <span style={{
                display: "inline-block",
                width: 2, height: "1em",
                background: "#06b6d4",
                marginLeft: 2,
                verticalAlign: "middle",
                animation: "blink-caret 0.75s step-end infinite"
              }} />
            </div>

            {/* Bio */}
            <p style={{
              fontSize: "1rem",
              color: "#94a3b8",
              lineHeight: 1.75,
              maxWidth: 560,
              marginBottom: "28px"
            }}>
              Full Stack Developer with <strong style={{ color: "#f0f6fc" }}>2+ years</strong> of experience
              building production-grade apps using React.js & PHP/Laravel. Passionate about{" "}
              <strong style={{ color: "#818cf8" }}>clean code</strong>, scalable architecture, and
              turning ideas into impactful products.
            </p>

            {/* Location / Email quick info */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <span className="contact-link" style={{ color: "#64748b", fontSize: "0.88rem" }}>
                <FiMapPin size={14} style={{ color: "#6366f1" }} />
                Pune, Maharashtra, India
              </span>
              <a href="mailto:rushikeshsonar348@gmail.com" className="contact-link" style={{ color: "#64748b", fontSize: "0.88rem" }}>
                <FiMail size={14} style={{ color: "#06b6d4" }} />
                rushikeshsonar348@gmail.com
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-5">
              <button
                className="btn-primary-custom d-inline-flex align-items-center gap-2"
                onClick={() => navigate("/projects")}
              >
                View My Work
                <FiArrowRight size={16} />
              </button>
              <a
                href="/Rushikesh Sonar Resume.pdf"
                download="Rushikesh_Sonar_Resume.pdf"
                className="btn-outline-custom d-inline-flex align-items-center gap-2"
                style={{ textDecoration: "none" }}
              >
                <FiDownload size={15} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/rushikesh-sonar-771636187/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/Rushi788816"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="mailto:rushikeshsonar348@gmail.com"
                className="social-icon-btn"
                title="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Profile Visual ── */}
          <div className={`col-lg-5 d-none d-lg-flex justify-content-center ${isVisible ? "animate-fade-in-right" : ""}`}>
            <div className="position-relative" style={{ width: 340, height: 340 }}>

              {/* Rotating ring */}
              <div style={{
                position: "absolute", inset: -16, borderRadius: "50%",
                border: "2px dashed rgba(99,102,241,0.2)",
                animation: "spin 20s linear infinite"
              }} />
              {/* Glowing ring */}
              <div style={{
                position: "absolute", inset: -4, borderRadius: "50%",
                background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, transparent, #6366f1)",
                padding: 2,
                animation: "spin 6s linear infinite"
              }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--bg-primary)" }} />
              </div>

              {/* Profile Image */}
              <img
                src={profile}
                alt="Rushikesh Sonar"
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid var(--bg-primary)",
                  zIndex: 2
                }}
              />

              {/* Glow behind image */}
              {/* <div style={{
                position: "absolute", inset: 10, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent 70%)",
                zIndex: 1, filter: "blur(20px)"
              }} /> */}

              {/* Floating Tech Badges */}
              {/* {techStack.map((tech, i) => {
                const angles = [0, 60, 120, 180, 240, 300];
                const radius = 230;
                const angle = (angles[i] * Math.PI) / 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div
                    key={tech.name}
                    className="stagger-item"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      background: "rgba(13, 18, 36, 0.95)",
                      border: `1px solid ${tech.color}30`,
                      borderRadius: 8,
                      padding: "5px 12px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: tech.color,
                      whiteSpace: "nowrap",
                      zIndex: 3,
                      boxShadow: `0 4px 12px rgba(0,0,0,0.4), 0 0 8px ${tech.color}20`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  >
                    {tech.name}
                  </div>
                );
              })} */}
            </div>
          </div>

        </div>

        {/* ── Stats Row ── */}
        <div className={`row g-3 mt-5 ${isVisible ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.4s" }}>
          {[
            { value: "2+", label: "Years Experience" },
            { value: "22+", label: "APIs Built" },
            { value: "3", label: "Live Projects" },
            { value: "1000+", label: "Users Served" }
          ].map((stat) => (
            <div key={stat.label} className="col-6 col-md-3">
              <div className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink-caret {
          50% { opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
          50%       { box-shadow: 0 0 0 5px rgba(16,185,129,0); }
        }
      `}</style>
    </section>
  );
};

export default WelcomeCard;
