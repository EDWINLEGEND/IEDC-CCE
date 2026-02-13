
import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer glass">
            <div className="container footer-content">
                <div className="footer-info">
                    <h3 className="footer-title">IEDC CCE</h3>
                    <p>Christ College of Engineering</p>
                    <p>Irinjalakuda, Kerala</p>
                </div>

                <div className="footer-socials">
                    <a href="https://m.facebook.com/iedc.cceijk/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                    <a href="https://twitter.com/CceIedc" target="_blank" rel="noopener noreferrer"><Twitter /></a>
                    <a href="https://www.youtube.com/channel/UCPquIIxMmQLepwACtmpXHOg" target="_blank" rel="noopener noreferrer"><Youtube /></a>
                    <a href="https://www.linkedin.com/company/iedccce" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                    <a href="https://www.instagram.com/iedc_cceijk/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                </div>

                <div className="footer-nav">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} IEDC CCE. All rights reserved.</p>
                <p>Designed by <a href="https://www.linkedin.com/in/pranav-madhu-a292a4200/" target="_blank" rel="noopener noreferrer" className="highlight">Pranav Madhu</a></p>
            </div>
        </footer>
    );
};

export default Footer;
