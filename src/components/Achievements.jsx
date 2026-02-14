
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import './Achievements.css';

const achievements = [
    { id: 1, title: "Best IEDC Award", year: "2023", image: "https://images.unsplash.com/photo-1607004468138-e7e23ea26947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Innovation Summit", year: "2022", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Hackathon Winners", year: "2023", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Startup Grant", year: "2021", image: "https://images.unsplash.com/photo-1559136555-930d72f1861a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Tech Excellence", year: "2022", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
];

const Achievements = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const controls = useAnimation();
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        // Calculate scrollable width
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    // Auto-scroll effect
    useEffect(() => {
        let controlsSubscription;

        const startAutoScroll = () => {
            // Start a slow animation to the end
            if (!isDragging && width > 0) {
                controls.start({
                    x: -width,
                    transition: {
                        duration: 20, // Slow duration for auto-scroll
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "mirror" // Scroll back and forth
                    }
                });
            }
        };

        if (width > 0) {
            startAutoScroll();
        }

        return () => controls.stop();
    }, [width, isDragging, controls]);

    return (
        <section className="achievements-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="text-outline">OUR</span> <span className="text-gold">ACHIEVEMENTS</span>
                    </h2>
                    <p className="section-desc">Milestones that define our journey of excellence.</p>
                </div>

                <motion.div
                    ref={carousel}
                    className="carousel"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="inner-carousel"
                        animate={controls}
                        style={{ x }}
                        onDragStart={() => {
                            setIsDragging(true);
                            controls.stop(); // Stop auto-scroll on interaction
                        }}
                        onDragEnd={() => {
                            setIsDragging(false);
                            // Optional: Resume auto-scroll after a delay or leave it stopped
                        }}
                    >
                        {achievements.map((item) => (
                            <motion.div className="item-card" key={item.id}>
                                <div className="card-image-wrapper">
                                    <img src={item.image} alt={item.title} />
                                    <div className="card-overlay">
                                        <h3>{item.title}</h3>
                                        <span>{item.year}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {/* Duplicate for visual length if needed, or just let it bounce */}
                        {achievements.map((item) => (
                            <motion.div className="item-card" key={`${item.id}-dup`}>
                                <div className="card-image-wrapper">
                                    <img src={item.image} alt={item.title} />
                                    <div className="card-overlay">
                                        <h3>{item.title}</h3>
                                        <span>{item.year}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
