import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectComics from "@/assets/project-comics.jpg";
import projectElection from "@/assets/project-election.jpg";
import projectCarPredict from "@/assets/project-carpredict.jpg";
import projectChat from "@/assets/project-chat.jpg";
import projectMonitor from "@/assets/project-monitor.jpg";

const projects = [
  {
    title: "Used Car Price Prediction",
    description: "ML regression model using 4,340 records to predict vehicle selling prices. Performed data preprocessing, feature engineering, and implemented Random Forest regression evaluated with R², MAE, and RMSE.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/saisravanth6115/predictive-analysis",
    image: projectCarPredict,
    period: "Jun '25 - Dec '26",
  },
  {
    title: "LPU Live - Real-Time Chat",
    description: "Secure messaging platform with JWT auth, WebSocket bidirectional communication, live presence tracking, and multi-device session sync.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC"],
    github: "https://github.com/saisravanth6115/lpulive",
    live: "https://lpulivetimepass.vercel.app/",
    image: projectChat,
    period: "Aug '25 - Nov '25",
  },
  {
    title: "Process Monitoring Dashboard",
    description: "Desktop app monitoring CPU, RAM, disk, network usage in real time with graphical visualization and high-resource process identification.",
    tech: ["Python", "Psutil", "Tkinter", "Matplotlib"],
    github: "https://github.com/saisravanth6115/Real-time-process-monitoring-dashboard",
    image: projectMonitor,
    period: "May '25 - Aug '25",
  },
  {
    title: "AI Custom Comics Generator",
    description: "AI-based system that converts text prompts into complete comic stories. Takes user input, breaks it into panels with scene descriptions and dialogues, generates images, adds speech bubbles, and combines them into a final comic strip.",
    tech: ["Python", "AI/ML", "Image Generation", "NLP", "Comic Layout"],
    github: "https://github.com/saisravanth6115/AI-Custom-Comics-Generator",
    image: projectComics,
    period: "2025",
  },
  {
    title: "India Election 2024 Dashboard",
    description: "Interactive Power BI dashboard analyzing India Election 2024 data — party-wise seats, vote share, state-wise results, and regional strength visualization using charts and maps.",
    tech: ["Power BI", "DAX", "Excel/CSV", "Data Cleaning", "Visualization"],
    github: "https://github.com/saisravanth6115/india-election-2024-powerbi-dashboard",
    image: projectElection,
    period: "2024",
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
            Featured <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -10, boxShadow: "0 0 40px hsl(var(--primary) / 0.25)" }}
              className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
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
                <div className="flex gap-4">
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
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/saisravanth6115?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-all text-base md:text-lg font-semibold"
          >
            <Github size={20} /> View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
