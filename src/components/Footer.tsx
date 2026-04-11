import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-ink text-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display font-bold text-xl tracking-tighter uppercase">
            Bredels
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-bg/40">
            © {currentYear} All rights reserved.
          </span>
        </div>

        <div className="flex gap-8">
          {["LinkedIn"].map((linkedin) => (
            <a
              key={linkedin}
              href="https://www.linkedin.com/in/bernardinus-odie-kristiawan/"
              className="text-[10px] font-bold uppercase tracking-widest text-bg/60 hover:text-bg transition-colors relative group"
            >
              {linkedin}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bg transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          {["GitHub"].map((github) => (
            <a
              key={github}
              href="https://github.com/bredelsss"
              className="text-[10px] font-bold uppercase tracking-widest text-bg/60 hover:text-bg transition-colors relative group"
            >
              {github}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bg transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          {["Twitter"].map((twitter) => (
            <a
              key={twitter}
              href="https://x.com/OdieKristiawan"
              className="text-[10px] font-bold uppercase tracking-widest text-bg/60 hover:text-bg transition-colors relative group"
            >
              {twitter}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bg transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          {["Instagram"].map((instagram) => (
            <a
              key={instagram}
              href="https://www.instagram.com/bernardberrr/"
              className="text-[10px] font-bold uppercase tracking-widest text-bg/60 hover:text-bg transition-colors relative group"
            >
              {instagram}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bg transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="text-[10px] font-bold uppercase tracking-widest text-bg/40 text-center md:text-right leading-relaxed">
          Designed with intent. <br className="hidden md:block" /> Built with precision.
        </div>
        
      </div>
    </footer>
  );
}

