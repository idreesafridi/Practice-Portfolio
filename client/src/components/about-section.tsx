import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                With over 5 years of experience in web development, I specialize in creating
                modern web applications using cutting-edge technologies. My passion lies in
                building user-friendly interfaces and robust backend systems.
              </p>
              <p className="text-lg">
                I've worked with startups and established companies, helping them achieve
                their technical goals and deliver value to their users. When I'm not coding,
                you can find me contributing to open-source projects and mentoring aspiring
                developers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-2xl text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-2xl text-primary mb-2">30+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-2xl text-primary mb-2">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-2xl text-primary mb-2">100+</h3>
                <p className="text-muted-foreground">Contributions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
