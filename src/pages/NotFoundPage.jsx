
import React from 'react';
import PageContainer from '../components/common/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <PageContainer>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                textAlign: 'center'
            }}>
                <SectionTitle title="404" align="center" color="gold" />
                <h2 style={{ fontFamily: 'var(--font-subheading)', fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>PAGE NOT FOUND</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '400px' }}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="btn btn-yellow">RETURN HOME</Link>
            </div>
        </PageContainer>
    );
};

export default NotFoundPage;
