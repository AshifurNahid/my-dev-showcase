import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Download, Code2, Sparkles } from "lucide-react";
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
    <section id="home" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/10" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.08), transparent 30%), radial-gradient(circle at 80% 10%, rgba(34,211,238,0.08), transparent 28%), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 120px 120px, 120px 120px",
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      <div className="absolute -left-24 top-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center max-w-6xl mx-auto">
          <div className="space-y-8 lg:col-span-7" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              Building resilient systems for people
            </div>

            <div className="space-y-3">
              <p className="text-base md:text-lg text-muted-foreground">Hi there, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient-primary">Ashifur Nahid</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground/90">
                Software Engineer · Backend & Systems Design
              </h2>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A lifelong learner focused on high-scale, resilient platforms. I design and ship reliable
              backend services where technical excellence meets measurable business impact.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="gap-2 shadow-md hover:shadow-glow transition-all duration-200 hover:-translate-y-0.5"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="gap-2 hover:-translate-y-0.5 transition-transform"
              >
                Contact
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="gap-2 border border-dashed hover:border-primary/50 hover:-translate-y-0.5"
              >
                <a
                  href="https://drive.google.com/file/d/1dzdNnNJ5IYLy9gX1jq7scyZ_OTum_QDZ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="secondary"
                size="sm"
                asChild
                className="rounded-full border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:-translate-y-0.5"
              >
                <a href="mailto:ashifurnahid32@gmail.com" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-full hover:-translate-y-0.5"
              >
                <a href="https://github.com/AshifurNahid" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-full hover:-translate-y-0.5"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="rounded-full border border-border/60 hover:border-accent/60 hover:bg-accent/10 hover:-translate-y-0.5"
              >
                <a href="https://leetcode.com/u/Ashifur_Nahid/" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Code2 className="h-4 w-4" />
                  LeetCode
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="rounded-full border border-border/60 hover:border-primary/60 hover:bg-primary/10 hover:-translate-y-0.5"
              >
                <a href="https://codeforces.com/profile/_12abcd24_" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Code2 className="h-4 w-4" />
                  Codeforces
                </a>
              </Button>
            </div>

            <div className="flex justify-start pt-4">
              <button
                onClick={() => scrollToSection("#about")}
                className="group inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground"
              >
                <ArrowDown className="h-4 w-4 transition-opacity duration-700 group-hover:opacity-100 opacity-70" />
                Scroll for more
                <span className="h-1 w-8 rounded-full bg-primary/40 group-hover:bg-primary/70 group-hover:w-12 transition-all duration-500" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 shadow-lg">
              <div className="absolute inset-0 rounded-2xl border border-white/5" />
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                  <Avatar className="relative h-20 w-20 border-4 border-background shadow-lg">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/97047681?v=4" alt="Ashifur Nahid" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Currently</p>
                  <p className="text-lg font-semibold text-foreground">Building dependable systems</p>
                  <p className="text-sm text-muted-foreground">Fintech & platform reliability</p>
                </div>
              </div>

              <div className="mt-6">
                <GitHubStats />
              </div>
            </div>

            <GitHubContributions className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
