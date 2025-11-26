import { useCallback, useEffect, useState, type SyntheticEvent } from "react";
import { ExternalLink, Calendar, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import articlePlaceholder from "@/assets/article-placeholder.svg";

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
  path: string;
}

interface ArticleDetails {
  body_html?: string;
  title: string;
  cover_image?: string | null;
  description?: string;
  published_at?: string;
  tag_list?: string[];
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const javaKeywords = [
  "abstract",
  "assert",
  "boolean",
  "break",
  "byte",
  "case",
  "catch",
  "char",
  "class",
  "continue",
  "default",
  "do",
  "double",
  "else",
  "enum",
  "extends",
  "final",
  "finally",
  "float",
  "for",
  "if",
  "implements",
  "import",
  "instanceof",
  "int",
  "interface",
  "long",
  "native",
  "new",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "short",
  "static",
  "strictfp",
  "super",
  "switch",
  "synchronized",
  "this",
  "throw",
  "throws",
  "transient",
  "try",
  "void",
  "volatile",
  "while",
];

const highlightJava = (code: string) => {
  const escaped = escapeHtml(code);
  const stringPattern = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g;
  const commentPattern = /(\/\*[\s\S]*?\*\/|\/\/.*?$)/gm;
  const numberPattern = /\b(-?(?:0x[a-fA-F0-9]+|\d+(?:\.\d+)?))\b/g;
  const keywordPattern = new RegExp(`\\b(${javaKeywords.join("|")})\\b`, "g");

  return escaped
    .replace(commentPattern, '<span class="token comment">$1</span>')
    .replace(stringPattern, '<span class="token string">$1</span>')
    .replace(numberPattern, '<span class="token number">$1</span>')
    .replace(keywordPattern, '<span class="token keyword">$1</span>');
};

const enhanceJavaBlocks = () => {
  if (typeof window === "undefined") return;

  const codeBlocks = document.querySelectorAll<HTMLElement>(
    ".article-content pre code"
  );

  codeBlocks.forEach((block) => {
    if (block.dataset.enhanced === "true") return;

    const language = block.className.toLowerCase();

    if (
      language.includes("java") ||
      language.includes("language-java") ||
      language.includes("lang-java")
    ) {
      const highlighted = highlightJava(block.textContent || "");

      block.innerHTML = highlighted;
      block.classList.add("java-highlighted");
      block.dataset.enhanced = "true";
    }
  });
};

const devtoUsername =
  import.meta.env.VITE_DEVTO_USERNAME || "ashifur_nahid_c0cbfcc7105";
const devtoApiKey = import.meta.env.VITE_DEVTO_API_KEY;
const devtoArticlesLimit =
  Number.parseInt(import.meta.env.VITE_DEVTO_ARTICLES_LIMIT || "", 10) || 6;

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [articleContent, setArticleContent] = useState<{
    html: string;
    meta?: ArticleDetails;
  }>({ html: "" });
  const [articleLoading, setArticleLoading] = useState(false);
  const [articleError, setArticleError] = useState<string | null>(null);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleImageFallback = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = articlePlaceholder;
  };

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);

      try {
        const url = devtoApiKey
          ? `https://dev.to/api/articles/me/published?per_page=${devtoArticlesLimit}`
          : `https://dev.to/api/articles?username=${devtoUsername}&per_page=${devtoArticlesLimit}`;

        const headers: HeadersInit = devtoApiKey
          ? {
              "api-key": devtoApiKey,
            }
          : {};

        const response = await fetch(url, { headers });

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
  }, []);

  const sanitizeArticleHtml = useCallback((html: string) => {
    if (typeof window === "undefined" || !html) return html;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    doc.querySelectorAll("script, style").forEach((el) => el.remove());
    doc.querySelectorAll("*").forEach((el) => {
      [...el.attributes].forEach((attr) => {
        if (attr.name.startsWith("on")) {
          el.removeAttribute(attr.name);
        }
      });
    });

    return doc.body.innerHTML;
  }, []);

  useEffect(() => {
    const fetchFullArticle = async () => {
      if (!activeArticle) return;

      setArticleLoading(true);
      setArticleError(null);
      setArticleContent({ html: "" });

      try {
        const response = await fetch(`https://dev.to/api/articles${activeArticle.path}`);

        if (!response.ok) {
          throw new Error(`Failed to load article (${response.status})`);
        }

        const data: ArticleDetails & { body_html?: string } = await response.json();

        setArticleContent({
          html: sanitizeArticleHtml(data.body_html || ""),
          meta: data,
        });
      } catch (error) {
        console.error("Error fetching article:", error);
        setArticleError("Unable to load this article right now. Please try again.");
      } finally {
        setArticleLoading(false);
      }
    };

    if (isModalOpen) {
      fetchFullArticle();
    }
  }, [activeArticle, isModalOpen, sanitizeArticleHtml]);

  useEffect(() => {
    if (!isModalOpen || articleLoading || !articleContent.html) return;

    enhanceJavaBlocks();
  }, [articleContent.html, articleLoading, isModalOpen]);

  const handleArticleOpen = (article: Article) => {
    setActiveArticle(article);
    setIsModalOpen(true);
  };

  const handleModalToggle = (open: boolean) => {
    setIsModalOpen(open);

    if (!open) {
      setActiveArticle(null);
      setArticleContent({ html: "" });
      setArticleError(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
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
              {articles.map((article, index) => {
                const imageSrc = article.cover_image || articlePlaceholder;

                return (
                  <Card
                    key={article.id}
                    className={`overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 flex flex-col ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={imageSrc}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={handleImageFallback}
                      />
                    </div>

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
                        <button className="gap-2" onClick={() => handleArticleOpen(article)}>
                          <ExternalLink className="h-4 w-4" />
                          Quick Read ({article.reading_time_minutes} min)
                        </button>
                      </Button>
                    </div>
                  </Card>
                );
              })}
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

          <Dialog open={isModalOpen} onOpenChange={handleModalToggle}>
            <DialogContent className="w-[calc(100vw-1.5rem)] sm:w-[calc(100vw-2.5rem)] max-w-4xl lg:max-w-5xl xl:max-w-6xl border border-white/10 bg-gradient-to-br from-background/95 via-background/80 to-muted/60 backdrop-blur-lg shadow-[0_20px_80px_-40px_rgba(0,0,0,0.65)] overflow-hidden p-4 sm:p-6 lg:p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-start gap-3">
                  <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner shadow-primary/30">
                    📰
                  </span>
                  <span className="leading-tight">
                    {activeArticle?.title || "Loading article..."}
                  </span>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                    {activeArticle?.reading_time_minutes} min read
                  </span>
                  {activeArticle?.tag_list?.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full bg-secondary/40">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <Separator className="bg-border/60" />
              </div>

              <ScrollArea
                key={activeArticle?.id || "article-modal"}
                className="max-h-[55vh] sm:max-h-[60vh] md:max-h-[65vh] pr-2 sm:pr-4"
              >
                {articleLoading ? (
                  <div className="space-y-3 animate-pulse">
                    <div className="h-6 w-3/4 rounded bg-muted" />
                    <div className="h-4 w-full rounded bg-muted" />
                    <div className="h-4 w-5/6 rounded bg-muted" />
                    <div className="h-96 w-full rounded bg-muted" />
                  </div>
                ) : articleError ? (
                  <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-destructive">
                    {articleError}
                  </div>
                ) : (
                  <div
                    className="article-content prose prose-neutral dark:prose-invert max-w-none leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: articleContent.html }}
                  />
                )}
              </ScrollArea>

              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <Button asChild variant="outline">
                  <a
                    href={activeArticle?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Continue on Dev.to
                  </a>
                </Button>

                {activeArticle?.published_at && (
                  <span className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(activeArticle.published_at)}
                  </span>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Blog;
