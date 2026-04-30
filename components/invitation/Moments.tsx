"use client";

import { motion } from "framer-motion";

export default function Moments() {
  return (
    <section className="bg-wedding-light">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mx-auto max-w-5xl overflow-hidden"
      >
        <img
          src="/images/DSC02666.jpg"
          alt="Yasmin y George"
          className="h-100 w-full object-cover"
        />
      </motion.div>
    </section>
  );
}