import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-bg text-ink relative overflow-hidden flex flex-col items-center justify-center min-h-[80svh]">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8 max-w-4xl"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-ink/50">
            04 — Collaborate
          </span>
          
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] font-display font-bold tracking-tighter uppercase text-balance">
            Let's build <br /> something <span className="text-ink/40 italic font-medium">iconic</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-ink/70 max-w-2xl mt-4">
            Currently open for new opportunities and freelance projects. Reach out if you want to create digital experiences that stand out.
          </p>
          
          <motion.a
            href="mailto:odiebernardinus@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 group relative inline-flex items-center justify-center px-8 py-4 bg-ink text-bg font-bold uppercase tracking-widest text-sm overflow-hidden rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </motion.a>
        </motion.div>

      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
