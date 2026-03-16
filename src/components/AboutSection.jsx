import React from 'react';
import CardSection from './common/CardSection';
import BlurredStagger from './common/BlurredStagger';
import { motion } from 'framer-motion';
import './AboutSection.css';

const slideUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-8% 0px' },
    transition: { duration: 0.55, ease: 'easeOut', delay },
});

const AboutSection = () => {
    return (
        <CardSection id="about">
            {/* Section header */}
            <div style={{ marginBottom: '4rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <motion.p
                    style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}
                    {...slideUp(0)}
                >
                    IEDC CCE Foundation
                </motion.p>

                {/* Major title — BlurredStagger */}
                <h2 className="about-section-heading" style={{ fontSize: '4rem', letterSpacing: '-2px', fontWeight: '700', lineHeight: '1.1' }}>
                    <BlurredStagger
                        text="One open, connected, and"
                        scrollBased={true}
                        stagger={0.02}
                        duration={0.4}
                        delay={0.05}
                    />
                    <br />
                    <BlurredStagger
                        text="context-aware foundation"
                        scrollBased={true}
                        stagger={0.02}
                        duration={0.4}
                        delay={0.25}
                    />
                </h2>
            </div>

            <div className="bento-grid-about">
                {/* Big Left Card - About Us */}
                <motion.div className="bento-card main-about-card" {...slideUp(0.1)}>
                    <div style={{ zIndex: 2, position: 'relative' }}>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: '600', color: 'white', marginBottom: '1.5rem', letterSpacing: '-1px' }}>About Us</h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            The Innovation and Entrepreneurship Development Centre of CCE is an organisation that aims to promote the institutional vision of transforming youngsters into technological entrepreneurs and innovative leaders.
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            The initiative is to address the rising trend of corporate job culture and establish a platform to pursue ideas and businesses at an early stage. We at IEDC CCE host various workshops, speaker sessions, competitions to develop skill sets and provide essential resources to take up entrepreneurship as a career.
                        </p>
                    </div>
                </motion.div>

                {/* Right vertical cards - Vision */}
                <motion.div className="bento-card vision-card v-card-1" {...slideUp(0.2)}>
                    <h4 style={{ fontSize: '1.8rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>Our Vision</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                        The Innovation and Entrepreneurship Development Centre aims to inculcate and strengthen entrepreneurial quality and motivation necessary to develop knowledge and skills among members of IEDC.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        We aim to impart basis managerial knowledge and understanding, which help students to formulate the effective, innovative and profitable project.
                    </p>
                </motion.div>

                <motion.div className="bento-card vision-card v-card-2" {...slideUp(0.3)}>
                    <h4 style={{ fontSize: '1.6rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>Science & Technology</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        Provide information about the process, procedure and rules & regulations for setting up new projects and promote development of science and technology based enterprises.
                    </p>
                </motion.div>
            </div>
        </CardSection>
    );
};

export default AboutSection;
