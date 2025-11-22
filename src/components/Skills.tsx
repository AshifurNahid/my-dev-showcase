import { Card } from "@/components/ui/card";
import {
  Activity,
  BarChart3,
  Clock3,
  Cloud,
  Code2,
  Database,
  HardDrive,
  MessageSquare,
  TestTube,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const skillCategories = [
    {
      icon: Code2,
      title: "Backend Development",
      skills: ["Java", "C#", "F#", "Perl"],
      color: "text-primary",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      skills: ["AWS", "Docker", "Kubernetes"],
      color: "text-accent",
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "DynamoDb"],
      color: "text-primary",
    },
    {
      icon: HardDrive,
      title: "Caching",
      skills: ["Redis", "Service Fabric Reliable Collections"],
      color: "text-accent",
    },
    {
      icon: MessageSquare,
      title: "Message Queue",
      skills: ["Kafka"],
      color: "text-primary",
    },
    {
      icon: Activity,
      title: "Monitoring",
      skills: ["Grafana", "Graphite"],
      color: "text-accent",
    },
    {
      icon: TestTube,
      title: "Testing",
      skills: ["Mockito", "Gherkin", "Cucumber", "k6", "Pact"],
      color: "text-primary",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      skills: ["KQL", "HQL"],
      color: "text-accent",
    },
    {
      icon: Clock3,
      title: "CronJobs",
      skills: ["ScheduledExecutorService", "Hangfire"],
      color: "text-primary",
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
