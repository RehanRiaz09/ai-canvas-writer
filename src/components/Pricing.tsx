import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Crown, Rocket } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out our AI content generation",
      icon: Sparkles,
      features: [
        "5,000 words per month",
        "Basic templates",
        "Email support",
        "Standard AI model",
        "Basic export options"
      ],
      buttonText: "Get Started",
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for content creators and small businesses",
      icon: Crown,
      features: [
        "50,000 words per month",
        "All premium templates",
        "Priority support",
        "Advanced AI model",
        "Team collaboration",
        "Custom brand voice",
        "SEO optimization",
        "Advanced export options"
      ],
      buttonText: "Start Free Trial",
      popular: true,
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large teams and organizations",
      icon: Rocket,
      features: [
        "Unlimited words",
        "Custom templates",
        "24/7 phone support",
        "Latest AI models",
        "Advanced team features",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Training sessions"
      ],
      buttonText: "Contact Sales",
      popular: false,
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-4">
            <Crown className="h-4 w-4 text-ai-primary" />
            <span className="text-sm font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Start creating amazing content today. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border-border transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? "ring-2 ring-ai-primary shadow-glow scale-105" 
                  : "hover:shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 relative">
                  <div className={`absolute inset-0 rounded-full blur-md ${
                    plan.popular ? "bg-ai-primary/30" : "bg-ai-primary/20"
                  }`}></div>
                  <div className="relative bg-muted/50 rounded-full p-4">
                    <plan.icon className={`h-8 w-8 ${
                      plan.popular ? "text-ai-primary" : "text-ai-primary"
                    }`} />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-ai-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-primary hover:opacity-90" 
                      : "border-border hover:bg-muted"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};