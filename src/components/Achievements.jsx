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
        <CardSection id="achievements">
            <div className="achievements-content">
                <div className="achievements-top-row">
                    <div className="achievements-rating-col">
                        <div className="ach-star-rating">
                            <span className="ach-stars">★★★★★</span>
                            <span className="ach-rating-text">5.0/5 rating</span>
                        </div>
                    </div>
                    <div className="achievements-title-col">
                        <h2 className="ach-section-title">
                            We are passionate about empowering individuals and <span className="ach-text-muted">businesses to take control of their finances and achieve their financial goals.</span>
                        </h2>
                    </div>
                </div>

                <div className="achievements-stats-row">
                    {achievements.map((item) => (
                        <div className="ach-stat-item" key={item.id}>
                            <h3 className="ach-stat-value">{item.value}</h3>
                            <p className="ach-stat-label">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </CardSection>
    );
};

export default Achievements;
