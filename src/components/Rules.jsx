import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rulesData = [
    {
        title: "Eligibility",
        desc: "Open to college students from Mumbai & Navi Mumbai. Selection is strictly merit-based."
    },
    {
        title: "Team Size",
        desc: "Teams must consist of 2 to 4 members. Inter-college and interdisciplinary teams are encouraged."
    },
    {
        title: "Collaborations",
        desc: "Inter-college teams are allowed. Mix and match your skills across different institutions."
    },
    {
        title: "Round 1 Entry",
        desc: "Round 1 (Online Ideation) is free to participate for all registered students."
    },
    {
        title: "Progression",
        desc: "Only shortlisted teams from Round 1 will advance to the offline Grand Finale."
    },
    {
        title: "Finale Fee",
        desc: "₹600 per team (non-refundable) is required to confirm participation in the Grand Finale."
    },
    {
        title: "Build Phase",
        desc: "All projects must be built from scratch during the 24-hour hackathon period."
    },
    {
        title: "Tools & APIs",
        desc: "Use of open-source libraries, APIs, and frameworks is allowed. Innovation is the goal."
    },
    {
        title: "Originality",
        desc: "Pre-built or previously developed projects are not permitted. Fresh thinking is required."
    },
    {
        title: "Plagiarism",
        desc: "All submissions must be original and plagiarism-free. We value integrity above all."
    },
    {
        title: "Attendance",
        desc: "Shortlisted teams must attend all mandatory sessions and workshops during the finale."
    },
    {
        title: "Judging Logic",
        desc: "Judging will be based on innovation, clarity, technical execution, and practicality."
    },
    {
        title: "Code of Conduct",
        desc: "Participants must maintain a respectful, inclusive, and collaborative environment."
    },
    {
        title: "Disqualification",
        desc: "Any form of misconduct or rule violation may result in immediate disqualification."
    },
    {
        title: "Final Authority",
        desc: "Decisions made by the organizers and judges are final and binding for all participants."
    }
];

const Rules = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const rulesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
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

            // Rules Stagger Animation
            rulesRef.current.forEach((rule, index) => {
                gsap.from(rule, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    delay: (index % 3) * 0.1, // Stagger based on column
                    scrollTrigger: {
                        trigger: rule,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="rules"
            ref={sectionRef}
            className="relative w-full py-32 px-8 overflow-hidden bg-black/10"
        >
            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Header */}
                <div ref={titleRef} className="mb-20 text-center md:text-left">
                    <p className="text-yellow-500 text-sm font-mono tracking-[0.5em] uppercase mb-6">Guidelines</p>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase whitespace-pre-line">
                        RULES &<br />
                        <span className="text-yellow-500 italic font-light">REGULATIONS</span>
                    </h2>
                </div>

                {/* Rules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rulesData.map((rule, index) => (
                        <div
                            key={index}
                            ref={el => rulesRef.current[index] = el}
                            className="group p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-yellow-500/30 transition-all duration-500 hover:bg-zinc-800/60"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <span className="text-yellow-500 font-mono text-sm tracking-widest uppercase">
                                    Code 0{index + 1}
                                </span>
                                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                                {rule.title}
                            </h3>

                            <p className="text-white/50 leading-relaxed text-sm lg:text-base">
                                {rule.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Texture/Decorative elements */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-yellow-500/3 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Rules;
