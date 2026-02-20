import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Schedule from "../components/Schedule"
import Prizes from "../components/Prizes"
import Colleges from "../components/Tracks"
import Rules from "../components/Rules"
import FAQ from "../components/FAQ"
import TieUps from "../components/TieUps"
import Sponsors from "../components/Sponsors"
import bgImage from "../assets/bg.jpeg";
import uniteLogo from "../assets/UniteCorelogo.PNG";
import hackupLogo from "../assets/hackthecore.png";
import mascotScheduleImg from '../assets/character2.png';
import bubbleImg from '../assets/bubble.png';
import mascotImg from '../assets/character1.png';
import mascotPrizesImg from '../assets/character3.png';
import mascotTracksImg from '../assets/character4.png';
import mascotTieUpsImg from '../assets/character5.png';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const bgRef = useRef(null);
    const overlayRef = useRef(null);
    const mascotRef = useRef(null);
    const bubbleRef = useRef(null);
    const mascotScheduleRef = useRef(null);
    const bubbleScheduleRef = useRef(null);
    const mascotPrizesRef = useRef(null);
    const bubblePrizesRef = useRef(null);
    const mascotTracksRef = useRef(null);
    const bubbleTracksRef = useRef(null);
    const mascotTieUpsRef = useRef(null);
    const bubbleTieUpsRef = useRef(null);

    useEffect(() => {
        // Force scroll to top on reload if coming from another page
        window.scrollTo(0, 0);

        // Entry animation for background
        gsap.fromTo(bgRef.current,
            { scale: 1.1, filter: "brightness(0.3)" },
            {
                scale: 1,
                filter: "brightness(0.5)",
                duration: 2.5,
                ease: "power2.out"
            }
        );

        // Fade out the black overlay as user scrolls to About section
        gsap.to(overlayRef.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
                end: "top 30%",
                scrub: true,
            },
        });

        // Global Mascot Animation for About Section
        const ctx = gsap.context(() => {
            gsap.set(mascotRef.current, { opacity: 0, y: 100 });
            gsap.set(bubbleRef.current, { opacity: 0, scale: 0.5 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#about",
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                }
            });

            tl.to(mascotRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.2)"
            })
                .to(bubbleRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.5)"
                }, "-=0.4");

            gsap.to(bubbleRef.current, {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // Global Mascot Animation for Schedule Section
        const ctxSchedule = gsap.context(() => {
            gsap.set(mascotScheduleRef.current, { opacity: 0, y: 100 });
            gsap.set(bubbleScheduleRef.current, { opacity: 0, scale: 0.5 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#schedule",
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                }
            });

            tl.to(mascotScheduleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.2)"
            })
                .to(bubbleScheduleRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.5)"
                }, "-=0.4");

            gsap.to(bubbleScheduleRef.current, {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // Global Mascot Animation for Prizes Section
        const ctxPrizes = gsap.context(() => {
            gsap.set(mascotPrizesRef.current, { opacity: 0, y: 100 });
            gsap.set(bubblePrizesRef.current, { opacity: 0, scale: 0.5 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#prizes",
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                }
            });

            tl.to(mascotPrizesRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.2)"
            })
                .to(bubblePrizesRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.5)"
                }, "-=0.4");

            gsap.to(bubblePrizesRef.current, {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // Global Mascot Animation for Tracks Section
        const ctxTracks = gsap.context(() => {
            gsap.set(mascotTracksRef.current, { opacity: 0, y: 100 });
            gsap.set(bubbleTracksRef.current, { opacity: 0, scale: 0.5 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#tracks",
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                }
            });

            tl.to(mascotTracksRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.2)"
            })
                .to(bubbleTracksRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.5)"
                }, "-=0.4");

            gsap.to(bubbleTracksRef.current, {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // Global Mascot Animation for TieUps Section
        const ctxTieUps = gsap.context(() => {
            gsap.set(mascotTieUpsRef.current, { opacity: 0, y: 100 });
            gsap.set(bubbleTieUpsRef.current, { opacity: 0, scale: 0.5 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#tieups",
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                }
            });

            tl.to(mascotTieUpsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.2)"
            })
                .to(bubbleTieUpsRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.5)"
                }, "-=0.4");

            gsap.to(bubbleTieUpsRef.current, {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        return () => {
            ctx.revert();
            ctxSchedule.revert();
            ctxPrizes.revert();
            ctxTracks.revert();
            ctxTieUps.revert();
        };
    }, []);

    return (
        <main className="relative bg-black min-h-screen">
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <img ref={bgRef} src={bgImage} alt="Background" className="w-full h-full object-cover scale-105" />
                <div ref={overlayRef} className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
            </div>

            <div className="hidden xl:block fixed top-4 left-4 md:left-6 lg:left-8 z-[1000] pointer-events-none transition-all duration-500">
                <img src={hackupLogo} alt="HackUp" className="h-10 md:h-12 lg:h-14 xl:h-18 w-auto object-contain" />
            </div>

            <div className="hidden xl:block fixed top-6 right-4 md:right-8 lg:right-10 z-[1000] pointer-events-none transition-all duration-500">
                <div className="flex items-center gap-3">
                    <div className="w-[1px] h-6 bg-white/10" />
                    <img src={uniteLogo} alt="UniteCore" className="h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain opacity-100" />
                </div>
            </div>

            <div ref={mascotScheduleRef} className="fixed bottom-0 left-2 md:left-6 lg:left-10 z-50 pointer-events-none hidden md:block w-32 md:w-40 lg:w-48 xl:w-56 opacity-0 translate-y-20">
                <img src={mascotScheduleImg} alt="Mascot Schedule" className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10" />
                <div ref={bubbleScheduleRef} className="absolute -top-40 md:-top-52 lg:-top-60 left-[50%] -translate-x-1/2 md:left-[50%] md:translate-x-0 w-52 md:w-72 lg:w-80 xl:w-96 opacity-0 scale-75 origin-bottom-left z-20">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img src={bubbleImg} alt="Bubble" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
                        <div className="absolute inset-0 flex items-center justify-center pl-6 md:pl-8 lg:pl-10 pr-8 md:pr-12 lg:pr-14 pb-8 md:pb-10 lg:pb-12 pt-2 md:pt-3 lg:pt-4">
                            <p className="text-black text-xs md:text-sm lg:text-base xl:text-lg font-black leading-tight italic tracking-tight text-center">
                                "Step by step,<br />habibi — Dubai<br />wasn't built in a day."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <About />
                <Schedule />
                <Prizes />
                <Colleges />
                <Sponsors />
                <TieUps />
                <Rules />
                <FAQ />

                <footer className="w-full py-12 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 bg-black/50 backdrop-blur-sm">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <div className="text-xl font-black text-white font-['Zalando_Sans_Expanded']">HACK THE CORE</div>
                        <div className="flex flex-col gap-1 text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">
                            <p>Shravan Kadam : <span className="text-yellow-500">+91 83080 78534</span></p>
                            <p>Bhavesh Rajdev : <span className="text-yellow-500">+91 88779 90898</span></p>
                            <p>Mail : <a href="mailto:Connect@hackthecore.in" className="text-yellow-500 hover:text-white transition-colors">Connect@hackthecore.in</a></p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.5em]">© 2026 HackTheCore. All rights reserved.</div>
                        <Link to="/privacy-policy" className="text-[10px] font-bold text-yellow-500/50 hover:text-yellow-500 uppercase tracking-widest transition-colors">Privacy Policy & privacy-policy</Link>
                    </div>

                    <div className="flex gap-6 items-center">
                        <a href="https://www.linkedin.com/showcase/hackthecore/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="LinkedIn">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/hackthecore.in?igsh=MTNuMHJicXB5bDQ3YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Instagram">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://x.com/hackthecorein?s=21" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="X">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                    </div>
                </footer>
            </div>

            <div ref={mascotRef} className="fixed bottom-0 right-2 md:right-6 lg:right-10 z-50 pointer-events-none hidden md:block w-32 md:w-40 lg:w-48 xl:w-56 opacity-0 translate-y-20">
                <img src={mascotImg} alt="Mascot" className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10" style={{ transform: 'scaleX(-1)' }} />
                <div ref={bubbleRef} className="absolute -top-40 md:-top-52 lg:-top-60 right-[120%] translate-x-1/2 w-52 md:w-72 lg:w-80 xl:w-96 opacity-0 scale-75 origin-bottom-right z-20">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img src={bubbleImg} alt="Bubble" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" style={{ transform: 'scaleX(-1)' }} />
                        <div className="absolute inset-0 flex items-center justify-center pl-8 md:pl-12 lg:pl-14 pr-6 md:pr-8 lg:pr-10 pb-8 md:pb-10 lg:pb-12 pt-2 md:pt-3 lg:pt-4">
                            <p className="text-black text-xs md:text-sm lg:text-base xl:text-lg font-black leading-tight italic tracking-tight text-center">
                                "Welcome to HackUp,<br />habibi — build like<br />it's global."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={mascotPrizesRef} className="fixed bottom-0 right-2 md:right-6 lg:right-10 z-[60] pointer-events-none hidden md:block w-32 md:w-40 lg:w-48 xl:w-56 opacity-0 translate-y-20">
                <img src={mascotPrizesImg} alt="Mascot Prizes" className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10" style={{ transform: 'scaleX(-1)' }} />
                <div ref={bubblePrizesRef} className="absolute -top-40 md:-top-52 lg:-top-60 right-[120%] translate-x-1/2 w-52 md:w-72 lg:w-80 xl:w-96 opacity-0 scale-75 origin-bottom-right z-20">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img src={bubbleImg} alt="Bubble" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" style={{ transform: 'scaleX(-1)' }} />
                        <div className="absolute inset-0 flex items-center justify-center pl-8 md:pl-12 lg:pl-14 pr-6 md:pr-8 lg:pr-10 pb-8 md:pb-10 lg:pb-12 pt-2 md:pt-3 lg:pt-4">
                            <p className="text-black text-xs md:text-sm lg:text-base xl:text-lg font-black leading-tight italic tracking-tight text-center">
                                "Build hard, habibi —<br />GITEX Dubai<br />awaits you."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={mascotTracksRef} className="fixed bottom-0 left-2 md:left-6 lg:left-10 z-50 pointer-events-none hidden md:block w-32 md:w-40 lg:w-48 xl:w-56 opacity-0 translate-y-20">
                <img src={mascotTracksImg} alt="Mascot Tracks" className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10" />
                <div ref={bubbleTracksRef} className="absolute -top-40 md:-top-52 lg:-top-60 left-[50%] -translate-x-1/2 md:left-[50%] md:translate-x-0 w-52 md:w-72 lg:w-80 xl:w-96 opacity-0 scale-75 origin-bottom-left z-20">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img src={bubbleImg} alt="Bubble" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
                        <div className="absolute inset-0 flex items-center justify-center pl-6 md:pl-8 lg:pl-10 pr-8 md:pr-12 lg:pr-14 pb-8 md:pb-10 lg:pb-12 pt-2 md:pt-3 lg:pt-4">
                            <p className="text-black text-xs md:text-sm lg:text-base xl:text-lg font-black leading-tight italic tracking-tight text-center">
                                "Coming soon,<br />habibi — big things<br />on the way."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={mascotTieUpsRef} className="fixed bottom-0 right-2 md:right-6 lg:right-10 z-50 pointer-events-none hidden md:block w-32 md:w-40 lg:w-48 xl:w-56 opacity-0 translate-y-20">
                <img src={mascotTieUpsImg} alt="Mascot TieUps" className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10" style={{ transform: 'scaleX(-1)' }} />
                <div ref={bubbleTieUpsRef} className="absolute -top-40 md:-top-52 lg:-top-60 right-[120%] translate-x-1/2 w-52 md:w-72 lg:w-80 xl:w-96 opacity-0 scale-75 origin-bottom-right z-20">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img src={bubbleImg} alt="Bubble" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" style={{ transform: 'scaleX(-1)' }} />
                        <div className="absolute inset-0 flex items-center justify-center pl-8 md:pl-12 lg:pl-14 pr-6 md:pr-8 lg:pr-10 pb-8 md:pb-10 lg:pb-12 pt-2 md:pt-3 lg:pt-4">
                            <p className="text-black text-xs md:text-sm lg:text-base xl:text-lg font-black leading-tight italic tracking-tight text-center">
                                "Powered by<br />leading campuses<br />and committees"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
