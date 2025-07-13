import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Sparkles } from "lucide-react";

export const About = () => {
  const stats = [
    { number: "50K+", label: "Happy Users", icon: Users },
    { number: "1M+", label: "Content Pieces Created", icon: Target },
    { number: "98%", label: "Customer Satisfaction", icon: Award },
    { number: "24/7", label: "AI Availability", icon: Sparkles },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-muted/30 rounded-full px-4 py-2 mb-4">
                <Sparkles className="h-4 w-4 text-ai-primary" />
                <span className="text-sm font-medium">About Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Revolutionizing Content Creation with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Innovation
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 2023, AIContentPro emerged from a simple vision: make high-quality content 
                creation accessible to everyone. Our team of AI researchers, content strategists, and 
                engineers has built the most advanced content generation platform available today.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe that creativity shouldn't be limited by time constraints or writer's block. 
                Our AI understands context, tone, and audience to deliver content that truly connects 
                with your readers.
              </p>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Learn More About Our Mission
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-ai-primary/20 rounded-full blur-md"></div>
                    <div className="relative bg-muted/50 rounded-full p-3">
                      <stat.icon className="h-6 w-6 text-ai-primary mx-auto" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                To democratize content creation by providing powerful AI tools that help businesses 
                and individuals tell their stories more effectively, efficiently, and authentically.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                A world where every great idea can be transformed into compelling content, 
                where creativity knows no bounds, and where AI amplifies human imagination.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};