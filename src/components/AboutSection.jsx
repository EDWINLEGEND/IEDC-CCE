import React from 'react';
import CardSection from './common/CardSection';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div className="about-wrapper">
            {/* About Us Card */}
            <CardSection id="about">
                <div className="about-content-layout">
                    <div className="about-text-side">
                        <h2 className="section-title title-light">ABOUT US</h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            The Innovation and Entrepreneurship Development Centre of CCE is an organisation that aims to promote the institutional vision of transforming youngsters into technological entrepreneurs and innovative leaders.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            The initiative is to address the rising trend of corporate job culture and establish a platform to pursue ideas and businesses at an early stage. We at IEDC CCE host various workshops, speaker sessions, competitions to develop skill sets and provide essential resources to take up entrepreneurship as a career.
                        </motion.p>
                    </div>
                    <div className="about-image-side">
                        <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" alt="About Us" className="rounded-img" />
                    </div>
                </div>
            </CardSection>

            {/* Our Vision Card */}
            <CardSection id="vision">
                <div className="about-content-layout reverse">
                    <div className="about-image-side">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Our Vision" className="rounded-img" />
                    </div>
                    <div className="about-text-side">
                        <h2 className="section-title title-light">OUR VISION</h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            The Innovation and Entrepreneurship Development Centre aims to inculcate and strengthen entrepreneurial quality and motivation necessary to develop knowledge and skills among members of IEDC. We aim to impart basis managerial knowledge and understanding, which help students to formulate the effective, innovative and profitable project.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Provide information about the process, procedure and rules & regulations for setting up new projects and promote development of science and technology based enterprises.
                        </motion.p>
                    </div>
                </div>
            </CardSection>
        </div>
    );
};

export default AboutSection;
