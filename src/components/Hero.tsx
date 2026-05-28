"use client";

import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-bone via-bone to-white pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-gold-100/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-navy-100/50 blur-3xl"
      />

      <div className="container relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 xl:col-span-7">
          <span data-reveal className="eyebrow">
            Pintura profissional · Portugal
          </span>

          <h1
            data-reveal
            data-reveal-delay="80"
            className="mt-5 sm:mt-6 font-display text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl sm:leading-[1.05] font-bold text-navy-900 text-balance"
          >
            Pintura profissional para{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">casas</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-gold-200/70 -z-0" />
            </span>
            , empresas, fachadas e muros.
          </h1>

          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-5 sm:mt-7 max-w-xl text-base sm:text-lg text-graphite leading-relaxed"
          >
            Serviços de pintura com acabamento de qualidade, organização e
            confiança do início ao fim. Cada superfície tratada com o cuidado
            que valoriza o seu imóvel.
          </p>

          <div
            data-reveal
            data-reveal-delay="240"
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-gold w-full sm:w-auto">
              <WhatsAppIcon className="h-4 w-4" />
              Pedir orçamento WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost w-full sm:w-auto">
              Ver serviços
            </a>
          </div>

          <div
            data-reveal
            data-reveal-delay="320"
            className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-md"
          >
            {[
              { v: "+10", l: "Anos de prática" },
              { v: "100%", l: "Sem custo" },
              { v: "PT", l: "Atendimento" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl sm:rounded-2xl border border-navy-900/8 bg-white/60 px-3 py-3 sm:px-4 sm:py-4">
                <div className="font-display text-xl sm:text-2xl font-bold text-navy-900">
                  {s.v}
                </div>
                <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-graphite">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-5 relative">
          <div
            data-reveal="right"
            className="relative aspect-[4/5] sm:aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-navy-900/10 mt-6 lg:mt-0"
          >
            <Image
              src="/portfolio/obra-1.jpg"
              alt="Obra recente da Vilson Pinturas — fachada residencial pintada"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
          </div>

          <div
            data-reveal
            data-reveal-delay="220"
            className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-white/95 backdrop-blur px-5 py-4 shadow-soft ring-1 ring-navy-900/10 max-w-[240px]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/20 text-gold-500">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-navy-900">
                  Acabamento garantido
                </div>
                <div className="text-xs text-graphite">
                  Materiais de qualidade
                </div>
              </div>
            </div>
          </div>

          <div
            data-reveal
            data-reveal-delay="320"
            className="absolute -top-4 -right-4 hidden sm:block rounded-2xl bg-navy-900 text-white px-5 py-4 shadow-soft max-w-[200px]"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold-300">
              Resposta rápida
            </div>
            <div className="mt-1 text-sm font-medium">
              Orçamento no mesmo dia, sem compromisso.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.05 4.91A10 10 0 0 0 4.13 18.36L3 22l3.73-1.1A10 10 0 1 0 19.05 4.91Zm-7.06 15.4a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-2.21.66.66-2.16-.2-.32a8.32 8.32 0 1 1 6.28 3.16Zm4.55-6.23c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13s-.65.81-.8.98c-.15.17-.3.18-.55.06a6.84 6.84 0 0 1-2-1.24 7.54 7.54 0 0 1-1.39-1.73c-.15-.25 0-.39.11-.51.11-.11.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17 0-.31-.05-.44-.06-.13-.55-1.33-.76-1.83-.2-.48-.4-.41-.55-.42h-.47a.91.91 0 0 0-.66.31 2.78 2.78 0 0 0-.87 2.06A4.82 4.82 0 0 0 7.43 12a11 11 0 0 0 4.22 3.74c.59.25 1.05.4 1.41.51a3.4 3.4 0 0 0 1.56.1 2.55 2.55 0 0 0 1.67-1.18 2.06 2.06 0 0 0 .15-1.18c-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className} aria-hidden>
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
