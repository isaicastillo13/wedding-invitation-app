"use client";

import { motion } from "framer-motion";
import { Gift, Landmark, Smartphone } from "lucide-react";

export default function Gifts() {
  return (
    <section className="bg-wedding-light py-20 text-wedding-dark">
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
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mx-auto mt-10 w-full max-w-70 overflow-hidden  bg-wedding-secondary"
        >
          <img
            src="/images/DSC02682.jpg"
            alt="Yasmin y George"
            className="h-90 w-full object-cover saturate-75 brightness-95"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-6 max-w-sm text-sm leading-7 text-wedding-dark/70 px-6"
        >
          Pero si deseas hacernos un obsequio, agradecemos muestras de cariño en
          efectivo o a través de:
        </motion.p>

        <div className="mt-10 text-left overflow-hidden">
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
            lines={["6265-3819", "George Salazar", "Yasmin por definir"]}
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
      className=" bg-wedding-primary p-6 shadow-sm"
    >
      <div className="mb-5 flex items-center gap-3">
        <p className="text-[10px] uppercase tracking-[0.35em] text-wedding-light font-bold">
          {title}
        </p>
      </div>

      <div className="space-y-2">
        {lines.map((line) => (
          <p key={line} className="text-sm leading-6 text-wedding-light">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
