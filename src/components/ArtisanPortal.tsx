import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Bot, TrendingUp, Users, ArrowRight, CheckCircle } from "lucide-react";

const ArtisanPortal = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Craft",
      description: "Simply upload photos of your handmade products along with basic details like materials and base price."
    },
    {
      icon: Bot,
      title: "AI Magic Happens",
      description: "Our AI generates compelling product titles, descriptions, stories, hashtags, and suggests fair prices."
    },
    {
      icon: TrendingUp,
      title: "Reach Global Markets",
      description: "Your products get listed in both English and Hindi, reaching customers worldwide and locally."
    },
    {
      icon: Users,
      title: "Build Your Brand",
      description: "Share your artisan story and heritage, building a loyal customer base who values authenticity."
    }
  ];

  const benefits = [
    "AI-generated product descriptions in English & Hindi",
    "Fair price suggestions based on market analysis",
    "Social media ready content with hashtags",
    "Heritage storytelling to connect with customers",
    "Easy-to-use dashboard for managing products",
    "Direct customer communication tools"
  ];

  return (
    <section id="artisans" className="py-20 bg-gradient-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Join the</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Digital Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your traditional craft business with modern technology. 
            Let AI help you tell your story and reach customers you never thought possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">How It Works</h3>
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <Card className="border-border shadow-craft">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Start Selling Today</CardTitle>
              <CardDescription>Join thousands of artisans already using our platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gradient-primary hover:shadow-warm transition-all" size="lg">
                  Create Your Artisan Account
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Free to join • No setup fees • Start selling immediately
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArtisanPortal;