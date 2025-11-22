import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Code, Target, Award, ExternalLink } from "lucide-react";

const CompetitiveProgramming = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const platforms = [
    {
      name: "LeetCode",
      username: "Ashifur_Nahid",
      url: "https://leetcode.com/u/Ashifur_Nahid/",
      icon: Code,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      stats: [
        { label: "Problems Solved", value: "350+", icon: Target },
        { label: "Contest Rating", value: "1650+", icon: Trophy },
        { label: "Global Rank", value: "Top 15%", icon: Award },
      ],
    },
    {
      name: "Codeforces",
      username: "_12abcd24_",
      url: "https://codeforces.com/profile/_12abcd24_",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      stats: [
        { label: "Current Rating", value: "1400+", icon: Trophy },
        { label: "Max Rating", value: "1500+", icon: Award },
        { label: "Contests", value: "50+", icon: Target },
      ],
    },
  ];

  return (
    <section id="competitive-programming" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Trophy className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Problem Solving</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Competitive Programming <span className="text-gradient-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solving algorithmic challenges and competing with developers worldwide
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className={`p-8 bg-card/50 backdrop-blur-sm border ${platform.borderColor} hover:border-${platform.color.split('-')[1]}/50 transition-all duration-300 hover:shadow-glow group`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Platform Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl ${platform.bgColor} group-hover:scale-110 transition-transform`}>
                      <platform.icon className={`h-8 w-8 ${platform.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{platform.name}</h3>
                      <p className="text-muted-foreground">@{platform.username}</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {platform.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50"
                    >
                      <div className="flex items-center gap-3">
                        <stat.icon className={`h-5 w-5 ${platform.color}`} />
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                      </div>
                      <span className="text-lg font-semibold text-foreground">{stat.value}</span>
                    </div>
                  ))}
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
                    Visit {platform.name} Profile
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Achievements Highlight */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-border/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Key Achievements</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-accent mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Contests Participated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">Top 20%</div>
                  <div className="text-sm text-muted-foreground">Global Ranking</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-accent mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
