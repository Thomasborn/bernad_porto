import { motion } from "motion/react";

const experiences = [
  {
    id: 1,
    date: "2023 — Present",
    company: "Creative Studio",
    role: "Senior UI/UX Designer",
    impact: "Led the design of multiple high-profile client projects, increasing overall user engagement by 35% across platforms.",
  },
  {
    id: 2,
    date: "2021 — 2023",
    company: "Tech Startup Inc.",
    role: "Frontend Developer",
    impact: "Developed and maintained scalable React applications, optimizing performance and reducing load times by 40%.",
  },
  {
    id: 3,
    date: "2019 — 2021",
    company: "Digital Agency",
    role: "Digital Marketing Specialist",
    impact: "Managed comprehensive SEO and SEM campaigns, driving a 50% increase in organic traffic for key clients.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-ink text-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-4 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-bg/50 mb-6">
                02 — Experience
              </h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-balance text-bg/80">
                A track record of delivering impactful digital solutions across design, development, and marketing.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col border-t border-bg/10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-bg/10 hover:bg-bg/5 transition-colors duration-500"
                >
                  <div className="w-full md:w-1/4 flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-bg/40">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-display font-bold tracking-tight text-bg">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="w-full md:w-3/4 flex flex-col gap-4">
                    <h4 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bg group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <p className="text-lg text-bg/60 leading-relaxed font-medium">
                      {exp.impact}
                    </p>
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
