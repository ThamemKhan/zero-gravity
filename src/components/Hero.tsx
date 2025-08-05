import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gym-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            ZERO
            <span className="block text-gym-accent">GRAVITY</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Experience fitness like never before. Defy limits, embrace excellence, 
            and transform your body in our state-of-the-art facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="gym" 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
            >
              <a href="#enquire">Start Your Journey</a>
            </Button>
            <Button 
              variant="gym-outline" 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
            >
              <a href="#features">Explore Features</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;