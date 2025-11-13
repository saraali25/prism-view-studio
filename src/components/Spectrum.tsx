const Spectrum = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-prism-light-bg to-white">
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-prism-red rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-prism-teal rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-prism-orange rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-prism-navy">
              Why Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-prism-orange via-prism-yellow to-prism-teal animate-shimmer bg-[length:200%_auto]">
                Prism Academy
              </span>
              ?
            </h2>
            <p className="text-xl text-prism-navy/70 font-medium">
              Building tomorrow's innovators, one lesson at a time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-2 p-8 rounded-2xl bg-white border-4 border-prism-teal hover:border-prism-teal/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-5xl font-bold text-prism-teal">500+</div>
              <div className="text-base text-prism-navy font-semibold">Happy Students</div>
            </div>
            <div className="space-y-2 p-8 rounded-2xl bg-white border-4 border-prism-orange hover:border-prism-orange/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-5xl font-bold text-prism-orange">50+</div>
              <div className="text-base text-prism-navy font-semibold">Expert Instructors</div>
            </div>
            <div className="space-y-2 p-8 rounded-2xl bg-white border-4 border-prism-yellow hover:border-prism-yellow/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-5xl font-bold text-prism-yellow">100+</div>
              <div className="text-base text-prism-navy font-semibold">Courses Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spectrum;
