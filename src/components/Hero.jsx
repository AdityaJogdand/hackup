import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImg from '../assets/hackuplogo.png';
import mascotImg from '../assets/character.png';
import bubbleImg from '../assets/bubble.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const logoRef = useRef(null);
    const subTextRef = useRef(null);
    const ctaRef = useRef(null);
    const countdownRef = useRef(null);
    const mascotRef = useRef(null);
    const bubbleRef = useRef(null);

    // Countdown state
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Calculate time until Feb 9th, 2026
    useEffect(() => {
        const targetDate = new Date('2026-02-09T00:00:00+05:30').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const splitText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} className="inline-block opacity-0 transform translate-y-10 char-element">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();



            // 2. Animate HACKTHECORE letters in
            tl.to(".char-element", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.04,
                ease: "power4.out",
            }, 0.5);

            // 3. Wait, then fade out HACKTHECORE
            tl.to(textRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.6,
                ease: "power2.in",
            }, "+=1");

            // 3. Fade in the logo and subtext together
            tl.fromTo([logoRef.current, subTextRef.current],
                { opacity: 0, scale: 0.9, y: 20 },
                {
                    opacity: 1,
                    scale: (i, target) => target === logoRef.current ? 1 : 1, // Just setting default
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.2
                },
                "-=0.3"
            );

            // 5. Show countdown
            tl.fromTo(countdownRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.6"
            );

            // 6. Show CTA button
            tl.fromTo(ctaRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    onComplete: () => {
                        // Show mascot and bubble intro
                        gsap.to(mascotRef.current, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: "back.out(1.7)"
                        });
                        gsap.to(bubbleRef.current, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.6,
                            delay: 0.5,
                            ease: "back.out(1.7)",
                            onComplete: () => {
                                // Add floating animation for bubble
                                gsap.to(bubbleRef.current, {
                                    y: "-=8",
                                    duration: 2,
                                    repeat: -1,
                                    yoyo: true,
                                    ease: "sine.inOut"
                                });
                            }
                        });

                        // Separate scroll-out animation for all hero content
                        // Using a standard scrollTrigger to ensure smooth bi-directional fade
                        gsap.fromTo([logoRef.current, countdownRef.current, ctaRef.current, mascotRef.current, bubbleRef.current],
                            { opacity: 1, yPercent: 0 },
                            {
                                scrollTrigger: {
                                    trigger: containerRef.current,
                                    start: "top top",
                                    end: "40% top", // Fades out by 40% of scroll
                                    scrub: 1, // Smooth scrub
                                    invalidateOnRefresh: true,
                                },
                                yPercent: -20,
                                opacity: 0,
                                ease: "none",
                                immediateRender: false
                            }
                        );
                    }
                },
                "-=0.5"
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden text-white flex flex-col items-center justify-center">
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center">

                {/* Sub Text */}
                <div className="overflow-hidden mb-4 sm:mb-6 md:mb-8">
                    <span ref={subTextRef} className="block text-[10px] sm:text-xs md:text-sm font-['DM_Mono'] tracking-[0.4em] sm:tracking-[0.5em] text-yellow-400 uppercase opacity-0">
                        Navi Mumbai's Largest Curated Hackathon
                    </span>
                </div>

                {/* HACKTHECORE Text - Fades Out */}
                <h1 ref={textRef} className="font-['Zalando_Sans_Expanded'] text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-tight text-white drop-shadow-2xl absolute">
                    <div className="overflow-hidden flex flex-wrap justify-center max-w-[90vw]">
                        {splitText("HACKTHECORE")}
                    </div>
                </h1>

                {/* Logo - Fades In After */}
                <div ref={logoRef} className="opacity-0">
                    <img
                        src={logoImg}
                        alt="HackUp Logo"
                        className="h-24 sm:h-40 md:h-56 lg:h-72 xl:h-80 w-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Countdown Timer */}
                <div ref={countdownRef} className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 opacity-0 w-full px-2">
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-mono tracking-[0.3em] text-yellow-500 uppercase mb-3 sm:mb-4 md:mb-5">
                        Registrations Starts In
                    </p>
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-4 lg:gap-6">
                        {/* Days */}
                        <div className="flex flex-col items-center">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tabular-nums">
                                {String(timeLeft.days).padStart(2, '0')}
                            </span>
                            <span className="text-[8px] sm:text-[9px] md:text-xs font-mono text-white/50 uppercase tracking-widest mt-1 sm:mt-2">Days</span>
                        </div>

                        <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-500 mb-3 sm:mb-4 md:mb-5">:</span>

                        {/* Hours */}
                        <div className="flex flex-col items-center">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tabular-nums">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </span>
                            <span className="text-[8px] sm:text-[9px] md:text-xs font-mono text-white/50 uppercase tracking-widest mt-1 sm:mt-2">Hours</span>
                        </div>

                        <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-500 mb-3 sm:mb-4 md:mb-5">:</span>

                        {/* Minutes */}
                        <div className="flex flex-col items-center">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tabular-nums">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </span>
                            <span className="text-[8px] sm:text-[9px] md:text-xs font-mono text-white/50 uppercase tracking-widest mt-1 sm:mt-2">Mins</span>
                        </div>

                        <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-500 mb-3 sm:mb-4 md:mb-5">:</span>

                        {/* Seconds */}
                        <div className="flex flex-col items-center">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tabular-nums">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </span>
                            <span className="text-[8px] sm:text-[9px] md:text-xs font-mono text-white/50 uppercase tracking-widest mt-1 sm:mt-2">Secs</span>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div ref={ctaRef} className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 opacity-0 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
                    <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-yellow-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] w-full sm:w-auto">
                        <span className="relative z-10 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-black">
                            Register Now
                        </span>
                    </button>
                    <a
                        href="https://drive.google.com/file/d/13yXTjirDAHi2PiIkZqsp1gWr38qTS25Z/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-white/40 hover:scale-105 w-full sm:w-auto"
                    >
                        <span className="relative z-10 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white">
                            View Brochure
                        </span>
                    </a>
                </div>
            </div>


            {/* Mascot and Dialog Bubble - Bubble positioned to the right */}
            <div ref={mascotRef} className="absolute bottom-0 left-0 z-20 opacity-0 translate-y-10 pointer-events-none w-28 sm:w-36 md:w-48 lg:w-40 xl:w-48">
                <img
                    src={mascotImg}
                    alt="Mascot"
                    className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10"
                />
                {/* Bubble positioned to the right */}
                <div ref={bubbleRef} className="absolute -top-40 sm:-top-52 md:-top-64 lg:-top-56 xl:-top-64 left-2 sm:left-4 md:left-6 lg:left-8 w-48 sm:w-64 md:w-80 lg:w-[18rem] xl:w-[22rem] opacity-0 scale-75 origin-bottom-left z-20">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={bubbleImg}
                            alt="Bubble"
                            className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pl-6 sm:pl-10 md:pl-12 lg:pl-10 pr-8 sm:pr-14 md:pr-16 lg:pr-12 pb-8 sm:pb-12 md:pb-14 lg:pb-10 pt-2 sm:pt-3 md:pt-4 lg:pt-3">
                            <p className="text-black text-xs sm:text-base md:text-xl lg:text-sm xl:text-lg font-black leading-tight italic tracking-tight text-center">
                                "This isn't just a <br />hackathon habibi<br />it's flex."
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hero;