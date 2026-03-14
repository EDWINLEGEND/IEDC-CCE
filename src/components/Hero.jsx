import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CardSection from './common/CardSection';
import BlurredStagger from './common/BlurredStagger';
import IEDCButton from './common/IEDCButton';
import './Hero.css';

/* Reusable fade+blur in variant for subtitle/button */
const blurFadeIn = (delay = 0) => ({
    initial: { opacity: 0, filter: 'blur(8px)', y: 10 },
    animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
    transition: { duration: 0.65, ease: 'easeOut', delay },
});

const Hero = () => {
    return (
        <CardSection className="hero-padding" id="home">
            <div className="hero-container">
                <div className="hero-top-row">

                    {/* Title with BlurredStagger per-character animation */}
                    <div className="hero-title-col">
                        <h1 className="hero-title">
                            <BlurredStagger
                                text="Innovation &"
                                className="hero-stagger-line"
                                scrollBased={false}
                                stagger={0.03}
                                duration={0.5}
                                delay={0.05}
                            />
                            <br />
                            <BlurredStagger
                                text="entrepreneurship"
                                className="hero-stagger-line"
                                scrollBased={false}
                                stagger={0.025}
                                duration={0.5}
                                delay={0.3}
                            />
                        </h1>
                    </div>

                    {/* Right column: CTA + subtitle */}
                    <div className="hero-action-col">
                        {/* Button blur-fades in */}
                        <motion.div
                            className="hero-actions"
                            {...blurFadeIn(0.65)}
                        >
                            <IEDCButton
                                to="/contact"
                                size="lg"
                                icon={<ArrowRight size={16} />}
                                className="hero-join-btn"
                            >
                                Join the Community
                            </IEDCButton>
                        </motion.div>

                        {/* Subtitle blur-fades in slightly after button */}
                        <motion.p
                            className="hero-subtitle"
                            {...blurFadeIn(0.85)}
                        >
                            IEDC CCE is a student-led innovation hub at Christ College of Engineering — fostering entrepreneurship, incubating startups, and empowering the next generation of builders and leaders.
                        </motion.p>
                    </div>
                </div>

                {/* Hero Image */}
                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                        alt="IEDC CCE Students Collaborating"
                        className="hero-main-img"
                    />
                </motion.div>
            </div>
        </CardSection>
    );
};

export default Hero;
