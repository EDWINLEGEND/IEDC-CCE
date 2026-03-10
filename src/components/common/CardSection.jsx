import React from 'react';
import './CardSection.css';

const CardSection = ({ children, className = '', id = '' }) => {
    return (
        <section className={`card-section-wrapper ${className}`} id={id}>
            <div className="card-section-inner">
                {children}
            </div>
        </section>
    );
};

export default CardSection;
