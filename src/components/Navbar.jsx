
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'} ${prevScrollPos > 50 ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">

        {/* Logo Section */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            <span className="logo-bold">IEDC</span>
            <span className="logo-thin">| CCE</span>
          </Link>
        </div>

        {/* Main Navigation - Desktop */}
        <div className="nav-links-desktop">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/activities" className="nav-link">Activities</Link>
          <Link to="/ipl" className="nav-link">IPL 2.0</Link>
          <Link to="/startups" className="nav-link">Startups and Consultancies</Link>
          <Link to="/rules" className="nav-link">Rules and Regulations</Link>
          <Link to="/nisp" className="nav-link">NISP</Link>
          <Link to="/tbi" className="nav-link">TBI</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>

        {/* CTA Buttons - Desktop */}
        <div className="nav-actions-desktop">
          <button className="btn btn-yellow">JOIN IEDC</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/activities" onClick={() => setIsOpen(false)}>Activities</Link>
            <Link to="/ipl" onClick={() => setIsOpen(false)}>IPL 2.0</Link>
            <Link to="/startups" onClick={() => setIsOpen(false)}>Startups</Link>
            <Link to="/rules" onClick={() => setIsOpen(false)}>Rules</Link>
            <Link to="/nisp" onClick={() => setIsOpen(false)}>NISP</Link>
            <Link to="/tbi" onClick={() => setIsOpen(false)}>TBI</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="mobile-actions">
              <button className="btn btn-yellow">JOIN IEDC</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
