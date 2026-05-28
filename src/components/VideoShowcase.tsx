"use client";

import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const VIDEOS = [
  {
    src: "/portfolio/obra-video-1.mp4",
    poster: "/portfolio/obra-video-1-poster.jpg",
    label: "Obra em curso",
    title: "Pintura exterior — habitação",
  },
  {
    src: "/portfolio/obra-video-2.mp4",
    poster: "/portfolio/obra-video-2-poster.jpg",
    label: "Obra em curso",
    title: "Fachadas residenciais",
  },
];

export function VideoShowcase() {
  const refs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((v) => v && io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-bone overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 max-w-5xl">
          <div>
            <span data-reveal className="eyebrow">Em obra</span>
            <h2
              data-reveal
              data-reveal-delay="80"
              className="mt-4 sm:mt-5 font-display text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl font-bold text-navy-900 text-balance"
            >
              Trabalhos reais, em movimento.
            </h2>
          </div>
          <p
            data-reveal
            data-reveal-delay="140"
            className="lg:max-w-sm text-base text-graphite leading-relaxed"
          >
            Pequenos registos das nossas obras — para mostrar o capricho e a
            organização do trabalho ao vivo.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {VIDEOS.map((v, i) => (
            <figure
              key={v.src}
              data-reveal
              data-reveal-delay={String(80 + i * 80)}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-navy-900/10 bg-navy-900 shadow-soft"
            >
              <video
                ref={(el) => {
                  refs.current[i] = el;
                }}
                src={v.src}
                poster={v.poster}
                muted
                loop
                playsInline
                preload="metadata"
                className="block w-full aspect-[9/16] object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/20 to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 flex items-end justify-between gap-3 text-white">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-3 py-1 text-[10px] sm:text-xs font-semibold text-navy-900 shadow-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy-900 animate-pulse" />
                    {v.label}
                  </div>
                  <div className="mt-2 font-display text-base sm:text-lg font-semibold">
                    {v.title}
                  </div>
                </div>
                <span className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur">
                  <PlayIcon />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div data-reveal className="mt-10 sm:mt-14 flex justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
            Pedir orçamento para a sua obra
          </a>
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}
