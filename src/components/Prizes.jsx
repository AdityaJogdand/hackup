import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import burjImg from "../assets/burjkhalifa.png";

gsap.registerPlugin(ScrollTrigger);

const Prizes = () => {
    const sectionRef = useRef(null);
    const prizeItemsRef = useRef([]);
    const imageRef = useRef(null);
    const [activeCard, setActiveCard] = useState(null);

    const prizesData = [
        {
            place: "2nd",
            prize: "₹75,000",
            subtitle: "Goodie Bags",
            color: "text-white/80",
            glow: "shadow-[0_15px_40px_rgba(255,255,255,0.05)]",
            rank: "Runner Up"
        },
        {
            place: "1st",
            prize: "₹1,00,000",
            title: "Trip to",
            subtitle: "GITEX Global Dubai 2026",
            color: "text-yellow-500",
            glow: "shadow-[0_20px_60px_rgba(234,179,8,0.2)]",
            rank: "Grand Prize"
        },
        {
            place: "3rd",
            prize: "₹50,000",
            subtitle: "Goodie Bags",
            color: "text-white/60",
            glow: "shadow-[0_15px_40px_rgba(255,255,255,0.05)]",
            rank: "Third Place"
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none",
                },
            });

            // 1. Title comes down
            tl.from("#rewardsTitle", {
                opacity: 0,
                y: -100,
                duration: 1,
            });

            // 2. Prize items "pop in" with 3D effect
            prizeItemsRef.current.forEach((item, index) => {
                tl.fromTo(
                    item,
                    {
                        opacity: 0,
                        y: 150,
                        rotateY: index === 0 ? -20 : index === 2 ? 20 : 0,
                        rotateX: 10,
                        scale: 0.8,
                        transformPerspective: 1000
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotateY: 0,
                        rotateX: 0,
                        scale: 1,
                        duration: 1,
                        ease: "back.out(1.2)"
                    },
                    "-=0.7"
                );
            });



            // Final wait
            tl.to({}, { duration: 1 });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleCardClick = (index) => {
        // Toggle active state on mobile
        if (activeCard === index) {
            setActiveCard(null);
        } else {
            setActiveCard(index);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="prizes"
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden z-10 bg-black/20 p-3 sm:p-4 md:p-5 lg:p-5"
        >
            {/* Background Image - Absolute Placeholder for Burj */}


            <div className="w-full max-w-[1400px] px-4 sm:px-6 md:px-8 text-center relative z-20">
                <div id="rewardsTitle" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <p className="text-yellow-500 text-xs sm:text-sm md:text-base font-mono tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 md:mb-6">Rewards</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter">
                        THE <span className="text-yellow-500 italic font-light">PRIZES</span>
                    </h2>
                </div>

                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-end justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {prizesData.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (prizeItemsRef.current[index] = el)}
                            onClick={() => handleCardClick(index)}
                            className={`flex flex-col items-center p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] bg-zinc-900/80 backdrop-blur-xl border border-white/10 w-full sm:max-w-sm md:max-w-md lg:max-w-none lg:w-80 xl:w-96
                                transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                                md:hover:-translate-y-8 lg:md:hover:-translate-y-12 md:hover:scale-[1.05] lg:hover:scale-[1.08] md:hover:border-yellow-500/50 md:hover:bg-zinc-800/90 
                                md:hover:shadow-[0_40px_80px_rgba(234,179,8,0.25)] group cursor-pointer overflow-hidden relative
                                ${activeCard === index ? '-translate-y-4 sm:-translate-y-6 scale-[1.02] sm:scale-105 border-yellow-500/50 bg-zinc-800/90 shadow-[0_40px_80px_rgba(234,179,8,0.25)]' : ''}
                                ${item.place === "1st"
                                    ? "lg:order-2 h-auto sm:h-[400px] md:h-[480px] lg:h-[560px] lg:scale-110 z-20 border-yellow-500/40 md:hover:scale-[1.05] lg:hover:scale-[1.18]"
                                    : item.place === "2nd"
                                        ? "lg:order-1 h-auto sm:h-[350px] md:h-[420px] lg:h-[480px] z-10"
                                        : "lg:order-3 h-auto sm:h-[320px] md:h-[390px] lg:h-[440px] z-10"
                                }`}
                        >
                            <div className={`text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 transition-colors
                                md:group-hover:text-yellow-500
                                ${activeCard === index ? 'text-yellow-500' : 'text-yellow-500/50'}`}>
                                {item.rank}
                            </div>

                            <div className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 md:mb-8 transition-transform duration-500 
                                md:group-hover:scale-110
                                ${activeCard === index ? 'scale-110' : ''}
                                ${item.color}`}>
                                {item.place}
                            </div>

                            <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 md:mb-4 transition-colors duration-300
                                md:group-hover:text-yellow-500
                                ${activeCard === index ? 'text-yellow-500' : ''}`}>
                                {item.prize}
                            </div>

                            <div className={`text-base sm:text-lg md:text-xl text-white/60 font-medium transition-colors duration-300
                                md:group-hover:text-white
                                ${activeCard === index ? 'text-white' : ''}`}>
                                {item.title && <div className="text-sm sm:text-base md:text-lg mb-1">{item.title}</div>}
                                <div className={item.place === "1st" ? "font-bold text-lg sm:text-xl md:text-2xl text-yellow-500" : ""}>
                                    {item.subtitle}
                                </div>
                            </div>

                            {item.place === "1st" && (
                                <>
                                    {/* Burj Image revealed on hover/tap */}
                                    <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out z-0
                                        md:opacity-0 md:group-hover:opacity-30
                                        ${activeCard === index ? 'opacity-30' : 'opacity-0'}`}>
                                        <img
                                            src={burjImg}
                                            alt="Burj Khalifa"
                                            className={`w-full h-full object-contain object-bottom transition-transform duration-700
                                                md:scale-110 md:group-hover:scale-100
                                                ${activeCard === index ? 'scale-100' : 'scale-110'}`}
                                        />
                                    </div>
                                    <div className="mt-auto pt-6 sm:pt-8 md:pt-10 relative z-10">
                                        <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full bg-yellow-500 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-[0_0_30px_rgba(234,179,8,0.5)]">
                                            🏆
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative background gradients */}
            <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none" />

        </section>
    );
};

export default Prizes;