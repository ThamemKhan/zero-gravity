import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "24/7 Gym Access",
        "Basic Equipment Use",
        "Locker Room Access",
        "Mobile App Access",
        "Community Support"
      ],
      popular: false,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Elite",
      price: "$89",
      period: "/month",
      description: "For serious athletes who demand the best",
      features: [
        "Everything in Starter",
        "Personal Training (2x/month)",
        "Group Classes Unlimited",
        "Nutrition Consultation",
        "Priority Equipment Access",
        "Recovery Zone Access"
      ],
      popular: true,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Zero Gravity",
      price: "$149",
      period: "/month",
      description: "Ultimate luxury fitness experience",
      features: [
        "Everything in Elite",
        "Personal Training (8x/month)",
        "Private Training Room",
        "Spa & Wellness Access",
        "Concierge Service",
        "Guest Passes (4x/month)",
        "Premium Supplements"
      ],
      popular: false,
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <section id="plans" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Membership Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your path to greatness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-gym-primary/50 shadow-2xl shadow-gym-primary/20' 
                  : 'border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gym-primary to-gym-secondary py-2">
                  <p className="text-center text-gym-dark font-semibold text-sm">
                    MOST POPULAR
                  </p>
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gym-secondary/20 rounded-full mb-4 text-gym-primary">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-gym-primary/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-gym-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.popular ? "gym" : "gym-outline"} 
                  className="w-full"
                  size="lg"
                >
                  <a href="#enquire">Choose {plan.name}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;