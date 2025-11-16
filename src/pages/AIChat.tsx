import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bot,
  Send,
  Sparkles,
  Settings,
  Save,
  RotateCcw,
  Lightbulb,
  Code,
  Users,
  FileText,
} from "lucide-react";

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your UniSpark AI Mentor. I can help you with startup ideas, pitches, team building, and more. What would you like to work on today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    { icon: <Lightbulb className="h-4 w-4" />, text: "Help me write a pitch" },
    { icon: <Sparkles className="h-4 w-4" />, text: "Generate a startup idea" },
    { icon: <Users className="h-4 w-4" />, text: "Find team roles" },
    { icon: <FileText className="h-4 w-4" />, text: "Explain my idea to an investor" },
    { icon: <Code className="h-4 w-4" />, text: "Generate UI for my app" },
    { icon: <FileText className="h-4 w-4" />, text: "Prepare for judging questions" },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: "assistant",
        content: "Great question! Let me help you with that. As your AI mentor, I'd suggest focusing on...",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">
              <span className="gradient-text">AI Startup Mentor</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant guidance on pitching, coding, team building, and everything startup
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="glass-card p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Quick Prompts
                </h3>
                <div className="space-y-2">
                  {quickPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => handleQuickPrompt(prompt.text)}
                    >
                      {prompt.icon}
                      <span className="ml-2 truncate">{prompt.text}</span>
                    </Button>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary" />
                  Chat Stats
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Messages</span>
                    <span className="font-semibold">{messages.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Session</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4"
                  onClick={() => setMessages([messages[0]])}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset Chat
                </Button>
              </Card>
            </div>

            {/* Main Chat Area */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="chat" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="chat">AI Chat</TabsTrigger>
                  <TabsTrigger value="settings">API Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="chat" className="space-y-4">
                  <Card className="glass-card p-4 h-[500px] flex flex-col">
                    <ScrollArea className="flex-1 pr-4">
                      <div className="space-y-4">
                        {messages.map((message, index) => (
                          <div
                            key={index}
                            className={`flex gap-3 ${
                              message.role === "user" ? "justify-end" : "justify-start"
                            } animate-fade-in`}
                          >
                            {message.role === "assistant" && (
                              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                <Bot className="h-5 w-5 text-primary-foreground" />
                              </div>
                            )}
                            <div
                              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                                message.role === "user"
                                  ? "bg-primary text-primary-foreground"
                                  : "glass-card"
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                            </div>
                            {message.role === "user" && (
                              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                                <span className="text-sm font-semibold">You</span>
                              </div>
                            )}
                          </div>
                        ))}
                        {isTyping && (
                          <div className="flex gap-3 justify-start animate-fade-in">
                            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                              <Bot className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <div className="glass-card rounded-2xl px-4 py-3">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                                <div
                                  className="w-2 h-2 rounded-full bg-primary animate-bounce"
                                  style={{ animationDelay: "0.2s" }}
                                />
                                <div
                                  className="w-2 h-2 rounded-full bg-primary animate-bounce"
                                  style={{ animationDelay: "0.4s" }}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </ScrollArea>

                    <div className="mt-4 flex gap-2">
                      <Input
                        placeholder="Ask anything about startups, pitches, or team building..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        className="flex-1"
                      />
                      <Button
                        onClick={handleSend}
                        className="gradient-primary"
                        disabled={!input.trim() || isTyping}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="settings">
                  <Card className="glass-card p-6 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Settings className="h-6 w-6 text-primary" />
                      API Configuration
                    </h3>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="api-provider">AI Provider</Label>
                        <select
                          id="api-provider"
                          className="w-full rounded-lg border bg-input px-3 py-2"
                        >
                          <option>OpenAI (GPT-4)</option>
                          <option>Anthropic (Claude)</option>
                          <option>Google (Gemini)</option>
                          <option>Groq (Fast Inference)</option>
                          <option>VLY AI (Startup Focused)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="api-key">API Key</Label>
                        <Input
                          id="api-key"
                          type="password"
                          placeholder="sk-..."
                        />
                        <p className="text-xs text-muted-foreground">
                          Your API key is stored locally and never shared
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="system-prompt">System Prompt (Optional)</Label>
                        <Textarea
                          id="system-prompt"
                          placeholder="Customize how the AI responds to you..."
                          rows={4}
                        />
                      </div>

                      <div className="flex gap-3">
                        <Button className="gradient-primary">
                          <Save className="h-4 w-4 mr-2" />
                          Save API Key
                        </Button>
                        <Button variant="outline">Test Connection</Button>
                      </div>

                      <div className="pt-6 border-t space-y-4">
                        <h4 className="font-semibold">VLY AI Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          VLY AI is optimized for startup brainstorming, pitch refinement, and
                          rapid prototyping. Perfect for campus founders.
                        </p>
                        <div className="space-y-2">
                          <Label htmlFor="vly-key">VLY API Key</Label>
                          <Input
                            id="vly-key"
                            type="password"
                            placeholder="vly_..."
                          />
                        </div>
                        <Button className="bg-accent hover:bg-accent/90">
                          <Sparkles className="h-4 w-4 mr-2" />
                          Connect VLY AI
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIChat;
