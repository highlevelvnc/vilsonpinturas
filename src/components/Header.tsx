"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, WHATSAPP_URL, COMPANY } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(13,27,42,0.08)]"
          : "bg-white/85 backdrop-blur-sm"
      }`}
    >
      <div className="container relative flex h-20 sm:h-24 items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center group absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          aria-label={COMPANY.name}
        >
          <Image
            src="/logo.png"
            alt={`${COMPANY.name} — ${COMPANY.tagline}`}
            width={520}
            height={325}
            priority
            className="h-16 sm:h-16 lg:h-16 w-auto max-w-[min(60vw,260px)] drop-shadow-[0_1px_0_rgba(13,27,42,0.04)]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-navy-900/80 transition-colors hover:text-navy-900"
            >
              <span className="after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all hover:after:w-full">
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-gold">
            Pedir Orçamento
          </a>
        </div>

        <span className="lg:hidden block w-11" aria-hidden />
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 bg-white shadow-sm"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-navy-900 transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-navy-900 transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-full bg-navy-900 transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute inset-x-0 top-20 sm:top-24 bg-white/98 backdrop-blur-md shadow-soft"
          >
            <nav className="container flex flex-col gap-1 py-6">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  className="flex items-center justify-between border-b border-navy-900/5 py-5 text-base font-medium text-navy-900 active:bg-navy-900/[0.03]"
                >
                  {l.label}
                  <span className="text-gold-400">→</span>
                </motion.a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="btn-gold mt-6 w-full"
              >
                Pedir Orçamento
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
