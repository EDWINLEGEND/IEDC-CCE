
import React from 'react';

const Section = ({ children, className = '', id = '' }) => {
    const styles = {
        padding: '6rem 0',
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--bg-primary)'
    };

    return (
        <section id={id} className={`common-section ${className}`} style={styles}>
            {children}
        </section>
    );
};

export default Section;
