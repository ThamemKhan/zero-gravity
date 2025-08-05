import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Waves, Zap, Users, Clock, Utensils } from "lucide-react";
import equipmentImage from "@/assets/gym-equipment.jpg";
import cardioImage from "@/assets/gym-cardio.jpg";
import loungeImage from "@/assets/gym-lounge.jpg";

const Amenities = () => {
  const amenities = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Premium Equipment",
      description: "State-of-the-art machines and free weights from top brands",
      image: equipmentImage
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Hydrotherapy Pool",
      description: "Recovery and relaxation in our temperature-controlled pool",
      image: cardioImage
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High-Intensity Zones",
      description: "Dedicated areas for HIIT, functional training, and more",
      image: loungeImage
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personal Training",
      description: "Expert trainers to guide your fitness journey",
      image: equipmentImage
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Access",
      description: "Train on your schedule with round-the-clock availability",
      image: cardioImage
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Nutrition Lounge",
      description: "Healthy refreshments and supplement bar",
      image: loungeImage
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Premium Amenities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every detail designed to elevate your fitness experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 bg-card border-border/50 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={amenity.image} 
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {amenity.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground">
                  {amenity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;