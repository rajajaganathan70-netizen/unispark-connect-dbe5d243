import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Mail, Linkedin, TrendingUp, DollarSign } from "lucide-react";

const Investors = () => {
  const investors = [
    {
      name: "Sarah Mitchell",
      firm: "Campus Ventures",
      sectors: ["AI/ML", "SaaS", "EdTech"],
      stage: "Pre-seed, Seed",
      tickets: "$50K - $500K",
      focus: "Early-stage campus startups",
    },
    {
      name: "David Chen",
      firm: "Innovation Capital",
      sectors: ["Fintech", "B2B SaaS", "API"],
      stage: "Seed, Series A",
      tickets: "$250K - $2M",
      focus: "Technical founders",
    },
    {
      name: "Maria Rodriguez",
      firm: "Health Ventures Fund",
      sectors: ["HealthTech", "BioTech", "Wellness"],
      stage: "Pre-seed, Seed",
      tickets: "$100K - $750K",
      focus: "Medical innovation",
    },
    {
      name: "James Wilson",
      firm: "Green Future VC",
      sectors: ["CleanTech", "Agriculture", "Sustainability"],
      stage: "Seed, Series A",
      tickets: "$500K - $3M",
      focus: "Climate solutions",
    },
    {
      name: "Lisa Park",
      firm: "Student Founders Fund",
      sectors: ["All sectors"],
      stage: "Pre-seed",
      tickets: "$25K - $150K",
      focus: "First-time founders",
    },
    {
      name: "Michael Brown",
      firm: "Tech Accelerator Partners",
      sectors: ["AI", "Crypto", "Web3"],
      stage: "Seed",
      tickets: "$200K - $1M",
      focus: "Emerging tech",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">
              Connect with <span className="gradient-text">Investors</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet investors actively seeking to fund innovative campus startups
            </p>
          </div>

          <Tabs defaultValue="browse" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="browse">Browse Investors</TabsTrigger>
              <TabsTrigger value="pitch">Submit Pitch</TabsTrigger>
            </TabsList>

            <TabsContent value="browse" className="space-y-6">
              <div className="flex gap-4 mb-6">
                <Input placeholder="Search by sector, stage, or name..." className="flex-1" />
                <Button variant="outline">Filter</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {investors.map((investor, index) => (
                  <Card
                    key={index}
                    className="glass-card p-6 hover-lift animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Briefcase className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{investor.name}</h3>
                        <p className="text-sm text-muted-foreground">{investor.firm}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Sectors</p>
                        <div className="flex flex-wrap gap-1">
                          {investor.sectors.map((sector, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {sector}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-xs text-muted-foreground">Stage</p>
                          <p className="font-medium">{investor.stage}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Tickets</p>
                          <p className="font-medium">{investor.tickets}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">Focus</p>
                        <p className="text-sm">{investor.focus}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 gradient-primary" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="glass-card p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold gradient-text mb-2">$12M+</h3>
                  <p className="text-sm text-muted-foreground">Total Funding Available</p>
                </Card>
                <Card className="glass-card p-6 text-center">
                  <Briefcase className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold gradient-text mb-2">25+</h3>
                  <p className="text-sm text-muted-foreground">Active Investors</p>
                </Card>
                <Card className="glass-card p-6 text-center">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold gradient-text mb-2">18</h3>
                  <p className="text-sm text-muted-foreground">Funded Startups</p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pitch">
              <Card className="glass-card p-8 max-w-3xl mx-auto animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Submit Your Pitch to Investors</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="founder-name">Founder Name</Label>
                      <Input id="founder-name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startup-name">Startup Name</Label>
                    <Input id="startup-name" placeholder="Your startup name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="one-liner">One-Line Pitch</Label>
                    <Input
                      id="one-liner"
                      placeholder="e.g., Uber for dog walking"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="problem">Problem You're Solving</Label>
                    <Textarea
                      id="problem"
                      placeholder="Describe the problem and why it matters..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="solution">Your Solution</Label>
                    <Textarea
                      id="solution"
                      placeholder="How does your product solve this problem?"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="sector">Sector</Label>
                      <Input id="sector" placeholder="e.g., HealthTech, Fintech" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="funding-stage">Funding Stage</Label>
                      <Input id="funding-stage" placeholder="e.g., Pre-seed, Seed" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="traction">Current Traction</Label>
                    <Textarea
                      id="traction"
                      placeholder="Users, revenue, partnerships, etc."
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ask">Funding Ask</Label>
                    <Input id="ask" placeholder="e.g., $100K for 10% equity" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deck-link">Pitch Deck Link (Optional)</Label>
                    <Input
                      id="deck-link"
                      type="url"
                      placeholder="Link to your pitch deck"
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-primary" size="lg">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Submit Pitch
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

export default Investors;
