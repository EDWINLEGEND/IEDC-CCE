import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <span className="gradient-text">IEDC CCE</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/activities" onClick={() => setIsOpen(false)}>Activities</Link>
          <Link to="/ipl" onClick={() => setIsOpen(false)}>IPL 2.0</Link>
          <Link to="/startups" onClick={() => setIsOpen(false)}>Startups</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <button className="btn nav-cta">Join IEDC</button>
        </div>

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
