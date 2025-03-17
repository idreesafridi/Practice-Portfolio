import { SiReact, SiNodedotjs, SiTypescript, SiPostgresql, SiDocker, SiGit, SiAmazon, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1 
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

          <div className="relative px-4">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex-[0_0_50%] min-w-0 md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group hover:border-primary transition-colors h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <skill.icon className={`w-16 h-16 ${skill.color} mb-4 transition-transform group-hover:scale-110`} />
                        <h3 className="font-medium text-lg">{skill.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}