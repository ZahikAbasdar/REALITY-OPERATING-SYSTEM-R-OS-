import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Instagram, Youtube, Mail, MapPin, Briefcase, GraduationCap } from "lucide-react";

const ProfileSection = () => {
  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/zahik-abas-2646572a4/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Github, url: "https://github.com/ZahikAbasdar", label: "GitHub", color: "hover:text-purple-400" },
    { icon: Instagram, url: "https://www.instagram.com/zaaaahikabaaa", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Youtube, url: "https://youtube.com/@inspace-08", label: "YouTube", color: "hover:text-red-400" }
  ];

  const skills = [
    "Python", "SQL", "JavaScript", "React", "Next.js", "Rust",
    "Power BI", "Cloud Computing", "AI/ML", "LLMs", "API Development",
    "Prompt Engineering", "Data Analysis", "Full-Stack Development"
  ];

  const bios = [
    {
      platform: "LinkedIn Summary",
      content: "Data Analyst | Software Engineer | UI/UX Designer | Creative Strategist with 2+ years at Amazon. Currently exploring GenAI, LLMs, Cloud & DevOps. Passionate about building next-gen tech solutions and turning data into actionable insights. BTech CSE at PCTE Group of Institutes, Ludhiana."
    },
    {
      platform: "GitHub Profile",
      content: "🚀 Software Engineer & Data Analyst | 🎨 UI/UX Designer | ☁️ Cloud & AI Enthusiast\n\nBuilding innovative solutions with Python, React, Next.js & Rust. Exploring the intersection of AI, cloud computing, and full-stack development. 2 years @ Amazon. Currently diving deep into GenAI & LLMs.\n\n📍 Sopore, J&K, India | 🎓 BTech CSE @ PCTE Ludhiana"
    },
    {
      platform: "Instagram Bio",
      content: "Tech Explorer | Data Analyst | Software Engineer\n🎨 UI/UX Designer | 2Y @ Amazon\n📍 Sopore, J&K 🇮🇳\n🎓 BTech CSE @PCTE Ludhiana"
    },
    {
      platform: "Universal Tagline",
      content: "Transforming data into insights, code into innovation"
    }
  ];

  return (
    <section id="profile" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-neon-purple to-accent bg-clip-text text-transparent">
            Developer Profile
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the creator behind R-OS
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Profile Card */}
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-3xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Zahik Abas
                  </CardTitle>
                  <CardDescription className="text-lg text-foreground">
                    Data Analyst | Software Engineer | UI/UX Designer | Creative Strategist
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={`border-primary/40 ${social.color} transition-all duration-300 hover:scale-110`}
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-xs text-muted-foreground">Sopore, J&K, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Experience</p>
                    <p className="text-xs text-muted-foreground">Amazon - 2 Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Education</p>
                    <p className="text-xs text-muted-foreground">BTech CSE, PCTE Ludhiana</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-3">Skills & Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-3">Current Focus</h4>
                <p className="text-foreground leading-relaxed">
                  Exploring cutting-edge technologies in GenAI, Large Language Models, Cloud Computing, and DevOps. 
                  Building innovative solutions that bridge the gap between data analytics, AI, and full-stack development. 
                  Passionate about prompt engineering and creating intuitive user experiences.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bios Card */}
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Professional Bios</CardTitle>
              <CardDescription>Ready-to-use profiles for various platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {bios.map((bio, index) => (
                <div 
                  key={index}
                  className="p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {bio.platform}
                  </h4>
                  <p className="text-sm text-foreground whitespace-pre-line leading-relaxed">
                    {bio.content}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Let's Connect</CardTitle>
              <CardDescription>Open to collaboration and opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="gap-2 border-primary/40 hover:bg-primary/10 transition-all duration-300"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <social.icon className="w-4 h-4" />
                    {social.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
