import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Languages, DollarSign, Share2, Upload, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Descriptions",
      description: "Let AI craft compelling product stories, descriptions, and hashtags that capture the essence of your craft.",
      color: "text-primary"
    },
    {
      icon: Languages,
      title: "Hindi + English Support",
      description: "Automatic translation ensures your products reach both local and international customers.",
      color: "text-accent"
    },
    {
      icon: DollarSign,
      title: "Fair Price Suggestions",
      description: "AI analyzes market trends to suggest optimal pricing for your handmade products.",
      color: "text-primary"
    },
    {
      icon: Upload,
      title: "Easy Product Upload",
      description: "Simply upload photos and basic details. Our AI handles the rest - from titles to full descriptions.",
      color: "text-accent"
    },
    {
      icon: Share2,
      title: "Social Media Ready",
      description: "Generate Instagram and Facebook posts with hashtags to promote your crafts across platforms.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Artisan Stories",
      description: "Share your heritage and crafting tradition with AI-generated storytelling that honors your legacy.",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Crafted by</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Tradition</span>,{" "}
            <span className="text-foreground">Powered by</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We bridge the gap between ancient craftsmanship and modern technology, 
            helping artisans tell their stories and reach global markets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-primary/10 mb-4 ${feature.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;