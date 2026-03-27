import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    { icon: Mail, label: "surendrakolla89@gmail.com", href: "mailto:surendrakolla89@gmail.com"},
  { icon: Phone, label: "+91 8885610186", href: "tel:+918885610186" },
  { icon: Linkedin, label: "Kolla Surendra Kumar", href: "https://www.linkedin.com/in/surendra2005/" },
  { icon: Github, label: "surendra8080", href: "https://github.com/surendra8080" },
    { icon: MapPin, label: "Location", value: "Andhra Pradesh, India", href: "https://maps.app.goo.gl/AP" },
  ];

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            Let's <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto leading-relaxed font-semibold">
            I'm always open to discussing new opportunities, exciting projects, or just having a chat about technology and data science!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get in Touch</h3>
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                whileHover={{ x: 10, boxShadow: "0 0 25px hsl(var(--primary) / 0.2)" }}
                className="group flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors flex-shrink-0">
                  <c.icon className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wide">{c.label}</p>
                  <p className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ boxShadow: "0 0 40px hsl(var(--primary) / 0.2)" }}
            className="p-10 rounded-xl border border-primary/20 bg-card hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            <motion.div 
              className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Send className="text-primary" size={32} />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Let's Build Something Together</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Feel free to reach out for collaboration, opportunities, or just a friendly conversation!
            </p>
            <motion.a
              href="mailto:sravanth6115@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary/70 text-primary-foreground font-semibold text-lg hover:shadow-lg transition-all"
            >
              Send a Message
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
