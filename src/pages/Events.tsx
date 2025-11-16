import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Campus Startup Weekend",
      type: "Buildathon",
      date: "Dec 15-17, 2024",
      location: "Innovation Lab, Building A",
      participants: 150,
      deadline: "5 days left",
      description: "54-hour event to build and pitch a startup from scratch",
      prizes: "$10,000 in prizes",
      tags: ["All Levels", "Team Event"],
    },
    {
      title: "AI Hackathon 2024",
      type: "Hackathon",
      date: "Jan 20-21, 2024",
      location: "Computer Science Building",
      participants: 200,
      deadline: "28 days left",
      description: "Build AI-powered solutions for real-world problems",
      prizes: "$15,000 total prizes",
      tags: ["AI/ML", "24 Hours"],
    },
    {
      title: "Fintech Innovation Challenge",
      type: "Competition",
      date: "Feb 5-6, 2024",
      location: "Business School Auditorium",
      participants: 80,
      deadline: "45 days left",
      description: "Create innovative fintech solutions for financial inclusion",
      prizes: "$8,000 + Mentorship",
      tags: ["Fintech", "Teams of 4"],
    },
    {
      title: "HealthTech Pitch Night",
      type: "Pitch Event",
      date: "Feb 28, 2024",
      location: "Medical Campus Center",
      participants: 50,
      deadline: "68 days left",
      description: "Pitch your health technology ideas to investors and mentors",
      prizes: "Seed funding opportunities",
      tags: ["HealthTech", "Solo/Team"],
    },
    {
      title: "E-Commerce Sprint",
      type: "Buildathon",
      date: "Mar 10-12, 2024",
      location: "Entrepreneurship Center",
      participants: 120,
      deadline: "78 days left",
      description: "Build a functional e-commerce platform in 48 hours",
      prizes: "$5,000 + AWS Credits",
      tags: ["E-commerce", "Full Stack"],
    },
    {
      title: "Social Impact Hackathon",
      type: "Hackathon",
      date: "Apr 15-16, 2024",
      location: "Student Union Hall",
      participants: 100,
      deadline: "115 days left",
      description: "Create tech solutions for social and environmental challenges",
      prizes: "$12,000 + NGO Partnerships",
      tags: ["Social Impact", "All Skills"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Events & Hackathons</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hackathons, buildathons, and pitch events to test your ideas and win prizes
            </p>
          </div>

          {/* Featured Event Banner */}
          <Card className="glass-card p-8 mb-12 relative overflow-hidden animate-scale-in">
            <div className="absolute inset-0 gradient-primary opacity-10" />
            <div className="relative z-10">
              <Badge className="mb-4 bg-accent">Featured Event</Badge>
              <h2 className="text-3xl font-bold mb-4">Campus Startup Weekend</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Join 150+ students for an intensive 54-hour event where you'll form teams,
                validate ideas, and pitch your startup to real investors. No experience needed!
              </p>
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Dec 15-17, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Innovation Lab</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-accent font-semibold">5 days left to register</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="gradient-primary" size="lg">
                  Register Now
                </Button>
                <Button variant="outline" size="lg">
                  <Users className="h-5 w-5 mr-2" />
                  Find Team
                </Button>
              </div>
            </div>
          </Card>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary">{event.type}</Badge>
                  <Badge className="bg-accent">{event.deadline}</Badge>
                </div>

                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.participants} participants expected</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary mb-2">
                    {event.prizes}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 gradient-primary">
                    Register
                  </Button>
                  <Button variant="outline" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="glass-card p-8 mt-12 text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">
              Organizing an event?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              List your hackathon or startup event on UniSpark to reach talented student innovators
            </p>
            <Button className="gradient-primary" size="lg">
              Submit Your Event
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
