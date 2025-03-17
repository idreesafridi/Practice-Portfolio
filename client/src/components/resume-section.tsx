import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

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
            <div className="flex justify-end mb-6">
              <Button className="flex items-center gap-2">
                <FileDown className="h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Resume Content */}
            <div className="space-y-8">
              {/* Experience Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium text-primary">Senior Full Stack Developer</h4>
                    <p className="text-muted-foreground">Tech Company • 2020 - Present</p>
                    <ul className="mt-2 list-disc list-inside text-muted-foreground">
                      <li>Led development of multiple high-impact web applications</li>
                      <li>Mentored junior developers and conducted code reviews</li>
                      <li>Implemented CI/CD pipelines and improved deployment processes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <div>
                  <h4 className="text-xl font-medium text-primary">Bachelor of Computer Science</h4>
                  <p className="text-muted-foreground">University Name • 2016 - 2020</p>
                </div>
              </div>

              {/* Certifications Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>AWS Certified Developer Associate</li>
                  <li>MongoDB Certified Developer</li>
                  <li>React Native Certified Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
