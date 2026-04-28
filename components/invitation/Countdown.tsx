"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-06-27T16:30:00");

function getTimeLeft() {
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-wedding-secondary px-6 py-20 text-center">
      <div className="mx-auto max-w-md">
        <p className="text-[10px] uppercase tracking-[0.45em] text-wedding-dark/60">
          Faltan
        </p>

        <h2 className="mt-4 font-serif text-4xl text-wedding-dark">
          27 de junio
        </h2>

        <div className="mt-10 grid grid-cols-4 gap-3">
          <TimeBox value={timeLeft.days} label="Días" />
          <TimeBox value={timeLeft.hours} label="Horas" />
          <TimeBox value={timeLeft.minutes} label="Min" />
          <TimeBox value={timeLeft.seconds} label="Seg" />
        </div>
      </div>
    </section>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl bg-wedding-light px-2 py-4 shadow-sm">
      <p className="font-serif text-2xl text-wedding-dark">
        {String(value).padStart(2, "0")}
      </p>
      <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-wedding-dark/60">
        {label}
      </p>
    </div>
  );
}