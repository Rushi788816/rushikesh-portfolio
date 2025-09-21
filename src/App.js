import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './animations.css';
import WelcomeCard from './components/WelcomeCard';

function MainContent({ showWelcome, setShowWelcome }) {
  const location = useLocation();

  // Map path to page name
  const pageNames = {
    '/about': 'About',
    '/experience': 'Experience',
    // '/certifications': 'Certifications',
    '/skills': 'Skills',
    '/projects': 'Projects'
  };

  const currentPage = pageNames[location.pathname] || 'Portfolio';

  // Hide WelcomeCard when route changes (except root "/")
  React.useEffect(() => {
    if (location.pathname !== "/") {
      setShowWelcome(false);
    }
  }, [location.pathname, setShowWelcome]);

  return (
    <main className="container my-4 main-content">
      <div className="section-container">
        {/* Show page name only if not on root */}

        {showWelcome ? (
          <WelcomeCard onEnter={() => setShowWelcome(false)} />
        ) : (
          <AppRoutes />
        )}
      </div>
    </main>
  );
}

function AppWithRouter() {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleNameClick = () => {
    setShowWelcome(true);
    navigate("/"); // Go to root
  };

  return (
    <div id="root">
      <div className="app-container">
        <Header onNameClick={handleNameClick} />
        <MainContent showWelcome={showWelcome} setShowWelcome={setShowWelcome} />
        <Footer />
        <div className="floating-actions">
          <button className="fab" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑
          </button>
        </div>
      </div>
    </div>

  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <h3 className="loading-text">Loading Portfolio...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <BrowserRouter>
        <AppWithRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;