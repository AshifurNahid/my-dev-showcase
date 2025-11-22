import React from 'react';
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Cloud,
  Zap,
  Network,
  BarChart3,
  Beaker,
  Clock,
  Layers,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  
  const skillCategories = [
    {
      icon: Code2,
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "Servlets/JSP", "RESTful APIs", "Microservices"],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["Oracle", "PostgreSQL", "MySQL", "JDBC", "JPA/Hibernate"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["Docker", "Linux", "Git", "CI/CD", "AWS"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Zap,
      title: "Caching & Performance",
      skills: ["Redis", "Query Optimization", "Transaction Management", "Multithreading"],
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: Network,
      title: "Message Queue & Integration",
      skills: ["Kafka", "API Integration", "Event-Driven Architecture", "WebSockets"],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: BarChart3,
      title: "Monitoring & Analytics",
      skills: ["Grafana", "Log Analysis", "SQL Debugging", "Performance Monitoring"],
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Beaker,
      title: "Testing & Quality",
      skills: ["JUnit", "Mockito", "Integration Testing", "API Testing", "Debugging"],
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
    },
    {
      icon: Clock,
      title: "Scheduled Jobs & Automation",
      skills: ["ScheduledExecutorService", "Cron Jobs", "Batch Processing", "Task Scheduling"],
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      icon: Layers,
      title: "Architecture & Patterns",
      skills: ["Microservices", "Design Patterns", "System Design", "Agile/Scrum"],
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div 
            ref={elementRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical expertise built through hands-on experience in fintech and enterprise systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`border-2 border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                
              >
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center transition-transform hover:scale-110`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-bold leading-tight">{category.title}</h3>
                  </div>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-secondary/80 hover:bg-secondary text-secondary-foreground rounded-md text-sm font-medium transition-all hover:scale-105 cursor-default border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

 
        </div>
      </div>
    </section>
  );
};

export default Skills;