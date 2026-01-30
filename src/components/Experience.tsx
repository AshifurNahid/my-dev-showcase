import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Software Engineer",
      organization: "RedDot Digital Limited · Remote",
      period: "Jan 2025 – Present",
      description:
        "Backend Developer working on MFS (Mobile Financial Services) platform. Developing backend services for digital payment processing, cash transfers, and merchant payment systems while building scalable REST APIs and microservices for mobile financial transactions.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      type: "work",
      title: "Associate Software Engineer",
      organization: "Sonali Intellect Limited · Dhaka, Bangladesh · On-site",
      period: "Oct 2024 – Present",
      description:
        "Building enterprise-scale FinTech systems for mission-critical national banking operations. Optimizing BEFTN and RTGS transaction flows within microservice architectures. Delivering resilient core banking enhancements that improve throughput by optimizing request handling, enhance system stability through robust error handling, and ensure reconciliation accuracy in real-time financial systems processing millions of daily transactions.",
      technologies: [
        "Java",
        "Spring Boot",
        "Oracle",
        "PostgreSQL",
        "Kafka",
        "Docker",
        "Spring Cloud",
        "XML Processing",
      ],
    },
    {
      type: "work",
      title: "Software Engineer (Remote)",
      organization: "Artics Inc. (USA) · Remote",
      period: "Dec 2023 – Jul 2024",
      description:
        "Delivered a full-featured doctor appointment and scheduling platform end-to-end. Architected secure REST APIs with role-based access control and authentication. Implemented scalable booking logic supporting complex scheduling workflows. Coordinated seamlessly with distributed PM and QA teams across multiple time zones, ensuring timely delivery of production-ready features.",
      technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "React/Next.js", "Docker", "Git"],
    },
    {
      type: "work",
      title: "Software Engineer Intern",
      organization: "Dynamic Solution Innovators Ltd. (DSI) · Dhaka, Bangladesh · On-site",
      period: "Sep 2023 – Oct 2023",
      description:
        "Developed a second-hand product resale platform with Spring Boot backend services. Gained hands-on experience with full development lifecycle including debugging production issues, managing deployment workflows, and collaborating in agile team environments. Contributed to codebase improvements and learned best practices in backend development.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST", "Git"],
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Science and Engineering",
      organization: "Chittagong University of Engineering and Technology (CUET)",
      period: "Feb 2019 – Mar 2024 · CGPA: 3.53/4.00",
      description:
        "Focused on algorithms, system design, databases, and backend engineering fundamentals through coursework and projects.",
      technologies: ["Java", "Data Structures", "Algorithms", "System Design", "Database Systems", "OOP"],
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
