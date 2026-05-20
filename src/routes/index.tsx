import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import schoolBg from "@/assets/school-bg.jpg";
import featureImg from "@/assets/feature-img.jpg";
import p1 from "@/assets/person-1.jpg";
import p2 from "@/assets/person-2.jpg";
import p3 from "@/assets/person-3.jpg";
import { Particles } from "@/components/invitation/Particles";
import { Countdown } from "@/components/invitation/Countdown";
import { Slider } from "@/components/invitation/Slider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Հրավեր · 12Բ դասարան · 22.05.2026" },
      {
        name: "description",
        content:
          "Շքեղ հրավեր 12Բ դասարանի շրջանավարտների հանդիսավոր երեկոյին` 22 մայիսի 2026.",
      },
    ],
  }),
  component: Index,
});

const people = [
  { name: "Անի", surname: "Հովհաննիսյան", img: p1 },
  { name: "Դավիթ", surname: "Սարգսյան", img: p2 },
  { name: "Մարիամ", surname: "Պետրոսյան", img: p3 },
];

function ParallaxBg({ src, speed = 0.3 }: { src: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", `${speed * 30}%`]);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt=""
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
    </div>
  );
}

function Index() {
  const scrollNext = () => {
    document.getElementById("school")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section
        onClick={scrollNext}
        className="relative h-screen w-full flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <img
          src={heroBg}
          alt="Հրավեր"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        <Particles count={40} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1.4 }}
            className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
          <p className="font-serif-elegant italic text-sm sm:text-base tracking-[0.4em] uppercase text-gold/80 mb-6 animate-shimmer">
            · 2026 ·
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-gold text-shadow-soft leading-tight">
            Հրավիրում ենք
            <br />
            <span className="italic font-serif-elegant">ձեզ</span>
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1.4 }}
            className="mx-auto mt-10 h-px w-48 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
          <p className="mt-8 font-serif-elegant text-foreground/70 text-base sm:text-lg tracking-widest">
            Հպեք էկրանին` շարունակելու համար
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-gold"
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </section>

      {/* SCHOOL */}
      <section id="school" className="relative h-screen w-full overflow-hidden">
        <ParallaxBg src={schoolBg} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/30 to-background/80" />

        <motion.div
          initial={{ opacity: 0, x: 40, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-8 right-6 sm:top-12 sm:right-12 z-10"
        >
          <div className="glass rounded-2xl px-6 py-4 sm:px-8 sm:py-5">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-1 font-serif-elegant">
              Class
            </p>
            <p className="font-display text-2xl sm:text-4xl text-gradient-gold">
              12Բ դասարան
            </p>
          </div>
        </motion.div>

        <div className="relative z-10 h-full flex items-end pb-20 sm:pb-28 px-8 sm:px-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4 }}
          >
            <p className="font-serif-elegant italic text-gold/70 tracking-[0.3em] uppercase text-sm mb-4">
              · Մեր երկրորդ տունը ·
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-gradient-gold text-shadow-soft max-w-3xl leading-tight">
              Տարիներ, որոնք չենք մոռանա
            </h2>
          </motion.div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 overflow-hidden">
        <Particles count={20} />
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-7xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-center font-serif-elegant italic text-gold/80 tracking-[0.3em] uppercase text-sm mb-8"
          >
            · Մի անգամ կյանքում ·
          </motion.p>
          <div className="relative overflow-hidden rounded-3xl glow-gold border border-gold/20">
            <img
              src={featureImg}
              alt="Շրջանավարտ"
              className="w-full h-[60vh] sm:h-[75vh] object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.6 }}
              className="absolute bottom-8 left-0 right-0 text-center"
            >
              <p className="font-display text-3xl sm:text-5xl text-gradient-gold text-shadow-soft">
                Մեր անմոռանալի պահերը
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="relative min-h-screen w-full py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="font-serif-elegant italic text-gold/70 tracking-[0.3em] uppercase text-sm mb-4">
              · Շրջանավարտներ ·
            </p>
            <h2 className="font-display text-4xl sm:text-6xl text-gradient-gold">
              Մեր ընտանիքը
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {people.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group glass rounded-3xl overflow-hidden transition-shadow duration-500 hover:glow-gold"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={person.img}
                    alt={`${person.name} ${person.surname}`}
                    className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={1024}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <p className="font-serif-elegant italic text-gold/70 text-xs tracking-[0.3em] uppercase mb-2">
                    Շրջանավարտ
                  </p>
                  <p className="font-display text-2xl text-gradient-gold leading-tight">
                    {person.name}
                  </p>
                  <p className="font-display text-xl text-foreground/80 italic">
                    {person.surname}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDER */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6">
        <Particles count={15} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="font-serif-elegant italic text-gold/70 tracking-[0.3em] uppercase text-sm mb-4">
            · Հիշողություններ ·
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-gradient-gold">
            Մեր պատմությունը
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center"
        >
          <Slider />
        </motion.div>
      </section>

      {/* COUNTDOWN */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.3 0.12 30 / 0.6), transparent 70%)",
          }}
        />
        <Particles count={35} />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <Heart
              className="w-20 h-20 sm:w-24 sm:h-24 animate-heart-glow"
              fill="oklch(0.65 0.22 20)"
              stroke="oklch(0.85 0.15 25)"
              strokeWidth={1}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif-elegant italic text-gold/80 tracking-[0.35em] uppercase text-sm mb-6"
          >
            · Մեր մեծ օրը ·
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl text-gradient-gold text-shadow-soft mb-4"
          >
            22.05.2026
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mx-auto mb-12 h-px w-64 bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          <Countdown />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 1.2 }}
            className="mt-16 font-serif-elegant italic text-foreground/60 text-lg max-w-xl mx-auto"
          >
            «Ամեն ավարտ նոր սկիզբ է, իսկ մեր սկիզբը` միասին»
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="mt-8 font-display text-xl text-gold/70 tracking-widest"
          >
            — 12Բ դասարան —
          </motion.p>
        </div>
      </section>
    </main>
  );
}
