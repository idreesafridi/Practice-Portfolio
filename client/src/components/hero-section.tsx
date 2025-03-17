import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div 
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
          >
            Hi, I'm <span className="text-primary">John Doe</span>
          </motion.h1>
          <motion.h2 
            variants={itemVariants}
            className="mt-4 text-2xl text-muted-foreground"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground max-w-[600px]"
          >
            I create elegant solutions to complex problems. With expertise in both frontend and backend development,
            I build scalable applications that users love.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex gap-4"
          >
            <Button 
              size="lg" 
              asChild
              className="transform transition-all duration-300 hover:scale-105"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="transform transition-all duration-300 hover:scale-105"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src="/attached_assets/17030099bjjjj79718 ).jpg"
            alt="Profile"
            className="w-[300px] h-[300px] rounded-full object-cover shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}