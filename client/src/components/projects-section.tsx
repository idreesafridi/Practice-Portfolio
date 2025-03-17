import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { Project } from "@shared/schema";
import { ExternalLink } from "lucide-react";
import { useState, useMemo } from "react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  // Extract unique tags from all projects
  const allTags = useMemo(() => {
    if (!projects) return ["All"];
    const tags = new Set(projects.flatMap(project => project.tags));
    return ["All", ...Array.from(tags)];
  }, [projects]);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (activeFilter === "All") return projects;
    return projects.filter(project => project.tags.includes(activeFilter));
  }, [projects, activeFilter]);

  if (isLoading) {
    return (
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-muted rounded-t-lg" />
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                  <div className="h-4 bg-muted rounded w-full mb-2" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTags.map((tag) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant={activeFilter === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(tag)}
                  className="transition-all duration-300 hover:scale-105"
                >
                  {tag}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      {project.link && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant={tag === activeFilter ? "default" : "secondary"}
                          className="cursor-pointer transition-all duration-300 hover:scale-105"
                          onClick={() => setActiveFilter(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}