"use client";

import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  label: string;
  badge?: string;
  span: string;
  ratio: string;
};

const ITEMS: Item[] = [
  {
    src: "/portfolio/obra-1.jpg",
    alt: "Fachada de habitação residencial pintada em branco — Vilson Pinturas",
    label: "Fachada residencial",
    badge: "Obra recente",
    span: "lg:col-span-2 lg:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/portfolio/obra-2.jpg",
    alt: "Conjunto de moradias com fachada acabada em branco — Vilson Pinturas",
    label: "Fachadas",
    badge: "Obra recente",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=1200&q=80",
    alt: "Interior moderno com paredes acabadas",
    label: "Pintura interior",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
    alt: "Escritório com paredes pintadas",
    label: "Comercial",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    alt: "Muro exterior pintado",
    label: "Muros",
    span: "",
    ratio: "aspect-[4/3]",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span data-reveal className="eyebrow">Galeria</span>
            <h2
              data-reveal
              data-reveal-delay="80"
              className="mt-4 sm:mt-5 font-display text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl font-bold text-navy-900 text-balance"
            >
              Trabalhos com acabamento que se nota.
            </h2>
          </div>
          <p
            data-reveal
            data-reveal-delay="140"
            className="lg:max-w-sm text-graphite leading-relaxed"
          >
            Uma selecção de ambientes residenciais, comerciais e fachadas onde
            cuidámos de cada detalhe.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-3 sm:gap-4 lg:gap-5">
          {ITEMS.map((it, i) => (
            <figure
              key={it.src}
              data-reveal
              data-reveal-delay={String(80 + i * 70)}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-navy-900/10 ${it.span} ${it.ratio}`}
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/0 to-transparent" />
              {it.badge && (
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-gold-400 px-3 py-1 text-[10px] sm:text-xs font-semibold text-navy-900 shadow-soft">
                  {it.badge}
                </span>
              )}
              <figcaption className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 flex items-center justify-between">
                <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] sm:text-xs font-semibold text-navy-900">
                  {it.label}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-navy-900 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
