"use client";

import { motion } from "framer-motion";

export default function Closing() {
  return (
    <section className="px-6 py-6 text-center bg-wedding-light text-wedding-dark">
      <div className="max-w-md mx-auto">
        {/* Línea decorativa */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px mx-auto bg-wedding-primary/40"
        />

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10 text-sm tracking-wide text-wedding-dark/70"
        >
          Con amor,
        </motion.p>

        {/* Nombres (script) */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-4 font-(--font-script) text-5xl text-wedding-dark"
        >
          Yas & George
        </motion.h2>

        {/* Línea inferior */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-px mx-auto mt-10 bg-wedding-primary/40"
        />
      </div>
    </section>
  );
}