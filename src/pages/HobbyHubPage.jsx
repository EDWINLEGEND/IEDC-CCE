import React from 'react';
import CardSection from '../components/common/CardSection';
import { motion } from 'framer-motion';

const categories = [
    { name: "PASTRIES", subtitle: "From cakes to pudding", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
    { name: "HANDICRAFTS", subtitle: "All in all gift shop", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
    { name: "TECH", subtitle: "Cutting edge products", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" }
];

const HobbyHubPage = () => {
    return (
        <div style={{ paddingTop: '8rem' }}>
            <CardSection>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="about-section-heading" style={{ display: 'inline-block', marginBottom: '0' }}>HOBBYHUB STORE</h2>
                    <p style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', marginTop: '1rem', fontWeight: '600' }}>A HOBBYHUB INITIATIVE</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                position: 'relative',
                                height: '450px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                boxShadow: 'var(--card-shadow)'
                            }}
                        >
                            <div style={{
                                position: 'absolute', inset: 0,
                                backgroundImage: `url(${cat.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                filter: 'brightness(0.7)'
                            }}></div>

                            <div style={{ position: 'relative', zIndex: '2', padding: '3rem 2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'white', margin: '0 0 0.5rem', fontWeight: '700', letterSpacing: '-1px' }}>{cat.name}</h3>
                                <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem' }}>{cat.subtitle}</p>
                                <button className="btn btn-outline rounded-pill" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>VIEW PRODUCTS</button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: '6rem', textAlign: 'center', padding: '4rem', background: '#f8f8fb', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>ALL PRODUCTS</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Full catalog coming soon...</p>
                </div>
            </CardSection>
        </div>
    );
};

export default HobbyHubPage;
