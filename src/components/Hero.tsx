import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-prism.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-prism-teal/20 via-prism-yellow/20 to-prism-orange/20">
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 Q150,60 300,30 T600,30 T900,30 T1200,30 L1200,120 L0,120 Z" fill="hsl(var(--prism-teal))" opacity="0.3"/>
          <path d="M0,20 Q150,80 300,50 T600,50 T900,50 T1200,50 L1200,120 L0,120 Z" fill="hsl(var(--prism-yellow))" opacity="0.3"/>
          <path d="M0,40 Q150,100 300,70 T600,70 T900,70 T1200,70 L1200,120 L0,120 Z" fill="hsl(var(--prism-orange))" opacity="0.3"/>
        </svg>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-prism-teal/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-prism-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-prism-yellow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-prism-orange shadow-lg">
              <Sparkles className="w-4 h-4 text-prism-orange" />
              <span className="text-sm font-bold text-prism-navy">Learn • Code • Create</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-prism-navy">
              See the World Through{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-prism-orange via-prism-yellow to-prism-teal animate-shimmer bg-[length:200%_auto]">
                Prism
              </span>
            </h1>
            
            <p className="text-xl text-prism-navy/80 max-w-lg font-medium">
              Empowering young minds through coding, robotics, and creative thinking. Join the future of learning today!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group bg-prism-orange hover:bg-prism-orange/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-prism-navy text-prism-navy hover:bg-prism-navy hover:text-white font-bold">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Prism Academy - Learn coding, robotics and creative thinking" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-prism-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating geometric shapes */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-prism-red rotate-45 animate-float opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-prism-teal rounded-full animate-float opacity-70" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-prism-yellow rotate-12 animate-float opacity-70" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
