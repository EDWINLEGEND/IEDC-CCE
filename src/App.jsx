
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import TBIPage from './pages/TBIPage';

import EngraversPage from './pages/EngraversPage';
import HobbyHubPage from './pages/HobbyHubPage';
import NotFoundPage from './pages/NotFoundPage';
import RulesPage from './pages/RulesPage';
import ScrollingRibbon from './components/common/ScrollingRibbon';
import { useEffect } from 'react';
import Lenis from 'lenis';

// Simple placeholder for pages not fully implemented
const PlaceholderPage = ({ title }) => (
  <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
    <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{title}</h1>
    <p style={{ color: 'var(--text-secondary)' }}>Content coming soon...</p>
  </div>
);

const Home = () => (
  <>
    <Hero />
    <Achievements />
    <AboutSection />
  </>
);

import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div style={{ paddingTop: '6rem' }}><AboutSection /></div>} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/ipl" element={<PlaceholderPage title="IPL 2.0" />} />

            <Route path="/tbi" element={<TBIPage />} />
            <Route path="/startups/engravers" element={<EngraversPage />} />
            <Route path="/startups/hobbyhub" element={<HobbyHubPage />} />

            <Route path="/rules" element={<RulesPage />} />
            <Route path="/nisp" element={<PlaceholderPage title="NISP" />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ScrollingRibbon />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
