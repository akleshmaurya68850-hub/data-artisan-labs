import { useState, useRef } from "react";
import { Send, Mail, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_sae4abu",
        "template_6vpab2s",
        formRef.current!,
        "Y6OxyOsj0cFXL4YlQ"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current?.reset();
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Let's work together to build intelligent, data-driven solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a
                      href="mailto:akleshmaurya68850@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      akleshmaurya68850@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                You can also find me on GitHub and LinkedIn — links in the footer below.
              </p>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full glow-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
