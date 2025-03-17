import { Link } from "wouter";
import ThemeToggle from "./theme-toggle";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="font-bold text-xl hover:text-primary">Portfolio</a>
        </Link>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#resume" className="hover:text-primary">Resume</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2"
            asChild
          >
            <a href="/assets/resume.pdf" download>
              <FileDown className="h-4 w-4" />
              Download CV
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}