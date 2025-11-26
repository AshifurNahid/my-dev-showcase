import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Zap, Network } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement | null>(null);

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

  const coreStacks = [
    {
      icon: Database,
      title: "Platform Architecture",
      summary: "Designing dependable services with strong data models and observability",
      chips: ["Domain-driven design", "Resilience patterns", "Observability", "Data modeling", "HA/DR"],
    },
    {
      icon: Cloud,
      title: "Cloud & Delivery",
      summary: "Shipping on modern cloud tooling with clean CI/CD and container workflows",
      chips: ["AWS", "Docker", "GitHub Actions", "Kubernetes", "Infrastructure-as-code"],
    },
    {
      icon: Code2,
      title: "Backend Engineering",
      summary: "Building Java/Spring services that scale with graceful degradation",
      chips: ["Java", "Spring Boot", "REST & gRPC", "Event-driven", "Caching"],
    },
    {
      icon: Zap,
      title: "Performance & Reliability",
      summary: "Profiling, tuning, and hardening to keep latency low and uptime high",
      chips: ["Redis", "Load testing", "Circuit breakers", "Tracing", "SLOs"],
    },
  ];

  const supportingSkills = [
    "Kafka",
    "PostgreSQL",
    "Oracle",
    "MySQL",
    "Grafana",
    "JPA/Hibernate",
    "JUnit/Mockito",
    "API testing",
    "Batch processing",
    "Scheduling",
    "API gateways",
    "AuthN/AuthZ",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-16 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div
            ref={elementRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="text-gradient-primary">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Concentrated on resilient services with a curated toolkit of core stacks and supporting skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {coreStacks.map((stack, index) => {
              const visibleChips = stack.chips.slice(0, 4);
              const remaining = stack.chips.length - visibleChips.length;

              return (
                <Card
                  key={stack.title}
                  className={`relative overflow-hidden border border-border/60 bg-card/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-500 lg:col-span-6 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-accent" />
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-11 w-11 rounded-lg border border-border/70 bg-primary/5 flex items-center justify-center text-primary">
                        <stack.icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold leading-tight">{stack.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{stack.summary}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {visibleChips.map((chip) => (
                        <Badge
                          key={chip}
                          variant="secondary"
                          className="rounded-full border-border/70 bg-secondary/80 text-foreground"
                        >
                          {chip}
                        </Badge>
                      ))}
                      {remaining > 0 && (
                        <Badge variant="outline" className="rounded-full border-dashed text-muted-foreground">
                          +{remaining} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="border border-border/60 bg-card/70 backdrop-blur-sm shadow-md">
            <div className="flex flex-wrap items-center gap-2 p-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30">
                <Network className="h-4 w-4" />
                Supporting skills
              </div>
              {supportingSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="rounded-full border-border/60 text-muted-foreground hover:text-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
