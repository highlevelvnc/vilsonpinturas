"use client";

const ITEMS = [
  { title: "Acabamento de qualidade", desc: "Atenção ao detalhe em cada demão, para um resultado que se vê de perto." },
  { title: "Serviço limpo e organizado", desc: "Protecção de móveis e pavimentos, espaço entregue limpo no final." },
  { title: "Rapidez na execução", desc: "Prazos cumpridos com planeamento e equipa adequada a cada obra." },
  { title: "Profissionalismo e compromisso", desc: "Comunicação clara, respeito pelo seu tempo e pela sua casa." },
  { title: "Atenção aos detalhes", desc: "Cantos, frisos e acabamentos finos tratados com rigor." },
  { title: "Confiança do orçamento à entrega", desc: "Orçamento transparente, sem surpresas no final do trabalho." },
];

export function WhyUs() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-navy-900 text-white overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 gold-hairline opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-gold-400/10 blur-3xl"
      />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span data-reveal className="eyebrow">Por que escolher</span>
            <h2
              data-reveal
              data-reveal-delay="80"
              className="mt-4 sm:mt-5 font-display text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl font-bold text-balance"
            >
              Confiança e capricho que se notam no resultado final.
            </h2>
          </div>
          <p
            data-reveal
            data-reveal-delay="140"
            className="lg:col-span-5 text-base sm:text-lg text-white/70 leading-relaxed"
          >
            A diferença está no rigor com que tratamos cada etapa, do primeiro
            contacto à última pincelada.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              data-reveal
              data-reveal-delay={String(80 + i * 50)}
              className="relative bg-navy-900 p-6 sm:p-8 transition-colors duration-500 hover:bg-navy-800 group"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/15 text-gold-400 text-sm font-semibold ring-1 ring-gold-400/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {it.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">{it.desc}</p>
              <div className="absolute inset-x-8 bottom-0 h-px bg-gold-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
