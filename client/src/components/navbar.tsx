import { Link } from "wouter";
import ThemeToggle from "./theme-toggle";

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
          <a href="#contact" className="hover:text-primary">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
