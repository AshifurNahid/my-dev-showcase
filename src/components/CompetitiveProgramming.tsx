import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, ExternalLink } from "lucide-react";
import leetcodeLogo from "@/assets/leetcode-logo.png";
import codeforcessLogo from "@/assets/codeforces-logo.png";

const CompetitiveProgramming = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const platforms = [
    {
      name: "LeetCode",
      username: "Ashifur_Nahid",
      url: "https://leetcode.com/u/Ashifur_Nahid/",
      logo: leetcodeLogo,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
    },
    {
      name: "Codeforces",
      username: "_12abcd24_",
      url: "https://codeforces.com/profile/_12abcd24_",
      logo: codeforcessLogo,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
    },
  ];

  return (
    <section id="competitive-programming" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Problem Solving</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Competitive Programming
            </h2>
          </div>

          {/* Platforms Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur-sm border ${platform.borderColor} hover:border-${platform.color.split('-')[1]}/50 transition-all duration-300 hover:shadow-glow group`}
              >
                {/* Platform Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${platform.bgColor} group-hover:scale-110 transition-transform`}>
                    <img src={platform.logo} alt={platform.name} className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">@{platform.username}</p>
                  </div>
                </div>

                {/* Visit Profile Button */}
                <Button
                  asChild
                  className="w-full group/btn hover:scale-105 transition-transform"
                  variant={platform.name === "LeetCode" ? "default" : "outline"}
                >
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Visit Profile
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Total Problems Solved */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-border/50 text-center">
            <div className="text-4xl font-bold text-gradient-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Total Problems Solved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
