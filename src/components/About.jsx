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
                <div className="relative z-20 w-full lg:w-[60%] px-6 md:px-16 lg:px-24 pt-32 pb-20 flex flex-col justify-center">
                    <div ref={textWrapRef} className="max-w-2xl w-full">

                        {/* Tag */}
                        <div className="reveal flex items-center gap-4 mb-6">
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full" />
                            <span className="text-yellow-500 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                                About Us
                            </span>
                        </div>

                        {/* Logo */}
                        <div className="reveal mb-8">
                            <img src={aboutImg1} alt="HACKUP" className="h-16 md:h-24 lg:h-32 w-auto" />
                        </div>

                        {/* Big Headline */}
                        <h2 className="reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-8 tracking-tight">
                            BUILD<br />
                            WHAT'S <span className="text-yellow-500">NEXT</span>
                        </h2>

                        {/* Description */}
                        <p className="reveal text-base md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
                            HackUp is more than a hackathon — it's a launchpad for
                            world-changing ideas. We bring together the brightest minds for
                            24 hours of intense innovation.
                        </p>

                        {/* Big Stats */}
                        <div className="reveal mb-12 flex flex-col gap-10">
                            {/* Date Row */}
                            <div>
                                <h3 className="text-4xl md:text-6xl font-black text-white">03 APR 2026</h3>
                                <p className="text-yellow-500 text-xs md:text-sm font-bold uppercase tracking-[0.4em] mt-2">Grand Finale</p>
                            </div>

                            {/* Metrics Row */}
                            <div className="flex flex-wrap items-start gap-8 md:gap-16">
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-black text-white">24H</h3>
                                    <p className="text-yellow-500 text-xs md:text-xs font-bold uppercase tracking-wider mt-2">Duration</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-black text-white">₹3L</h3>
                                    <p className="text-yellow-500 text-xs md:text-xs font-bold uppercase tracking-wider mt-2">Prizes</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-black text-white">1000+</h3>
                                    <p className="text-yellow-500 text-xs md:text-xs font-bold uppercase tracking-wider mt-2">Hackers</p>
                                </div>
                            </div>
                        </div>

                        {/* Big CTA Button */}
                        <button className="reveal px-10 py-4 bg-yellow-500 text-black text-lg font-black uppercase tracking-wider rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_40px_rgba(234,179,8,0.3)] w-full sm:w-auto">
                            Register Now →
                        </button>

                    </div>
                </div>

                {/* Big Image - Right Side */}
                <div
                    ref={imageRef}
                    className="hidden lg:flex absolute right-0 bottom-0 lg:w-[85%] lg:h-[125%] items-end justify-end pointer-events-none z-0 translate-x-20 translate-y-20 bottom-10"
                >
                    {/* Shadow/Gradient overlay for mobile text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden z-10" />

                    <img
                        src={aboutImg}
                        alt="Dubai Monument"
                        className="relative w-full h-full object-contain object-bottom opacity-30 lg:opacity-100 drop-shadow-[0_0_120px_rgba(234,179,8,0.1)]"
                    />
                </div>

            </div>



        </section>
    );
};

export default About;