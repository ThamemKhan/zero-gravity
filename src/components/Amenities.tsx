import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Waves, Zap, Users, Clock, Utensils } from "lucide-react";
import equipmentImage from "@/assets/gym-equipment.jpg";
import cardioImage from "@/assets/gym-cardio.jpg";
import loungeImage from "@/assets/gym-lounge.jpg";
import posingRoom from "@/assets/posing-room.jpg"
import steamImage from "@/assets/steam-room.jpg";
import vendingImage from "@/assets/vending-machine.jpg";
import powerlifting from "@/assets/power-lifting.jpg"
import equipments1 from "@/assets/equipments1.jpg";
import customequipment from "@/assets/custom-equipment.jpg";
import personalTraining from "@/assets/personal-training.jpg";
const Amenities = () => {

//   const amenities = [
//   {
//     icon: <Users className="w-8 h-8" />,
//     title: "Personal Training",
//     description: "Work one-on-one with certified trainers who create customized workout plans tailored to your goals.",
//     image: equipmentImage
//   }, {
//     icon: <Zap className="w-8 h-8" />,
//     title: "Customised Premium Equipment",
//     description: "Experience one-of-a-kind, specially engineered machines available exclusively at our gym—unique in the entire city.",
//     image: equipmentImage
//   },
//   {
//     icon: <Zap className="w-8 h-8" />, // You can replace with your preferred icon
//     title: "High-Intensity Zones",
//     description: "Push your limits in dedicated HIIT and functional training zones built for power, speed, and endurance.",
//     image: loungeImage
//   },
//  {
//     icon: <Clock className="w-8 h-8" />, // or any icon you prefer
//     title: "Dedicated Posing Room",
//     description: "A well-lit, mirror-lined posing studio perfect for bodybuilders, competitors, and progress tracking.",
//     image: loungeImage
//   },
//   {
//     icon: <Clock className="w-8 h-8" />,
//     title: "Open 365 Days",
//     description: "Enjoy uninterrupted access to the facility all year long—train on your schedule, anytime.",
//     image: cardioImage
//   },
 
//   {
//     icon: <Waves className="w-8 h-8" />, // can replace with Steam icon if available
//     title: "Steam & Recovery Facilities",
//     description: "Accelerate your post-workout recovery with steam rooms and dedicated relaxation amenities.",
//     image: loungeImage
//   }
// ];

const amenities = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Biomechanically Engineered Equipment",
    description:
      "Train on world-class, biomechanically engineered machines designed for precision movement, safety, and elite performance.",
    image: customequipment
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Personal Training",
    description:
      "One-on-one coaching with certified trainers offering personalized programs aligned with your fitness goals.",
    image: personalTraining
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Open 365 Days",
    description:
      "Uninterrupted access all year round—train anytime with complete flexibility and consistency.",
    image: equipments1
  },
  
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Hi-Rocks & Powerlifting Facility",
    description:
      "A Hi-Rocks–equipped training environment with a dedicated powerlifting setup for strength, endurance, and competitive athletes.",
    image: powerlifting
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Dedicated Professional Posing Room",
    description:
      "A professional, mirror-lined posing studio designed for bodybuilders, athletes, and physique progress assessment.",
    image: posingRoom
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Steam & Red Light Recovery",
    description:
      "Recover faster with steam therapy integrated with red-light therapy to enhance muscle repair, circulation, and relaxation.",
    image: steamImage
  },
  
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Nutrition Vending Station",
    description:
      "Smart vending machines stocked with energy drinks, pre-workout fuel, and post-workout protein snacks for on-demand nutrition.",
    image: vendingImage
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