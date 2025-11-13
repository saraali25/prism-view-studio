import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-prism-teal/20 via-prism-yellow/20 to-prism-orange/20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-prism-teal via-prism-yellow via-prism-orange to-prism-red animate-shimmer bg-[length:200%_auto]"></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-prism-teal rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-prism-orange rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-prism-yellow rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-prism-navy">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-prism-navy/80 font-medium">
            Join hundreds of students discovering the exciting world of coding and robotics with Prism Academy
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="group bg-prism-orange hover:bg-prism-orange/90 text-white font-bold shadow-lg hover:shadow-xl">
              Join Us Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-prism-navy text-prism-navy hover:bg-prism-navy hover:text-white font-bold">
              View Courses
            </Button>
          </div>
          <p className="text-sm text-prism-navy/70 font-medium">
            Free trial available • Flexible schedules • Expert instructors
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
