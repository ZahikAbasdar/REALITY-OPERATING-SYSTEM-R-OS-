import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Cpu, Brain, Layers, Zap, Cloud, Network, Box } from "lucide-react";

const Architecture = () => {
  const architectureLayers = [
    {
      icon: Database,
      title: "Reality Data Kernel",
      description: "Core data processing engine handling multi-dimensional reality streams with microsecond latency",
      color: "text-neon-cyan"
    },
    {
      icon: Cpu,
      title: "Multi-Universe Simulation Engine",
      description: "Parallel universe processing with quantum-inspired computational frameworks",
      color: "text-neon-blue"
    },
    {
      icon: Brain,
      title: "AGI Micro-Core",
      description: "Autonomous learning and decision-making using advanced neural architectures",
      color: "text-neon-purple"
    },
    {
      icon: Box,
      title: "Digital Twin Generator",
      description: "Real-time creation of virtual replicas for any physical or digital entity",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Quantum-Inspired Decision Layer",
      description: "Optimization algorithms leveraging quantum computing principles",
      color: "text-accent"
    },
    {
      icon: Cloud,
      title: "Resource Optimization Brain",
      description: "Intelligent resource allocation across distributed computing infrastructure",
      color: "text-neon-cyan"
    },
    {
      icon: Network,
      title: "R-OS Universal API",
      description: "Seamless integration layer for external systems and frameworks",
      color: "text-neon-blue"
    },
    {
      icon: Layers,
      title: "3D Cosmic Dashboard",
      description: "Immersive visualization interface for complex reality simulations",
      color: "text-neon-purple"
    }
  ];

  return (
    <section id="architecture" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-neon-purple to-accent bg-clip-text text-transparent">
            System Architecture
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Multi-layer architecture designed for universe-scale computational reality processing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {architectureLayers.map((layer, index) => (
            <Card 
              key={index}
              className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <layer.icon className={`w-6 h-6 ${layer.color}`} />
                </div>
                <CardTitle className="text-lg text-primary">{layer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground leading-relaxed">
                  {layer.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Architecture Flow</CardTitle>
              <CardDescription>Data processing pipeline from input to visualization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {["Input Layer", "Processing Core", "Decision Engine", "Output Interface"].map((stage, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold">
                        {index + 1}
                      </div>
                      <p className="mt-2 text-sm font-medium text-primary">{stage}</p>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-primary to-accent" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
