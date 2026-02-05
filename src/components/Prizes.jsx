import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import burjImg from "../assets/burjkhalifa.png";

gsap.registerPlugin(ScrollTrigger);

const Prizes = () => {
    const sectionRef = useRef(null);
    const prizeItemsRef = useRef([]);
    const imageRef = useRef(null);

    const prizesData = [
        {
            place: "2nd",
            prize: "₹75,000",
            subtitle: "Tech Hampers",
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

    return (
        <section
            ref={sectionRef}
            id="prizes"
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden z-10 bg-black/20"
        >
            {/* Background Image - Absolute Placeholder for Burj */}


            <div className="w-full max-w-[1400px] px-8 text-center relative z-20">
                <div id="rewardsTitle" className="mb-16">
                    <p className="text-yellow-500 text-sm font-mono tracking-[0.5em] uppercase mb-4">Rewards</p>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                        THE <span className="text-yellow-500 italic font-light">PRIZES</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-10">
                    {prizesData.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (prizeItemsRef.current[index] = el)}
                            className={`flex flex-col items-center p-10 rounded-[2.5rem] bg-zinc-900/80 backdrop-blur-xl border border-white/10 w-full md:w-80 lg:w-96 
                                transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                                hover:-translate-y-12 hover:scale-[1.08] hover:border-yellow-500/50 hover:bg-zinc-800/90 
                                hover:shadow-[0_40px_80px_rgba(234,179,8,0.25)] group cursor-pointer overflow-hidden relative ${item.place === "1st"
                                    ? "md:order-2 h-[560px] scale-110 z-20 border-yellow-500/40 hover:scale-[1.18]"
                                    : item.place === "2nd"
                                        ? "md:order-1 h-[480px] z-10"
                                        : "md:order-3 h-[440px] z-10"
                                }`}
                        >
                            <div className="text-yellow-500/50 text-sm font-mono uppercase tracking-[0.3em] mb-4 group-hover:text-yellow-500 transition-colors">
                                {item.rank}
                            </div>

                            <div className={`text-7xl md:text-9xl font-black mb-8 transition-transform duration-500 group-hover:scale-110 ${item.color}`}>
                                {item.place}
                            </div>

                            <div className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                                {item.prize}
                            </div>

                            <div className="text-xl text-white/60 font-medium group-hover:text-white transition-colors duration-300">
                                {item.title && <div className="text-lg mb-1">{item.title}</div>}
                                <div className={item.place === "1st" ? "font-bold text-2xl text-yellow-500" : ""}>
                                    {item.subtitle}
                                </div>
                            </div>

                            {item.place === "1st" && (
                                <>
                                    {/* Burj Image revealed on hover */}
                                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-700 ease-out z-0">
                                        <img
                                            src={burjImg}
                                            alt="Burj Khalifa"
                                            className="w-full h-full object-contain object-bottom scale-110 group-hover:scale-100 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="mt-auto pt-10 relative z-10">
                                        <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(234,179,8,0.5)]">
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
