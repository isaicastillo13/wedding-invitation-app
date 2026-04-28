"use client";

import { motion } from "framer-motion";
import { Gift, Landmark, Smartphone } from "lucide-react";

export default function Gifts() {
  return (
    <section className="bg-wedding-light px-6 py-20 text-wedding-dark">
      <div className="mx-auto max-w-md text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.45em] text-wedding-primary"
        >
          Muestras de cariño
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 font-serif text-4xl leading-tight"
        >
          Tu presencia es <br /> nuestro mejor regalo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-6 max-w-sm text-sm leading-7 text-wedding-dark/70"
        >
          Pero si deseas hacernos un obsequio, agradecemos muestras de cariño en
          efectivo o a través de:
        </motion.p>

        <div className="mt-10 space-y-4 text-left">
          <GiftCard
            icon={<Landmark />}
            title="Cuenta bancaria"
            lines={[
              "George Salazar o Yasmin Caicedo",
              "Banco General",
              "Cuenta de ahorros",
              "04-29-96-361672-0",
            ]}
          />

          <GiftCard
            icon={<Smartphone />}
            title="Yappy"
            lines={[
              "6265-3819",
              "George Salazar",
              "Yasmin por definir",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function GiftCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-white/70 p-6 shadow-sm"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wedding-accent text-wedding-dark">
          {icon}
        </div>

        <p className="text-[10px] uppercase tracking-[0.35em] text-wedding-dark/50">
          {title}
        </p>
      </div>

      <div className="space-y-2">
        {lines.map((line) => (
          <p key={line} className="text-sm leading-6 text-wedding-dark/75">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}