"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="bg-wedding-light px-6 py-20 text-wedding-dark">
      <div className="mx-auto max-w-md text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[10px] uppercase tracking-[0.45em] text-wedding-primary"
        >
          Nuestra invitación
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-5 font-serif text-4xl leading-tight"
        >
          Nuestro amor <br /> llega al altar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mx-auto mt-8 max-w-sm text-sm leading-7 text-wedding-dark/75"
        >
          Con la bendición de Dios y rodeados del cariño de familiares y amigos,
          queremos invitarlos a celebrar nuestro matrimonio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mx-auto mt-10 w-full max-w-70 overflow-hidden  bg-wedding-secondary"
        >
          <img
            src="/images/DSC02547.jpg"
            alt="Yasmin y George"
            className="h-90 w-full object-cover saturate-75 brightness-95"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mx-auto mt-10 max-w-xs font-serif text-2xl leading-snug text-wedding-dark"
        >
          “Dios hizo todo hermoso en su tiempo.”
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-3 text-[10px] uppercase tracking-[0.35em] text-wedding-primary"
        >
          Eclesiastés 3:11
        </motion.p>
      </div>
    </section>
  );
}
