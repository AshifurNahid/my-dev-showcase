import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Globe,
  Wrench,
  Server,
  Smartphone,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
      color: "text-primary",
    },
    {
      icon: Globe,
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"],
      color: "text-accent",
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Spring Boot", "Express", "REST APIs", "GraphQL"],
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
      color: "text-accent",
    },
    {
      icon: Wrench,
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Other",
      skills: ["Agile/Scrum", "Testing", "Microservices", "WebSockets", "Security"],
      color: "text-accent",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div 
            ref={elementRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="text-gradient-primary">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`p-6 space-y-4 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card mt-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold">Always Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. Currently exploring cloud-native architectures,
                AI/ML integration, and advanced system design patterns to stay at the forefront
                of software development.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
