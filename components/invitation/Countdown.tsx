"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-06-27T16:30:00");

function getTimeLeft() {
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
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
    <section className="bg-wedding-light  text-wedding-light">
      <div className="mx-auto max-w-md overflow-hidden bg-wedding-dark shadow-xl">
        <div className="relative min-h-170 overflow-hidden">
          <img
            src="/images/DSC02597.jpg"
            alt="Yasmin y George"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/70" />
          <div className="absolute inset-0 bg-wedding-primary/20 mix-blend-multiply" />

          <div className="relative z-10 flex min-h-170 flex-col justify-between px-6 py-8 text-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/80">
                #Yas&George
              </p>

              {/* <h2 className="mt-8 font-serif text-4xl leading-tight text-white">
                Faltan pocos días
              </h2> */}
            </div>

            <div>
              <div className="grid grid-cols-3 gap-3">
                <CountdownPhoto
                  image="/images/DSC02561.jpg"
                  value={timeLeft.days}
                  label="Días"
                />
                <CountdownPhoto
                  image="/images/DSC02573.jpg"
                  value={timeLeft.hours}
                  label="Horas"
                />
                <CountdownPhoto
                  image="/images/DSC02575.jpg"
                  value={timeLeft.minutes}
                  label="Min"
                />
              </div>

              <div className="mt-8">
                {/* <p className="font-serif text-5xl italic text-white">
                  Yasmin & George
                </p> */}

                <p className="mt-4 text-[10px] uppercase tracking-[0.45em] text-white/75">
                  Are getting married
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/70">
                  27 · 06 · 2026
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/70">
                  4:30 p.m
                </p>
              </div>

              <div className="mx-auto mt-6 w-fit rounded-full border border-white/40 bg-white/10 px-5 py-2 backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/80">
                  {String(timeLeft.seconds).padStart(2, "0")} segundos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountdownPhoto({
  image,
  value,
  label,
}: {
  image: string;
  value: number;
  label: string;
}) {
  return (
    <div className="relative h-40 overflow-hidden bg-wedding-primary">
      <img src={image} alt={label} className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-wedding-accent/15 mix-blend-multiply" />

      <div className="absolute inset-x-0 bottom-3 text-center">
        <h3 className="text-5xl  leading-none text-white">
          {String(value).padStart(2, "0")}
        </h3>
        <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/80">
          {label}
        </p>
      </div>
    </div>
  );
}