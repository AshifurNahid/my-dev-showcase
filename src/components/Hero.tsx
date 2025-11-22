import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParallax } from "@/hooks/useScrollAnimation";
import GitHubStats from "./GitHubStats";
import GitHubContributions from "./GitHubContributions";

const Hero = () => {
  const scrollY = useParallax();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4">
        <div 
          className="max-w-6xl mx-auto space-y-12"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          {/* Hero Content */}
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Avatar with Glow Effect */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-glow"></div>
                <Avatar className="relative h-40 w-40 border-4 border-card shadow-2xl">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/97047681?v=4" alt="Ashifur Nahid" />
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            {/* Title Section */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground animate-fade-in font-medium">
                Hi there, I'm
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="text-gradient-primary">Ashifur Nahid</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Full-Stack Developer & Java Enthusiast
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I craft elegant solutions to complex problems, building modern web applications
              with passion and precision. Let's create something amazing together.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="gap-2 shadow-lg hover:shadow-glow transition-all hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="hover:scale-105 transition-transform"
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="hover:scale-105 transition-transform"
              >
                <a href="/resume.pdf" download className="gap-2">
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-6">
              <a
                href="https://github.com/AshifurNahid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 border border-border hover:border-primary transition-all shadow-md hover:shadow-glow hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 border border-border hover:border-primary transition-all shadow-md hover:shadow-glow hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 border border-border hover:border-primary transition-all shadow-md hover:shadow-glow hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <GitHubStats />
          </div>

          {/* GitHub Contributions */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <GitHubContributions />
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex justify-center pt-8">
            <button
              onClick={() => scrollToSection("#about")}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all animate-bounce hover:scale-110"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
