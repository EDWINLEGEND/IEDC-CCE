
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div className="info-sections-wrapper">
            {/* About Us Section */}
            <section className="info-section about-bg" id="about">
                <div className="info-overlay"></div>
                <div className="container info-container">
                    <div className="info-content">
                        <h2 className="info-title">ABOUT US</h2>
                        <div className="info-underline"></div>
                        <div className="info-text">
                            <p>
                                The Innovation and Entrepreneurship Development Centre of CCE is an organisation that aims to promote the institutional vision of transforming youngsters into technological entrepreneurs and innovative leaders.
                            </p>
                            <p>
                                The initiative is to address the rising trend of corporate job culture and establish a platform to pursue ideas and businesses at an early stage. We at IEDC CCE host various workshops, speaker sessions, competitions to develop skill sets and provide essential resources to take up entrepreneurship as a career.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="info-section vision-bg" id="vision">
                <div className="info-overlay"></div>
                <div className="container info-container">
                    <div className="info-content">
                        <h2 className="info-title">OUR VISION</h2>
                        <div className="info-underline"></div>
                        <div className="info-text">
                            <p>
                                The Innovation and Entrepreneurship Development Centre aims to inculcate and strengthen entrepreneurial quality and motivation necessary to develop knowledge and skills among members of IEDC. We aim to impart basis managerial knowledge and understanding, which help students to formulate the effective, innovative and profitable project.
                            </p>
                            <p>
                                Provide information about the process, procedure and rules & regulations for setting up new projects and promote development of science and technology based enterprises.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
