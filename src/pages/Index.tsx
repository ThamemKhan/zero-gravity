import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import EnquiryForm from "@/components/EnquiryForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Amenities />
      <Features />
      <Plans />
      <EnquiryForm />
    </div>
  );
};

export default Index;
