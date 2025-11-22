import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { GitFork, Star, Code2, Users } from "lucide-react";

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  followers: number;
}

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userResponse = await fetch("https://api.github.com/users/AshifurNahid");
        const userData = await userResponse.json();

        const reposResponse = await fetch(
          "https://api.github.com/users/AshifurNahid/repos?per_page=100"
        );
        const reposData = await reposResponse.json();

        const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);

        setStats({
          totalRepos: userData.public_repos,
          totalStars,
          totalForks,
          followers: userData.followers,
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mx-auto">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="p-4 animate-pulse">
            <div className="h-12 bg-muted rounded"></div>
          </Card>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const statItems = [
    {
      icon: Code2,
      label: "Repositories",
      value: stats.totalRepos,
      color: "text-primary",
    },
    {
      icon: Star,
      label: "Total Stars",
      value: stats.totalStars,
      color: "text-accent",
    },
    {
      icon: GitFork,
      label: "Total Forks",
      value: stats.totalForks,
      color: "text-primary",
    },
    {
      icon: Users,
      label: "Followers",
      value: stats.followers,
      color: "text-accent",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mx-auto">
      {statItems.map((item, index) => (
        <Card
          key={index}
          className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
        >
          <div className="flex flex-col items-center gap-2">
            <item.icon className={`h-8 w-8 ${item.color} group-hover:scale-110 transition-transform`} />
            <div className="text-2xl md:text-3xl font-bold text-foreground">{item.value}</div>
            <div className="text-xs md:text-sm text-muted-foreground text-center">{item.label}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GitHubStats;
