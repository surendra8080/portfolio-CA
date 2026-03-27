import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Award, FolderOpen } from "lucide-react";

const certificates = [
  {
    name: "Oracle Cloud Infrastructure AI Foundations Associate",
    org: "Oracle",
    year: "2026",
    description: "Certified in Oracle Cloud Infrastructure with expertise in AI foundations, cloud architecture, and intelligent solutions.",
    link: "https://drive.google.com/file/d/1NoNT2h6qq5RpA3bjd4kvKglcMpCFqWqH/view?usp=sharing",
    driveLink: "https://drive.google.com/file/d/1NoNT2h6qq5RpA3bjd4kvKglcMpCFqWqH/view?usp=sharing",
    icon: "https://img.icons8.com/color/48/000000/oracle-logo.png",
    image: "/image/AI oracle.jpeg",
  },
  {
    name: "Oracle Database Certification",
    org: "Oracle",
    year: "2026",
    description: "Professional certification in Oracle Database covering database design, administration, and optimization techniques.",
    link: "https://drive.google.com/file/d/1w2gpCU4I7LTz_yoAxEl5AfnbzNC5PbGt/view?usp=sharing",
    driveLink: "https://drive.google.com/file/d/1w2gpCU4I7LTz_yoAxEl5AfnbzNC5PbGt/view?usp=sharing",
    icon: "https://img.icons8.com/color/48/000000/oracle-logo.png",
    image: "/image/DBMS oracle.jpeg",
  },
  {
    name: "Hackathon Winner",
    org: "Tech Community",
    year: "2026",
    description: "Successfully participated and won hackathon competition, demonstrating innovation and technical excellence in problem-solving.",
    link: "https://drive.google.com/file/d/1E9UNCWGJ3GbtYnFJPZlkOWLze3RmOmUm/view?usp=sharing",
    driveLink: "https://drive.google.com/file/d/1E9UNCWGJ3GbtYnFJPZlkOWLze3RmOmUm/view?usp=sharing",
    icon: "https://img.icons8.com/color/48/trophy.png",
    image: "/image/Hackathon.jpeg",
  },
  {
    name: "Cloud Computing NPTEL Certification",
    org: "NPTEL",
    year: "2025",
    description: "NPTEL certification covering cloud architecture, virtualization, distributed computing, and modern cloud service deployment.",
    link: "https://drive.google.com/file/d/14qPneCJjcrlGJr93tYkidT0CsD8NKDEK/view?usp=sharing",
    driveLink: "https://drive.google.com/file/d/14qPneCJjcrlGJr93tYkidT0CsD8NKDEK/view?usp=sharing",
    icon: "https://img.icons8.com/color/48/cloud.png",
    image: "/image/NPTEL.png",
  },
];

const years = ["All","2026", "2025"];

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? certificates : certificates.filter(c => c.year === filter);

  return (
    <section id="certificates" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black">
            Professional <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Certificates</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-10"
        >
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setFilter(y)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === y
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {y}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target={cert.link ? "_blank" : undefined}
              rel={cert.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col overflow-hidden h-full"
            >
              {/* Certificate Image */}
              {cert.image && (
                <div className="w-full h-48 bg-secondary overflow-hidden flex-shrink-0">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                  />
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {cert.icon ? (
                      <img src={cert.icon} alt={cert.org} className="w-8 h-8 object-contain" loading="lazy" />
                    ) : (
                      <Award className="text-primary" size={24} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary/80 mt-2">{cert.org}</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
                    {cert.driveLink && (
                      <a
                        href={cert.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                        title="Open in Google Drive"
                      >
                        <FolderOpen size={14} />
                      </a>
                    )}
                  </div>
                  {cert.link && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      View Certificate
                      <ExternalLink size={12} />
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
