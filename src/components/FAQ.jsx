import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
    {
        question: "What is HackUp by Hack The Core?",
        answer: "HackUp is a curated, merit-driven hackathon organized by Hack The Core, designed to identify and nurture high-potential student developers through a structured, multi-phase competition. It combines an open online ideation round with a selective offline grand finale, focusing on real-world innovation, quality participation, and long-term community building."
    },
    {
        question: "When do registrations for HackUp start?",
        answer: "Registrations for HackUp 2026 will open on 9th February. Students can register for Round 1 (Online Ideation & Screening) through the official Hack The Core website."
    },
    {
        question: "Who can submit problem statements for HackUp?",
        answer: "Problem statements may be introduced by Hack The Core and its partners, industry sponsors, or mentors and domain experts. Participants may also propose their own innovative problem statements, subject to evaluation during the ideation round."
    },
    {
        question: "Who can participate in HackUp 2026?",
        answer: "HackUp is open to students from any college or university, including participants from Mumbai and Navi Mumbai. Inter-college teams are allowed, and there is no restriction on branch or academic background. Selection is strictly merit-based."
    },
    {
        question: "What is the team formation criteria?",
        answer: "Teams must consist of 2 to 4 members. Inter-college and interdisciplinary teams are permitted and encouraged. Each team member is expected to contribute meaningfully to the project. There is no mandatory gender or branch requirement, but diversity is encouraged."
    },
    {
        question: "What is the registration process and fee structure?",
        answer: "Round 1 (Ideation & Screening) is free to participate. Teams shortlisted for the offline Grand Finale must pay a registration fee of ₹600 per team. The fee is non-refundable and is required to confirm final participation."
    },
    {
        question: "How is HackUp conducted – online or offline?",
        answer: "HackUp follows a hybrid model: Round 1 consists of online ideation and profile screening, while the Grand Finale is an offline 24-hour hackathon at the designated venue."
    },
    {
        question: "Is it mandatory for colleges to organize internal hackathons?",
        answer: "No. HackUp does not require colleges to conduct internal hackathons. Students can participate independently or through their communities, making HackUp accessible to everyone."
    },
    {
        question: "What is the prize for the winning team?",
        answer: "The winning team will receive a cash prize of ₹1,00,000 and a fully sponsored trip to Dubai (GITEX), subject to event guidelines. Additional track-based and partner-backed prizes may be announced."
    },
    {
        question: "What are the judging criteria?",
        answer: "Projects will be evaluated based on Innovation and creativity, Technical implementation, Practical feasibility, and Presentation and clarity. The judges’ decision will be final and binding."
    },
    {
        question: "What must teams submit?",
        answer: "Submission requirements and formats will be shared with shortlisted teams through an official submission guideline document prior to the Grand Finale."
    },
    {
        question: "How does HackUp support long-term community building?",
        answer: "HackUp is part of the larger Hack The Core ecosystem, which includes year-round community engagement, webinars, seminars, meetups, and a dedicated app for events/networking. Participants remain part of the community beyond the event."
    },
    {
        question: "Whom can we contact for queries?",
        answer: "For any questions or clarifications, participants can reach out through the official Hack The Core communication channels or contact the designated Points of Contact (POCs) mentioned on the website."
    }
];

const FAQItem = ({ question, answer, index, isOpen, onClick }) => {
    const answerRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(answerRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        } else {
            gsap.to(answerRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });
        }
    }, [isOpen]);

    return (
        <div className="border-b border-white/10 overflow-hidden">
            <button
                onClick={onClick}
                className="w-full py-5 sm:py-6 md:py-8 flex items-center justify-between text-left group gap-4"
            >
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-1 min-w-0">
                    <span className="text-yellow-500/30 font-mono text-xs sm:text-sm flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-300 ${isOpen ? 'text-yellow-500' : 'text-white group-hover:text-white/80'}`}>
                        {question}
                    </h3>
                </div>
                <div className={`relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    <div className="absolute w-full h-[2px] bg-yellow-500" />
                    <div className={`absolute h-full w-[2px] bg-yellow-500 transition-transform duration-500 ${isOpen ? 'scale-y-0' : 'scale-y-100'}`} />
                </div>
            </button>
            <div
                ref={answerRef}
                className="h-0 opacity-0 overflow-hidden"
            >
                <div className="pb-6 sm:pb-8 pl-8 sm:pl-10 md:pl-14 pr-4 sm:pr-8 md:pr-12 text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            gsap.from(".faq-item", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="faq"
            ref={sectionRef}
            className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-black/20"
        >
            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header */}
                <div ref={titleRef} className="mb-10 sm:mb-14 md:mb-20">
                    <p className="text-yellow-500 text-xs sm:text-sm font-mono tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 md:mb-6">Support</p>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter">
                        HELP <span className="text-yellow-500 italic font-light">CENTER</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <FAQItem
                                index={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default FAQ;
