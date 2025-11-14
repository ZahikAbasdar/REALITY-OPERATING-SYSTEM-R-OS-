import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Lightbulb, GitBranch, Shield } from "lucide-react";

const ProjectOverview = () => {
  return (
    <section id="overview" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-neon-purple to-accent bg-clip-text text-transparent">
            Project Overview
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive reality operating system designed to revolutionize computational reality
          </p>
        </div>

        <Tabs defaultValue="abstract" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="abstract">Abstract</TabsTrigger>
            <TabsTrigger value="problem">Problem</TabsTrigger>
            <TabsTrigger value="objectives">Objectives</TabsTrigger>
            <TabsTrigger value="scope">Scope</TabsTrigger>
          </TabsList>
          
          <TabsContent value="abstract" className="animate-fade-in">
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Lightbulb className="w-5 h-5" />
                  Abstract
                </CardTitle>
                <CardDescription>Scientific Overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground leading-relaxed">
                <p>
                  R-OS (Reality Operating System) represents a paradigm shift in computational reality frameworks, 
                  integrating quantum-inspired decision mechanisms with artificial general intelligence micro-cores. 
                  This system establishes a multi-dimensional simulation environment capable of processing reality-level 
                  data streams through a unified kernel architecture.
                </p>
                <p>
                  The platform leverages advanced neural architectures for digital twin generation, resource optimization, 
                  and universal API interfacing. By combining cutting-edge machine learning models with cloud-native 
                  infrastructure, R-OS enables unprecedented levels of computational reality manipulation and analysis. 
                  The 3D cosmic dashboard provides intuitive visualization of complex multi-universe simulations, making 
                  advanced reality computation accessible to researchers, developers, and enterprise applications.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="problem" className="animate-fade-in">
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Target className="w-5 h-5" />
                  Problem Statement
                </CardTitle>
                <CardDescription>Real-World Impact Analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground leading-relaxed">
                <p className="font-semibold text-lg text-primary">
                  Current computational systems lack the capability to process and simulate reality-level complexity 
                  in unified, scalable frameworks.
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2">🌍 Global Impact</h4>
                    <p className="text-sm">
                      Enterprises lose $2.8 trillion annually due to inefficient decision-making systems that cannot 
                      process multi-dimensional reality data streams
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2">🔬 Research Limitations</h4>
                    <p className="text-sm">
                      Scientific research is constrained by fragmented simulation tools that cannot interoperate 
                      across quantum, classical, and AGI paradigms
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2">⚡ Performance Gap</h4>
                    <p className="text-sm">
                      Existing systems fail to provide real-time reality processing with quantum-inspired optimization, 
                      limiting innovation potential
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="objectives" className="animate-fade-in">
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <GitBranch className="w-5 h-5" />
                  Objectives
                </CardTitle>
                <CardDescription>Innovative & Technical Goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Reality Data Kernel",
                      desc: "Develop a unified kernel for processing multi-dimensional reality data streams with microsecond latency"
                    },
                    {
                      title: "AGI Integration",
                      desc: "Integrate artificial general intelligence micro-cores for autonomous decision-making and learning"
                    },
                    {
                      title: "Multi-Universe Simulation",
                      desc: "Create scalable simulation engines capable of processing parallel universe scenarios"
                    },
                    {
                      title: "Quantum Decision Layer",
                      desc: "Implement quantum-inspired algorithms for optimization and resource allocation"
                    },
                    {
                      title: "Digital Twin Generation",
                      desc: "Enable real-time digital twin creation for any physical or virtual entity"
                    },
                    {
                      title: "Universal API",
                      desc: "Provide seamless integration capabilities with existing and future computational frameworks"
                    }
                  ].map((objective, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      <h4 className="font-semibold text-primary mb-2">{objective.title}</h4>
                      <p className="text-sm text-foreground">{objective.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="scope" className="animate-fade-in">
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Shield className="w-5 h-5" />
                  Scopes & Limitations
                </CardTitle>
                <CardDescription>Project Boundaries & Constraints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3 text-lg">📊 Project Scope</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Enterprise-grade reality processing for Fortune 500 companies and research institutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Real-time multi-universe simulation with up to 1 million concurrent entities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Integration with major cloud providers (AWS, Azure, GCP) and on-premise infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Support for 50+ programming languages and computational frameworks</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-3 text-lg">⚠️ Limitations</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Quantum hardware integration limited to available quantum computing platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>AGI capabilities constrained by current machine learning model limitations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Initial deployment requires minimum 256GB RAM and specialized GPU infrastructure</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectOverview;
