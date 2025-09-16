import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MarketplacePreview from "@/components/MarketplacePreview";
import ArtisanPortal from "@/components/ArtisanPortal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <MarketplacePreview />
      <ArtisanPortal />
      
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
