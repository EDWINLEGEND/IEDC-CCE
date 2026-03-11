import React from 'react';
import CardSection from './common/CardSection';
import { Calendar, ArrowRight } from 'lucide-react';
import './RecentEvents.css';

const events = [
    {
        id: 1,
        tag: "Summit",
        date: "Oct 15, 2025",
        title: "IEDC Annual Summit 2025",
        desc: "A massive gathering of student entrepreneurs, investors, and industry experts for keynote sessions and networking.",
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        tag: "Hackathon",
        date: "Nov 02, 2025",
        title: "Innovators Hack 48H",
        desc: "A 48-hour hardware and software hackathon challenging students to build sustainable tech solutions.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        tag: "Workshop",
        date: "Nov 20, 2025",
        title: "AI & ML Prototyping",
        desc: "An intensive hands-on workshop focused on training and deploying machine learning models on edge devices.",
        img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        tag: "Pitch Day",
        date: "Dec 05, 2025",
        title: "Seed Fund Pitch 2025",
        desc: "Top 10 incubated student teams pitch their MVPs to a panel of angel investors and grant coordinators.",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80"
    },
];

const RecentEvents = () => {
    return (
        <CardSection id="recent-events">
            <div className="recent-events-gallery-header">
                <h2 className="recent-events-title">
                    Recent Events & Activities
                </h2>
                <button className="btn btn-primary rounded-pill btn-view-events">
                    View All Events <ArrowRight size={18} style={{ marginLeft: '5px' }} />
                </button>
            </div>

            <div className="gallery-scroll-container">
                {events.map((event) => (
                    <div className="event-gallery-card" key={event.id}>
                        <div className="event-img-wrapper">
                            <img src={event.img} alt={event.title} className="event-img" />
                            <div className="event-tag">{event.tag}</div>
                        </div>

                        <div className="event-content">
                            <div className="event-date">
                                <Calendar size={14} /> <span>{event.date}</span>
                            </div>
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-desc">{event.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </CardSection>
    );
};

export default RecentEvents;
