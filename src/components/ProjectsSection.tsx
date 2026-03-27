import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Smart-Audit AI",
    description: "AI-powered call auditing for Battery Smart that analyzes every call, flags revenue leakage, and triggers faster coaching for support teams.",
    tech: ["React 18", "DistilBERT", "BART-MNLI", "Deepgram", "AWS Amplify"],
    period: "Battery Smart Hackathon Finalist",
    image: "/image/smartauditai.png",
    github: "https://github.com/Gundavenkatasai/hacksmart",
    live: "https://hacksmart-rho.vercel.app/",
  },
  {
    title: "Visual Analytics of Indian Population Census Data Using Python",
    description: "Performed data cleaning and preprocessing on India's Census dataset to ensure consistency and accuracy. Conducted exploratory data analysis and created multiple visualizations to identify trends in population distribution, gender ratio, urban–rural patterns, and demographic correlations.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    period: "Mar' 25 – Apr' 25",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=512&fit=crop",
  },
  {
    title: "Data Cleaning and Visualization for HR",
    description: "Performed data cleaning, transformation, and validation on HR datasets to ensure data accuracy and consistency. Developed interactive dashboards to analyze workforce trends, employee performance, and department-level insights for data-driven decision making.",
    tech: ["Power BI", "Excel", "Python", "Pandas"],
    period: "Nov' 25 – Dec' 25",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=512&fit=crop",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-2">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -10, boxShadow: "0 0 40px hsl(var(--primary) / 0.25)" }}
              className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-3 right-3 text-xs font-mono text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
                  {project.period}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed flex-1 font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <motion.span 
                      key={t} 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-xs md:text-sm rounded-md bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold border border-primary/20 hover:border-primary/50 transition-all"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                {(project.github || project.live) && (
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-base md:text-lg text-muted-foreground hover:text-primary transition-colors font-semibold"
                      >
                        <Github size={18} /> Code
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-base md:text-lg text-muted-foreground hover:text-primary transition-colors font-semibold"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
