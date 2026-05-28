"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQS = [
  {
    q: "Vocês fazem pintura residencial?",
    a: "Sim. Pintamos interiores e exteriores de casas e apartamentos, com preparação cuidada das superfícies e acabamento de qualidade em cada divisão.",
  },
  {
    q: "Atendem empresas e lojas?",
    a: "Sim. Realizamos pinturas em escritórios, lojas e espaços comerciais, planeando os trabalhos para reduzir ao mínimo o impacto no seu funcionamento.",
  },
  {
    q: "Fazem pintura de fachadas?",
    a: "Fazemos pintura completa de fachadas, incluindo a reparação prévia da superfície e a aplicação de tintas adequadas à exposição e ao tipo de imóvel.",
  },
  {
    q: "Fazem pintura de muros?",
    a: "Sim. Pintamos muros exteriores com produtos resistentes a humidade, raios UV e variações climatéricas para um acabamento duradouro.",
  },
  {
    q: "O orçamento é gratuito?",
    a: "Sim. O orçamento é totalmente gratuito e sem qualquer compromisso. Combinamos uma visita ao local para avaliar a obra com rigor.",
  },
  {
    q: "Ajudam na escolha das tintas e acabamentos?",
    a: "Claro. Aconselhamos cores, tipo de tinta e acabamento em função do espaço, exposição, utilização e do efeito que pretende para o ambiente.",
  },
  {
    q: "Atendem quais regiões de Portugal?",
    a: "Atendemos várias regiões de Portugal continental. Fale connosco pelo WhatsApp e confirmamos rapidamente a disponibilidade para a sua zona.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span data-reveal className="eyebrow">FAQ</span>
          <h2
            data-reveal
            data-reveal-delay="80"
            className="mt-4 sm:mt-5 font-display text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl font-bold text-navy-900 text-balance"
          >
            Perguntas frequentes.
          </h2>
          <p
            data-reveal
            data-reveal-delay="140"
            className="mt-5 text-graphite leading-relaxed"
          >
            Respondemos às dúvidas mais comuns sobre os nossos serviços de
            pintura. Se a sua pergunta não estiver aqui, fale connosco.
          </p>
        </div>

        <div className="lg:col-span-8 divide-y divide-navy-900/10 border-y border-navy-900/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-reveal data-reveal-delay={String(40 + i * 50)}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 sm:gap-6 py-5 sm:py-6 text-left group"
                >
                  <span className="font-display text-base sm:text-xl font-semibold text-navy-900 group-hover:text-gold-500 transition-colors pr-2">
                    {f.q}
                  </span>
                  <span
                    className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? "border-gold-400 bg-gold-400 text-navy-900 rotate-45"
                        : "border-navy-900/15 text-navy-900"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 sm:pb-7 pr-2 sm:pr-12 text-sm sm:text-base text-graphite leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
