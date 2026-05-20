import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-05-22T18:00:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

const labels: Record<keyof ReturnType<typeof calc>, string> = {
  d: "Օր",
  h: "Ժամ",
  m: "Րոպե",
  s: "Վայրկյան",
};

export function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
      {(["d", "h", "m", "s"] as const).map((k, i) => (
        <motion.div
          key={k}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.8 }}
          className="glass rounded-2xl px-4 py-5 sm:px-8 sm:py-7 min-w-[80px] sm:min-w-[120px] text-center"
        >
          <div className="font-display text-4xl sm:text-6xl text-gradient-gold tabular-nums leading-none">
            {String(t[k]).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-foreground/60 font-serif-elegant">
            {labels[k]}
          </div>
        </motion.div>
      ))}
    </div>
  );
}