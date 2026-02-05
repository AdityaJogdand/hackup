import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Schedule from "./components/Schedule"
import Prizes from "./components/Prizes"
import Colleges from "./components/Tracks"
import Rules from "./components/Rules"
import FAQ from "./components/FAQ"
import TieUps from "./components/TieUps"
import bgImage from "./assets/bg.jpeg";
import uniteLogo from "./assets/UniteCorelogo.PNG";
import hackupLogo from "./assets/hackthecore.png";
import mascotImg from './assets/character1.png';
import mascotScheduleImg from './assets/character2.png';
import mascotPrizesImg from './assets/character3.png';
import mascotTracksImg from './assets/character4.png';
import mascotTieUpsImg from './assets/character5.png';
import bubbleImg from './assets/bubble.png';


gsap.registerPlugin(ScrollTrigger);

function App() {
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
    // Force scroll to top on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
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
      // Initial state
      gsap.set(mascotRef.current, { opacity: 0, y: 100 });
      gsap.set(bubbleRef.current, { opacity: 0, scale: 0.5 });

      // Animation Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top center", // Starts appearing when About hits center
          end: "bottom center", // Fades out when About leaves center
          toggleActions: "play reverse play reverse", // Fade in/out on enter/leave
        }
      });

      // Intro
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

      // Float Loop (independent of scroll position, continuous)
      gsap.to(bubbleRef.current, {
        y: -15, // float up
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    });

    // Global Mascot Animation for Schedule Section
    const ctxSchedule = gsap.context(() => {
      // Initial state
      gsap.set(mascotScheduleRef.current, { opacity: 0, y: 100 });
      gsap.set(bubbleScheduleRef.current, { opacity: 0, scale: 0.5 }); // Start smaller

      // Animation Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#schedule",
          start: "top center", // Starts appearing when Schedule hits center
          end: "bottom center", // Fades out when Schedule leaves center
          toggleActions: "play reverse play reverse", // Fade in/out on enter/leave
        }
      });

      // Intro
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

      // Float Loop
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
      // Initial state
      gsap.set(mascotPrizesRef.current, { opacity: 0, y: 100 });
      gsap.set(bubblePrizesRef.current, { opacity: 0, scale: 0.5 });

      // Animation Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#prizes",
          start: "top center", // Changed from "top 80%" to match other mascots
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      });

      // Intro
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

      // Float Loop
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
      // Initial state
      gsap.set(mascotTracksRef.current, { opacity: 0, y: 100 });
      gsap.set(bubbleTracksRef.current, { opacity: 0, scale: 0.5 });

      // Animation Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#tracks",
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      });

      // Intro
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

      // Float Loop
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
      // Initial state
      gsap.set(mascotTieUpsRef.current, { opacity: 0, y: 100 });
      gsap.set(bubbleTieUpsRef.current, { opacity: 0, scale: 0.5 });

      // Animation Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#tieups",
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      });

      // Intro
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

      // Float Loop
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
      {/* Fixed Static Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={bgRef}
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover scale-105"
        />
        {/* Black overlay that fades out on scroll */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/60"
        />
        {/* Subtle gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Fixed HackUp Logo on Top Left - Laptop Only */}
      <div className="hidden lg:block fixed top-5 left-6 z-[1000] pointer-events-none transition-all duration-500">
        <img
          src={hackupLogo}
          alt="HackUp"
          className="h-16 md:h-24 w-auto object-contain"
        />
      </div>

      {/* Fixed UniteCore Logo on Top Right - Laptop Only */}
      <div className="hidden lg:block fixed top-10 right-12 z-[1000] pointer-events-none transition-all duration-500">
        <div className="flex items-center gap-4">
          <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
          <img
            src={uniteLogo}
            alt="UniteCore"
            className="h-10 md:h-14 w-auto object-contain opacity-80"
          />
        </div>
      </div>

      {/* Global Mascot for Schedule - Fixed Position (Left Side) */}
      <div ref={mascotScheduleRef} className="fixed bottom-0 left-4 lg:left-10 z-50 pointer-events-none hidden lg:block w-48 lg:w-56 opacity-0 translate-y-20">
        <img
          src={mascotScheduleImg}
          alt="Mascot Schedule"
          className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10"
        // No horizontal flip for left side usually, unless image needs it. Assuming character2 faces right or front.
        />
        <div ref={bubbleScheduleRef} className="absolute -top-60 left-[50%] -translate-x-1/2 md:left-[50%] md:translate-x-0 w-80 lg:w-96 opacity-0 scale-75 origin-bottom-left z-20">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={bubbleImg}
              alt="Bubble"
              className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            // Normal orientation for left side bubble
            />
            <div className="absolute inset-0 flex items-center justify-center pl-10 pr-14 pb-12 pt-4">
              <p className="text-black text-base lg:text-lg font-black leading-tight italic tracking-tight text-center">
                "Step by step,<br />habibi — Dubai<br />wasn't built in a day."
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Schedule />
        <Prizes />
        <Colleges />
        <TieUps />
        <Rules />
        <FAQ />

        {/* Footer */}
        {/* Footer */}
        <footer className="w-full py-12 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="text-xl font-black text-white font-['Zalando_Sans_Expanded']">HACKUP</div>
            <div className="flex flex-col gap-1 text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">
              <p>Shravan Kadam : <span className="text-yellow-500">8308078534</span></p>
              <p>Bhavesh Rajdev : <span className="text-yellow-500">+91 88779 90898</span></p>
              <p>Mail : <a href="mailto:Connect@hackthecore.in" className="text-yellow-500 hover:text-white transition-colors">Connect@hackthecore.in</a></p>
            </div>
          </div>

          <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.5em]">© 2026 HackTheCore. All rights reserved.</div>

          <div className="flex gap-6 items-center">
            {/* Instagram */}
            <a href="#" className="text-yellow-500 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" className="text-yellow-500 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="X">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Discord */}
            <a href="#" className="text-yellow-500 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Discord">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>

      {/* Global Mascot - Fixed Position, Visible only during About Section */}
      <div ref={mascotRef} className="fixed bottom-0 right-4 lg:right-10 z-50 pointer-events-none hidden lg:block w-48 lg:w-56 opacity-0 translate-y-20">
        <img
          src={mascotImg}
          alt="Mascot"
          className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10"
          style={{ transform: 'scaleX(-1)' }}
        />
        <div ref={bubbleRef} className="absolute -top-60 right-[120%] translate-x-1/2 w-80 lg:w-96 opacity-0 scale-75 origin-bottom-right z-20">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={bubbleImg}
              alt="Bubble"
              className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              style={{ transform: 'scaleX(-1)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center pl-14 pr-10 pb-12 pt-4">
              <p className="text-black text-base lg:text-lg font-black leading-tight italic tracking-tight text-center">
                "Welcome to HackUp,<br />habibi — build like<br />it's global."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Mascot for Prizes - Fixed Position (Right Side) */}
      <div ref={mascotPrizesRef} className="fixed bottom-0 right-4 lg:right-10 z-[60] pointer-events-none hidden lg:block w-48 lg:w-56 opacity-0 translate-y-20">
        <img
          src={mascotPrizesImg}
          alt="Mascot Prizes"
          className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10"
          style={{ transform: 'scaleX(-1)' }} // Assuming facing left like About mascot
        />
        <div ref={bubblePrizesRef} className="absolute -top-60 right-[120%] translate-x-1/2 w-80 lg:w-96 opacity-0 scale-75 origin-bottom-right z-20">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={bubbleImg}
              alt="Bubble"
              className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              style={{ transform: 'scaleX(-1)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center pl-14 pr-10 pb-12 pt-4">
              <p className="text-black text-base lg:text-lg font-black leading-tight italic tracking-tight text-center">
                "Build hard, habibi —<br />GITEX Dubai<br />awaits you."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Mascot for Tracks - Fixed Position (Left Side) */}
      <div ref={mascotTracksRef} className="fixed bottom-0 left-4 lg:left-10 z-50 pointer-events-none hidden lg:block w-48 lg:w-56 opacity-0 translate-y-20">
        <img
          src={mascotTracksImg}
          alt="Mascot Tracks"
          className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10"
        />
        <div ref={bubbleTracksRef} className="absolute -top-60 left-[50%] -translate-x-1/2 md:left-[50%] md:translate-x-0 w-80 lg:w-96 opacity-0 scale-75 origin-bottom-left z-20">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={bubbleImg}
              alt="Bubble"
              className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
            <div className="absolute inset-0 flex items-center justify-center pl-10 pr-14 pb-12 pt-4">
              <p className="text-black text-base lg:text-lg font-black leading-tight italic tracking-tight text-center">
                "Coming soon,<br />habibi — big things<br />on the way."
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Global Mascot for TieUps - Fixed Position (Right Side) */}
      <div ref={mascotTieUpsRef} className="fixed bottom-0 right-4 lg:right-10 z-50 pointer-events-none hidden lg:block w-48 lg:w-56 opacity-0 translate-y-20">
        <img
          src={mascotTieUpsImg}
          alt="Mascot TieUps"
          className="w-full h-auto object-bottom drop-shadow-[0_10px_40px_rgba(234,179,8,0.25)] relative z-10"
          style={{ transform: 'scaleX(-1)' }}
        />
        <div ref={bubbleTieUpsRef} className="absolute -top-60 right-[120%] translate-x-1/2 w-80 lg:w-96 opacity-0 scale-75 origin-bottom-right z-20">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={bubbleImg}
              alt="Bubble"
              className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              style={{ transform: 'scaleX(-1)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center pl-14 pr-10 pb-12 pt-4">
              <p className="text-black text-base lg:text-lg font-black leading-tight italic tracking-tight text-center">
                "Powered by<br />leading campuses<br />and committees"
              </p>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

export default App;