import React from 'react';
import CardSection from './common/CardSection';
import './RecentEvents.css';

const events = [
    { id: 1, tag: "Startups & Funding", value: "15+", title: "Startups Incubated", desc: "Providing early stage support", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=600&q=80" },
    { id: 2, tag: "Innovation Projects", value: "50+", title: "Active Projects", desc: "Driving groundbreaking industry insights", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" },
    { id: 3, tag: "Community Building", value: "500+", title: "Active Members", desc: "A reliable community of brilliant minds", img: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=600&q=80" },
    { id: 4, tag: "Financial Creation", value: "$50k", title: "Total Funding", desc: "Delivering streamlined processes", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80" },
];

const RecentEvents = () => {
    return (
        <CardSection id="recent-events">
            <div className="recent-events-gallery-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--text-primary)', maxWidth: '800px', lineHeight: '1.1', letterSpacing: '-1.5px' }}>
                    Recent Events
                </h2>
                {/* Optional side button */}
                <button className="btn btn-primary rounded-pill" style={{ padding: '0.8rem 1.8rem' }}>View All Events →</button>
            </div>

            {/* Horizontal scrolling gallery wrapper */}
            <div className="gallery-scroll-container">
                {events.map((event) => (
                    <div className="gallery-card" key={event.id}>
                        {/* Event Image */}
                        <div className="gallery-img-wrapper">
                            <img src={event.img} alt={event.title} className="gallery-img" />
                        </div>

                        {/* Event Stats */}
                        <div className="gallery-stats-row">
                            <h3 className="gallery-stat-value">{event.value}</h3>
                            <div className="gallery-stat-desc">
                                <strong>{event.title}</strong>
                                <p>{event.desc}</p>
                            </div>
                        </div>

                        {/* Tag */}
                        <div className="gallery-tag">
                            {event.tag}
                        </div>
                    </div>
                ))}
            </div>
        </CardSection>
    );
};

export default RecentEvents;
