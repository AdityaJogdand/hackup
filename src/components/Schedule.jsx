import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hackupLogo from "../assets/hackuplogo.png";

gsap.registerPlugin(ScrollTrigger);

const scheduleData = [
    {
        time: "9th February 2026",
        title: "Registrations Starts",
        desc: "The portal opens! Register your team and start brainstorming ideas.",
    },
    {
        time: "15th March 2026",
        title: "Registrations End",
        desc: "Deadline for all team registrations. Make sure you're in!",
    },
    {
        time: "23rd March 2026",
        title: "Round 1: PPT Submission",
        desc: "Submit your project proposal and presentation for evaluation.",
    },
    {
        time: "31st March 2026",
        title: "Round 1: Results",
        desc: "Announcement of finalists moving forward to the Grand Finale.",
    },
    {
        time: "3rd - 4th April 2026",
        title: "Grand Finale",

        isCenter: true,
    },
];

const Schedule = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const itemsRef = useRef([]);
    const cardsRef = useRef([]);
    const glowLineRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(titleRef.current, {
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // Glow line animation - grows as user scrolls
            gsap.fromTo(
                glowLineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 60%",
                        end: "bottom 40%",
                        scrub: 1,
                    },
                }
            );

            // Timeline cards slide in
            cardsRef.current.forEach((card, index) => {
                if (card) {
                    const isCenter = index === scheduleData.length - 1;
                    gsap.fromTo(
                        card,
                        {
                            opacity: 0,
                            x: isCenter ? 0 : (index % 2 === 0 ? -100 : 100), // Left items from left, right from right
                            y: isCenter ? 100 : 0
                        },
                        {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            duration: 1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="schedule"
            ref={sectionRef}
            className="relative w-full min-h-screen py-16 md:py-32 overflow-hidden"
        >
            {/* Background Accent */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-yellow-500/5 blur-[100px] md:blur-[200px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">

                {/* Header */}
                <div ref={titleRef} className="text-center mb-16 md:mb-32">
                    <p className="text-yellow-500 text-xs sm:text-sm font-mono tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-4 md:mb-6">
                        Roadmap
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight px-4">
                        Journey to <span className="italic font-light text-yellow-500">Innovation</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative">

                    {/* Vertical Center Line - Background (Desktop only) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-[10rem] w-[2px] bg-white/10 hidden md:block" />

                    {/* Vertical Center Line - Animated Glow (Desktop only) */}
                    <div
                        ref={glowLineRef}
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-[10rem] w-[4px] origin-top hidden md:block"
                        style={{
                            background: 'linear-gradient(to bottom, #EAB308, #EAB308)',
                            boxShadow: '0 0 20px 4px rgba(234, 179, 8, 0.6), 0 0 40px 8px rgba(234, 179, 8, 0.3)',
                            transform: 'scaleY(0)',
                        }}
                    />

                    {/* Timeline Items */}
                    {scheduleData.map((item, index) => {
                        const isRightSide = index % 2 !== 0;
                        const isCenter = item.isCenter;

                        if (isCenter) {
                            // Centered Layout for Grand Finale
                            return (
                                <div key={index} className="flex flex-col items-center justify-center mt-12 md:mt-20 relative z-10 w-full">
                                    <div
                                        ref={(el) => (cardsRef.current[index] = el)}
                                        className="flex flex-col items-center text-center max-w-2xl px-4"
                                    >
                                        {/* Center dot - desktop only */}
                                        <div className="hidden md:block w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,1)] mb-8" />

                                        <img src={hackupLogo} alt="HACKUP" className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto mb-4 md:mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />

                                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
                                            {item.title}
                                        </h3>

                                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-yellow-500 uppercase tracking-wider md:tracking-widest mb-4 md:mb-6 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                                            {item.time}
                                        </div>

                                        <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        }

                        // Standard Left/Right Layout
                        return (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-start md:items-center mb-12 sm:mb-16 md:mb-28 last:mb-0 ${isRightSide ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content - This is what animates */}
                                <div
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="w-full md:w-1/2 px-0 md:px-16"
                                >
                                    <div className={`flex flex-col items-start text-left md:${isRightSide ? "items-start text-left" : "items-end text-right"
                                        }`}>
                                        {/* Time Badge */}
                                        <span className="inline-block text-xs sm:text-sm font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-yellow-500 mb-3 md:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 border border-yellow-500/30 rounded-full">
                                            {item.time}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-6 text-white leading-tight">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-lg">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Point - Desktop only */}
                                <div className="relative z-10 my-8 md:my-0 hidden md:block">
                                    {/* Outer Glow */}
                                    <div className="absolute inset-0 w-6 h-6 bg-yellow-500/40 rounded-full blur-md" />
                                    {/* Main Dot */}
                                    <div className="relative w-6 h-6 rounded-full bg-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.6)]">
                                        {/* Inner White Dot */}
                                        <div className="absolute inset-[6px] bg-white rounded-full" />
                                    </div>
                                </div>

                                {/* Empty Space for Opposite Side - Desktop only */}
                                <div className="hidden md:block w-1/2" />
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12 md:mt-24">
                    <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-yellow-500 text-black text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_50px_rgba(234,179,8,0.3)]">
                        Add to Calendar
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Schedule;