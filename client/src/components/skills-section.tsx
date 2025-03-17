import { SiReact, SiNodedotjs, SiTypescript, SiPostgresql, SiDocker, SiGit, SiAmazon, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "AWS", icon: SiAmazon, color: "text-[#FF9900]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card key={skill.name} className="group hover:border-primary transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-4 transition-transform group-hover:scale-110`} />
                  <h3 className="font-medium">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
