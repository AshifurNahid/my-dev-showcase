import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Send, Copy, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ashifurnahid32@gmail.com");
      toast({
        title: "Email copied",
        description: "Address saved to your clipboard.",
        duration: 2500,
      });
    } catch (error) {
      console.error("Copy failed", error);
      toast({
        title: "Copy unavailable",
        description: "Please copy manually: ashifurnahid32@gmail.com",
        duration: 3000,
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashifurnahid32@gmail.com",
      href: "mailto:ashifurnahid32@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "AshifurNahid",
      href: "https://github.com/AshifurNahid",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ashifur Nahid",
      href: "https://www.linkedin.com/in/ashifurnahid/",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Single-column on mobile, split on desktop. Drop a note about opportunities, collaborations, or system design chats.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <Card className="p-6 md:p-8 shadow-md border border-border/60 bg-card/70 max-w-2xl w-full justify-self-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or team..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="resize-none"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" size="lg" className="gap-2 shadow-sm hover:-translate-y-0.5">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="lg"
                    className="gap-2 border border-dashed"
                    onClick={handleCopyEmail}
                  >
                    <Copy className="h-5 w-5" />
                    Copy email
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <Button variant="outline" size="sm" asChild className="gap-2 rounded-full">
                    <a href="https://github.com/AshifurNahid" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="gap-2 rounded-full">
                    <a href="https://www.linkedin.com/in/ashifurnahid/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild className="gap-2 rounded-full">
                    <a href="mailto:ashifurnahid32@gmail.com" className="gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Preferred contact
                    </a>
                  </Button>
                </div>
              </form>
            </Card>

            <div className="space-y-6 w-full">
              <Card className="p-6 md:p-8 border border-border/60 bg-card/70 shadow-md lg:sticky lg:top-28">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Open to Opportunities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Open to freelance projects, platform teams, and collaborations focused on resilient backend services. If you
                  need fast iteration without sacrificing reliability, let's talk.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
