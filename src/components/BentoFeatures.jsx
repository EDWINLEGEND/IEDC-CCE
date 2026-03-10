import React from 'react';
import CardSection from './common/CardSection';
import { Search, Code, Users, Lightbulb, TrendingUp, Send } from 'lucide-react';
import './BentoFeatures.css';

const BentoFeatures = () => {
    return (
        <CardSection id="features">
            <div className="bento-features-header">
                <h2 className="bento-main-title">
                    Innovation, startups & ideas <br />
                    <span>— in one place.</span>
                </h2>
                <div className="bento-search-bar">
                    <Search size={20} className="search-icon" />
                    <input type="text" placeholder="I'm looking for..." className="search-input" />
                    <button className="search-btn">Search</button>
                </div>
            </div>

            <div className="bento-grid-complex">

                {/* Column 1 */}
                <div className="bento-col bento-col-1">
                    <div className="bento-box box-tech">
                        <div className="box-header">
                            <Code size={18} />
                            <span>Learn to Build</span>
                        </div>
                        <div className="pill-cloud">
                            <span className="pill p-1">Web Dev</span>
                            <span className="pill p-2">AI Agents</span>
                            <span className="pill p-3">IoT Projects</span>
                            <span className="pill p-4">UI/UX</span>
                            <span className="pill p-5">App Builder</span>
                        </div>
                    </div>

                    <div className="bento-box box-community">
                        <div className="box-header">
                            <Users size={18} />
                            <span>Talk with Mentors</span>
                        </div>
                        <div className="community-mockup">
                            <div className="mock-line line-1"></div>
                            <div className="mock-line line-2"></div>
                            <div className="mock-line line-3"></div>
                            <div className="community-avatar">👋</div>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="bento-col bento-col-2">
                    <div className="bento-box box-explorers">
                        <div className="avatar-stack">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=A" alt="Avatar" />
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=B" alt="Avatar" />
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=C" alt="Avatar" />
                        </div>
                        <div className="explorers-content">
                            <div>
                                <h3 className="huge-number">15K+</h3>
                                <p className="sub-text">Student Innovators</p>
                            </div>
                            <button className="white-pill-btn">Join</button>
                        </div>
                    </div>

                    <div className="bento-box box-ideas">
                        <div className="box-header">
                            <Lightbulb size={18} />
                            <span>Look What I Made</span>
                        </div>
                        <div className="share-input-mock">
                            <span className="placeholder-text">Share idea...</span>
                            <button className="send-btn"><Send size={14} color="#fff" /></button>
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="bento-col bento-col-3">
                    <div className="bento-box box-magic">
                        <div className="box-header">
                            <TrendingUp size={18} />
                            <span>Make It Big!</span>
                        </div>
                        <div className="magic-illustration">
                            <div className="blob">🚀</div>
                        </div>
                    </div>
                </div>

            </div>
        </CardSection>
    );
};

export default BentoFeatures;
