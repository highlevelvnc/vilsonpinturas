"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const finish = () => {
      window.setTimeout(() => setVisible(false), 600);
    };
    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }
    const safety = window.setTimeout(() => setVisible(false), 2800);
    return () => window.clearTimeout(safety);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-900 px-6"
          aria-hidden
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[320px] sm:max-w-md rounded-2xl bg-white px-8 py-10 sm:px-12 sm:py-12 shadow-soft"
          >
            <Image
              src="/logo.png"
              alt={`${COMPANY.name} — ${COMPANY.tagline}`}
              width={520}
              height={325}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.32em] text-gold-300">
              {COMPANY.tagline}
            </div>
          </motion.div>

          <div className="mt-8 h-px w-40 sm:w-56 overflow-hidden bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="h-full w-1/2 bg-gold-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
