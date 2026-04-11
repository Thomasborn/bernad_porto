import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-ink/30 block" />
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink/60">
                Portfolio 2026
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.85] font-display font-bold tracking-tighter text-ink uppercase"
            >
              Bernardinus <br />
              <span className="text-ink/40 italic font-medium">Odie</span> <br />
              Kristiawan
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-12 mt-4"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-1">Role</span>
                <span className="text-lg font-medium">UI/UX Designer</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-1">Focus</span>
                <span className="text-lg font-medium">Web Development</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-1">Strategy</span>
                <span className="text-lg font-medium">Digital Marketing</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-end items-center relative"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/4] lg:aspect-[5/5] rounded-full overflow-hidden mask-oval bg-surface shadow-2xl">
              <motion.img
                style={{ y }}
                src="\public\Self.jpg"
                alt="Abstract creative visual"
                className="w-full h-[130%] object-cover scale-110 hover:scale-100 transition-transform duration-1000 ease-out origin-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
            </div>

            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -10, x: 20 }}
              animate={{ opacity: 1, rotate: 0, x: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-6 lg:-left-12 bg-accent text-bg p-6 rounded-full w-32 h-32 flex items-center justify-center text-center shadow-xl"
            >
              <span className="text-xs font-bold uppercase tracking-widest leading-tight">
                Available <br /> for work
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="container mx-auto px-6 md:px-12 mt-24 flex justify-between items-end pb-8"
      >
        <div className="flex gap-6">
          {["LinkedIn"].map((linkedin) => (
            <a
              key={linkedin}
              href="https://www.linkedin.com/in/bernardinus-odie-kristiawan/"
              className="text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
            >
              {linkedin}
            </a>
          ))}
          {["Github"].map((github) => (
            <a
              key={github}
              href="https://github.com/bredelsss"
              className="text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
            >
              {github}
            </a>
          ))}
          {["Instagram"].map((instagram) => (
            <a
              key={instagram}
              href="https://www.instagram.com/bernardberrr/"
              className="text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
            >
              {instagram}
            </a>
          ))}
          {["Twitter"].map((twitter) => (
            <a
              key={twitter}
              href="https://twitter.com/OdieKristiawan"
              className="text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
            >
              {twitter}
            </a>
          ))}
        </div>
        
        <a href="#about" className="flex items-center gap-2 group">
          <span className="text-xs font-bold uppercase tracking-widest text-ink/60 group-hover:text-ink transition-colors">
            Scroll
          </span>
          <div className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center group-hover:border-ink transition-colors">
            <ArrowDownRight className="w-4 h-4 text-ink/60 group-hover:text-ink transition-colors" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
