import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Heart, ArrowRight } from "lucide-react";

const MarketplacePreview = () => {
  const sampleProducts = [
    {
      id: 1,
      title: "Handwoven Banarasi Silk Saree",
      artisan: "Meera Devi",
      location: "Varanasi, UP",
      price: "₹8,500",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop",
      story: "Continuing a 300-year family tradition of silk weaving...",
      category: "Textiles"
    },
    {
      id: 2,
      title: "Blue Pottery Tea Set",
      artisan: "Rajesh Sharma",
      location: "Jaipur, Rajasthan",
      price: "₹2,200",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      story: "Hand-painted with traditional Jaipur blue pottery techniques...",
      category: "Pottery"
    },
    {
      id: 3,
      title: "Dokra Brass Figurines",
      artisan: "Anita Mahato",
      location: "West Bengal",
      price: "₹1,800",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
      story: "Ancient lost-wax casting technique passed down through generations...",
      category: "Metal Craft"
    }
  ];

  return (
    <section id="marketplace" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Discover</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Authentic Crafts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each product tells a story of heritage, skill, and tradition. 
            Browse handmade treasures from artisans across India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-craft transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {product.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="sm" className="bg-background/90 hover:bg-background">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{product.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  By {product.artisan} • {product.story}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:shadow-warm transition-all">
            Explore All Products
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;