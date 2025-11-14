import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const techCategories = [
    {
      category: "AI/ML & Neural Networks",
      technologies: [
        "PyTorch", "TensorFlow", "Transformers", "LangChain", "OpenAI GPT-5", 
        "Anthropic Claude", "LLaMA", "Stable Diffusion", "Reinforcement Learning"
      ],
      color: "from-neon-cyan to-neon-blue"
    },
    {
      category: "Cloud & Infrastructure",
      technologies: [
        "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform",
        "Apache Kafka", "Redis", "Elasticsearch", "Prometheus"
      ],
      color: "from-neon-blue to-neon-purple"
    },
    {
      category: "Backend & APIs",
      technologies: [
        "Python", "Node.js", "FastAPI", "GraphQL", "REST", "gRPC",
        "WebSocket", "PostgreSQL", "MongoDB", "Apache Spark"
      ],
      color: "from-neon-purple to-accent"
    },
    {
      category: "Frontend & Visualization",
      technologies: [
        "React", "Next.js", "TypeScript", "Three.js", "D3.js", "WebGL",
        "Tailwind CSS", "Framer Motion", "Recharts", "Plotly"
      ],
      color: "from-accent to-primary"
    },
    {
      category: "Quantum & Simulation",
      technologies: [
        "Qiskit", "Cirq", "Unity", "Unreal Engine", "NVIDIA Omniverse",
        "Blender Python API", "OpenCV", "CUDA", "TensorRT"
      ],
      color: "from-primary to-neon-cyan"
    }
  ];

  const databases = [
    { name: "PostgreSQL", type: "Primary Database" },
    { name: "MongoDB", type: "Document Store" },
    { name: "Redis", type: "Cache Layer" },
    { name: "Neo4j", type: "Graph Database" },
    { name: "TimescaleDB", type: "Time-Series Data" },
    { name: "Pinecone", type: "Vector Database" }
  ];

  return (
    <section id="tech" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-neon-purple to-accent bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cutting-edge technologies powering the reality operating system
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className={`text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Database Architecture</CardTitle>
              <CardDescription>Multi-database approach for optimal data management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {databases.map((db, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <h4 className="font-semibold text-primary mb-1">{db.name}</h4>
                    <p className="text-sm text-muted-foreground">{db.type}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Development & Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Development Tools</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Git & GitHub for version control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>VS Code, PyCharm for IDEs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Jest, Pytest for testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>GitHub Actions for CI/CD</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Deployment Pipeline</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Docker containerization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Kubernetes orchestration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Multi-cloud deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Auto-scaling & monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
