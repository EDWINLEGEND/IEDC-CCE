
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section container" id="about">
            <div className="section-header">
                <h2 className="section-title">About <span className="gradient-text">Us</span></h2>
                <div className="underline"></div>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        The Innovation and Entrepreneurship Development Centre of CCE is an organisation that aims to promote the institutional vision of transforming youngsters into technological entrepreneurs and innovative leaders.
                    </p>
                    <p>
                        The initiative is to address the rising trend of corporate job culture and establish a platform to pursue ideas and businesses at an early stage. We at IEDC CCE host various workshops, speaker sessions, competitions to develop skill sets and provide essential resources to take up entrepreneurship as a career.
                    </p>
                </div>

                <div className="vision-box glass">
                    <h3>Our Vision</h3>
                    <p>
                        "The Innovation and Entrepreneurship Development Centre aims to inculcate and strengthen entrepreneurial quality and motivation necessary to develop knowledge and skills among members of IEDC."
                    </p>
                    <blockquote className="vision-quote">
                        "There is one thing stronger than all the armies in the world, and that is an idea whose time has come."
                        <span>- Victor Hugo</span>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
