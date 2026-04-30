"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  className="flex h-full flex-col items-center justify-center text-center text-wedding-light"
>   
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/DSC02624.jpg"
          alt="Wedding"
          className="h-full w-full object-cover"
        />
        {/* <div className="absolute inset-0 backdrop-blur-[2px]" /> */}
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-wedding-light">
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
          className="mt-4 text-5xl leading-tight tracking-wide"
        >
          Yasmin <br /> & George
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.5em] opacity-80"
        >
          Junio 27, 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.5em] opacity-80"
        >
          Hotel Central Salón San José
        </motion.p>
        <motion.a
          href="#rsvp"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 border border-white/60 bg-white/10 px-10 py-3 text-[11px] uppercase tracking-[0.4em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105"
        >
          RSVP
        </motion.a>
      </div>
    </section>
    </motion.div>
  );
}
