import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Cloud, Code } from "lucide-react";

const experience = [
  {
    icon: Award,
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    org: "Oracle",
    period: "2025",
    description: "Successfully earned the Oracle Cloud Infrastructure Data Science Professional certification, gaining hands-on experience in designing and implementing data science solutions on cloud platforms. Developed skills in building, training, and deploying machine learning models, and utilizing data-driven insights to solve real-world business problems.",
  },
  {
    icon: Code,
    title: "Tata Data Visualisation Virtual Experience",
    org: "Tata Consultancy Services (TCS)",
    period: "Aug '25",
    description: "Completed a comprehensive virtual experience program focused on data analysis and visualization techniques. Gained practical knowledge in creating dashboards and reports using tools like Power BI, enabling effective communication of insights.",
  },
  {
    icon: Cloud,
    title: "Google Cloud Program Participant",
    org: "Google Arcade",
    period: "May '25 – Dec '25",
    description: "Completed intensive training on GCP services, cloud architecture, IAM security, and scalable infrastructure design. Implemented and deployed cloud-based solutions on GCP.",
  },
  {
    icon: Code,
    title: "Data Structures and Algorithms",
    org: "Self-Study",
    period: "Jun '25 - Jul '25",
    description: "Built strong foundations in complexity analysis, recursion, and OOP problem solving with arrays, trees, graphs, and dynamic programming.",
  },
];

const TrainingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Training</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm leading-tight">{item.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-primary">{item.org}</span>
                      <span className="text-xs text-muted-foreground font-mono">• {item.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
