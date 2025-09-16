import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MarketplacePreview from "@/components/MarketplacePreview";
import ArtisanPortal from "@/components/ArtisanPortal";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <MarketplacePreview />
      <ArtisanPortal />
      
      {/* Join CTA Section */}
      <section id="join" className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Digital Revolution</h2>
          <p className="text-xl mb-6 text-primary-foreground/90">
            Transform your traditional craft business with AI storytelling and global reach.
          </p>
          <Button size="lg" variant="craft" className="text-lg px-8 py-4">
            Create Your Artisan Account
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold">Artisan Connect</span>
          </div>
          <p className="text-accent-foreground/80 mb-4">
            Empowering Indian artisans with AI-powered storytelling and global reach.
          </p>
          <p className="text-sm text-accent-foreground/60">
            © 2024 Artisan Connect. Made with ❤️ for Indian craftsmanship.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
