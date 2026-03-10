import React from 'react';
import CardSection from '../components/common/CardSection';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={{ paddingTop: '8rem' }}>
            <CardSection>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '40vh',
                    textAlign: 'center',
                    padding: '4rem 0'
                }}>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '8rem', fontWeight: '700', color: 'var(--accent-gold)', lineHeight: '1', margin: '0 0 1rem', letterSpacing: '-4px' }}>404</h1>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-1px' }}>Page Not Found</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '400px', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link to="/" className="btn btn-primary rounded-pill btn-lg">Return Home</Link>
                </div>
            </CardSection>
        </div>
    );
};

export default NotFoundPage;
