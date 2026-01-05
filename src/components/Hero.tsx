"use client";

import { motion } from "framer-motion";

export default function Hero() {
    const scrollToForm = () => {
        const element = document.getElementById("waitlist-form");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent px-6">
            {/* Subtle Background Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-50" />

            <div className="relative z-10 max-w-5xl text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
                >
                    Build Your Dream Home. <br />
                    <span className="text-neutral-500">Without The Nightmares.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    AI-powered platform for barndominium and modular construction.
                    Know your costs. Trust your builder. Build with confidence.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    onClick={scrollToForm}
                    className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-300 text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                    Join Beta Waitlist
                </motion.button>
            </div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-20" />
            </motion.div>
        </section>
    );
}
