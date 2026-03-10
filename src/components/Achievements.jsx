import React from 'react';
import CardSection from './common/CardSection';
import './Achievements.css';

const achievements = [
    { id: 1, title: "Best IEDC Award", year: "2023", image: "https://images.unsplash.com/photo-1607004468138-e7e23ea26947?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Innovation Summit", year: "2022", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Hackathon Winners", year: "2023", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Startup Grant", year: "2021", image: "https://images.unsplash.com/photo-1559136555-930d72f1861a?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Tech Excellence", year: "2022", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" },
];

const Achievements = () => {
    return (
        <CardSection className="achievements-section" id="achievements">
            <div className="achievements-content">
                <div className="achievements-header" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', borderBottom: 'none' }}>
                    <div style={{ flex: '0.4' }}>
                        <div className="star-rating" style={{ display: 'inline-block', backgroundColor: '#fff', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                            <span style={{ color: '#fcb900', marginRight: '5px' }}>★★★★★</span>
                            <span style={{ color: 'var(--text-secondary)' }}>5.0/5 rating</span>
                        </div>
                    </div>
                    <div style={{ flex: '1.2' }}>
                        <h2 className="section-title title-light" style={{ fontSize: '3rem', lineHeight: '1.1', textTransform: 'none', letterSpacing: '-1px', margin: '0' }}>
                            We are passionate about empowering individuals and <span style={{ color: 'var(--text-secondary)' }}>students to take control of their careers and achieve their goals.</span>
                        </h2>
                    </div>
                </div>

                <div className="achievements-stats" style={{ borderTop: 'none', marginTop: '4rem', padding: '0' }}>
                    {achievements.slice(0, 4).map((item) => (
                        <div className="stat-item" key={item.id}>
                            <h3 className="stat-value" style={{ color: 'var(--text-primary)', fontSize: '3.5rem', fontWeight: '500' }}>{item.year}</h3>
                            <p className="stat-label" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </CardSection>
    );
};

export default Achievements;
