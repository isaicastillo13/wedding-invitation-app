"use client";

import { CalendarDays, Clock, MapPin, Car, Shirt } from "lucide-react";
import { motion } from "framer-motion";

export default function EventDetails() {
  return (
    <section className="bg-wedding-light px-6 py-20 text-wedding-dark">
      <div className="mx-auto max-w-md">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[10px] uppercase tracking-[0.45em] text-wedding-primary"
        >
          Detalles del evento
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-center font-serif text-4xl"
        >
          Ceremonia religiosa <br /> y recepción
        </motion.h2>

        <div className="mt-10 space-y-4">
          <div className="mt-10 text-center">
            {/* Imagen ilustración */}
            <div className="mx-auto mb-6 max-w-65 opacity-80">
              <img
                src="/images/DSC02683RB.png"
                alt="Hotel Central"
                className="w-full object-contain"
              />
            </div>

            {/* Texto */}
            <p className="text-[10px] uppercase tracking-[0.35em] text-wedding-dark/50">
              Lugar
            </p>

            <p className="mt-2 font-serif text-lg text-wedding-dark">
              Hotel Central
            </p>

            <p className="text-sm text-wedding-dark/70">Salón San José</p>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            className="mt-10 block bg-wedding-primary px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-white transition hover:opacity-90"
          >
            Ver ubicación
          </a>
          <div className="mx-auto mb-6 max-w-65 opacity-80">
            <img
              src="/images/DSC02684RB.png"
              alt="Hotel Central"
              className="w-full object-contain"
            />
          </div>
         
          <div className="mt-10 bg-wedding-secondary/40 px-6 py-5 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-wedding-dark/50">
              Recomendación
            </p>

            <p className="mt-3 text-sm leading-6 text-wedding-dark/70">
              Para mayor comodidad y facilidad de acceso, te sugerimos llegar en
              Uber.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// return (
//   <div className="flex gap-4 rounded-3xl bg-white/60 p-5 shadow-sm">
//     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wedding-accent text-wedding-dark">
//       {icon}
//     </div>

//     <div>
//       <p className="text-[10px] uppercase tracking-[0.3em] text-wedding-dark/50">
//         {title}
//       </p>
//       <p className="mt-1 text-sm leading-6 text-wedding-dark/80">{text}</p>
//     </div>
//   </div>
// );
