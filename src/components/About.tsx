"use client";

import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

const HIGHLIGHTS = [
  "Pintura residencial e comercial",
  "Acabamento profissional",
  "Atendimento em Portugal",
  "Orçamento rápido",
];

export function About() {
  return (
    <section id="sobre" className="relative py-16 sm:py-24 lg:py-32 bg-bone overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div
            data-reveal="left"
            className="relative aspect-[4/5] sm:aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-navy-900/10 max-w-md mx-auto lg:max-w-none"
          >
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
              alt="Equipa profissional a preparar superfície para pintura"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div
            data-reveal
            data-reveal-delay="200"
            className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-soft ring-1 ring-navy-900/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400 text-navy-900">
              <SealIcon />
            </span>
            <div>
              <div className="font-display text-xl font-bold text-navy-900">
                Selo de confiança
              </div>
              <div className="text-xs text-graphite">
                Acabamento com garantia
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span data-reveal className="eyebrow">Sobre nós</span>
          <h2
            data-reveal
            data-reveal-delay="80"
            className="mt-4 sm:mt-5 font-display text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl font-bold text-navy-900 text-balance"
          >
            Pintura que valoriza cada espaço — do primeiro contacto à entrega
            final.
          </h2>
          <div
            data-reveal
            data-reveal-delay="140"
            className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 text-base sm:text-lg text-graphite leading-relaxed"
          >
            <p>
              A <strong className="text-navy-900">Vilson Pinturas</strong> actua
              com serviços de pintura residencial, comercial, fachadas e muros
              em Portugal. Trabalhamos com atenção aos detalhes, materiais de
              qualidade e compromisso em entregar acabamentos bonitos,
              duradouros e bem executados.
            </p>
            <p>
              O nosso objectivo é valorizar cada espaço com profissionalismo,
              limpeza e confiança — para que receba a sua casa, escritório ou
              fachada como nova.
            </p>
          </div>

          <ul
            data-reveal
            data-reveal-delay="220"
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {HIGHLIGHTS.map((h) => (
              <li
                key={h}
                className="flex items-center gap-3 rounded-xl border border-navy-900/8 bg-white px-4 py-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-400/15 text-gold-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-4 w-4">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-navy-900">{h}</span>
              </li>
            ))}
          </ul>

          <div data-reveal data-reveal-delay="300" className="mt-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
              Falar com a equipa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SealIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden>
      <path d="M12 2l2.3 2.3L17.6 4l.6 3.3L21 9l-1.4 3 1.4 3-2.8 1.7-.6 3.3-3.3-.3L12 22l-2.3-2.3-3.3.3-.6-3.3L3 15l1.4-3L3 9l2.8-1.7L6.4 4l3.3.3L12 2Z" strokeLinejoin="round" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
