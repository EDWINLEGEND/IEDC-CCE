
import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import PageContainer from '../components/common/PageContainer';
import Section from '../components/common/Section';
import { motion } from 'framer-motion';

const categories = [
    { name: "PASTRIES", subtitle: "From cakes to pudding", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
    { name: "HANDICRAFTS", subtitle: "All in all gift shop", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
    { name: "TECH", subtitle: "Cutting edge products", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" }
];

const HobbyHubPage = () => {
    return (
        <PageContainer>
            <Section>
                <div className="container" style={{ textAlign: 'center' }}>
                    <SectionTitle title="HOBBYHUB STORE" align="center" />
                    <div className="tbi-underline" style={{ margin: '0 auto 1rem' }}></div>
                    <p className="hero-subtitle" style={{ color: 'var(--accent-gold)', marginBottom: '4rem' }}>A HOBBYHUB INITIATIVE</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {categories.map((cat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                style={{ position: 'relative', height: '400px', borderRadius: '12px', overflow: 'hidden' }}
                            >
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    backgroundImage: `url(${cat.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: 'brightness(0.6)'
                                }}></div>
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', color: 'white', margin: 0 }}>{cat.name}</h2>
                                    <p style={{ fontFamily: 'var(--font-body)', color: 'var(--accent-gold)', fontSize: '1.2rem', marginTop: '0.5rem' }}>{cat.subtitle}</p>
                                    <button className="btn btn-outline" style={{ marginTop: '2rem' }}>VIEW PRODUCTS</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ marginTop: '6rem' }}>
                        <SectionTitle title="ALL PRODUCTS" align="center" />
                        <p style={{ color: 'var(--text-secondary)' }}>Full catalog coming soon...</p>
                    </div>
                </div>
            </Section>
        </PageContainer>
    );
};

export default HobbyHubPage;
