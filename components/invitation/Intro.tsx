"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="flex px-6 py-4 bg-wedding-light">
      <div className="max-w-md mx-auto text-center ">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[10px] uppercase tracking-[0.45em] text-wedding-primary"
        >
          Y&G
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-5 text-4xl leading-tight text-wedding-dark/75"
        >
          Nuestro amor <br /> llega al altar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm mx-auto mt-8 font-sans text-sm leading-7 text-wedding-dark/75"
        >
          Con la bendición de Dios y rodeados del cariño de familiares y amigos,
          queremos invitarlos a celebrar nuestro matrimonio.{" "}
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="max-w-xs mx-auto mt-10 text-2xl leading-snug text-wedding-dark/75"
        >
          “Dios hizo todo hermoso en su tiempo.”
        </motion.h3>

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
