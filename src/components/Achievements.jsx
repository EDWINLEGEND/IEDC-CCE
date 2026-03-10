import React from 'react';
import CardSection from './common/CardSection';
import './Achievements.css';

const achievements = [
    { id: 1, title: "Startups Incubated, providing early stage support and resources for innovators.", value: "15+" },
    { id: 2, title: "Active Projects, driving groundbreaking innovations and deep industry insights.", value: "50+" },
    { id: 3, title: "Active Members, serving a reliable community of brilliant student minds.", value: "500+" },
    { id: 4, title: "Total Funding, delivering streamlined processes for real financial creation.", value: "$50k" },
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
                        <h2 className="section-title title-light" style={{ fontSize: '3.5rem', fontWeight: '500', lineHeight: '1.05', textTransform: 'none', letterSpacing: '-1.5px', margin: '0' }}>
                            We are passionate about empowering individuals and <span style={{ color: 'var(--text-secondary)' }}>businesses to take control of their finances and achieve their financial goals.</span>
                        </h2>
                    </div>
                </div>

                <div className="achievements-stats" style={{ borderTop: 'none', marginTop: '3.5rem', padding: '0' }}>
                    {achievements.map((item) => (
                        <div className="stat-item" key={item.id} style={{ maxWidth: '280px' }}>
                            <h3 className="stat-value" style={{ color: 'var(--text-primary)', fontSize: '4rem', fontWeight: '500', letterSpacing: '-2px' }}>{item.value}</h3>
                            <p className="stat-label" style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </CardSection>
    );
};

export default Achievements;
