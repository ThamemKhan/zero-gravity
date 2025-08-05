import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Shield, Trophy, Heart, Brain, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Smart Technology",
      description: "App-integrated equipment tracking your progress automatically",
      highlight: "AI-Powered"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Safety First",
      description: "Advanced safety protocols and emergency response systems",
      highlight: "Certified Safe"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Competition Ready",
      description: "Professional-grade equipment used by athletes worldwide",
      highlight: "Pro Standard"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Health Monitoring",
      description: "Real-time biometric tracking and health insights",
      highlight: "Health Tech"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Mind-Body Wellness",
      description: "Meditation zones and mental health support programs",
      highlight: "Holistic"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Goal Achievement",
      description: "Personalized workout plans with measurable results",
      highlight: "Results Driven"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Advanced Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technology meets fitness in perfect harmony
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-card border-border/50 hover:shadow-xl transition-all duration-500"
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 bg-gym-primary text-gym-dark px-3 py-1 rounded-full text-xs font-semibold">
                {feature.highlight}
              </div>
              
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gym-secondary/20 rounded-full mb-6 text-gym-primary group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gym-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;