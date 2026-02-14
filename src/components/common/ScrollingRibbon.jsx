
import React from 'react';
import './ScrollingRibbon.css';

const ScrollingRibbon = () => {
    const text = "INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT CENTRE — ";
    const repeatCount = 10; // Ensure enough text to cover screen width

    return (
        <div className="scrolling-ribbon-container">
            <div className="scrolling-ribbon-content">
                {[...Array(repeatCount)].map((_, i) => (
                    <span key={i}>{text}</span>
                ))}
            </div>
            <div className="scrolling-ribbon-content" aria-hidden="true">
                {[...Array(repeatCount)].map((_, i) => (
                    <span key={i}>{text}</span>
                ))}
            </div>
        </div>
    );
};

export default ScrollingRibbon;
