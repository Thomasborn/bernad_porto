import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 bg-surface text-ink relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-4 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-ink/50 mb-6">
                01 — Profile
              </h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-balance">
                I bridge the gap between aesthetic design and functional engineering to create digital experiences that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-ink/50">Soft Skills</h3>
                <ul className="text-sm font-medium leading-relaxed flex flex-wrap gap-x-6 gap-y-2">
                  <li>Problem Solving</li>
                  <li>Critical Thinking</li>
                  <li>Adaptability</li>
                  <li>Communication</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-ink/50">Languages</h3>
                <ul className="text-sm font-medium leading-relaxed flex flex-wrap gap-x-6 gap-y-2">
                  <li>Indonesian (Native)</li>
                  <li>English (Professional)</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1] text-balance mb-12">
                Designing with intent.
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 text-lg text-ink/80 leading-relaxed font-medium">
                <p>
                  As a multidisciplinary creative, I don't just design interfaces; I craft comprehensive digital ecosystems. My approach is rooted in understanding the core user problem and solving it through intuitive, elegant, and scalable solutions.
                </p>
                <p>
                  With a background spanning UI/UX design, and digital marketing strategy, I bring a holistic perspective to every project. I believe that the best products are born at the intersection of human empathy and technical excellence.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
