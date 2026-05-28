"use client";

import { COMPANY, WHATSAPP_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section id="contacto" className="relative py-16 sm:py-24 lg:py-32 bg-bone">
      <div className="container">
        <div
          data-reveal
          className="relative overflow-hidden rounded-2xl bg-navy-900 px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20 text-white shadow-soft"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-[360px] w-[360px] rounded-full bg-gold-400/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px gold-hairline opacity-60"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">Pronto para começar</span>
              <h2 className="mt-4 sm:mt-5 font-display text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl font-bold text-balance">
                Precisa pintar o seu imóvel?
              </h2>
              <p className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
                Fale com a Vilson Pinturas e peça um orçamento sem compromisso.
                Respondemos rapidamente com uma proposta clara e detalhada.
              </p>

              <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="btn-gold w-full sm:w-auto sm:!px-9 sm:!py-4 sm:text-base"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chamar no WhatsApp
                </a>
                <a
                  href={`tel:+351${COMPANY.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-400 w-full sm:w-auto"
                >
                  Ligar agora
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.22em] text-gold-300">
                  Contacto directo
                </div>
                <a
                  href={`tel:+351${COMPANY.phone.replace(/\s/g, "")}`}
                  className="mt-3 block font-display text-3xl sm:text-4xl font-bold hover:text-gold-400 transition-colors"
                >
                  {COMPANY.phone}
                </a>
                <div className="mt-2 text-sm text-white/60">
                  {COMPANY.region} · Resposta no mesmo dia
                </div>
                <hr className="my-6 border-white/10" />
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Orçamento gratuito e sem compromisso
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Visita técnica ao local
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Apoio na escolha de tintas e acabamentos
                  </li>
                </ul>
              </div>
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
