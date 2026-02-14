
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="hero-section">
            <div className="hero-container container">

                {/* Main Text Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ y: y1 }}
                >
                    <motion.h1 className="hero-title">
                        <span className="text-white block">INNOVATION &</span>
                        <span className="text-gold block">ENTREPRENEURSHIP</span>
                    </motion.h1>

                    <motion.div
                        className="hero-subtitle-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="subtitle-divider"></div>
                        <p className="hero-subtitle">
                            Create. Innovate. Inspire. Transforming students into future leaders.
                            <br />
                            Join the movement at CCE.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <span>Scroll to explore</span>
                    <ArrowDown size={16} className="animate-bounce" />
                </motion.div>

                {/* Brand Badge - Rotating Circle - Bottom Corner */}
                <div className="brand-badge-container">
                    <div className="brand-badge">
                        <svg viewBox="0 0 100 100" width="120" height="120">
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

            </div>
        </section>
    );
};

export default Hero;
