import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Legals = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.fromTo(".policy-content",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
        );
    }, []);

    const today = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
            <Navbar isInternalPage={true} />

            {/* Hero Section for Policy */}
            <div className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 drop-shadow-2xl">
                        Privacy <span className="text-yellow-500 italic font-light">Policy</span>
                    </h1>
                    <p className="text-white/50 font-mono text-sm tracking-widest uppercase mb-2">
                        Effective Date: {today}
                    </p>
                    <p className="text-white/50 font-mono text-sm tracking-widest uppercase">
                        Last Updated: {today}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="policy-content max-w-4xl mx-auto px-6 pb-20">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl space-y-12 text-white/80 leading-relaxed">

                    <section>
                        <p className="text-lg italic text-center md:text-left">
                            This Privacy Policy and Participation privacy-policy (“Policy”) governs the collection, use, disclosure, and processing of personal data in connection with the mobile application <strong>HackUp</strong> (“Application”) operated by <strong>Hack The Core</strong>, a community organized at <strong>NMIMS Navi Mumbai Campus</strong> (“Organizer,” “we,” “our,” or “us”). By accessing, registering for, or participating in the Hackathon/Event (“Event”) through the Application, you (“Participant,” “User,” or “you”) acknowledge that you have read, understood, and agreed to be legally bound by this Policy.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">1. ELIGIBILITY AND PARTICIPATION</h2>
                        <div className="space-y-2">
                            <p>1.1 You represent and warrant that all information submitted during registration is true, accurate, current, and complete.</p>
                            <p>1.2 Participation in the Event is voluntary.</p>
                            <p>1.3 The Organizer reserves the absolute right to verify eligibility criteria at any stage and to disqualify any Participant who:</p>
                            <ul className="list-disc pl-6 space-y-1 text-white/60">
                                <li>Provides false or misleading information;</li>
                                <li>Violates Event rules or applicable laws;</li>
                                <li>Engages in misconduct or unethical behavior.</li>
                            </ul>
                            <p>1.4 The Organizer’s decision regarding eligibility and participation shall be final and binding.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">2. COLLECTION OF PERSONAL DATA</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-white font-bold mb-2">2.1 Identification Information</h3>
                                <p className="text-white/60">Full name, Email address, Phone number, Institutional or organizational affiliation, Profile photograph (if uploaded).</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2">2.2 Technical Information</h3>
                                <p className="text-white/60">Device information, IP address, Log files, Application usage analytics, Operating system and app version details.</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2">2.3 Event-Related Data</h3>
                                <p className="text-white/60">Project submissions, Code repositories, Presentation materials, Demo videos, Photographs or recordings taken during the Event.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">3. LEGAL BASIS FOR PROCESSING</h2>
                        <p>Personal data shall be processed on one or more of the following lawful bases:</p>
                        <ul className="list-disc pl-6 space-y-1 text-white/60">
                            <li>Your explicit consent;</li>
                            <li>Performance of contractual obligations relating to Event participation;</li>
                            <li>Compliance with legal obligations;</li>
                            <li>Legitimate interests of the Organizer, including event administration and promotional activities.</li>
                        </ul>
                        <p className="text-sm">Where required under applicable law (including the Digital Personal Data Protection Act, 2023 (India), GDPR, or other relevant regulations), consent shall be obtained prior to processing.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">4. PURPOSE OF DATA PROCESSING</h2>
                        <p>Personal data shall be collected and processed for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-1 text-white/60">
                            <li>Event registration and identity verification;</li>
                            <li>Communication regarding Event updates;</li>
                            <li>Evaluation and judging of submissions;</li>
                            <li>Prize distribution and result announcements;</li>
                            <li>Publication of Event outcomes;</li>
                            <li>Promotional, marketing, and publicity activities related to the Event;</li>
                            <li>Compliance monitoring and enforcement of Event rules;</li>
                            <li>Improvement of Application performance and user experience.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">5. CONSENT FOR PUBLICITY AND MEDIA USE</h2>
                        <div className="space-y-2">
                            <p>5.1 By participating in the Event, you grant the Organizer the irrevocable right to use your: Name; Photograph; Institution name; Project details; Audio-visual recordings; for promotional, marketing, publicity, and reporting purposes in any media format worldwide without additional compensation.</p>
                            <p>5.2 Such use shall be non-exclusive, royalty-free, and perpetual unless otherwise prohibited by applicable law.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">6. INTELLECTUAL PROPERTY RIGHTS</h2>
                        <div className="space-y-2">
                            <p>6.1 Participants represent and warrant that all submissions are original or properly licensed.</p>
                            <p>6.2 Unless otherwise specified, ownership of the project remains with the Participant.</p>
                            <p>6.3 Participants grant the Organizer a non-exclusive, royalty-free, worldwide, sublicensable license to use, reproduce, publish, display, distribute, and promote submitted materials for Event-related evaluation, documentation, and promotional purposes.</p>
                            <p>6.4 The Organizer shall not claim ownership of Participant intellectual property except as expressly provided herein.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">7. CODE OF CONDUCT</h2>
                        <p>Participants agree to maintain professionalism and integrity. The following conduct is strictly prohibited:</p>
                        <ul className="list-disc pl-6 space-y-1 text-white/60">
                            <li>Plagiarism or misrepresentation of work;</li>
                            <li>Use of unauthorized materials or tools;</li>
                            <li>Harassment, discrimination, or abusive conduct;</li>
                            <li>Disruptive behavior affecting Event operations.</li>
                        </ul>
                        <p>Violation may result in immediate disqualification and potential reporting to relevant authorities.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">8. CONFIDENTIALITY</h2>
                        <p>Participants agree not to disclose or misuse any confidential, proprietary, or sensitive information shared during the Event. This obligation shall survive termination of participation.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">9. USE OF TECHNOLOGY</h2>
                        <p>Participants shall use only legally acquired software, APIs, and data sources. Any violation of intellectual property or licensing laws shall result in immediate disqualification and potential legal action.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">10. DATA SHARING AND DISCLOSURE</h2>
                        <p>We do not sell personal data. Personal data may be shared with:</p>
                        <ul className="list-disc pl-6 space-y-1 text-white/60">
                            <li>Sponsors and judging panels (for evaluation purposes);</li>
                            <li>Technology service providers (hosting, analytics, communication services);</li>
                            <li>Legal or regulatory authorities when required by law;</li>
                            <li>Professional advisors under confidentiality obligations.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">11. DATA RETENTION</h2>
                        <p>Personal data shall be retained only for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required by law. Data may thereafter be anonymized or securely deleted.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">12. DATA SECURITY</h2>
                        <p>The Organizer implements reasonable technical and organizational safeguards to protect personal data against unauthorized access, alteration, disclosure, or destruction. However, no electronic transmission or storage system can be guaranteed to be completely secure.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">13. PARTICIPANT RIGHTS</h2>
                        <p>Subject to applicable law, Participants may have the right to Access their personal data; Request correction of inaccurate data; Withdraw consent; Request erasure or restriction of processing; Lodge a complaint with a regulatory authority.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">14. LIABILITY DISCLAIMER</h2>
                        <div className="space-y-2">
                            <p>14.1 Participation in the Event is at your sole risk.</p>
                            <p>14.2 The Organizer, sponsors, affiliates, employees, and partners shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with participation in the Event.</p>
                            <p>14.3 The Organizer reserves the right to modify, suspend, postpone, or cancel the Event at its sole discretion due to unforeseen circumstances or force majeure.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">15. AMENDMENTS</h2>
                        <p>The Organizer reserves the right to amend this Policy at any time. Updated versions shall be posted within the Application and shall become effective upon publication.</p>
                    </section>

                    <section className="space-y-4 border-t border-white/10 pt-8">
                        <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-tight">16. GOVERNING LAW</h2>
                        <p>This Policy shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts located in <strong>Mumbai, Maharashtra</strong>.</p>
                    </section>

                    <div className="pt-8 text-center border-t border-white/10">
                        <Link to="/" className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full py-12 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 bg-black/50 backdrop-blur-sm relative z-10">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <div className="text-xl font-black text-white font-['Zalando_Sans_Expanded']">HACKUP</div>
                    <div className="flex flex-col gap-1 text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">
                        <p>Shravan Kadam : <span className="text-yellow-500">+91 8308078534</span></p>
                        <p>Bhavesh Rajdev : <span className="text-yellow-500">+91 88779 90898</span></p>
                        <p>Mail : <a href="mailto:Connect@hackthecore.in" className="text-yellow-500 hover:text-white transition-colors">Connect@hackthecore.in</a></p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.5em]">© 2026 HackTheCore. All rights reserved.</div>
                    <Link to="/privacy-policy" className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest transition-colors">Privacy Policy & privacy-policy</Link>
                </div>

                <div className="flex gap-6 items-center">
                    <a href="https://www.linkedin.com/showcase/hackthecore/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="LinkedIn">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/hackthecore.in?igsh=MTNuMHJicXB5bDQ3YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Instagram">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    </a>
                    <a href="https://x.com/hackthecorein?s=21" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="X">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                </div>
            </footer>

            {/* Background Accent */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full -z-10" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full -z-10" />
        </div>
    );
};

export default Legals;
