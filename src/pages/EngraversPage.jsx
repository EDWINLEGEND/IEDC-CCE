import React from 'react';
import CardSection from '../components/common/CardSection';
import { motion } from 'framer-motion';

const products = [
    { name: "PROTOARM", image: "https://images.unsplash.com/photo-1617791160536-5982e5b7c0cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "FLEXI REX", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "IRON MAN MASK", image: "https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "LIGHT SABER", image: "https://images.unsplash.com/photo-1605634501305-bbcd75618b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "ONI MASK", image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "SQUID GAME DOLL FACE", image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "FLYWHEEL FOR COIN DISINFECTION", image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "MOULD FOR DOCTORS' GOGGLES", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "FACE MASK STRIP", image: "https://images.unsplash.com/photo-1587578846327-047f3844f128?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "MULTIPURPOSE HOOK", image: "https://images.unsplash.com/photo-1616401784845-180886ba9ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
];

const EngraversPage = () => {
    return (
        <div style={{ paddingTop: '8rem' }}>
            <CardSection>
                <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '900px', margin: '0 auto 5rem' }}>
                    <h2 className="about-section-heading" style={{ display: 'inline-block', marginBottom: '0' }}>ENGRAVERS</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '2rem', lineHeight: '1.7' }}>
                        Engravers is a 3D designing and printing consultancy started by an innovative young team of IEDC Centre, Christ College of Engineering. This consultancy gives technical solution using creative possibilities of 3D printing. The vibrant team of Engravers is led by Rahul Manohar from the faculty side and Sreehari Babu from the student side who is also the CEO of IEDC Centre.
                    </p>
                </div>

                <div style={{ padding: '0 2rem' }}>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '3rem', color: 'var(--text-primary)', textAlign: 'center' }}>PRODUCTS</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                style={{
                                    background: '#f8f8fb',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--border-color)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ height: '240px', overflow: 'hidden' }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                                        {product.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </CardSection>
        </div>
    );
};

export default EngraversPage;
