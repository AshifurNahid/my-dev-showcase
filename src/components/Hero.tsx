import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted -z-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-8 animate-fade-in">
            <Avatar className="h-40 w-40 border-4 border-primary shadow-glow">
              <AvatarImage src="https://avatars.githubusercontent.com/u/97047681?v=4" alt="Ashifur Nahid" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground animate-fade-in">
              Hi there, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-gradient-primary">Ashifur Nahid</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
              Full-Stack Developer & Java Enthusiast
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I craft elegant solutions to complex problems, building modern web applications
            with passion and precision. Let's create something amazing together.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="gap-2 shadow-lg hover:shadow-glow transition-all"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="/resume.pdf" download className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href="https://github.com/AshifurNahid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-muted transition-colors shadow-md hover:shadow-lg"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-muted transition-colors shadow-md hover:shadow-lg"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-card hover:bg-muted transition-colors shadow-md hover:shadow-lg"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
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
