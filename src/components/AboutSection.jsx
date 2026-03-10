import React from 'react';
import CardSection from './common/CardSection';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div className="about-wrapper" id="about">

            {/* ---- ABOUT US Card ---- */}
            <CardSection>
                <div className="about-content-layout">
                    {/* Left: Image */}
                    <div className="about-image-side">
                        <img
                            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
                            alt="IEDC CCE Workshop Session"
                            className="rounded-img"
                        />
                    </div>

                    {/* Right: Text */}
                    <div className="about-text-side">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="about-section-heading">About Us</h2>
                            <p>
                                The Innovation and Entrepreneurship Development Centre of CCE is an
                                organisation that aims to promote the institutional vision of transforming
                                youngsters into technological entrepreneurs and innovative leaders.
                            </p>
                            <p>
                                The initiative is to address the rising trend of corporate job culture and
                                establish a platform to pursue ideas and businesses at an early stage. We at
                                IEDC CCE host various workshops, speaker sessions, competitions to develop
                                skill sets and provide essential resources to take up entrepreneurship as a career.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </CardSection>

            {/* ---- OUR VISION Card ---- */}
            <CardSection id="vision">
                <div className="about-content-layout about-content-layout--reverse">
                    {/* Left: Text */}
                    <div className="about-text-side">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="about-section-heading">Our Vision</h2>
                            <p>
                                The Innovation and Entrepreneurship Development Centre aims to inculcate
                                and strengthen entrepreneurial quality and motivation necessary to develop
                                knowledge and skills among members of IEDC. We aim to impart basis
                                managerial knowledge and understanding, which help students to formulate
                                the effective, innovative and profitable project.
                            </p>
                            <p>
                                Provide information about the process, procedure and rules &amp; regulations
                                for setting up new projects and promote development of science and
                                technology based enterprises.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Image */}
                    <div className="about-image-side">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                            alt="IEDC Vision - Innovation Meeting"
                            className="rounded-img"
                        />
                    </div>
                </div>
            </CardSection>

        </div>
    );
};

export default AboutSection;
