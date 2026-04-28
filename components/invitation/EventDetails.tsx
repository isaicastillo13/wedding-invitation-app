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
          <Detail icon={<CalendarDays />} title="Fecha" text="27 de junio" />
          <Detail icon={<Clock />} title="Hora" text="4:30 PM" />
          <Detail icon={<MapPin />} title="Lugar" text="Hotel Central · Salón San José" />
          <Detail icon={<Shirt />} title="Dress code" text="Formal" />
          <Detail
            icon={<Car />}
            title="Recomendación"
            text="Para mayor comodidad y facilidad de acceso, te sugerimos llegar en Uber."
          />
        </div>

        <a
          href="https://maps.google.com"
          target="_blank"
          className="mt-10 block rounded-full bg-wedding-primary px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-white transition hover:opacity-90"
        >
          Ver ubicación
        </a>
      </div>
    </section>
  );
}

function Detail({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-3xl bg-white/60 p-5 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wedding-accent text-wedding-dark">
        {icon}
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-wedding-dark/50">
          {title}
        </p>
        <p className="mt-1 text-sm leading-6 text-wedding-dark/80">{text}</p>
      </div>
    </div>
  );
}