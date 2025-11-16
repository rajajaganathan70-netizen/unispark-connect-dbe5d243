import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import {
  Lightbulb,
  Users,
  Briefcase,
  Bot,
  Rocket,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Idea Match",
      description: "Share your startup ideas and find students who resonate with your vision",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Skill Match",
      description: "Connect with developers, designers, and marketers to build your dream team",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Mentor",
      description: "Get instant guidance on pitching, coding, and team building from AI",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Investor Connect",
      description: "Pitch your startup to investors looking for fresh campus talent",
    },
  ];

  const stats = [
    { value: "500+", label: "Active Students" },
    { value: "120+", label: "Ideas Posted" },
    { value: "45+", label: "Teams Formed" },
    { value: "12+", label: "Funded Startups" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CS Student",
      text: "Found my technical co-founder in just 2 days! We're now building an AI-powered study assistant.",
    },
    {
      name: "Raj Patel",
      role: "Business Major",
      text: "The AI mentor helped me refine my pitch. We got into our first accelerator program!",
    },
    {
      name: "Emma Wilson",
      role: "Design Student",
      text: "UniSpark connected me with an amazing fintech team. We're launching our beta next month!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-20 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Ignite Ideas. Connect Teams.{" "}
              <span className="gradient-text">Build Startups.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The ultimate platform for campus innovators to find co-founders, share ideas,
              and connect with investors who believe in student startups.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary hover:opacity-90">
                <Link to="/ideas">
                  <Rocket className="h-5 w-5 mr-2" />
                  Post an Idea
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/cofounder-match">
                  <Users className="h-5 w-5 mr-2" />
                  Join as Developer
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/investors">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Meet Investors
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/ai-chat">
                  <Bot className="h-5 w-5 mr-2" />
                  Launch AI Assistant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">How UniSpark Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to go from idea to funded startup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Lightbulb className="h-12 w-12" />, step: "1", title: "Post Your Idea", desc: "Share your vision and what you need" },
              { icon: <Users className="h-12 w-12" />, step: "2", title: "Find Teammates", desc: "Match with skilled co-founders" },
              { icon: <Rocket className="h-12 w-12" />, step: "3", title: "Build Prototype", desc: "Work together to create MVP" },
              { icon: <TrendingUp className="h-12 w-12" />, step: "4", title: "Pitch & Fund", desc: "Present to investors and get funded" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative mx-auto w-24 h-24 glass-card rounded-2xl flex items-center justify-center text-primary hover-lift">
                  {item.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-muted-foreground">Everything you need to launch your startup</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 hover-lift animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why UniSpark */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why UniSpark?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Target className="h-6 w-6" />, title: "Bridge the Skill-Idea Gap", desc: "Connect visionaries with builders instantly" },
                { icon: <Zap className="h-6 w-6" />, title: "Rapid Team Formation", desc: "Form hackathon teams in minutes, not days" },
                { icon: <Briefcase className="h-6 w-6" />, title: "Direct Investor Access", desc: "Pitch to investors seeking campus talent" },
                { icon: <Bot className="h-6 w-6" />, title: "AI-Powered Guidance", desc: "24/7 startup mentorship from AI" },
              ].map((item, index) => (
                <Card key={index} className="glass-card p-6 hover-lift">
                  <div className="flex gap-4">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card p-6 hover-lift">
                <p className="text-sm mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Index;
