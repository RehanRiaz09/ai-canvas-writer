import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Brain, 
  Palette, 
  Globe, 
  Target, 
  Sparkles,
  FileText,
  MessageSquare,
  Camera
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Engine",
      description: "Powered by cutting-edge language models to create human-like, engaging content that resonates with your audience."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate high-quality content in seconds, not hours. Boost your productivity and never miss a deadline again."
    },
    {
      icon: Palette,
      title: "Brand Voice Matching",
      description: "Train our AI to match your unique brand voice and tone, ensuring consistent messaging across all content."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Create content in over 30 languages with native-level fluency and cultural awareness."
    },
    {
      icon: Target,
      title: "SEO Optimized",
      description: "Built-in SEO optimization ensures your content ranks higher and reaches more of your target audience."
    },
    {
      icon: FileText,
      title: "Multiple Content Types",
      description: "From blog posts to social media captions, product descriptions to email campaigns - we've got you covered."
    },
    {
      icon: MessageSquare,
      title: "Smart Collaboration",
      description: "Team features with real-time editing, comments, and approval workflows for seamless content creation."
    },
    {
      icon: Camera,
      title: "AI Image Generation",
      description: "Generate stunning, relevant images to accompany your content and enhance visual storytelling."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-ai-primary" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Create Better Content
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI-powered platform provides all the tools you need to create, 
            optimize, and scale your content marketing efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-ai-primary/20 rounded-full blur-md"></div>
                  <div className="relative bg-muted/50 rounded-full p-4">
                    <feature.icon className="h-8 w-8 text-ai-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};