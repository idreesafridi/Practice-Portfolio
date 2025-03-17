
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
          
          <div className="bg-card rounded-lg shadow-lg p-8">
            {/* Resume Content */}
            <div className="space-y-10">
              {/* Experience Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
                <div className="space-y-8">
                  <div className="border-l-2 border-primary pl-6 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                    <h4 className="text-xl font-medium">Senior Full Stack Developer</h4>
                    <p className="text-muted-foreground mb-4">Tech Company • 2020 - Present</p>
                    <ul className="mt-2 space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Led development of multiple high-impact web applications
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Mentored junior developers and conducted code reviews
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Implemented CI/CD pipelines and improved deployment processes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
                <div className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <h4 className="text-xl font-medium">Bachelor of Computer Science</h4>
                  <p className="text-muted-foreground">University Name • 2016 - 2020</p>
                </div>
              </div>

              {/* Certifications Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Certifications</h3>
                <div className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      AWS Certified Developer Associate
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      MongoDB Certified Developer
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      React Native Certified Developer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
