import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8 animate-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Universe-Level Innovation</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-neon-blue to-accent bg-clip-text text-transparent animate-float">
            R-OS
          </h1>
          
          <p className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            The Reality Operating System
          </p>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A futuristic, world-class platform merging quantum-inspired decision layers, 
            AGI micro-cores, and multi-universe simulation engines into a unified reality framework
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-primary to-neon-blue hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
            >
              Explore Project
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              View Documentation
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "AGI Integration", value: "Advanced" },
              { label: "Simulation Engine", value: "Multi-Universe" },
              { label: "Decision Layer", value: "Quantum-Inspired" },
              { label: "Grade Level", value: "IIT/MIT/NASA" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
