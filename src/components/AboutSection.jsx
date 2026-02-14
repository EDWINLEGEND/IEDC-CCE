
import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div className="info-sections-wrapper">

            {/* About Us Section - Text Left, Image Right */}
            <section className="split-section" id="about">
                <div className="container split-container reverse-layout">
                    <div className="split-content">
                        <div style={{ display: 'inline-block' }}>
                            <h2 className="info-title">ABOUT US</h2>
                            <motion.div
                                className="info-underline"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            ></motion.div>
                        </div>
                        <div className="info-text">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                The Innovation and Entrepreneurship Development Centre of CCE is an organisation that aims to promote the institutional vision of transforming youngsters into technological entrepreneurs and innovative leaders.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                The initiative is to address the rising trend of corporate job culture and establish a platform to pursue ideas and businesses at an early stage. We at IEDC CCE host various workshops, speaker sessions, competitions to develop skill sets and provide essential resources to take up entrepreneurship as a career.
                            </motion.p>
                        </div>
                    </div>
                    <div className="split-image-wrapper">
                        <div className="split-image about-img"></div>
                    </div>
                </div>
            </section>

            {/* Our Vision Section - Image Left, Text Right (Reversed) */}
            <section className="split-section" id="vision">
                <div className="container split-container reverse-layout">
                    <div className="split-image-wrapper">
                        <div className="split-image vision-img"></div>
                    </div>
                    <div className="split-content">
                        <div style={{ display: 'inline-block' }}>
                            <h2 className="info-title">OUR VISION</h2>
                            <motion.div
                                className="info-underline"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            ></motion.div>
                        </div>
                        <div className="info-text">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                The Innovation and Entrepreneurship Development Centre aims to inculcate and strengthen entrepreneurial quality and motivation necessary to develop knowledge and skills among members of IEDC. We aim to impart basis managerial knowledge and understanding, which help students to formulate the effective, innovative and profitable project.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Provide information about the process, procedure and rules & regulations for setting up new projects and promote development of science and technology based enterprises.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutSection;
