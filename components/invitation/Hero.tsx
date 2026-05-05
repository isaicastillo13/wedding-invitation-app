"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col items-center justify-center h-full text-center text-wedding-light"
    >
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/DSC02645.jpg"
            alt="Wedding"
            className="object-cover w-full h-full scale-125"
          />
          {/* Mascara oscura */}
          <div className="absolute inset-0 bg-black opacity-30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-start h-full px-6 py-20 text-center text-wedding-light">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.5em] opacity-80"
          >
            Un sí para toda la vida
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-6xl leading-tight tracking-wide"
          >
            Yasmin <br /> & George
          </motion.h1>

        </div>
      </section>
    </motion.div>
  );
}
