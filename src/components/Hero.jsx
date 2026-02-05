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
                <div className="overflow-hidden mb-6">
                    <span ref={subTextRef} className="block text-xs md:text-sm font-['DM_Mono'] tracking-[0.5em] text-yellow-400 uppercase opacity-0">
                        Navi Mumbai's Largest Curated Hackathon
                    </span>
                </div>

                {/* HACKTHECORE Text - Fades Out */}
                <h1 ref={textRef} className="font-['Zalando_Sans_Expanded'] text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-tight text-white drop-shadow-2xl absolute">
                    <div className="overflow-hidden flex flex-wrap justify-center max-w-[90vw]">
                        {splitText("HACKTHECORE")}
                    </div>
                </h1>

                {/* Logo - Fades In After */}
                <div ref={logoRef} className="opacity-0">
                    <img
                        src={logoImg}
                        alt="HackUp Logo"
                        className="h-32 sm:h-48 md:h-64 lg:h-80 w-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Countdown Timer */}
                <div ref={countdownRef} className="mt-8 md:mt-10 opacity-0 w-full px-2">
                    <p className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-yellow-500 uppercase mb-4">
                        Registrations Starts In
                    </p>
                    <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
                        {/* Days */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tabular-nums">
                                {String(timeLeft.days).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] md:text-xs font-mono text-white/50 uppercase tracking-widest mt-2">Days</span>
                        </div>

                        <span className="text-2xl md:text-4xl font-bold text-yellow-500 mb-5">:</span>

                        {/* Hours */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tabular-nums">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] md:text-xs font-mono text-white/50 uppercase tracking-widest mt-2">Hours</span>
                        </div>

                        <span className="text-2xl md:text-4xl font-bold text-yellow-500 mb-5">:</span>

                        {/* Minutes */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tabular-nums">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] md:text-xs font-mono text-white/50 uppercase tracking-widest mt-2">Mins</span>
                        </div>

                        <span className="text-2xl md:text-4xl font-bold text-yellow-500 mb-5">:</span>

                        {/* Seconds */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tabular-nums">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] md:text-xs font-mono text-white/50 uppercase tracking-widest mt-2">Secs</span>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div ref={ctaRef} className="mt-10 opacity-0 flex flex-col md:flex-row items-center gap-4">
                    <button className="group relative px-10 py-4 bg-yellow-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                        <span className="relative z-10 text-sm font-bold uppercase tracking-[0.2em] text-black">
                            Register Now
                        </span>
                    </button>
                    <a
                        href="https://drive.google.com/file/d/1wqGlKIpAWD9g5vyIjP8wUyphrK5gm8WL/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 py-4 border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-white/40 hover:scale-105"
                    >
                        <span className="relative z-10 text-sm font-bold uppercase tracking-[0.2em] text-white">
                            View Brochure
                        </span>
                    </a>
                </div>
            </div>


            {/* Mascot and Dialog Bubble */}
            <div ref={mascotRef} className="hidden lg:block absolute bottom-0 left-4 md:left-10 w-32 md:w-48 lg:w-56 z-20 opacity-0 translate-y-10 pointer-events-none">
                <img
                    src={mascotImg}
                    alt="Mascot"
                    className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10"
                />
                <div ref={bubbleRef} className="absolute -top-60 left-[50%] -translate-x-1/2 md:left-[45%] md:translate-x-0 md:-top-72 w-80 md:w-96 opacity-0 scale-75 origin-bottom-left z-20">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={bubbleImg}
                            alt="Bubble"
                            className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pl-10 pr-14 pb-12 pt-4">
                            <p className="text-black text-base md:text-lg font-black leading-tight italic tracking-tight text-center">
                                "This isn’t just a <br />hackathon habibi<br />it’s flex."
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hero;
