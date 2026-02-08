import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../assets/2.png";
// import logoImg from "../assets/hackuplogo.png";
import mascotImg from '../assets/character.png';
import bubbleImg from '../assets/bubble.png';
import aboutImg1 from '../assets/about.png';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textWrapRef = useRef(null);
    const imageRef = useRef(null);
    const mascotRef = useRef(null);
    const bubbleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textWrapRef.current.querySelectorAll(".reveal"), {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none",
                },
            });

            // Image animation - only runs on desktop where image is visible
            if (imageRef.current) {
                gsap.fromTo(
                    imageRef.current,
                    { y: 200, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 65%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative w-full min-h-screen overflow-hidden"
        >
            {/* Subtle Black Overlay for depth */}
            <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />

            <div className="relative z-10 w-full min-h-screen flex items-center">

                {/* Content - Left Side */}
                <div className="relative z-20 w-full lg:w-[60%] px-4 sm:px-6 md:px-12 lg:px-24 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-20 flex flex-col justify-center">
                    <div ref={textWrapRef} className="max-w-2xl w-full">

                        {/* Tag */}
                        <div className="reveal flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                            <div className="w-1.5 h-1.5 sm:w-2 md:w-3 md:h-3 bg-yellow-500 rounded-full" />
                            <span className="text-yellow-500 text-[9px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                                About Us
                            </span>
                        </div>

                        {/* Logo */}
                        <div className="reveal mb-4 sm:mb-6 md:mb-8">
                            <img src={aboutImg1} alt="HACKUP" className="h-12 sm:h-16 md:h-24 lg:h-32 w-auto" />
                        </div>

                        {/* Big Headline */}
                        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none mb-4 sm:mb-6 md:mb-8 lg:mb-8 tracking-tight">
                            BUILD<br />
                            WHAT'S <span className="text-yellow-500">NEXT</span>
                        </h2>

                        {/* Description */}
                        <p className="reveal text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-10 max-w-xl">
                            HackUp is more than a hackathon — it's a launchpad for
                            world-changing ideas. We bring together the brightest minds for
                            24 hours of intense innovation.
                        </p>

                        {/* Big Stats */}
                        <div className="reveal mb-8 sm:mb-10 md:mb-12 lg:mb-12 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-10">
                            {/* Date Row */}
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white">03 APR 2026</h3>
                                <p className="text-yellow-500 text-[8px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mt-1 sm:mt-2">Grand Finale</p>
                            </div>

                            {/* Metrics Row */}
                            <div className="flex flex-wrap items-start gap-4 sm:gap-6 md:gap-8 lg:gap-16">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">24H</h3>
                                    <p className="text-yellow-500 text-[8px] sm:text-xs md:text-xs font-bold uppercase tracking-wider mt-1 sm:mt-2">Duration</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">₹3L</h3>
                                    <p className="text-yellow-500 text-[8px] sm:text-xs md:text-xs font-bold uppercase tracking-wider mt-1 sm:mt-2">Prizes</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">1000+</h3>
                                    <p className="text-yellow-500 text-[8px] sm:text-xs md:text-xs font-bold uppercase tracking-wider mt-1 sm:mt-2">Hackers</p>
                                </div>
                            </div>
                        </div>

                        {/* Big CTA Button */}
                        <button className="reveal px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-yellow-500 text-black text-xs sm:text-sm md:text-base lg:text-lg font-black uppercase tracking-wider rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_40px_rgba(234,179,8,0.3)] w-full sm:w-auto">
                            Register Now →
                        </button>

                    </div>
                </div>

                {/* Big Image - Right Side - Desktop/PC Only (hidden on tablets/iPads and mobile) */}
                <div
                    ref={imageRef}
                    className="hidden xl:flex absolute right-0 bottom-0 lg:w-[85%] lg:h-[125%] items-end justify-end pointer-events-none z-0 translate-x-20 translate-y-20 bottom-10"
                >
                    <img
                        src={aboutImg}
                        alt="Dubai Monument"
                        className="relative w-full h-full object-contain object-bottom drop-shadow-[0_0_120px_rgba(234,179,8,0.1)]"
                    />
                </div>

            </div>



        </section>
    );
};

export default About;