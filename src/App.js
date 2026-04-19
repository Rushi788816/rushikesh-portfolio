import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './animations.css';
import WelcomeCard from './components/WelcomeCard';

function MainContent({ showWelcome, setShowWelcome }) {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname !== "/") {
      setShowWelcome(false);
    }
  }, [location.pathname, setShowWelcome]);

  return (
    <main className="main-content">
      <div className="section-container">
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
    navigate("/");
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
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner" />
          <p className="loading-text">Rushikesh Sonar · Portfolio</p>
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
