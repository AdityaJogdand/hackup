import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"
import img9 from "../assets/img9.jpg"
import img10 from "../assets/img10.jpg"

const ArcLanding = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [revealComplete, setRevealComplete] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [imagesComplete, setImagesComplete] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    // Images array
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const lastThreeImages = images.slice(-3);
    const totalSequence = images.length - 3; // Show all except last 3 in main sequence

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const totalImages = images.length;

        const imagePromises = images.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
                    resolve();
                };
                img.onerror = reject;
                img.src = src;
            });
        });

        Promise.all(imagePromises)
            .then(() => {
                setTimeout(() => setImagesLoaded(true), 500);
            })
            .catch((err) => {
                console.error('Error loading images:', err);
                setImagesLoaded(true);
            });
    }, []);

    // Sequence Timer
    useEffect(() => {
        if (imagesLoaded && revealComplete && currentImage < totalSequence) {
            const timer = setTimeout(() => {
                setCurrentImage(prev => prev + 1);
            }, 550); // Speeded up to 350ms
            return () => clearTimeout(timer);
        } else if (imagesLoaded && revealComplete && currentImage >= totalSequence && !imagesComplete) {
            // End of sequence
            const timer = setTimeout(() => {
                setImagesComplete(true);
                setShowContent(true);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [currentImage, revealComplete, imagesLoaded, imagesComplete]);

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-white text-black">

            {/* 1. Loading Screen */}
            <AnimatePresence>
                {!imagesLoaded && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <div className="flex flex-col items-center gap-8">
                            <h1 className="text-8xl font-['Zalando_Sans_Expanded'] tracking-tighter text-black">
                                HACK<span className="font-bold">UP</span>
                            </h1>
                            <div className="w-64 h-0.5 bg-gray-100 relative overflow-hidden">
                                <motion.div
                                    className="absolute left-0 top-0 h-full bg-black"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${loadingProgress}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <div className="flex items-center justify-between w-64 text-xs font-mono uppercase">
                                <span>System Check</span>
                                <span>{loadingProgress}%</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. Split Screen Reveal */}
            <AnimatePresence>
                {imagesLoaded && !revealComplete && (
                    <>
                        <motion.div
                            className="fixed top-0 left-0 w-full h-1/2 bg-black z-50 text-white flex items-end justify-center pb-4"
                            initial={{ y: "0%" }}
                            animate={{ y: "-100%" }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                            onAnimationComplete={() => setRevealComplete(true)}
                        >
                            <span className="text-xs font-mono uppercase tracking-[0.3em] mb-4">Initialising Visuals</span>
                        </motion.div>
                        <motion.div
                            className="fixed bottom-0 left-0 w-full h-1/2 bg-black z-50"
                            initial={{ y: "0%" }}
                            animate={{ y: "100%" }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                        />
                    </>
                )}
            </AnimatePresence>

            {/* 3. Main Image Sequence - Fast & Zoomed */}
            <div className="absolute inset-0 z-0 bg-neutral-100">
                {images.slice(0, totalSequence + 1).map((img, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0, scale: 1.05, filter: "grayscale(100%)" }}
                        animate={{
                            opacity: index === currentImage && !imagesComplete ? 1 : 0,
                            scale: index === currentImage ? 1 : 1.05,
                            filter: index === currentImage ? "grayscale(0%)" : "grayscale(100%)",
                            zIndex: index === currentImage ? 10 : 0
                        }}
                        transition={{
                            opacity: { duration: 0.4, delay: index === 0 ? 0.5 : 0 },
                            scale: { duration: 1.2, ease: "easeOut", delay: index === 0 ? 0.5 : 0 },
                            filter: { duration: 0.4, delay: index === 0 ? 0.5 : 0 }
                        }}
                    >
                        <img
                            src={img}
                            alt={`Sequence ${index}`}
                            className="w-full h-full object-cover"
                            decoding="sync"
                            loading="eager"
                        />

                    </motion.div>
                ))}
            </div>

            {/* 4. Final Layout - Premium Content */}
            <AnimatePresence>
                {imagesComplete && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-full z-20 bg-white"
                    >
                        {/* -- TOP NAVBAR -- */}
                        <motion.header
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-8 z-50 mix-blend-difference text-white"
                        >
                            <div className="flex items-center gap-4">
                                <span className="font-['Zalando_Sans_Expanded'] text-3xl font-bold tracking-tighter">HACKUP</span>

                            </div>

                            <nav className="flex items-center gap-12">
                                {['Tracks', 'Sponsors', 'Timeline', 'FAQ'].map((item) => (
                                    <button key={item} className="text-sm font-medium uppercase tracking-widest hover:text-yellow-400 transition-colors">
                                        {item}
                                    </button>
                                ))}
                                <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all">
                                    Register
                                </button>
                            </nav>
                        </motion.header>

                        {/* -- TOP LEFT FILLER: System Specs -- */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute top-32 left-8 z-10 w-48 hidden md:flex flex-col gap-4 text-[10px] font-mono text-neutral-400"
                        >
                            <div className="flex justify-between border-b border-gray-200 pb-1">
                                <span>STATUS</span>
                                <span className="text-black">OPERATIONAL</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-1">
                                <span>LATENCY</span>
                                <span className="text-black">12ms</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-1">
                                <span>REGION</span>
                                <span className="text-black">AP-SOUTH-1</span>
                            </div>
                            <div className="mt-4 text-justify opacity-60 font-sans leading-relaxed">
                                // INITIALIZING SEQUENCE...
                            // TARGET: HACKTHECORE
                            // ACCESS: GRANTED
                            </div>
                        </motion.div>



                        {/* -- LEFT COLUMN: 3 Squares Vertical -- */}
                        <div className="absolute bottom-32 left-8 z-20 flex flex-col gap-4 w-48">
                            {lastThreeImages.map((img, index) => (
                                <motion.div
                                    key={`row-${index}`}
                                    className="relative w-full aspect-square rounded-lg overflow-hidden border border-white/50 shadow-xl"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.15,
                                        ease: "circOut"
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-full h-full object-cover"
                                        decoding="sync"
                                    />
                                    <div className="absolute bottom-2 left-2 text-white text-[10px] font-mono bg-black/50 px-1.5 py-0.5 backdrop-blur-sm">
                                        IMG_0{8 - index}.RAW
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* -- CENTER & RIGHT CONTENT -- */}
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pl-90 z-30">



                            <div className="relative z-30">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-white bg-black uppercase">
                                        Feb 14-16, 2026
                                    </span>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="mb-8"
                                >
                                    <h1 className="font-['Zalando_Sans_Expanded'] text-[8rem] font-black text-black leading-[0.8] tracking-tighter">
                                        HACKUP
                                    </h1>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                    className="flex items-start gap-12 max-w-2xl"
                                >
                                    <div className="flex flex-col gap-8 w-full">
                                        <div className="flex items-start gap-12">
                                            <p className="font-['Google_Sans'] text-xl text-neutral-600 leading-relaxed font-medium">
                                                The ultimate showdown for developers. 48 hours to disrupt reality and deploy the future.
                                            </p>

                                            <div className="flex flex-col gap-2 min-w-[200px]">
                                                <div className="flex justify-between border-b border-gray-200 pb-1">
                                                    <span className="text-xs font-bold uppercase text-neutral-400">Grand Prize</span>
                                                    <span className="text-xs font-mono font-bold whitespace-nowrap">Trip to Dubai</span>
                                                </div>
                                                <div className="flex justify-between border-b border-gray-200 pb-1">
                                                    <span className="text-xs font-bold uppercase text-neutral-400">Venue</span>
                                                    <span className="text-xs font-mono font-bold whitespace-nowrap">Cidco</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* EXPANDED CTA SECTION */}
                                        <div className="flex items-center gap-8 pt-4">
                                            <button className="group relative bg-black text-white px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl">
                                                <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                                <span className="relative font-['Google_Sans'] font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                                    Register Now <span className="text-lg">→</span>
                                                </span>
                                            </button>

                                            <button className="group px-6 py-4 rounded-full border border-neutral-200 hover:border-black transition-colors">
                                                <span className="font-['Google_Sans'] font-bold uppercase tracking-widest text-sm text-black">
                                                    Download Brochure
                                                </span>
                                            </button>

                                            <div className="h-12 w-px bg-gray-200 mx-2" />

                                            <div className="flex items-center gap-3">
                                                <div className="flex -space-x-3">
                                                    {[1, 2, 3].map(i => (
                                                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-300 border-2 border-white" />
                                                    ))}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-black">452+</span>
                                                    <span className="text-[10px] uppercase font-bold text-green-500 flex items-center gap-1">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                        Registered
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>

                        {/* -- FAR RIGHT IMAGE (IMG10) -- */}
                        <motion.div
                            className="absolute top-1/2 -translate-y-1/2 right-12 h-[60%] w-[25%] z-20 hidden xl:block shadow-2xl rounded-2xl overflow-hidden"
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        >
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src={img10}
                                    alt="Feature"
                                    className="w-full h-full object-cover filter brightness-90 grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
                            </div>
                        </motion.div>

                        <div className="absolute bottom-0 w-full flex items-center justify-between px-12 py-6 bg-white/80 backdrop-blur">
                            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-neutral-400">
                                <a href="https://www.linkedin.com/showcase/hackthecore/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
                                <a href="https://www.instagram.com/hackthecore.in?igsh=MTNuMHJicXB5bDQ3YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
                                <a href="https://x.com/hackthecorein?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">X</a>
                            </div>

                            <div className="text-xs font-mono text-neutral-300">
                                48h 00m 00s UNTIL LAUNCH
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ArcLanding;