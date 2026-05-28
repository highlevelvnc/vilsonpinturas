"use client";

import Image from "next/image";
import { COMPANY, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

const SERVICES = [
  "Pintura Residencial",
  "Pintura Comercial",
  "Pintura de Fachadas",
  "Pintura de Muros",
  "Preparação de Superfícies",
  "Acabamentos e Retoques",
];

export function Footer() {
  return (
    <footer
      className="relative bg-navy-900 text-white pt-14 sm:pt-20 pb-28 sm:pb-12 overflow-hidden"
      style={{
        paddingBottom:
          "max(calc(env(safe-area-inset-bottom, 0px) + 7rem), 3rem)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px gold-hairline opacity-60"
      />

      <div className="container grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Image
            src="/logo.png"
            alt={`${COMPANY.name} — ${COMPANY.tagline}`}
            width={520}
            height={325}
            className="h-14 sm:h-16 w-auto brightness-0 invert opacity-95"
          />
          <div className="mt-4 text-[10px] uppercase tracking-[0.28em] text-gold-300">
            {COMPANY.tagline}
          </div>
          <p className="mt-6 max-w-md text-sm text-white/65 leading-relaxed">
            Pintura residencial, comercial, fachadas e muros em Portugal.
            Acabamento de qualidade, organização e confiança em cada projecto.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="btn-gold mt-8"
          >
            Chamar no WhatsApp
          </a>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.22em] text-gold-300">
            Navegação
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/75 transition-colors hover:text-gold-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.22em] text-gold-300">
            Serviços
          </div>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s} className="text-white/75">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 text-xs uppercase tracking-[0.22em] text-gold-300">
            Contacto
          </div>
          <div className="mt-3 text-sm text-white/75">
            <div>
              <a
                href={`tel:+351${COMPANY.phone.replace(/\s/g, "")}`}
                className="hover:text-gold-400"
              >
                {COMPANY.phone}
              </a>
            </div>
            <div className="mt-1">{COMPANY.region}</div>
          </div>
        </div>
      </div>

      <div className="container mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50">
        <p className="max-w-2xl">
          Vilson Pinturas — pintura profissional com confiança, qualidade e
          acabamento.
        </p>
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
