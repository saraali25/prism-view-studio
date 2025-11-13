const Spectrum = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              A Full Spectrum of Possibilities
            </h2>
            <p className="text-xl text-muted-foreground">
              From data collection to insights, we cover every wavelength of your needs
            </p>
          </div>

          {/* Spectrum visualization */}
          <div className="relative h-32 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-spectrum-red via-spectrum-yellow via-spectrum-green via-spectrum-cyan via-spectrum-blue to-spectrum-purple"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full animate-float opacity-60"
                  style={{
                    left: `${(i + 1) * 12}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${4 + i}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "< 100ms", label: "Response Time" },
              { value: "10M+", label: "Data Points/sec" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-spectrum-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spectrum;
