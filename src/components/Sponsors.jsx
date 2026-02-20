import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import uniteLogo from "../assets/unitelogo.png";
import digimarketmozLogo from "../assets/digimarketmoz.png";
import dataopsLogo from "../assets/DataOps.png";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current.querySelectorAll(".reveal"), {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const sponsors = [
        { img: uniteLogo, name: "Unite Cloud" },
        { img: digimarketmozLogo, name: "Digimarketmoz" },
        { img: dataopsLogo, name: "DataOps" },
    ];

    return (
        <section
            id="sponsors"
            ref={sectionRef}
            className="relative w-full py-20 md:py-32 overflow-hidden bg-black/40 backdrop-blur-sm"
        >
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center" ref={contentRef}>
                <div className="reveal mb-16">
                    <p className="text-yellow-500 text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4">
                        Collaboration
                    </p>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase">
                        Our <span className="text-yellow-500">Partner</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 mb-12">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center p-8 md:p-12 bg-white/10 border border-white/20 rounded-3xl hover:bg-white/15 hover:border-yellow-500/50 transition-all duration-500 w-64 md:w-80 lg:w-96 aspect-[4/3] shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                        >
                            <div className="relative w-full h-full flex items-center justify-center bg-black/20 rounded-2xl p-4 transition-transform duration-500 group-hover:scale-110">
                                <img
                                    src={sponsor.img}
                                    alt={sponsor.name}
                                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                                    onError={(e) => {
                                        console.error(`Failed to load logo: ${sponsor.name}`);
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML += `<span class="text-white font-bold text-xl">${sponsor.name}</span>`;
                                    }}
                                />
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
                                <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest whitespace-nowrap bg-black px-4 py-2 rounded-full border border-yellow-500/20">
                                    {sponsor.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="reveal mt-20 flex items-center justify-center gap-4">
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-yellow-500/50" />
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                    <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-yellow-500/50" />
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
