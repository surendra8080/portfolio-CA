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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -10, boxShadow: "0 0 40px hsl(var(--primary) / 0.25)" }}
                className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col"
              >
                {item.certificate && (
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={item.certificate}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={512}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <span className="absolute top-3 right-3 text-xs font-mono text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
                      {item.period}
                    </span>
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed flex-1 font-medium">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-primary">{item.org}</span>
                    </div>
                  </div>
                  {item.certificateLink && (
                    <motion.a
                      href={item.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-base md:text-lg text-muted-foreground hover:text-primary transition-colors font-semibold mt-4"
                    >
                      <Download size={18} /> View Certificate
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
