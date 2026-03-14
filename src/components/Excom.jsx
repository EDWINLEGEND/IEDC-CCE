import React from 'react';
import CardSection from './common/CardSection';
import BlurredStagger from './common/BlurredStagger';
import { motion } from 'framer-motion';
import './Excom.css';

const topLeaders = [
    { id: 1, name: "Nodal Officer Name", role: "Nodal Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "CEO Name", role: "CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Co-CEO Name", role: "Co-CEO", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" },
];

const remainingExcom = Array.from({ length: 12 }, (_, i) => ({
    id: i + 4,
    name: `Member ${i + 4}`,
    role: `Executive Position`,
    img: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80`
}));

const ExcomCard = ({ member, className, delay = 0 }) => (
    <motion.div
        className={`excom-photo-card ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-5% 0px' }}
        transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
        <img src={member.img} alt={member.name} className="excom-photo" />
        <div className="excom-photo-gradient"></div>
        <div className="excom-photo-content">
            <span className="excom-photo-role">{member.role}</span>
            <h3 className="excom-photo-name">{member.name}</h3>
        </div>
    </motion.div>
);

const Excom = () => {
    return (
        <CardSection id="excom">
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                {/* Major title — BlurredStagger */}
                <h2 style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '-1.5px' }}>
                    <BlurredStagger
                        text="Meet Our Excom"
                        scrollBased={true}
                        stagger={0.03}
                        duration={0.42}
                        delay={0}
                    />
                </h2>

                {/* Subtitle — slide up */}
                <motion.p
                    style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-8% 0px' }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                >
                    The driving force behind IEDC CCE
                </motion.p>
            </div>

            <div className="excom-top-section">
                <ExcomCard member={topLeaders[0]} className="nodal-card" delay={0.05} />
                <div className="excom-top-right">
                    <ExcomCard member={topLeaders[1]} className="ceo-card" delay={0.12} />
                    <ExcomCard member={topLeaders[2]} className="co-ceo-card" delay={0.19} />
                </div>
            </div>

            <div className="excom-bottom-grid">
                {remainingExcom.map((member, index) => (
                    <ExcomCard
                        member={member}
                        key={member.id}
                        className="other-card"
                        delay={index * 0.05}
                    />
                ))}
            </div>
        </CardSection>
    );
};

export default Excom;
