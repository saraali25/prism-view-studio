import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Bot, Brain } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "PROGRAMMING",
    description: "Learn to code with fun, interactive lessons. Build games, apps, and websites while mastering programming fundamentals.",
    color: "border-prism-orange",
    bgColor: "bg-prism-orange/10",
    iconColor: "text-prism-orange",
  },
  {
    icon: Bot,
    title: "ROBOTICS",
    description: "Build and program real robots! Explore engineering, electronics, and bring your creative ideas to life.",
    color: "border-prism-teal",
    bgColor: "bg-prism-teal/10",
    iconColor: "text-prism-teal",
  },
  {
    icon: Brain,
    title: "STRONG MIND",
    description: "Develop problem-solving skills, logical thinking, and creativity through engaging challenges and projects.",
    color: "border-prism-yellow",
    bgColor: "bg-prism-yellow/10",
    iconColor: "text-prism-yellow",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-prism-navy">
            Main Categories
          </h2>
          <p className="text-xl text-prism-navy/70 font-medium">
            Explore our exciting learning paths designed for young innovators
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-4 ${feature.color} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${feature.bgColor} group cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-32 h-32 mx-auto rounded-full border-4 ${feature.color} flex items-center justify-center mb-6 ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-16 h-16 ${feature.iconColor}`} strokeWidth={2.5} />
                </div>
                <CardTitle className="text-2xl font-bold text-prism-navy tracking-wide">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-prism-navy/70 font-medium leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
