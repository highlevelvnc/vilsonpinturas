"use client";

import { WHATSAPP_URL } from "@/lib/constants";

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Pintura Residencial",
    desc: "Interiores e exteriores de casas e apartamentos, com preparação cuidada e acabamento impecável.",
    icon: <HomeIcon />,
  },
  {
    title: "Pintura Comercial",
    desc: "Lojas, escritórios e espaços comerciais, com planeamento que respeita o seu horário de funcionamento.",
    icon: <StoreIcon />,
  },
  {
    title: "Pintura de Fachadas",
    desc: "Recuperação e pintura de fachadas com tintas adequadas a cada exposição e tipo de superfície.",
    icon: <BuildingIcon />,
  },
  {
    title: "Pintura de Muros",
    desc: "Muros exteriores tratados com produtos resistentes à humidade, sol e variações climatéricas.",
    icon: <WallIcon />,
  },
  {
    title: "Preparação de Superfícies",
    desc: "Raspagem, lixagem, betume e primário. A base certa para um acabamento que dura mais.",
    icon: <ToolsIcon />,
  },
  {
    title: "Acabamentos e Retoques",
    desc: "Detalhes finais, retoques e correcções pontuais para devolver o brilho a qualquer espaço.",
    icon: <BrushIcon />,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="max-w-2xl">
          <span data-reveal className="eyebrow">Serviços</span>
          <h2
            data-reveal
            data-reveal-delay="80"
            className="mt-4 sm:mt-5 font-display text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl font-bold text-navy-900 text-balance"
          >
            Soluções de pintura completas, executadas com método.
          </h2>
          <p
            data-reveal
            data-reveal-delay="140"
            className="mt-4 sm:mt-5 text-base sm:text-lg text-graphite leading-relaxed"
          >
            Do primeiro diagnóstico ao último retoque, cuidamos de cada etapa
            com organização e respeito pelo seu espaço.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              data-reveal-delay={String(80 + i * 60)}
              className="group relative overflow-hidden rounded-2xl border border-navy-900/8 bg-bone p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-soft hover:border-gold-200"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-transparent group-hover:bg-gold-400 transition-colors" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-all duration-500 group-hover:bg-gold-400 group-hover:text-navy-900">
                {s.icon}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-navy-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                {s.desc}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors group-hover:text-gold-500"
              >
                Pedir orçamento
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden>
      <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-8.5Z" strokeLinejoin="round" />
    </svg>
  );
}
function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden>
      <path d="M3 8l2-4h14l2 4M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Zm4 4v8m8-8v8M4 8a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 21V11h4a1 1 0 0 1 1 1v9M8 8h3M8 12h3M8 16h3" strokeLinecap="round" />
    </svg>
  );
}
function WallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden>
      <path d="M3 6h18M3 10h18M3 14h18M3 18h18M7 6v4m4-4v4M5 10v4m6-4v4m4-4v4m4-4v4M7 14v4m6-4v4m6-4v4" />
    </svg>
  );
}
function ToolsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2ZM13 13l7 7" strokeLinejoin="round" />
    </svg>
  );
}
function BrushIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden>
      <path d="M19 3l2 2-9 9-3 1 1-3 9-9Zm-9 11s-2 0-3 1-2 4-4 5c1-2 2-3 3-4 1-1 4-2 4-2Z" strokeLinejoin="round" />
    </svg>
  );
}
