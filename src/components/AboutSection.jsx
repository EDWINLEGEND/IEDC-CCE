import React from 'react';
import CardSection from './common/CardSection';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <CardSection id="about">
            <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>IEDC CCE Foundation</p>
                <h2 className="about-section-heading" style={{ fontSize: '4rem', letterSpacing: '-2px', fontWeight: '700', lineHeight: '1.1' }}>
                    One open, connected, and context-aware foundation
                </h2>
            </div>

            <div className="bento-grid-about">
                {/* Big Left Card - About Us */}
                <div className="bento-card main-about-card">
                    <div style={{ zIndex: 2, position: 'relative' }}>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: '600', color: 'white', marginBottom: '1.5rem', letterSpacing: '-1px' }}>About Us</h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            The Innovation and Entrepreneurship Development Centre of CCE is an organisation that aims to promote the institutional vision of transforming youngsters into technological entrepreneurs and innovative leaders.
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            The initiative is to address the rising trend of corporate job culture and establish a platform to pursue ideas and businesses at an early stage. We at IEDC CCE host various workshops, speaker sessions, competitions to develop skill sets and provide essential resources to take up entrepreneurship as a career.
                        </p>
                    </div>
                    {/* Background subtle elements can go here if needed */}
                </div>

                {/* Right vertical cards - Vision */}
                <div className="bento-card vision-card v-card-1">
                    <h4 style={{ fontSize: '1.8rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>Our Vision</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                        The Innovation and Entrepreneurship Development Centre aims to inculcate and strengthen entrepreneurial quality and motivation necessary to develop knowledge and skills among members of IEDC.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        We aim to impart basis managerial knowledge and understanding, which help students to formulate the effective, innovative and profitable project.
                    </p>
                </div>

                <div className="bento-card vision-card v-card-2">
                    <h4 style={{ fontSize: '1.6rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>Science & Technology</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        Provide information about the process, procedure and rules & regulations for setting up new projects and promote development of science and technology based enterprises.
                    </p>
                </div>
            </div>
        </CardSection>
    );
};

export default AboutSection;
