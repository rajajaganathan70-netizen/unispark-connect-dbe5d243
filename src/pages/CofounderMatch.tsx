import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, Code, Palette, TrendingUp, Mail, Linkedin } from "lucide-react";

const CofounderMatch = () => {
  const [showMatches, setShowMatches] = useState(false);

  const suggestedMatches = [
    {
      name: "Alex Kumar",
      skills: ["React", "Node.js", "Python"],
      experience: "2 years",
      interests: "AI, SaaS",
      availability: "15 hrs/week",
      icon: <Code className="h-5 w-5" />,
    },
    {
      name: "Maya Rodriguez",
      skills: ["UI/UX", "Figma", "Branding"],
      experience: "3 years",
      interests: "Fintech, EdTech",
      availability: "20 hrs/week",
      icon: <Palette className="h-5 w-5" />,
    },
    {
      name: "Jordan Lee",
      skills: ["Marketing", "Growth", "Analytics"],
      experience: "1 year",
      interests: "E-commerce, SaaS",
      availability: "10 hrs/week",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      name: "Taylor Smith",
      skills: ["Full Stack", "DevOps", "AWS"],
      experience: "4 years",
      interests: "HealthTech, AI",
      availability: "25 hrs/week",
      icon: <Code className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">
              Find Your <span className="gradient-text">Perfect Co-Founder</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with skilled students who share your passion and complement your abilities
            </p>
          </div>

          {/* Form Section */}
          <Card className="glass-card p-8 max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Your Skills (comma separated)</Label>
                <Input
                  id="skills"
                  placeholder="e.g., React, Python, UI/UX Design, Marketing"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-1 year)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability per week</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select hours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">5-10 hours</SelectItem>
                      <SelectItem value="10-20">10-20 hours</SelectItem>
                      <SelectItem value="20+">20+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Project Interest Areas</Label>
                <Input
                  id="interests"
                  placeholder="e.g., AI, Fintech, HealthTech, E-commerce"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="looking-for">What are you looking for in a co-founder?</Label>
                <Textarea
                  id="looking-for"
                  placeholder="Describe the skills, qualities, and commitment level you're seeking..."
                  rows={4}
                />
              </div>

              <Button
                type="button"
                className="w-full gradient-primary"
                size="lg"
                onClick={() => setShowMatches(true)}
              >
                <Users className="h-5 w-5 mr-2" />
                Find Matches
              </Button>
            </form>
          </Card>

          {/* Matches Section */}
          {showMatches && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Suggested Matches for You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {suggestedMatches.map((match, index) => (
                  <Card
                    key={index}
                    className="glass-card p-6 hover-lift"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground">
                        {match.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{match.name}</h3>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Skills: </span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {match.skills.map((skill, i) => (
                                <Badge key={i} variant="secondary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Experience: </span>
                            <span>{match.experience}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Interests: </span>
                            <span>{match.interests}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Availability: </span>
                            <span>{match.availability}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" className="gradient-primary">
                            <Mail className="h-4 w-4 mr-2" />
                            Connect
                          </Button>
                          <Button size="sm" variant="outline">
                            <Linkedin className="h-4 w-4 mr-2" />
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CofounderMatch;
