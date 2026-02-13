
import React from 'react';
import './ContactPage.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="contact-page container">
            <h1 className="contact-title gradient-text">Contact Us</h1>
            <div className="contact-container">
                <div className="contact-info glass">
                    <h3>Get in Touch</h3>
                    <p>Have any questions or need to get in touch? Use the form below or reach out directly.</p>

                    <div className="info-item">
                        <MapPin className="icon" />
                        <div>
                            <h4>Address</h4>
                            <p>Christ College of Engineering, Irinjalakuda, Kerala</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Mail className="icon" />
                        <div>
                            <h4>Email</h4>
                            <p>iedc@cce.edu.in</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Phone className="icon" />
                        <div>
                            <h4>Phone</h4>
                            <p>+91 123 456 7890</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form glass">
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
                    <button type="submit" className="submit-btn btn">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
