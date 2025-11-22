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
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 animate-fade-in-up">
            <div className="space-y-6 text-left">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-primary/80 font-semibold">About</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="text-gradient-primary">Ashifur Nahid</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Full-Stack Developer & Java Enthusiast
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I craft elegant solutions to complex fintech and web challenges, balancing clean code with pragmatic
                  delivery. Currently shaping reliable banking experiences at
                  <span className="px-2 py-1 mx-1 rounded-md bg-primary/15 text-primary font-semibold">Sonali Intellect Limited</span>
                  and exploring scalable side projects.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-card/70 backdrop-blur space-y-4 shadow-lg shadow-primary/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-base font-semibold text-foreground">Highlighted impact</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Building ATM middleware, RTGS services, BEFTN processors, and Core Banking integrations with a focus on
                  <span className="px-2 py-1 mx-1 rounded-md bg-accent/10 text-accent font-semibold">secure transactions</span>
                  and
                  <span className="px-2 py-1 mx-1 rounded-md bg-primary/15 text-primary font-semibold">high availability</span>
                  in regulated environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java & Spring Boot",
                    "Microservices",
                    "Payment orchestration",
                    "Production debugging",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-muted text-foreground/90 text-sm font-medium border border-border/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
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
              <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
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
                  href="mailto:your.email@example.com"
                  className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 border border-border hover:border-primary transition-all shadow-md hover:shadow-glow hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {/* Avatar with Glow Effect */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-80 group-hover:opacity-100 transition duration-300"></div>
                  <Avatar className="relative h-52 w-52 border-4 border-card shadow-2xl">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/97047681?v=4" alt="Ashifur Nahid" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="p-6 rounded-2xl border bg-card/80 backdrop-blur space-y-3 text-center shadow-lg shadow-accent/10">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">GitHub-backed skill snapshot</p>
                <p className="text-lg text-muted-foreground">
                  Exploring open-source and personal builds to sharpen backend and cloud chops. Dive into the feed below for
                  real stats and activity pulled straight from GitHub.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "Banking microservices",
                    "Cloud-native APIs",
                    "CI/CD & Observability",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
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
              onClick={() => scrollToSection("#skills")}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all animate-bounce hover:scale-110"
              aria-label="Scroll to skills section"
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
