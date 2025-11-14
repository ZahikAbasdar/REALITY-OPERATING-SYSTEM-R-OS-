import { Button } from "@/components/ui/button";
import { Rocket, Code, Cpu, Layers, User } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "R-OS", icon: Rocket },
    { id: "overview", label: "Overview", icon: Code },
    { id: "architecture", label: "Architecture", icon: Cpu },
    { id: "tech", label: "Tech Stack", icon: Layers },
    { id: "profile", label: "Profile", icon: User },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="w-6 h-6 text-primary animate-pulse-glow" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-neon-blue to-accent bg-clip-text text-transparent">
            R-OS
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              onClick={() => scrollToSection(item.id)}
              className="gap-2 transition-all duration-300 hover:text-primary"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
