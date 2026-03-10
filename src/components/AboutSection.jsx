import React from 'react';
import CardSection from './common/CardSection';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div className="about-wrapper" id="about">
            {/* About Us Card - Layout like Image 2 first block */}
            <CardSection>
                <div className="about-content-layout">
                    <div className="about-text-side">
                        <h2 className="section-title title-light" style={{ fontSize: '3rem', lineHeight: '1.1', textTransform: 'none', letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>
                            Discover our journey and<br />what drives us
                        </h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            The Innovation and Entrepreneurship Development Centre of CCE is an organisation that aims to promote the institutional vision of transforming youngsters into technological entrepreneurs and innovative leaders.
                        </motion.p>

                        <motion.div
                            className="hero-actions"
                            style={{ marginTop: '2rem' }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <button className="btn btn-primary rounded-pill">Get Started <i className="lucide-arrow-right" style={{ fontSize: '14px', marginLeft: '6px' }}></i></button>
                            <button className="btn btn-outline rounded-pill" style={{ color: 'var(--text-primary)', borderColor: 'rgba(0,0,0,0.15)' }}>Free trial</button>
                        </motion.div>
                    </div>

                    <div className="about-image-side">
                        <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80" alt="About Us Journey" className="rounded-img" />
                    </div>
                </div>
            </CardSection>

            {/* Our Vision Card - Layout like Image 2 middle block */}
            <CardSection id="vision">
                <div className="about-content-layout">
                    <div className="about-image-side" style={{ order: 1 }}>
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Our Vision" className="rounded-img" />
                    </div>

                    <div className="about-text-side" style={{ order: 2 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                            {/* Stat block 1 */}
                            <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '500', margin: 0, minWidth: '100px' }}>15+</h3>
                                <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}><strong style={{ color: 'var(--text-primary)' }}>Startups Incubated</strong><br />Providing early stage support and resources for innovators.</p>
                            </div>
                            {/* Stat block 2 */}
                            <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '500', margin: 0, minWidth: '100px' }}>50+</h3>
                                <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}><strong style={{ color: 'var(--text-primary)' }}>Active Projects</strong><br />Driving groundbreaking innovations and deep industry insights.</p>
                            </div>
                            {/* Stat block 3 */}
                            <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '500', margin: 0, minWidth: '100px' }}>500+</h3>
                                <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}><strong style={{ color: 'var(--text-primary)' }}>Active Members</strong><br />Serving a reliable community of brilliant student minds.</p>
                            </div>
                            {/* Stat block 4 */}
                            <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '500', margin: 0, minWidth: '100px' }}>$50k</h3>
                                <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}><strong style={{ color: 'var(--text-primary)' }}>Total Funding</strong><br />Streamlined processes delivering real financial creation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardSection>
        </div>
    );
};

export default AboutSection;
