"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Portrait */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/portrait.png"
          alt="Pedro Viana"
          fill
          className="object-cover object-top filter grayscale contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-brand-yellow font-bebas text-2xl tracking-[0.2em] mb-4 uppercase"
        >
          PEDRO AUGUSTO
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-distressed text-6xl md:text-8xl lg:text-9xl font-bebas leading-none text-white drop-shadow-2xl"
        >
          AI ARCHITECT <br />
          <span className="text-brand-yellow">& DATA ENGINEER</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <div className="w-px h-24 bg-gradient-to-b from-brand-yellow to-transparent mx-auto animate-bounce" />
        </motion.div>
      </div>

      {/* Ambient Circles (Inspired by Giba's site) */}
      <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute top-[10%] right-[-5%] w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />
    </section>
  );
}
