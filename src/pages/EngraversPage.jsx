
import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import PageContainer from '../components/common/PageContainer';
import Section from '../components/common/Section';
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
        <PageContainer>
            <Section>
                <div className="container" style={{ textAlign: 'center' }}>
                    <SectionTitle title="ENGRAVERS" align="center" />
                    <div className="tbi-underline" style={{ margin: '0 auto 2rem' }}></div>
                    <p className="hero-subtitle" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        Engravers is a 3D designing and printing consultancy started by an innovative young team of IEDC Centre ,Christ College of Engineering. This consultancy gives technical solution using creative possibilities of 3D printing. The vibrant team of Engravers is led by Rahul Manohar from the faculty side and Sreehari Babu from the student side who is also the CEO of IEDC Centre.
                    </p>

                    <SectionTitle title="PRODUCTS" align="center" className="mb-12" />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', padding: '2rem 0' }}>
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="product-card"
                                style={{ background: 'var(--bg-secondary)', borderRadius: '8px', overflow: 'hidden', textAlign: 'left' }}
                            >
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.3s' }}
                                        onMouseOver={e => e.target.style.filter = 'grayscale(0%)'}
                                        onMouseOut={e => e.target.style.filter = 'grayscale(100%)'}
                                    />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: '1.5rem' }}>{product.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </PageContainer>
    );
};

export default EngraversPage;
