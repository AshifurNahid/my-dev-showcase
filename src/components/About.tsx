import React from 'react';
import { Code2, Briefcase, Rocket, Award, GraduationCap, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Main Content Card */}
          <Card className="border-2 border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Professional Overview */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Professional Overview</h3>
                  </div>
                  
                  <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed pl-0 md:pl-14">
                    <p className="relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-primary before:rounded-full before:-ml-4 md:before:block before:hidden">
                      I'm a dedicated Backend Software Engineer specializing in <strong className="text-foreground">fintech systems</strong>. Currently working at 
                      <strong className="text-foreground"> RedDot Digital Limited</strong> as a Backend Developer on the MFS platform, building secure, reliable, 
                      and production-grade solutions that process millions of financial transactions daily across mobile financial services infrastructure.
                    </p>
                    <p className="relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-primary before:rounded-full before:-ml-4 md:before:block before:hidden">
                      At <strong className="text-foreground">Sonali Intellect Limited</strong>, I architected and maintained <strong className="text-foreground">mission-critical microservices</strong> handling 
                      ATM middleware, RTGS/BEFTN processing, and Core Banking System (CBS) integrations. My focus is on building <strong className="text-foreground">fault-tolerant, high-throughput systems</strong> 
                      that ensure transaction integrity in regulated banking environments while meeting strict SLA requirements.
                    </p>
                    <p className="relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-primary before:rounded-full before:-ml-4 md:before:block before:hidden">
                      My expertise spans <strong className="text-foreground">microservices architecture, REST API design, database optimization, and event-driven systems</strong>. 
                      I excel at <strong className="text-foreground">production debugging, system optimization, and cross-functional collaboration</strong> to enhance reliability 
                      and streamline payment workflows. I'm passionate about writing clean, maintainable code and continuously learning modern backend engineering practices.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/50"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-card px-4 text-sm text-muted-foreground">Expertise & Interests</span>
                  </div>
                </div>

                {/* Core Skills and Beyond Work Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Core Skills */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold">Core Skills</h4>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3 group">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                        <span className="leading-relaxed">Java, Spring Boot, Servlets/JSP, and REST API design for financial platforms.</span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                        <span className="leading-relaxed">JDBC/JPA/Hibernate with Oracle and PostgreSQL, plus performance-aware SQL debugging.</span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                        <span className="leading-relaxed">Transaction management, multithreading concepts, and microservice architecture patterns.</span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                        <span className="leading-relaxed">Optimization and safe, atomic execution of complex, high-volume financial transactions.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Beyond Work */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Rocket className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="text-xl font-semibold">Beyond Work</h4>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Beyond fintech, I have built personal projects including a <strong className="text-foreground">Driving School Management</strong> system,
                        an <strong className="text-foreground">Ecommerce site (Micro-service Architecture)</strong>, and a <strong className="text-foreground">CRM System</strong>.
                      </p>
                      <p>
                        Outside of work, I actively practice competitive programming on <strong className="text-foreground">LeetCode</strong> and
                        <strong className="text-foreground"> Codeforces</strong>, focusing on writing clean code, deepening backend fundamentals, and exploring
                        small projects to expand my technical range.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats or Highlights (Optional) */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Briefcase, label: "Fintech", value: "Focused" },
              { icon: Code2, label: "Backend", value: "Specialist" },
              { icon: Zap, label: "High-Scale", value: "Systems" },
              { icon: GraduationCap, label: "Continuous", value: "Learner" }
            ].map((stat, index) => (
              <Card key={index} className="border-2 border-border/50 hover:border-primary/50 transition-all bg-card/50 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-4 text-center">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                  <p className="font-semibold text-sm">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;