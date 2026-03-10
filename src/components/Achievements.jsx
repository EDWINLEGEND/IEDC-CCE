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
                <div className="achievements-header">
                    <h2 className="section-title title-light">
                        OUR <span className="text-gold">ACHIEVEMENTS</span>
                    </h2>
                    <p className="section-desc">Milestones that define our journey of excellence.</p>
                </div>

                <div className="achievements-stats">
                    {achievements.map((item) => (
                        <div className="stat-item" key={item.id}>
                            <h3 className="stat-value text-gold">{item.year}</h3>
                            <p className="stat-label">{item.title}</p>
                        </div>
                    ))}
                </div>

                <div className="achievements-gallery">
                    {achievements.slice(0, 4).map((item) => (
                        <div className="gallery-img-wrapper" key={`img-${item.id}`}>
                            <img src={item.image} alt={item.title} className="gallery-img" />
                        </div>
                    ))}
                </div>
            </div>
        </CardSection>
    );
};

export default Achievements;
