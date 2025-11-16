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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Upload, Heart, MessageCircle, Users } from "lucide-react";

const Ideas = () => {
  const [activeTab, setActiveTab] = useState("browse");

  const postedIdeas = [
    {
      title: "AI-Powered Study Buddy",
      author: "Sarah Chen",
      category: "AI/EdTech",
      problem: "Students struggle with personalized learning and time management",
      solution: "An AI app that creates custom study plans and quizzes based on learning style",
      skills: ["React Native", "Python", "ML"],
      likes: 24,
      comments: 8,
    },
    {
      title: "Campus Food Waste Tracker",
      author: "Mike Johnson",
      category: "Sustainability",
      problem: "Massive food waste in university cafeterias",
      solution: "Platform connecting excess food to students and local charities in real-time",
      skills: ["Mobile Dev", "Backend", "UI/UX"],
      likes: 18,
      comments: 5,
    },
    {
      title: "Peer-to-Peer Skill Exchange",
      author: "Priya Sharma",
      category: "Social/EdTech",
      problem: "Students have skills but lack professional experience",
      solution: "Platform where students teach each other skills and build portfolios",
      skills: ["Full Stack", "Video Integration", "Payment"],
      likes: 31,
      comments: 12,
    },
    {
      title: "Mental Health Check-in Bot",
      author: "Jordan Taylor",
      category: "HealthTech",
      problem: "Students don't seek help until mental health issues become severe",
      solution: "Daily check-in chatbot that provides resources and connects to counseling",
      skills: ["NLP", "React", "Database"],
      likes: 42,
      comments: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Startup Ideas</span> Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Share your vision, discover opportunities, and find teammates to build the future
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="browse">Browse Ideas</TabsTrigger>
              <TabsTrigger value="post">Post Your Idea</TabsTrigger>
            </TabsList>

            <TabsContent value="browse" className="space-y-6">
              <div className="flex gap-4 mb-6">
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="ai">AI/ML</SelectItem>
                    <SelectItem value="fintech">Fintech</SelectItem>
                    <SelectItem value="health">HealthTech</SelectItem>
                    <SelectItem value="edtech">EdTech</SelectItem>
                    <SelectItem value="social">Social Impact</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Search ideas..." className="flex-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {postedIdeas.map((idea, index) => (
                  <Card
                    key={index}
                    className="glass-card p-6 hover-lift animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="bg-secondary">{idea.category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {idea.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {idea.comments}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">by {idea.author}</p>

                    <div className="space-y-3 my-4 text-sm">
                      <div>
                        <span className="font-medium">Problem: </span>
                        <span className="text-muted-foreground">{idea.problem}</span>
                      </div>
                      <div>
                        <span className="font-medium">Solution: </span>
                        <span className="text-muted-foreground">{idea.solution}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-sm font-medium mb-2 block">Skills Needed:</span>
                      <div className="flex flex-wrap gap-2">
                        {idea.skills.map((skill, i) => (
                          <Badge key={i} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 gradient-primary">
                        <Users className="h-4 w-4 mr-2" />
                        Join Team
                      </Button>
                      <Button variant="outline">Contact</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="post">
              <Card className="glass-card p-8 max-w-3xl mx-auto animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Share Your Startup Idea</h2>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="idea-title">Idea Title</Label>
                    <Input
                      id="idea-title"
                      placeholder="Give your idea a catchy name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai">AI/ML</SelectItem>
                        <SelectItem value="fintech">Fintech</SelectItem>
                        <SelectItem value="health">HealthTech</SelectItem>
                        <SelectItem value="edtech">EdTech</SelectItem>
                        <SelectItem value="social">Social Impact</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="problem">Problem Statement</Label>
                    <Textarea
                      id="problem"
                      placeholder="What problem are you solving? Who faces this problem?"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="solution">Your Solution</Label>
                    <Textarea
                      id="solution"
                      placeholder="How does your idea solve the problem? What makes it unique?"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills-needed">Skills Needed (comma separated)</Label>
                    <Input
                      id="skills-needed"
                      placeholder="e.g., React Developer, UI/UX Designer, Marketing Expert"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pitch-video">Pitch Video (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Upload a video pitch (Max 5MB)
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full gradient-primary" size="lg">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    Post Idea
                  </Button>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ideas;
