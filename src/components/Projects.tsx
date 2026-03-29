import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "E-Commerce Redesign",
    role: "UI/UX & Frontend",
    summary: "A complete overhaul of a legacy e-commerce platform, focusing on conversion optimization and mobile-first experience.",
    tags: ["React", "Tailwind", "Figma"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "02",
    title: "Fintech Dashboard",
    role: "Product Design",
    summary: "Designing a complex financial dashboard for enterprise clients, simplifying data visualization and reporting.",
    tags: ["UX Strategy", "Prototyping"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "03",
    title: "Marketing Campaign",
    role: "Digital Marketing",
    summary: "A data-driven digital marketing campaign that increased user acquisition by 40% over a single quarter.",
    tags: ["SEO", "Analytics", "Strategy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
    >
      
      <div className="w-full lg:w-7/12 relative overflow-hidden bg-surface aspect-[4/3] lg:aspect-[16/10]">
        <a href={project.link} className="block w-full h-full group/image">
          <motion.img
            style={{ y }}
            src={project.image}
            alt={project.title}
            className="w-full h-[120%] object-cover scale-105 group-hover/image:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1] origin-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ink/0 group-hover/image:bg-ink/20 transition-colors duration-700 ease-[0.16,1,0.3,1]" />
          
          {/* View Project Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/image:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1] scale-90 group-hover/image:scale-100">
            <div className="bg-bg text-ink px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 shadow-2xl">
              View Case Study
            </div>
          </div>
        </a>
      </div>

      <div className="w-full lg:w-5/12 flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold uppercase tracking-widest text-ink/30">
            {project.id}
          </span>
          <span className="w-12 h-[1px] bg-ink/20 block" />
          <span className="text-xs font-bold uppercase tracking-widest text-ink/60">
            {project.role}
          </span>
        </div>

        <a href={project.link} className="group-hover:text-accent transition-colors duration-300">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-tight">
            {project.title}
          </h3>
        </a>

        <p className="text-lg text-ink/70 leading-relaxed font-medium">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-3 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold uppercase tracking-widest px-4 py-2 border border-ink/10 rounded-full text-ink/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-32 bg-bg text-ink relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter uppercase"
          >
            Selected <br /> Work
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-bold uppercase tracking-widest text-ink/50 max-w-[200px] text-right"
          >
            Curated projects from 2022 to present
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

