import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProjectOverview from "@/components/sections/ProjectOverview";
import Architecture from "@/components/sections/Architecture";
import TechStack from "@/components/sections/TechStack";
import ProfileSection from "@/components/sections/ProfileSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-cosmic-bg overflow-x-hidden">
      {/* Cosmic background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-cosmic-bg via-cosmic-surface to-cosmic-bg pointer-events-none" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none" />
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <HeroSection />
        <ProjectOverview />
        <Architecture />
        <TechStack />
        <ProfileSection />
      </main>
    </div>
  );
};

export default Index;
