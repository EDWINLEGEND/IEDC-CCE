import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CardSection from './common/CardSection';
import './Hero.css';

const Hero = () => {
    return (
        <CardSection className="hero-padding" id="home">
            <div className="hero-container-split">
                <div className="hero-text-side">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="review-badge">
                            <span className="stars">★★★★★</span>
                            <span className="review-text">5.0/5 reviews</span>
                        </div>

                        <h1 className="hero-title">
                            Discover our journey and<br />what drives us
                        </h1>

                        <p className="hero-subtitle">
                            Founded by tech experts, we create cutting-edge ecosystem platforms customized for innovators and student entrepreneurs of all sizes.
                        </p>

                        <div className="hero-actions">
                            <button className="btn btn-primary rounded-pill btn-lg">
                                Get Started <ArrowRight size={16} />
                            </button>
                            <button className="btn btn-outline rounded-pill btn-lg outline-dark">
                                Free trial
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    className="hero-image-side"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Students Collaborating" className="hero-main-img" />
                </motion.div>
            </div>
        </CardSection>
    );
};

export default Hero;
