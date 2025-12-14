// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/zg-hero.jpg";

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="max-w-4xl">
//           {/* <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
//             ZERO
//             <span className="block text-gym-accent">GRAVITY</span>
//           </h1> */}
//           <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
//             Experience fitness like never before. Defy limits, embrace excellence, 
//             and transform your body in our state-of-the-art facility.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button 
//               variant="gym" 
//               size="lg" 
//               className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
//             >
//               <a href="#enquire">Start Your Journey</a>
//             </Button>
//             <Button 
//               variant="gym-outline" 
//               size="lg" 
//               className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
//             >
//               <a href="#features">Explore Features</a>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/zg.jpg";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-end lg:items-end justify-center lg:justify-start overflow-hidden"
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl w-full px-6 lg:px-8 pb-16 lg:pb-20">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="
//             max-w-2xl 
//             mx-auto lg:mx-0 
//             text-center lg:text-left
//             backdrop-blur-xl bg-black/30 
//             rounded-2xl 
//             p-6 lg:p-8 
//             shadow-2xl
//           "
//         >
//           <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
//             Experience fitness like never before. Defy limits, embrace excellence,
//             and transform your body in our state-of-the-art facility.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <Button
//               variant="gym"
//               size="lg"
//               className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
//             >
//               <a href="#enquire">Start Your Journey</a>
//             </Button>

//             <Button
//               variant="gym-outline"
//               size="lg"
//               className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
//             >
//               <a href="#features">Explore Features</a>
//             </Button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
//         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/zg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen">
        {/* Card */}
        <div
  className="
    absolute 
    bottom-8 lg:bottom-12 
    left-1/2 lg:left-12 
    transform -translate-x-1/2 lg:translate-x-0
    max-w-xl
    backdrop-blur-xl bg-black/30
    rounded-xl
    p-5 lg:p-6
    shadow-2xl
    text-center lg:text-left
    animate-fade-up
  "
>
  <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed">
    Experience fitness like never before. Defy limits, embrace excellence,
    and transform your body in our state-of-the-art facility.
  </p>

  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
    <Button
      variant="gym"
      size="lg"
      className="text-base px-6 py-5 hover:scale-105 transition-transform duration-300"
    >
      <a href="#enquire">Start Your Journey</a>
    </Button>

    <Button
      variant="gym-outline"
      size="lg"
      className="text-base px-6 py-5 hover:scale-105 transition-transform duration-300"
    >
      <a href="#features">Explore Features</a>
    </Button>
  </div>
</div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


