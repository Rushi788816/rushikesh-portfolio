import React from 'react';
import certifications from '../data/certifications';

const Certifications = () => {
  return (
    <section className="p-4">
      <h2>Certifications</h2>
      <div className="d-flex flex-wrap gap-3">
        {certifications.map(cert => (
          <div key={cert.id} className="border rounded p-3 shadow-sm" style={{ width: 250 }}>
            <img src={cert.image} alt={cert.title} style={{ width: '100%', height: 'auto' }} />
            <h5 className="mt-2">{cert.title}</h5>
            <p><strong>{cert.issuer}</strong> - {cert.date}</p>
            <p>Credential ID: {cert.credential}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;