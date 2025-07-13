import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ai-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-ai-primary" />
            <span className="text-sm font-medium">AI-Powered Content Generation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Create Amazing Content with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Magic
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into compelling content in seconds. Our advanced AI creates 
            blog posts, social media content, marketing copy, and more - all tailored to your brand voice.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg"
              onClick={() => navigate("/signup")}
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-glow"
            >
              Start Creating Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/generator")}
              className="border-border hover:bg-muted transition-all duration-300"
            >
              <Zap className="mr-2 h-5 w-5" />
              Try Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-wrap items-center justify-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-ai-primary" />
              <span className="text-sm">Advanced AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-ai-secondary" />
              <span className="text-sm">Creative Content</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-ai-accent" />
              <span className="text-sm">Lightning Fast</span>
            </div>
          </div>
        </div>

        {/* Floating Content Cards */}
        <div className="mt-16 relative">
          <div className="absolute top-0 left-1/4 transform -translate-x-1/2 animate-float">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card border border-border">
              <div className="w-32 h-4 bg-muted rounded mb-2"></div>
              <div className="w-24 h-3 bg-muted/70 rounded mb-1"></div>
              <div className="w-28 h-3 bg-muted/70 rounded"></div>
            </div>
          </div>
          <div className="absolute top-8 right-1/4 transform translate-x-1/2 animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card border border-border">
              <div className="w-28 h-4 bg-muted rounded mb-2"></div>
              <div className="w-32 h-3 bg-muted/70 rounded mb-1"></div>
              <div className="w-20 h-3 bg-muted/70 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};