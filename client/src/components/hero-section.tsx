import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <h2 className="mt-4 text-2xl text-muted-foreground">
            Full Stack Developer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-[600px]">
            I create elegant solutions to complex problems. With expertise in both frontend and backend development,
            I build scalable applications that users love.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Profile"
            className="w-[300px] h-[300px] rounded-full object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
