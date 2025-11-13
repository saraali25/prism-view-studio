import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-spectrum-cyan/10 to-spectrum-purple/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-spectrum-red via-spectrum-yellow via-spectrum-green via-spectrum-cyan via-spectrum-blue to-spectrum-purple animate-shimmer bg-[length:200%_auto]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to See Things Differently?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of teams using Prism to transform their data into beautiful insights
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="group bg-primary hover:bg-primary/90">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
