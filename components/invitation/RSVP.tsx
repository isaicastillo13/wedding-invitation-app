"use client";

import { motion } from "framer-motion";

export default function RSVP({ guest }: { guest: any }) {
  return (
    <section
      id="rsvp"
      className="px-6 py-20 bg-wedding-warm text-wedding-dark/75"
    >
      <div className="max-w-md mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.45em] text-wedding-primary"
        >
          Confirma tu asistencia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 font-serif text-4xl leading-tight"
        >
          Nos encantará <br /> verte ahí
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-sm mx-auto mt-6 text-sm leading-7 text-wedding-dark/70"
        >
          Con mucha ilusión esperamos contar con su presencia. Por favor
          confirmar asistencia antes del 27 de mayo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-sm mx-auto mt-6 text-sm leading-7 text-wedding-dark/70"
        >
          Esta initacion es valida para <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 font-serif text-4xl leading-tight"
        >
            {guest.passes} persona(s)
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-sm mx-auto mt-6 text-sm leading-7 text-wedding-dark/70"
        >
          {guest.name}
        </motion.p>
        
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 space-y-4 text-left"
        >
          <select className="w-full px-5 py-4 text-sm border outline-none border-wedding-primary/30 bg-white/70 focus:border-wedding-primary">
            <option>¿Asistirás?</option>
            <option>Sí, asistiré</option>
            <option>No podré asistir</option>
          </select>

          <input
            type="number"
            placeholder="Cantidad de personas"
            className="w-full px-5 py-4 text-sm border outline-none border-wedding-primary/30 bg-white/70 placeholder:text-wedding-dark/40 focus:border-wedding-primary"
          />

          <button
            type="button"
            className="w-full bg-wedding-primary px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition hover:opacity-90"
          >
            Enviar respuesta
          </button>
        </motion.form>
      </div>
    </section>
  );
}
