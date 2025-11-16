import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What if I have an idea but no coding skill?",
      answer:
        "That's exactly what UniSpark is for! Post your idea on our platform, specify what skills you need (developers, designers, marketers), and our matching system will connect you with students who have those technical abilities. Many successful startups are founded by non-technical visionaries who find the right technical co-founders.",
    },
    {
      question: "How do investors contact teams?",
      answer:
        "Investors on UniSpark can browse ideas, team profiles, and pitch submissions. When they find a team they're interested in, they can directly message through the platform or request your contact information. You can also proactively submit pitches to specific investors through the Investor Connect page.",
    },
    {
      question: "Is the AI chatbot free?",
      answer:
        "The AI Mentor requires you to provide your own API key from providers like OpenAI, Anthropic, or VLY AI. This gives you full control over your usage and costs. We provide the interface and specialized startup-focused prompts, while you use your preferred AI service.",
    },
    {
      question: "Can I join multiple teams?",
      answer:
        "Absolutely! Many students work on multiple projects simultaneously. You can join different teams based on your skills and interests. Just make sure to communicate your availability clearly to each team so everyone knows your time commitments.",
    },
    {
      question: "What if my team doesn't work out?",
      answer:
        "Team dynamics can be challenging. If things aren't working, we encourage open communication first. If you need to leave a team, you can do so respectfully and find new opportunities on the platform. UniSpark is about building connections and learning through experience.",
    },
    {
      question: "Are there any requirements to post an idea?",
      answer:
        "No special requirements! We welcome ideas at all stages - from rough concepts to well-researched plans. The more detail you provide about the problem, solution, and needed skills, the better matches you'll get. All students are welcome to participate.",
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about using UniSpark
            </p>
          </div>

          <Card className="glass-card p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
