
import React from 'react';
import { motion } from 'framer-motion';
import './TBIPage.css';

const startups = [
    {
        id: 1,
        name: "ENGRAVERS",
        description: "Engravers is a 3D designing and printing consultancy started by an innovative young team of IEDC Centre, Christ College of Engineering. This consultancy gives technical solution using creative possibilities of 3D printing. The vibrant team of Engravers is led by Rahul Manohar from the faculty side and Sreehari Babu from the student side who is also the CEO of IEDC Centre. In addition to the 3d printing team, Engravers is also equipped with a team that helps in the designing aspect making Engravers capable of converting an idea into a product.",
        image: "https://images.unsplash.com/photo-1634609243089-b9d29b2b1b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" // 3D printing vibe
    },
    {
        id: 2,
        name: "HOBBY HUB",
        description: "With the support from Hobby Hub, college students can turn their interests into legitimate businesses. We have helped more than 10+ students get their businesses off the ground. A new way of earning through passion and creativity.",
        image: "https://images.unsplash.com/photo-1513346940221-18f46db008d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" // Hobby/creative vibe
    },
    {
        id: 3,
        name: "LEVANTATE LABS",
        description: "A cutting-edge consultancy focusing on IoT solutions and automation. Dedicated to bringing smart technology to everyday life through innovative hardware and software integration.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" // Tech/Chip vibe
    },
    {
        id: 4,
        name: "TRAWELL",
        description: "Your ultimate travel companion. Trawell provides customized travel packages and guidance for students and technological enthusiasts looking to explore the world.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" // Travel vibe
    }
];

const TBIPage = () => {
    return (
        <div className="tbi-page">
            <div className="container">
                <header className="tbi-header">
                    <h1 className="tbi-title">STARTUPS</h1>
                    <div className="tbi-underline"></div>
                    <p className="tbi-subtitle">Incubated at IEDC CCE</p>
                </header>

                <div className="startups-grid">
                    {startups.map((startup) => (
                        <motion.div
                            className="startup-card"
                            key={startup.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="startup-name">{startup.name}</h2>

                            <div className="startup-banner-wrapper">
                                <div
                                    className="startup-banner"
                                    style={{ backgroundImage: `url(${startup.image})` }}
                                ></div>
                                <div className="banner-overlay"></div>
                            </div>

                            <div className="startup-info">
                                <p className="startup-desc">{startup.description}</p>
                                <div className="read-more-wrapper">
                                    <span className="read-more-btn">Learn More &rarr;</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TBIPage;
