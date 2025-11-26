import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import drivingSchoolImage from "@/assets/driving-school.svg";
import crmDashboardImage from "@/assets/crm-dashboard.svg";
import ecommerceImage from "@/assets/ecommerce-platform.svg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  codeUrl: string;
  liveUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "CRM Application",
    description:
      "Full-featured sales and marketing hub with real-time analytics, lead routing, and campaign management dashboards.",
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
    codeUrl: "https://github.com/AshifurNahid/CRM",
    liveUrl: "https://crm-frontend-taupe.vercel.app/",
    image: crmDashboardImage,
  },
  {
    title: "Driving School Platform",
    description:
      "Scheduling and enrollment experience for driving schools, featuring course discovery, instructor profiles, and online booking.",
    tech: ["React", "Express", "MongoDB", "TailwindCSS"],
    codeUrl: "https://github.com/AshifurNahid/driving-school-backend",
    liveUrl: "https://driving-school-frontend-phi.vercel.app/",
    image: drivingSchoolImage,
  },
  {
    title: "Ecommerce Microservice",
    description:
      "Event-driven commerce backend with modular services for catalog, orders, payments, and notifications.",
    tech: ["Node.js", "Express", "MongoDB", "Microservices"],
    codeUrl: "https://github.com/AshifurNahid/Ecommerce-Microservice",
    image: ecommerceImage,
  },
];

const Projects = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div
            ref={elementRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated look at the platforms I am most proud of. These projects
              highlight my focus on user experience, reliability, and clear product outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 flex flex-col ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 120}ms` : '0ms'
                }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-b overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2 border-t">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild size="sm" className="flex-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/AshifurNahid"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
