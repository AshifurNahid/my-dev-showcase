import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface GitHubContributionsProps {
  className?: string;
}

const GitHubContributions = ({ className = "" }: GitHubContributionsProps) => {
  const [loading, setLoading] = useState(true);
  const username = "AshifurNahid";

  useEffect(() => {
    // Simple loading state
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Card
        className={`p-4 w-full max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 animate-pulse ${className}`.trim()}
      >
        <div className="h-32 bg-muted rounded"></div>
      </Card>
    );
  }

  return (
    <Card
      className={`p-6 w-full max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all overflow-hidden ${className}`.trim()}
    >
      <h3 className="text-lg font-semibold mb-4 text-center text-foreground">
        GitHub Contributions
      </h3>
      <div className="flex justify-center">
        <img
          src={`https://ghchart.rshah.org/189ea5/${username}`}
          alt="GitHub Contributions Chart"
          className="w-full max-w-full rounded-lg"
          loading="lazy"
        />
      </div>
    </Card>
  );
};

export default GitHubContributions;
