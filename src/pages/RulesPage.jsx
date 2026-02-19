
import React from 'react';
import PageContainer from '../components/common/PageContainer';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';

const RulesPage = () => {
    return (
        <PageContainer>
            <Section>
                <div className="container">
                    <SectionTitle title="RULES AND REGULATIONS" align="center" />
                    <div className="tbi-underline" style={{ margin: '0 auto 4rem' }}></div>

                    <div className="rules-content" style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>

                        <div className="rule-block mb-12">
                            <h3 className="rule-heading">GENERAL</h3>
                            <p>General rules and regulations are applicable for all members and non-members those who are working with IEDC CCE.</p>
                        </div>

                        <div className="rule-block mb-12">
                            <h3 className="rule-heading">IEDC</h3>
                            <p className="mb-4">IEDC CCE will be open to all existing and graduated students of Christ College of Engineering.</p>
                            <ul className="rule-list">
                                <li>Become a member by filling the application form given at Appendix 1.</li>
                                <li>A fee of ₹100 will be charged for a one year membership.</li>
                                <li>Application forms will be received from students upto 5th semester of B Tech only.</li>
                                <li>Programmes and workshops coordinated and conducted by IEDC can avail 50-50 seats for IEDC and Non-IEDC students.</li>
                                <li>IEDC members will be benefitted with special discounts for paid programs and workshops.</li>
                                <li>IEDC will adopt 3 government schools to enhance their technical capabilities and to give the exposure towards Science and Technology.</li>
                            </ul>
                        </div>

                        <div className="rule-block mb-12">
                            <h3 className="rule-heading">INNOVATION AND ENTREPRENEURSHIP SUPPORT</h3>
                            <p>IEDC will promote and develop commercially and socially viable innovative products and solutions from the students. To accrue funding, mentorship, technical support, infra structure or any other support, students are to register for project work by filling the application form, as given at Appendix 2.</p>
                            <p className="mt-4">All project plans and funding plans are initially processed by the ‘IEDC Project And Prototyping Panel’. Works funded by IEDC, should handover project abstract and report to project and prototyping panel. And after each competition or exhibition they should return the prototype to the IEDC room.</p>
                        </div>

                        <div className="rule-block mb-12">
                            <h3 className="rule-heading">FUNDING SUPPORT</h3>
                            <p className="mb-4">Funding depends on availability of funds, preference of programs and importance of projects. It will be released in 3 stages:</p>
                            <ul className="rule-list">
                                <li><span className="text-gold">Stage 1:</span> Immediately after approval</li>
                                <li><span className="text-gold">Stage 2:</span> After completing 50% of work</li>
                                <li><span className="text-gold">Stage 3:</span> After completing proposed result</li>
                            </ul>
                            <p className="mt-4">If the funded work wins any cash prize in any competition, it is recommended to pay 50% of prize money to IEDC as an honour. If above mentioned 50% fall short of ‘funded amount’ a maximum of ‘prize money’ is enough to return. Afterwards submit a report containing 10 pages describing the entire details, along with an A4 size picture of the product.</p>
                            <div className="funding-breakdown mt-4 p-4 bg-dark-secondary rounded">
                                <p>College level project: 30-50%</p>
                                <p>State level project: 30-60%</p>
                                <p>National level project: 30-80%</p>
                            </div>
                        </div>

                        <div className="rule-block mb-12">
                            <h3 className="rule-heading">IEDC ROOM, EQUIPMENT AND TOOLS</h3>
                            <ul className="rule-list">
                                <li>To utilise the IEDC room, one should acquire prior permission from the CEO followed by the Nodal officer.</li>
                                <li>IEDC room will be working only between 7:30am to 6:00pm.</li>
                                <li>‘IEDC Members’ can seek permission from any of the executive panel members with the knowledge of CEO and NO.</li>
                                <li>Every entry and exit should be registered in log book. Presence inside the IEDC room without registering will be considered as an offence.</li>
                                <li>Any equipment, working material etc… which is taken/borrowed by any student (IEDC or Non-IEDC) for any kind of work should be written in the register book and get signed from any of the panel members.</li>
                                <li>If the borrowed item or equipment is lost, he/she should pay the money of the item as per the market value or can compensate with a new one.</li>
                                <li>Borrowed item should be returned or renewed within 15 days else fine will be imposed as per value of the product.</li>
                                <li>Any kind of malpractice or offences are strictly prohibited in the IEDC room. The people who do the same should face the legal action as directed by the IEDC officials or by the college authority.</li>
                                <li>Whoever working during the college working hours should have prior permission from the Nodal Officer and should produce it to the tutors and HODs of the respective departments.</li>
                                <li>Connecting electrical equipment except for laptop charger in the outlet plug present in the 3D-printer table is strictly prohibited.</li>
                            </ul>
                        </div>

                        <div className="rule-block mb-12">
                            <h3 className="rule-heading">3D PRINTING & ENGRAVERS</h3>
                            <p>ENGRAVERS is an independent start-up under IEDC CCE controlled by a separate panel, headed by the CEO. It promotes ‘Earn while Learn’, and avail 25% of profit for designers and 15% of profit for printer students.</p>
                            <div className="mt-4 p-4 border border-gold rounded inline-block">
                                <p>Running cost – ₹8/hr</p>
                                <p>Material cost – ₹8/gram (for members)</p>
                                <p>₹10/gram (for non-members)</p>
                            </div>
                        </div>

                        <div className="rule-block mb-12">
                            <h3 className="rule-heading">FOR IEDC MEMBERS</h3>
                            <ul className="rule-list">
                                <li>The Nodal Officer followed by Assistant Nodal Officer will be the incharge and supreme authority of IEDC. The 7-member Executive panel under Nodal Officer will control and coordinate IEDC.</li>
                                <li>Every member should attend monthly meetings, to be aware of the current status of IEDC. Missing it continuously twice without valid reason will affect membership.</li>
                                <li>Spending class time for any sort of activity under IEDC should be after getting signed permission.</li>
                            </ul>
                        </div>

                        <div className="rule-block mb-12">
                            <h3 className="rule-heading">MEMBERSHIP CERTIFICATE CRITERIA</h3>
                            <ul className="rule-list">
                                <li>Should be part of any work (as volunteer, contestant or participant) in any academic year.</li>
                                <li>Should attend at least one program conducted by KSUM or IEDC Kerala in any academic year.</li>
                                <li>Pitch an idea for an innovation or entrepreneurship, Individually or as a group of max 4 in every academic year.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </Section>
            <style jsx>{`
        .rule-heading {
          font-family: var(--font-heading);
          font-size: 2rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .rule-list {
          list-style: disc;
          padding-left: 1.5rem;
          margin-top: 1rem;
        }
        .rule-list li {
          margin-bottom: 0.8rem;
          line-height: 1.6;
        }
        .text-gold {
          color: var(--accent-gold);
        }
        .bg-dark-secondary {
          background-color: var(--bg-secondary);
        }
        .mb-12 { margin-bottom: 3rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mt-4 { margin-top: 1rem; }
        .border-gold { border-color: var(--accent-gold); }
      `}</style>
        </PageContainer>
    );
};

export default RulesPage;
