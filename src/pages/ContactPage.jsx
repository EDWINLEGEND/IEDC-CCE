import React from 'react';
import CardSection from '../components/common/CardSection';
import './ContactPage.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div style={{ paddingTop: '8rem' }}>
            <CardSection>
                <div className="contact-grid">
                    {/* Left: Info */}
                    <div className="contact-info-side">
                        <h2 className="about-section-heading" style={{ marginBottom: '2rem' }}>Contact Us</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '400px' }}>
                            Have any questions or need to get in touch? Use the form or reach out directly.
                        </p>

                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <div className="contact-icon-wrapper">
                                    <MapPin size={24} color="var(--accent-gold)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-primary)' }}>Address</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Christ College of Engineering, Irinjalakuda, Kerala</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon-wrapper">
                                    <Mail size={24} color="var(--accent-gold)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-primary)' }}>Email</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>iedc@cce.edu.in</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon-wrapper">
                                    <Phone size={24} color="var(--accent-gold)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-primary)' }}>Phone</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>+91 123 456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="contact-form-side">
                        <form className="contact-form-box">
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-primary)' }}>Send a Message</h3>

                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="How can we help you?" rows="5"></textarea>
                            </div>
                            <button type="button" className="btn btn-primary rounded-pill btn-full">
                                Send Message <Send size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </CardSection>
        </div>
    );
};

export default ContactPage;
