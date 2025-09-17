import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      // Reset subscription status after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <section id="newsletter" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="border-border max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold mb-2 text-center">Stay in the loop</h3>
            <p className="text-muted-foreground text-center mb-6">
              Get tips for selling crafts online and product updates. No spam.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={handleSubmit}
            >
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSubscribed}
              />
              <Button 
                type="submit" 
                variant="craft"
                disabled={isSubmitting || isSubscribed}
              >
                {isSubmitting ? "Subscribing..." : isSubscribed ? (
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" /> Subscribed
                  </span>
                ) : "Subscribe"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;




