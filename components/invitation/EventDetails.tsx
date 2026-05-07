"use client";

import { CalendarDays, Clock, MapPin, Car, Shirt } from "lucide-react";
import { motion } from "framer-motion";

export default function EventDetails() {
  return (
    <section className="px-6 py-4 bg-wedding-light text-wedding-dark/75">
      <hr className="mx-auto mb-8 h-0.5 w-16 border-0 bg-wedding-primary/60" />

      <div className="max-w-md mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 font-serif text-4xl text-center"
        >
          Ceremonia Religiosa <br /> y Recepción
        </motion.h2>

        <p className="mt-8 text-xs uppercase tracking-[0.35em] text-wedding-dark/75 text-center">
          27 · 06 · 2026
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-wedding-dark/75 text-center">
          4:30 P.M.
        </p>

        <div className="mt-10 space-y-4">
          <div className="mt-10 text-center">
            {/* Imagen ilustración */}
            <div className="mx-auto mb-6 max-w-65 opacity-80">
              <img
                src="/images/DSC02683RB.png"
                alt="Hotel Central"
                className="object-contain w-full"
              />
            </div>

            {/* Texto */}
            <p className="text-[10px] uppercase tracking-[0.35em] text-wedding-dark/70">
              Lugar
            </p>

            <p className="mt-2 font-serif text-lg text-wedding-dark/75">
              Hotel Central
            </p>

            <p className="text-sm text-wedding-dark/70">Casco Antiguo</p>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            className="mt-10 block bg-wedding-primary px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-white transition hover:opacity-90"
          >
            Ver ubicación
          </a>
          <div className="px-6 py-5 mt-10 text-center bg-wedding-secondary/40">
            <p className="text-[10px] uppercase tracking-[0.35em] text-wedding-dark/50">
              Recomendación
            </p>

            <p className="mt-3 text-sm leading-6 text-wedding-dark/70">
              Para su mayor comodidad y facilidad de acceso, le recomendamos utilizar Uber para su llegada.
            </p>
          </div>
          <div className="mx-auto mb-6 max-w-65 opacity-80">
            <div className="mt-10 text-center">
              {/* Imagen ilustración */}

              {/* Texto */}
              <p className="text-[10px] uppercase tracking-[0.35em] text-wedding-dark/50">
                Dress Code
              </p>

              <p className="mt-2 font-serif text-lg text-wedding-dark">
                Formal
              </p>
                <div className="mx-auto mb-6 max-w-65 opacity-80">
                  <img
                    src="/images/DSC02684RB.png"
                    alt="Hotel Central"
                    className="object-contain w-full"
                  />
                </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                className="mt-10 block bg-wedding-primary px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-white transition hover:opacity-90"
              >
                Referencia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// return (
//   <div className="flex gap-4 p-5 shadow-sm rounded-3xl bg-white/60">
//     <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-wedding-accent text-wedding-dark">
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
