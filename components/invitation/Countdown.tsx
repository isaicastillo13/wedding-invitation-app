"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2025-06-27T16:30:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference <= 0) return;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-wedding-secondary px-6 py-20 text-center">
      <div className="mx-auto max-w-md">
        <p className="text-[10px] uppercase tracking-[0.45em] text-wedding-dark/60">
          Save the date
        </p>

        <h2 className="mt-4 font-serif text-4xl text-wedding-dark">
          27 de junio
        </h2>

        <div className="mt-10 grid grid-cols-4 gap-4">
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
    <div className="flex flex-col items-center justify-center rounded-2xl bg-wedding-light py-4 shadow-sm">
      <span className="font-serif text-2xl text-wedding-dark">
        {value}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-wedding-dark/60">
        {label}
      </span>
    </div>
  );
}