import React from 'react';
import profile from "../assets/images/profile.jpg"
import about from '../data/about';

const About = () => {
  return (
    <section className="p-4">
      <div className="text-center mb-5">
        <div className="underline mx-auto"></div>
      </div>

      <div className="row align-items-center">
        <div className="col-lg-4 text-center mb-4">
          <div className="profile-container">
            <img
              src={profile}
              alt="Rushikesh Sonar"
              className="profile-image img-fluid rounded-circle shadow-lg"
              style={{ width: 250, height: 250, objectFit: 'cover' }}
            />
            <div className="profile-overlay">
              <div className="social-links mt-4">
                <a href={about.linkedin} className="btn btn-outline-primary btn-sm me-2 btn-animated" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={about.github} className="btn btn-outline-dark btn-sm me-2 btn-animated" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="animated-card glass-card p-4 h-100">
            <h3 className="gradient-text mb-2">{about.name}</h3>
            <h5 className="text-muted mb-4">{about.title}</h5>
            <p className="lead mb-4">{about.bio}</p>

            {/* Stats Section */}
            <div className="row mb-4">
              <div className="col-md-4 text-center stagger-item">
                <div className="stat-card p-3">
                  <h3 className="gradient-text mb-0">{about.yearsOfExperience}+</h3>
                  <small className="text-muted">Years Experience</small>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <strong>📧 Email:</strong>
                  <a href={`mailto:${about.email}`} className="ms-2 text-decoration-none">{about.email}</a>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>📱 Phone:</strong> <span className="ms-2">{about.phone}</span>
                </div>
                <div className="col-md-6 mb-2">
                  <strong>📍 Location:</strong> <span className="ms-2">{about.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download CV Button */}
      <div className="text-center mt-5">
        <button className="btn btn-lg btn-gradient btn-animated">
          📄 Download CV
        </button>
      </div>
    </section>
  );
};

export default About;