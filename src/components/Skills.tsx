import { motion } from "motion/react";

const skills = [
  {
    category: "Design",
    items: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Interaction Design", "Figma", "Adobe Creative Suite"],
  },
  {
    category: "Development",
    items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Git"],
  },
  {
    category: "Marketing",
    items: ["SEO Strategy", "Content Marketing", "Social Media Management", "Google Analytics", "Email Campaigns", "Copywriting"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-surface text-ink relative overflow-hidden">
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
                03 — Capabilities
              </h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-balance">
                A versatile toolkit combining creative vision with technical execution.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-16">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6"
                >
                  <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-ink border-b border-ink/10 pb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm font-medium px-4 py-2 bg-ink/5 rounded-full text-ink/80 hover:bg-ink hover:text-bg transition-colors duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
