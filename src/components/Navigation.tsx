import { Button } from "@/components/ui/button";
import { Palette, ShoppingBag, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Palette className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Artisan Connect
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#marketplace" className="text-foreground hover:text-primary transition-smooth">
            Marketplace
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-smooth">
            About
          </a>
          <a href="#join" className="text-foreground hover:text-primary transition-smooth">
            Join as Artisan
          </a>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="default" size="sm">
            Join as Artisan
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;