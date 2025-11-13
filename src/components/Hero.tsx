import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-prism.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spectrum-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-spectrum-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-spectrum-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Transform Your Vision</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              See the World Through{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-spectrum-purple via-spectrum-cyan to-spectrum-blue animate-shimmer bg-[length:200%_auto]">
                Prism
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Break through complexity and discover clarity. Prism transforms scattered data into a brilliant spectrum of insights.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Prism light spectrum visualization" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-spectrum-purple rounded-2xl rotate-12 animate-float opacity-50 blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-spectrum-cyan rounded-2xl -rotate-12 animate-float opacity-50 blur-sm" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
