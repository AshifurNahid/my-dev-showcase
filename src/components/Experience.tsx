import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior Software Engineer",
      organization: "Tech Company",
      period: "2022 - Present",
      description: "Leading development of scalable microservices architecture, mentoring junior developers, and implementing best practices for code quality and testing.",
      technologies: ["Java", "Spring Boot", "React", "AWS"],
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      organization: "Startup Inc.",
      period: "2020 - 2022",
      description: "Built and maintained full-stack applications, designed RESTful APIs, and collaborated with cross-functional teams to deliver features on time.",
      technologies: ["Node.js", "React", "PostgreSQL", "Docker"],
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      organization: "University Name",
      period: "2016 - 2020",
      description: "Focused on software engineering, algorithms, and data structures. Completed capstone project on distributed systems.",
      technologies: ["Java", "Python", "Data Structures", "Algorithms"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Experience & <span className="text-gradient-primary">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 animate-fade-in-up ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 border-4 border-background z-10 mt-2"></div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                    <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          exp.type === "work" ? "bg-primary/10" : "bg-accent/10"
                        }`}>
                          {exp.type === "work" ? (
                            <Briefcase className={`h-5 w-5 ${
                              exp.type === "work" ? "text-primary" : "text-accent"
                            }`} />
                          ) : (
                            <GraduationCap className="h-5 w-5 text-accent" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-muted-foreground font-medium">{exp.organization}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>

                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
