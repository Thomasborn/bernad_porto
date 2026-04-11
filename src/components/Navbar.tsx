import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 bg-bg/80 backdrop-blur-md border-b border-border/50" : "py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="gap-4 flex items-left">
            <img src="\public\Group6.png" alt="Company Logo" width="30" height="40" />
            <a href="#" className="font-display font-bold text-xl tracking-tighter uppercase relative z-50">
            Bredels
          </a>
          </div>
          
          
          
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Work", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium uppercase tracking-widest text-ink/70 hover:text-ink transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-ink transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-ink flex flex-col justify-center items-center w-8 h-8 relative z-50"
          >
            <span className={`w-6 h-[1.5px] bg-ink block absolute transition-all duration-300 ease-[0.16,1,0.3,1] ${mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`w-6 h-[1.5px] bg-ink block absolute transition-all duration-300 ease-[0.16,1,0.3,1] ${mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-surface flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {["About", "Work", "Experience", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl font-display font-bold uppercase tracking-tighter text-ink hover:text-accent transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

