"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tipVisible, setTipVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t1 = window.setTimeout(() => setTipVisible(true), 1200);
    const t2 = window.setTimeout(() => setTipVisible(false), 5200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-4 sm:right-7 z-40 flex items-center gap-3"
          style={{
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
          }}
        >
          <AnimatePresence>
            {tipVisible && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden sm:block rounded-full bg-white px-4 py-2 text-sm font-medium text-navy-900 shadow-soft ring-1 ring-navy-900/10"
              >
                Peça orçamento agora
              </motion.span>
            )}
          </AnimatePresence>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            aria-label="Falar no WhatsApp"
            className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold ring-4 ring-white/80 transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7" aria-hidden>
              <path d="M19.05 4.91A10 10 0 0 0 4.13 18.36L3 22l3.73-1.1A10 10 0 1 0 19.05 4.91Zm-7.06 15.4a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-2.21.66.66-2.16-.2-.32a8.32 8.32 0 1 1 6.28 3.16Zm4.55-6.23c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13s-.65.81-.8.98c-.15.17-.3.18-.55.06a6.84 6.84 0 0 1-2-1.24 7.54 7.54 0 0 1-1.39-1.73c-.15-.25 0-.39.11-.51.11-.11.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17 0-.31-.05-.44-.06-.13-.55-1.33-.76-1.83-.2-.48-.4-.41-.55-.42h-.47a.91.91 0 0 0-.66.31 2.78 2.78 0 0 0-.87 2.06A4.82 4.82 0 0 0 7.43 12a11 11 0 0 0 4.22 3.74c.59.25 1.05.4 1.41.51a3.4 3.4 0 0 0 1.56.1 2.55 2.55 0 0 0 1.67-1.18 2.06 2.06 0 0 0 .15-1.18c-.06-.1-.23-.16-.48-.29Z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
