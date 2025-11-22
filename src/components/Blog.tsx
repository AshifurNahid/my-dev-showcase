import { useState, useEffect } from "react";
import { ExternalLink, Calendar, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  tag_list: string[];
  positive_reactions_count: number;
  cover_image: string | null;
  reading_time_minutes: number;
}

const devtoUsername = import.meta.env.VITE_DEVTO_USERNAME || "ashifur_nahid_c0cbfcc7105";
const devtoApiKey = import.meta.env.VITE_DEVTO_API_KEY?.trim();

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const useApiKey = Boolean(devtoApiKey);
        const url = useApiKey
          ? "https://dev.to/api/articles/me/published?per_page=6"
          : `https://dev.to/api/articles?username=${devtoUsername}&per_page=6`;

        const response = await fetch(url, {
          headers: useApiKey ? { "api-key": devtoApiKey as string } : undefined,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch articles: ${response.status}`);
        }

        const data = await response.json();
        setArticles(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [devtoApiKey, devtoUsername]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div
            ref={elementRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Latest <span className="text-gradient-primary">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about software development,
              best practices, and technology trends.
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-6 space-y-4 animate-pulse">
                  <div className="h-40 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded w-5/6"></div>
                </Card>
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found. Start writing on{" "}
                <a
                  href="https://dev.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Dev.to
                </a>
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card
                  key={article.id}
                  className={`overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 flex flex-col ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                  {article.cover_image && (
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={article.cover_image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-semibold line-clamp-2 hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {article.description}
                      </p>
                    </div>

                    {article.tag_list && article.tag_list.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {article.tag_list.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(article.published_at)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {article.positive_reactions_count}
                      </span>
                    </div>

                    <Button asChild className="w-full">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Read Article ({article.reading_time_minutes} min)
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center pt-8">
            <Button asChild variant="outline" size="lg">
              <a
                href={`https://dev.to/${devtoUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                View All Articles on Dev.to
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
