import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import profile from '../assets/images/profile.jpg';

const sections = [
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  // { name: 'Certifications', path: '/certifications' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' }
];

const Header = ({ onNameClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      expand="md"
      className="px-3 py-2 header-gradient shadow-lg"
      style={{
        borderRadius: '0 0 20px 20px',
        minHeight: '70px',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <NavbarBrand href="#" className="d-flex align-items-center" onClick={onNameClick} style={{ cursor: 'pointer' }}>
        <img
          src={profile}
          alt="Logo"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            marginRight: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        />
        <span className="fw-bold gradient-text" style={{ fontSize: '1.4rem', letterSpacing: '1px' }}>
          Rushikesh Sonar
        </span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="ms-auto" />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ms-auto">
          {sections.map(section => (
            <NavItem key={section.name}>
              <Link
                to={section.path}
                className={`nav-link nav-link-custom${location.pathname === section.path && location.pathname !== "/" ? ' active' : ''}`}
                style={{
                  fontWeight: location.pathname === section.path && location.pathname !== "/" ? 'bold' : 'normal',
                  color: location.pathname === section.path && location.pathname !== "/" ? '#fff' : '#e3e3e3',
                  background: location.pathname === section.path && location.pathname !== "/" 
                    ? 'linear-gradient(90deg, #1565c0 0%, #90caf9 100%)'
                    : 'transparent',
                  borderRadius: '20px',
                  padding: '8px 18px',
                  margin: '0 4px',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}
                onClick={() => setIsOpen(false)}
              >
                {section.name}
              </Link>
            </NavItem>
          ))}
          <NavItem className="d-md-none mt-2">
            <DarkModeToggle />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;