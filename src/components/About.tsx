import { Code2, Sparkles, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description: "Passionate about writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: Sparkles,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices to stay ahead in the ever-evolving tech landscape.",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Thrive on tackling complex challenges and transforming them into elegant, user-friendly solutions.",
    },
  ];

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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate software engineer specializing in full-stack development,
              with a strong foundation in Java and modern web technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className={`p-6 space-y-4 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a software engineer with a deep passion for building robust, scalable applications.
                  My journey in tech began with Java development, where I learned the importance of
                  solid fundamentals and design patterns.
                </p>
                <p>
                  Over time, I've expanded my expertise to include modern web technologies,
                  cloud platforms, and DevOps practices. I believe in continuous learning
                  and staying current with industry trends to deliver the best solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects,
                  writing technical articles, or exploring new frameworks and tools to
                  enhance my skill set.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
