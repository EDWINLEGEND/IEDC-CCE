
import React from 'react';

const SectionTitle = ({ title, align = 'left', color = 'white', className = '' }) => {
    const styles = {
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
        textTransform: 'uppercase',
        color: color === 'gold' ? 'var(--accent-gold)' : 'white',
        lineHeight: 1,
        marginBottom: '0.5rem',
        textAlign: align
    };

    return <h2 className={`section-title ${className}`} style={styles}>{title}</h2>;
};

export default SectionTitle;
