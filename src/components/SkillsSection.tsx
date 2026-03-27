import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Data Science & Analytics",
    skills: [
      { name: "Python", level: 90 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Pandas & NumPy", level: 85 },
      { name: "Data Visualization", level: 80 },
      { name: "Machine Learning (Scikit-learn)", level: 78 },
      { name: "Matplotlib", level: 82 },
    ],
  },
  {
    title: "Core Components",
    tags: ["DSA", "Operating Systems", "DBMS", "Computer Networks", "OOP"],
  },
  {
    title: "Tools & Platforms",
    icons: [
      { name: "VS Code", img: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
      { name: "Git", img: "https://img.icons8.com/color/48/git.png" },
      { name: "GitHub", img: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
      { name: "Jupyter", img: "https://img.icons8.com/fluency/48/jupyter.png" },
      { name: "Power BI", img: "https://img.icons8.com/color/48/power-bi.png" },
      { name: "Figma", img: "https://img.icons8.com/color/48/figma.png" },
      { name: "Excel", img: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
      { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
  },
  {
    title: "Soft Skills",
    tags: ["Problem-Solving", "Analytical Thinking", "Team Collaboration", "Adaptability", "Communication"],
  },
];

const SkillTag = ({ name, delay }: { name: string; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
      className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold text-sm md:text-base border border-primary/30 hover:border-primary/60 hover:bg-primary/20 transition-all duration-200 cursor-default"
    >
      {name}
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-2">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.filter(c => c.skills).map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 0 30px hsl(var(--primary) / 0.2)" }}
              className="p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-xl-large font-semibold mb-8 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills!.map((skill, i) => (
                  <SkillTag key={skill.name} name={skill.name} delay={catIdx * 0.15 + i * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}

          {skillCategories.filter(c => c.icons).map((cat) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-xl-large font-semibold mb-8 text-primary">{cat.title}</h3>
              <div className="grid grid-cols-4 gap-4">
                {cat.icons!.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                    whileHover={{ scale: 1.15, rotateZ: 5 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors group cursor-pointer"
                  >
                    <img src={tool.img} alt={tool.name} className="w-12 h-12 group-hover:drop-shadow-lg transition-all" loading="lazy" />
                    <span className="text-xs md:text-sm text-muted-foreground text-center font-mediumroup-hover:scale-110 transition-transform" loading="lazy" />
                    <span className="text-xs text-muted-foreground text-center">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {skillCategories.filter(c => c.tags).map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-xl-large font-semibold mb-6 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-4">
                {cat.tags!.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
                    className="px-5 py-3 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold text-base border border-primary/30 hover:border-primary/60 hover:bg-primary/20 transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
