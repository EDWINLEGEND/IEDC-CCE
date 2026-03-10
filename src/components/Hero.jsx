import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import CardSection from './common/CardSection';
import './Hero.css';

const Hero = () => {
    return (
        <CardSection className="hero-padding" id="home">
            <div className="hero-container">
                <div className="hero-top-row">
                    <motion.div
                        className="hero-title-col"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="hero-title">
                            <span className="title-light">Innovation &</span>
                            <br />
                            <span className="title-light">entrepreneurship</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        className="hero-action-col"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="hero-actions">
                            <button className="btn btn-primary rounded-pill btn-lg">Get Started <ArrowRight size={16} style={{ display: 'inline', marginLeft: '6px' }} /></button>
                            <button className="btn btn-outline rounded-pill btn-lg">Free trial</button>
                        </div>
                        <p className="hero-subtitle">
                            Create, innovate, and inspire. Transforming students into future leaders. Founded by tech experts, we create cutting-edge ecosystems tailored for innovators of all sizes.
                        </p>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" alt="Students Collaborating" className="hero-main-img" />

                    <div className="brand-badge-container">
                        <div className="brand-badge">
                            <svg viewBox="0 0 100 100" width="100" height="100">
                                <defs>
                                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                </defs>
                                <text fontSize="11.5">
                                    <textPath xlinkHref="#circle" className="badge-text">
                                        IEDC CCE • INNOVATION • ENTREPRENEURSHIP •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="badge-center">
                                <span>JOIN</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </CardSection>
    );
};

export default Hero;
