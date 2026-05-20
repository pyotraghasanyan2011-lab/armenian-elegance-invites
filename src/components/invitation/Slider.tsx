import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import s1 from "@/assets/slide-1.jpg";
import s2 from "@/assets/slide-2.jpg";
import s3 from "@/assets/slide-3.jpg";
import s4 from "@/assets/slide-4.jpg";
import s5 from "@/assets/slide-5.jpg";
import s6 from "@/assets/slide-6.jpg";

const slides = [s1, s2, s3, s4, s5, s6];

export function Slider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % slides.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden glow-gold border border-gold/30">
      <AnimatePresence mode="sync">
        <motion.img
          key={i}
          src={slides[i]}
          alt={`Slide ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, k) => (
          <span
            key={k}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              k === i ? "w-8 bg-gold" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}