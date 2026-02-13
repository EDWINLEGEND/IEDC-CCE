
import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title animate-in">
                    IEDC <span className="gradient-text">CCEIJK</span>
                </h1>
                <p className="hero-subtitle animate-in delay-1">Beyond Boundaries</p>
                <div className="hero-quote animate-in delay-2">
                    "Innovation distinguishes between a leader and a follower"
                    <br />
                    <span>- Steve Jobs</span>
                </div>
                <div className="hero-actions animate-in delay-3">
                    <button className="btn primary">Get Started</button>
                    <button className="btn secondary">Learn More</button>
                </div>
            </div>
            <div className="hero-visual animate-float">
                {/* Placeholder for a 3D element or illustration */}
                <div className="circle-glow"></div>
            </div>
        </section>
    );
};

export default Hero;
