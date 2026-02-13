
import React from 'react';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import './ActivitiesPage.css';

const ActivitiesPage = () => {
    const reports = [
        { year: '2022-2023', link: 'https://docs.google.com/document/d/1YWzcHlRNvy-vZacnjVBZlkgmJxPgueOPSbKsJrarfZ4/edit?usp=sharing' },
        { year: '2021-2022', link: 'https://drive.google.com/file/d/14m_15U75wi752UBVDmQyyNWgzHFPFHH5/view?usp=sharing' },
        { year: '2020-2021', link: 'https://drive.google.com/file/d/1w8_I3hFuaxtq0FOYDnF-HJnzVL2FxBC8/view?usp=sharing' },
        { year: '2019-2020', link: 'https://drive.google.com/file/d/1vM4EmrjKcrgUBBkMnXcGiJWl8TnuHqY7/view?usp=sharing' },
        { year: '2016-2017', link: 'https://drive.google.com/file/d/18phBD_nkgIdEKGPSjERk4kKasTb4QbX_/view?usp=sharing' },
    ];

    return (
        <div className="activities-page container">
            <h1 className="page-title gradient-text">Activities & Reports</h1>

            <section className="reports-section">
                <h2 className="section-subtitle"><FileText size={24} /> Annual Reports</h2>
                <div className="reports-grid">
                    {reports.map((report, index) => (
                        <a key={index} href={report.link} target="_blank" rel="noopener noreferrer" className="report-card glass">
                            <div className="report-icon">
                                <FileText size={40} />
                            </div>
                            <div className="report-info">
                                <h3>Activity Report</h3>
                                <span className="report-year">{report.year}</span>
                            </div>
                            <div className="report-arrow">
                                <ArrowRight size={20} />
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section className="events-section">
                <h2 className="section-subtitle"><Calendar size={24} /> Recent Events</h2>
                <div className="events-grid">
                    {/* Placeholders for events */}
                    <div className="event-card glass">
                        <div className="event-date">
                            <span className="day">15</span>
                            <span className="month">MAR</span>
                        </div>
                        <div className="event-details">
                            <h3>Idea Pitching Competition</h3>
                            <p>Showcase your innovative ideas and win exciting prizes.</p>
                            <button className="btn-sm">Read More</button>
                        </div>
                    </div>

                    <div className="event-card glass">
                        <div className="event-date">
                            <span className="day">22</span>
                            <span className="month">FEB</span>
                        </div>
                        <div className="event-details">
                            <h3>Workshop on IoT</h3>
                            <p>Hands-on workshop on Internet of Things using Arduino.</p>
                            <button className="btn-sm">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ActivitiesPage;
