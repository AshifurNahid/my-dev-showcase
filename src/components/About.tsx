import { Code2, Sparkles, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div
            ref={elementRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient-primary">Me</span>
            </h2>
          </div>

          <Card className="p-8 bg-card">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Professional Overview</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am Ashifur Nahid, a dedicated Software Engineer working in the fintech domain at Sonali Intellect Limited,
                  where I contribute to building secure, reliable, and large-scale banking solutions used across nationwide
                  financial systems.
                </p>
                <p>
                  At Sonali Intellect, I work on mission-critical modules such as ATM middleware, RTGS in a microservice-based
                  architecture, BEFTN processing, and Core Banking System (CBS) integrations. I am involved in developing and
                  maintaining services that handle real-time financial transactions, interbank communication, account posting
                  flows, and automated backend processing. My work spans request validation, transaction life cycles, API
                  communication, and ensuring high-integrity data processing within regulated banking environments.
                </p>
                <p>
                  I regularly collaborate with cross-functional teams to investigate issues, enhance system reliability, and
                  improve transaction workflows. I have hands-on experience in debugging production cases, analyzing logs,
                  understanding CBS behavior, and ensuring smooth end-to-end execution of payment operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Core Skills</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Java, Spring Boot, Servlets/JSP, and REST API design for financial platforms.</li>
                    <li>JDBC/JPA/Hibernate with Oracle and PostgreSQL, plus performance-aware SQL debugging.</li>
                    <li>Transaction management, multithreading concepts, and microservice architecture patterns.</li>
                    <li>Optimization and safe, atomic execution of complex, high-volume financial transactions.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Beyond Work</h4>
                  <p className="text-muted-foreground">
                    Beyond fintech, I have built personal projects including a <strong>Driving School Management</strong> system,
                    an <strong>Ecommerce site (Micro-service Architecture)</strong>, and a <strong>CRM System</strong>.
                  </p>
                  <p className="text-muted-foreground">
                    Outside of work, I actively practice competitive programming on <strong>LeetCode</strong> and
                    <strong> Codeforces</strong>, focusing on writing clean code, deepening backend fundamentals, and exploring
                    small projects to expand my technical range.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
