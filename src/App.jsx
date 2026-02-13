
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';

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
    <AboutSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div style={{ paddingTop: '6rem' }}><AboutSection /></div>} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/ipl" element={<PlaceholderPage title="IPL 2.0" />} />
          <Route path="/startups" element={<PlaceholderPage title="Startups & Consultancies" />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
