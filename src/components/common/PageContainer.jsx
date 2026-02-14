
import React from 'react';
import { motion } from 'framer-motion';

const PageContainer = ({ children, className = '' }) => {
    const styles = {
        paddingTop: '8rem', // Clearance for navbar
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'var(--bg-primary)'
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`page-container ${className}`}
            style={styles}
        >
            {children}
        </motion.div>
    );
};

export default PageContainer;
