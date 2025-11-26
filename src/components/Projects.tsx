import { useState, useEffect } from "react";
import { ExternalLink, Github, Star, GitFork, Pin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface PinnedRepo {
  id: string;
  name: string;
  description: string;
  url: string;
  homepageUrl: string | null;
  openGraphImageUrl: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage?: {
    name: string;
    color: string;
  } | null;
  topics: string[];
  updatedFromGitHub?: boolean;
}

type GraphQLRepoNode = {
  id: string;
  name: string;
  description: string;
  url: string;
  homepageUrl: string | null;
  openGraphImageUrl: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage?: { name: string; color: string } | null;
  repositoryTopics?: {
    nodes?: Array<{
      topic?: {
        name?: string;
      } | null;
    } | null>;
  } | null;
};

const fallbackPinned: PinnedRepo[] = [
  {
    id: "fallback-1",
    name: "Payment-Orchestrator",
    description: "High-availability payment routing service with retry, circuit breaking, and auditability built into the core pipeline.",
    url: "https://github.com/AshifurNahid/Payment-Orchestrator",
    homepageUrl: null,
    openGraphImageUrl: "https://opengraph.githubassets.com/1/AshifurNahid/Payment-Orchestrator",
    stargazerCount: 24,
    forkCount: 6,
    primaryLanguage: { name: "Java", color: "#b07219" },
    topics: ["Spring Boot", "Resilience4j", "PostgreSQL"],
    updatedFromGitHub: true,
  },
  {
    id: "fallback-2",
    name: "Realtime-Trading-Platform",
    description: "Event-driven trading engine with Kafka streams, portfolio snapshots, and end-to-end monitoring dashboards.",
    url: "https://github.com/AshifurNahid/Realtime-Trading-Platform",
    homepageUrl: "https://realtime-trading.example.com",
    openGraphImageUrl: "https://opengraph.githubassets.com/1/AshifurNahid/Realtime-Trading-Platform",
    stargazerCount: 18,
    forkCount: 4,
    primaryLanguage: { name: "Java", color: "#b07219" },
    topics: ["Kafka", "Grafana", "Spring"],
    updatedFromGitHub: true,
  },
  {
    id: "fallback-3",
    name: "Fraud-Detection-Service",
    description: "Streaming fraud detection microservice with rule engine, Redis cache, and alert fan-out.",
    url: "https://github.com/AshifurNahid/Fraud-Detection-Service",
    homepageUrl: null,
    openGraphImageUrl: "https://opengraph.githubassets.com/1/AshifurNahid/Fraud-Detection-Service",
    stargazerCount: 15,
    forkCount: 3,
    primaryLanguage: { name: "Java", color: "#b07219" },
    topics: ["Redis", "Kafka", "Spring"],
    updatedFromGitHub: true,
  },
  {
    id: "fallback-4",
    name: "Dev-Portfolio",
    description: "A minimal developer portfolio with dark UI system, smooth animations, and content sourced from GitHub.",
    url: "https://github.com/AshifurNahid/Dev-Portfolio",
    homepageUrl: "https://ashifurnahid.dev",
    openGraphImageUrl: "https://opengraph.githubassets.com/1/AshifurNahid/Dev-Portfolio",
    stargazerCount: 12,
    forkCount: 2,
    primaryLanguage: { name: "TypeScript", color: "#3178c6" },
    topics: ["React", "TailwindCSS", "Vite"],
    updatedFromGitHub: true,
  },
];

const projectMeta: Record<
  string,
  {
    role: "Solo" | "Team";
    status: "Live" | "Open Source";
    tech: string[];
    featured?: boolean;
    impact?: string;
  }
> = {
  "Payment-Orchestrator": {
    role: "Team",
    status: "Open Source",
    tech: ["Spring Boot", "PostgreSQL", "Kafka"],
    featured: true,
    impact: "Reduced payment retries by 32% with resilient routing.",
  },
  "Realtime-Trading-Platform": {
    role: "Team",
    status: "Live",
    tech: ["Kafka", "Grafana", "Redis"],
    impact: "Processes 50k+ events/min with predictable latency.",
  },
  "Fraud-Detection-Service": {
    role: "Solo",
    status: "Open Source",
    tech: ["Redis", "Rules Engine", "Alerts"],
    impact: "Flags suspicious flows under 150ms with batched alerts.",
  },
  "Dev-Portfolio": {
    role: "Solo",
    status: "Live",
    tech: ["React", "TypeScript", "Tailwind"],
    impact: "Built a reusable UI system with accessible theming.",
  },
};

const Projects = () => {
  const [repos, setRepos] = useState<PinnedRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const fetchPinned = async () => {
      setLoading(true);
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;
        const query = `
          query {
            user(login: "AshifurNahid") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    id
                    name
                    description
                    url
                    homepageUrl
                    openGraphImageUrl
                    stargazerCount
                    forkCount
                    primaryLanguage { name color }
                    repositoryTopics(first: 3) { nodes { topic { name } } }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          throw new Error(`GitHub GraphQL error: ${response.status}`);
        }

        const result = await response.json();
        const nodes = (result?.data?.user?.pinnedItems?.nodes ?? []) as GraphQLRepoNode[];

        const normalized = nodes
          .filter(Boolean)
          .map((node) => ({
            id: node.id,
            name: node.name,
            description: node.description,
            url: node.url,
            homepageUrl: node.homepageUrl,
            openGraphImageUrl: node.openGraphImageUrl,
            stargazerCount: node.stargazerCount,
            forkCount: node.forkCount,
            primaryLanguage: node.primaryLanguage,
            topics:
              node.repositoryTopics?.nodes?.map((topicNode) => topicNode?.topic?.name).filter(Boolean) ?? [],
            updatedFromGitHub: true,
          })) as PinnedRepo[];

        setRepos(normalized.length ? normalized : fallbackPinned);
      } catch (error) {
        console.error("Error fetching pinned repositories:", error);
        setRepos(fallbackPinned);
      } finally {
        setLoading(false);
      }
    };

    fetchPinned();
  }, []);

  const renderSkeletons = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="overflow-hidden border border-border/60 bg-card/70 p-6 animate-pulse space-y-4">
          <div className="h-40 w-full rounded-xl bg-muted" />
          <div className="h-4 w-3/4 rounded bg-muted" />
          <div className="h-4 w-2/4 rounded bg-muted" />
          <div className="flex gap-2">
            <div className="h-7 w-16 rounded-full bg-muted" />
            <div className="h-7 w-20 rounded-full bg-muted" />
          </div>
        </Card>
      ))}
    </div>
  );

  const featuredFirst = [...repos].sort((a, b) => {
    const aFeatured = projectMeta[a.name]?.featured ? 1 : 0;
    const bFeatured = projectMeta[b.name]?.featured ? 1 : 0;
    return bFeatured - aFeatured;
  });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div
            ref={elementRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Pinned <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A curated set of work that reflects how I build: thoughtful architecture, measurable impact, and polished delivery.
            </p>
          </div>

          {loading ? (
            renderSkeletons()
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredFirst.map((repo, index) => {
                const meta = projectMeta[repo.name] ?? {
                  role: "Solo" as const,
                  status: repo.homepageUrl ? ("Live" as const) : ("Open Source" as const),
                  tech: repo.topics.slice(0, 3),
                  impact: undefined,
                };
                const isFeatured = meta.featured && index === 0;
                const usesOgImage = repo.openGraphImageUrl?.includes("opengraph.githubassets.com");
                const techPills = meta.tech.slice(0, 3);

                return (
                  <Card
                    key={repo.id}
                    className={`group relative overflow-hidden border border-border/60 bg-card/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-500 ${
                      isFeatured ? "md:col-span-2" : ""
                    } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 mx-4 mt-4 aspect-[16/9]">
                      <img
                        src={repo.openGraphImageUrl}
                        alt={repo.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Badge variant="secondary" className="rounded-full border-border/60">
                          <Pin className="h-3.5 w-3.5 mr-1" />Pinned
                        </Badge>
                        <Badge variant="outline" className="rounded-full border-primary/40 text-primary bg-primary/5">
                          {meta.status}
                        </Badge>
                      </div>
                      {techPills.length > 0 && (
                        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                          {techPills.map((tech) => (
                            <Badge key={tech} variant="secondary" className="rounded-full bg-card/80 border-border/60">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          {meta.role} project
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold leading-tight text-foreground">{repo.name}</h3>
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2">
                            {repo.description || "No description provided."}
                          </p>
                          {meta.impact && (
                            <p className="text-xs md:text-sm text-primary/80 bg-primary/5 px-3 py-2 rounded-lg border border-primary/20 w-fit">
                              {meta.impact}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs md:text-sm text-muted-foreground">
                        {repo.primaryLanguage?.name && (
                          <Badge variant="outline" className="rounded-full border-border/60">
                            <span
                              className="mr-2 h-2.5 w-2.5 rounded-full"
                              style={{ backgroundColor: repo.primaryLanguage.color || "var(--primary)" }}
                            />
                            {repo.primaryLanguage.name}
                          </Badge>
                        )}
                        <Badge variant="secondary" className="rounded-full bg-card/80 border-border/60">
                          <Star className="h-3.5 w-3.5 mr-1" /> {repo.stargazerCount}
                        </Badge>
                        <Badge variant="secondary" className="rounded-full bg-card/80 border-border/60">
                          <GitFork className="h-3.5 w-3.5 mr-1" /> {repo.forkCount}
                        </Badge>
                        {usesOgImage && (
                          <Badge variant="outline" className="rounded-full border-dashed text-muted-foreground">
                            Updated via GitHub
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {repo.homepageUrl && (
                          <Button asChild size="sm" className="gap-2 shadow-sm">
                            <a href={repo.homepageUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        <Button asChild variant="outline" size="sm" className="gap-2">
                          <a href={repo.url} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          <div className="text-center pt-4">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/AshifurNahid?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-5 w-5" />
                View more on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
