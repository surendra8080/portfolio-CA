import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Technology – Computer Science and Engineering",
    institution: "Lovely Professional University, Punjab, India",
    period: "Aug' 23 – Present",
    detail: "CGPA: 6.68",
    description: "Specializing in Computer Science with a focus on Data Science, ML, and Full-Stack Development. Actively participating in hackathons, coding contests, and building real-world projects.",
  },
  {
    icon: BookOpen,
    title: "Intermediate",
    institution: "Viswa Sai Junior College, Guntur, Andhra Pradesh",
    period: "Apr' 21 – Mar' 23",
    detail: "Percentage: 88%",
    description: "Completed intermediate education with strong foundation in analytical and quantitative skills.",
  },
  {
    icon: Award,
    title: "SSC",
    institution: "Geethanjali High School, Guntur, Andhra Pradesh",
    period: "Apr' 20 – Mar' 21",
    detail: "Percentage: 99%",
    description: "Achieved excellent grades with distinction in all subjects, demonstrating consistent academic excellence and strong fundamentals.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-8">
              {education.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                    className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? "md:pr-[52%]" : "md:pl-[52%]"}`}
                  >
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-5 z-10" />
                    <div className="ml-10 md:ml-0 flex-1 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all group">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="text-primary" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <h4 className="font-semibold text-base md:text-lg">{item.title}</h4>
                            <span className="text-sm font-mono text-primary whitespace-nowrap">{item.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">{item.institution}</p>
                          <p className="text-base font-medium text-primary mt-1">{item.detail}</p>
                          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
