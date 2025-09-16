import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Heart } from "lucide-react";
import heroImage from "@/assets/hero-crafts.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Indian artisan craftsmanship" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="h-5 w-5 text-primary-glow" />
            <span className="text-primary-glow font-medium">AI-Powered Marketplace</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-primary-foreground">Connecting</span><br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent">Indian Artisans</span><br />
            <span className="text-primary-foreground">to the World</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Empowering traditional craftspeople with AI-generated stories, descriptions, and fair pricing. 
            Share the heritage, sell the craft.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-warm transition-all text-lg px-8 py-6">
              <Heart className="h-5 w-5 mr-2" />
              Browse Crafts
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
              <Globe className="h-5 w-5 mr-2" />
              Sell Your Craft
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-glow">500+</div>
              <div className="text-sm">Artisans</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-glow">2,000+</div>
              <div className="text-sm">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-glow">25+</div>
              <div className="text-sm">States</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;