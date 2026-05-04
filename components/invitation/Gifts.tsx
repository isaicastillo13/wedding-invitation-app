"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Gifts() {
  return (
    <section className="pt-20 bg-wedding-light text-wedding-dark">
      <div className="max-w-md mx-auto text-center">
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
          className="w-full mx-auto mt-10 overflow-hidden max-w-70 bg-wedding-secondary"
        >
          <img
            src="/images/DSC02682.jpg"
            alt="Yasmin y George"
            className="object-cover w-full h-90 saturate-75 brightness-95"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-sm px-6 mx-auto mt-6 text-sm leading-7 text-wedding-dark/70"
        >
          Pero si deseas hacernos un obsequio, agradecemos muestras de cariño en
          efectivo o a través de:
        </motion.p>

        <div className="mt-10 space-y-5 text-left">
          <GiftCard title="Cuenta bancaria">
            <p>George Salazar o Yasmin Caicedo</p>
            <p>Banco General</p>
            <p>Cuenta de ahorros</p>

            <CopyButton
              value="04-29-96-361672-0"
              label="Copiar número de cuenta"
            />
          </GiftCard>

          <GiftCard title="Yappy">
            <p>6265-3819</p>
            <p>George Salazar</p>

            <CopyButton value="6265-3819" label="Copiar Yappy" />
          </GiftCard>
        </div>
      </div>
    </section>
  );
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="w-full px-5 py-3 mt-4 text-xs tracking-wide text-center transition border border-wedding-light/50 bg-wedding-light text-wedding-dark hover:bg-wedding-accent"
    >
      {copied ? "Copiado ✓" : label}
    </button>
  );
}

function GiftCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 bg-wedding-primary text-wedding-light"
    >
      <p className="text-[10px] uppercase tracking-[0.35em] font-bold">
        {title}
      </p>

      <div className="mt-5 space-y-2 text-sm leading-6">{children}</div>
    </motion.div>
  );
}