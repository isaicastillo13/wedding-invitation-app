"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function RSVP({ guest }: { guest?: any }) {
  const [attending, setAttending] = useState("yes");
  const [attendeesCount, setAttendeesCount] = useState(guest?.passes || 1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const isAttending = attending === "yes";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!guest) {
      setError("No se encontró la información de la invitación.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guestId: guest.id,
        attending: isAttending,
        attendeesCount: isAttending ? attendeesCount : 0,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "No pudimos guardar tu respuesta.");
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  return (
    <section
      id="rsvp"
      className="px-6 py-8 bg-wedding-warm text-wedding-dark/75"
    >
      <div className="max-w-md mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl uppercase tracking-[0.45em] text-wedding-primary"
        >
          RSVP
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-sm mx-auto mt-6 text-sm leading-7 text-wedding-dark/70"
        >
          Con gran ilusión, esperamos contar con su presencia. Agradecemos
          confirmar su asistencia antes del 28 de mayo.
        </motion.p>

        {guest && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="max-w-sm mx-auto mt-6 text-center text-wedding-dark/70"
          >
            <p className="text-sm leading-7">
              Hemos reservado para{" "}
              <span className="font-bold">{guest.name}</span>
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-wedding-dark">
              {guest.passes}
            </h2>

            <p className="mt-2 text-sm leading-7">
              {guest.passes === 1 ? "Puesto" : "Puestos"}
            </p>
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 space-y-4 text-left"
          onSubmit={handleSubmit}
        >
          <select
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
            className="w-full px-5 py-4 text-sm border outline-none border-wedding-primary/30 bg-white/70 focus:border-wedding-primary"
          >
            <option value="yes">Sí, asistiré</option>
            <option value="no">No podré asistir</option>
          </select>

          {isAttending && (
            <input
              type="number"
              placeholder="Cantidad de personas"
              min={1}
              max={guest?.passes || 1}
              value={attendeesCount}
              onChange={(e) => setAttendeesCount(Number(e.target.value))}
              className="w-full px-5 py-4 text-sm border outline-none border-wedding-primary/30 bg-white/70 placeholder:text-wedding-dark/40 focus:border-wedding-primary"
            />
          )}

          <textarea
            placeholder="Mensaje opcional para los novios"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full px-5 py-4 text-sm border outline-none resize-none border-wedding-primary/30 bg-white/70 placeholder:text-wedding-dark/40 focus:border-wedding-primary"
          />

          {error && (
            <p className="text-sm text-center text-red-700">{error}</p>
          )}

          {success && (
            <p className="text-sm text-center text-wedding-dark">
              Respuesta guardada correctamente. ¡Gracias!
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !guest}
            className="w-full bg-wedding-primary px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Confirmar asistencia"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}