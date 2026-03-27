import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Cloud, Code, Download } from "lucide-react";

const experience = [
  {
    icon: Code,
    title: "Data Structures and Algorithms",
    org: "Self-Study",
    period: "Jun '25 - Jul '25",
    description: "Completed a 6-week hands-on training program at Lovely Professional University focused on mastering advanced data structures and their real-world applications. The program emphasized problem-solving, efficient algorithm design, and practical implementation using C++.",
    certificate: "/image/Training.png",
    certificateLink: "https://drive.google.com/file/d/1111lrMhtH4_mqllyWrMwT2RAj7IUxu42/view?usp=sharing",
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
          <div className="grid grid-cols-1 gap-6">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden flex flex-col"
              >
                {item.certificate && (
                  <div className="relative h-96 overflow-hidden bg-black/50">
                    <img
                      src={item.certificate}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
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
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 flex-1">{item.description}</p>
                  {item.certificateLink && (
                    <motion.a
                      href={item.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-base text-primary hover:text-accent transition-colors font-semibold self-start"
                    >
                      <Download size={18} />
                      View Certificate
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
