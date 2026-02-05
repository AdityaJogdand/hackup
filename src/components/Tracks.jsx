import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tracks = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
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

            // Coming Soon Text Animation
            gsap.from(contentRef.current, {
                y: 30,
                opacity: 0,
                scale: 0.9,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="tracks"
            ref={sectionRef}
            className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto px-8 relative z-10 text-center flex flex-col justify-center">

                {/* Header */}
                <div ref={titleRef} className="mb-12">
                    <p className="text-yellow-500 text-sm font-mono tracking-[0.5em] uppercase mb-6">Explore</p>
                    <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter">
                        INNOVATION <span className="text-yellow-500 italic font-light">TRACKS</span>
                    </h2>
                </div>

                {/* Coming Soon Area */}
                <div ref={contentRef} className="relative py-20">
                    <div className="absolute inset-0 bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />
                    <h3 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white uppercase tracking-[0.1em] drop-shadow-[0_0_50px_rgba(255,255,255,0.2)] select-none">
                        COMING SOON
                    </h3>
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-yellow-500/5 blur-[250px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Tracks;
