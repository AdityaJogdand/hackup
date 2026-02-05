import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clg1 from "../assets/clg1.PNG";
import clg2 from "../assets/clg2.PNG";
import clg3 from "../assets/clg3.PNG";
import clg4 from "../assets/apv.jpeg";
// import clg5 from "../assets/clg5.jpeg";

gsap.registerPlugin(ScrollTrigger);

const tieUpsData = [
    { img: clg1, name: "College 1" },
    { img: clg2, name: "College 2" },
    { img: clg3, name: "College 3" },
    { img: clg4, name: "College 4" },

];

const TieUps = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const carouselRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Note: Title animation removed to ensure visibility on all devices

            // Infinite Carousel Animation
            const carousel = carouselRef.current;

            // Animating xPercent to -25% moves exactly one set (1/4 of total)
            // We use 4 duplicated sets to ensure there's always enough content filling the screen
            // even on wide monitors before the loop resets
            gsap.to(carousel, {
                xPercent: -25,
                duration: 20,
                ease: "none",
                repeat: -1,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Duplicate logos 4 times for seamless infinite scroll on large screens
    const duplicatedLogos = [...tieUpsData, ...tieUpsData, ...tieUpsData, ...tieUpsData];

    return (
        <section
            id="tieups"
            ref={sectionRef}
            className="relative w-full py-16 md:py-24 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
                {/* Header - Always visible */}
                <div className="mb-8 sm:mb-12 md:mb-20 pt-8 md:pt-0">
                    <p className="text-yellow-400 text-xs sm:text-sm font-mono tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 md:mb-6 font-semibold">
                        Our Network
                    </p>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-3 sm:mb-4">
                        TRUSTED <span className="text-yellow-500 italic font-light">PARTNERSHIPS</span>
                    </h2>
                    <p className="text-zinc-400 text-xs sm:text-sm md:text-lg max-w-2xl mx-auto px-4">
                        Collaborating with leading institutions to deliver excellence
                    </p>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    {/* Scrolling Logos */}
                    <div
                        ref={carouselRef}
                        className="flex gap-8 md:gap-12 items-center"
                    >
                        {duplicatedLogos.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-32 h-32 md:w-64 md:h-64 flex items-center justify-center bg-white rounded-xl md:rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.1)] p-2 md:p-4"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className={`w-full h-full object-contain ${item.img === clg4 ? 'scale-50' : ''}`}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `<div class="text-white font-bold text-xl">${item.name}</div>`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional: Add a decorative divider */}
                <div className="mt-12 md:mt-16 flex items-center justify-center gap-4">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-500/50" />
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-500/50" />
                </div>
            </div>
        </section>
    );
};

export default TieUps;