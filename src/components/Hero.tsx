import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Download, Code2 } from "lucide-react";
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
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-80 group-hover:opacity-100 transition duration-300"></div>
                <Avatar className="relative h-44 w-44 border-4 border-card shadow-2xl">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/97047681?v=4" alt="Ashifur Nahid" />
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground animate-fade-in font-medium">
                Hi there, I'm
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-5xl font-bold tracking-tight">
                <span className="text-gradient-primary">Ashifur Nahid</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Backend Software Engineer
              </h2>
              <p className="text-sm md:text-base text-primary font-semibold">FinTech • Microservices • System Design</p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Backend Software Engineer specializing in <span className="text-foreground font-semibold">high-scale fintech systems</span> and microservices architecture. I build <span className="text-foreground font-semibold">production-grade solutions</span> that handle millions of transactions with resilience and reliability.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="gap-2 shadow-lg hover:shadow-glow transition-all hover:scale-105"
              >
                Explore Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="hover:scale-105 transition-transform"
              >
                Let's Connect
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="hover:scale-105 transition-transform"
              >
                <a
                  href="https://drive.google.com/file/d/1dzdNnNJ5IYLy9gX1jq7scyZ_OTum_QDZ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                <p className="text-2xl md:text-3xl font-bold text-primary">16+</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Months Experience</p>
              </div>
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                <p className="text-2xl md:text-3xl font-bold text-primary">5+</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Projects Built</p>
              </div>
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                <p className="text-2xl md:text-3xl font-bold text-primary">Java</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Primary Language</p>
              </div>
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                <p className="text-2xl md:text-3xl font-bold text-primary">FinTech</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Core Expertise</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <a
                href="https://github.com/AshifurNahid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 border border-border hover:border-primary transition-all shadow-md hover:shadow-glow hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 border border-border hover:border-primary transition-all shadow-md hover:shadow-glow hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://leetcode.com/u/Ashifur_Nahid/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-accent/10 border border-border hover:border-accent transition-all shadow-md hover:shadow-glow hover:scale-110"
                aria-label="LeetCode Profile"
              >
                <Code2 className="h-6 w-6 text-accent" />
              </a>
              <a
                href="https://codeforces.com/profile/_12abcd24_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 border border-border hover:border-primary transition-all shadow-md hover:shadow-glow hover:scale-110"
                aria-label="Codeforces Profile"
              >
                <Code2 className="h-6 w-6 text-primary" />
              </a>
              <a
                href="mailto:ashifurnahid32@gmail.com"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 border border-border hover:border-primary transition-all shadow-md hover:shadow-glow hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
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
