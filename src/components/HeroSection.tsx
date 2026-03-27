import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { useState, useEffect } from "react";

const PROFILE_IMG = "/image/Profile.jpg";
const CV_URL = "https://drive.google.com/file/d/1vfvODutkvvj1MU6fykautgkxKf3tLL3A/view?usp=sharing";

const marqueeItems = [
  "Python", "Data Science", "Machine Learning", "AI",
  "React", "Node.js", "SQL", "Power BI", "Cloud Computing", "Analytics"
];

const TypedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-blink text-primary">|</span>
      )}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/6 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-mono text-base md:text-lg mb-6 font-bold tracking-wider"
            >
              ✨ Welcome to my portfolio
            </motion.p>

            {/* Name Typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 h-20 md:h-24 lg:h-32 flex items-center">
                <TypedText
                  text="Surendra Kumar Kolla"
                  className="text-foreground"
                />
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl md:text-4xl text-muted-foreground mb-8 font-bold"
            >
              B.Tech CSE Student &{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-black">
                Aspiring Data Scientist
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
            >
              Passionate about building intelligent solutions using Machine Learning,
              Data Analytics, and Full-Stack Development. Let's create something amazing together.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
              >
                Get in Touch
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                View Projects
              </motion.a>

              <motion.a
                href={CV_URL}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-all duration-300"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/Surendra144964", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/surendra2005/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:surendrakolla89@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+918885610186", label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border-2 border-primary/30 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 animate-pulse-glow"
                animate={{ rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/50"
              >
                <img
                  src={PROFILE_IMG}
                  alt="Surendra Kumar Kolla"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-primary/20 bg-background/80 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-sm text-muted-foreground font-mono font-semibold">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;