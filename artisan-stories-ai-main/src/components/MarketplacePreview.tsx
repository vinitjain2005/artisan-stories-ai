import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Heart, ArrowRight, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/LanguageContext";

const MarketplacePreview = () => {
  const { t } = useLanguage();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  
  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
      toast({
        title: "Removed from favorites",
        description: "Item has been removed from your favorites",
      });
    } else {
      setFavorites([...favorites, id]);
      toast({
        title: "Added to favorites",
        description: "Item has been added to your favorites",
      });
    }
  };
  
  const viewProductDetails = (product: any) => {
    setSelectedProduct(product);
    setDetailsOpen(true);
  };
  
  const addToCart = (product: any) => {
    // Get current cart items
    const cartItemsElement = document.querySelector('[aria-label="Open cart"]');
    if (cartItemsElement) {
      // Create a custom event to add the product to cart
      const event = new CustomEvent('addToCart', { 
        detail: { 
          id: Math.random(), // Generate random ID for demo
          name: product.title,
          price: product.price || 1800,
          image: product.image || "/placeholder.svg"
        } 
      });
      document.dispatchEvent(event);
      
      toast({
        title: "Added to cart",
        description: "Product has been added to your cart",
      });
      
      // Open the cart
      (cartItemsElement as HTMLButtonElement).click();
    }
  };
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
    <section id="marketplace" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Marketplace</div>
             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">{t('marketplace.title')}</h2>
             <p className="max-w-[900px] text-gray-800 dark:text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
               {t('marketplace.subtitle')}
             </p>
          </div>
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
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="bg-background/90 hover:bg-background"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
                <p className="text-sm text-muted-foreground mb-2">⭐ {product.rating} • {product.location}</p>
                
                <p className="text-muted-foreground text-sm mb-4">
                  By {product.artisan} • {product.story}
                </p>
                
                <p className="text-lg font-bold text-primary mb-4">{product.price}</p>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => addToCart(product)}
                    className="flex items-center justify-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    onClick={() => viewProductDetails(product)}
                    className="bg-gradient-primary"
                  >
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
        
        {/* Product Details Dialog */}
        <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
          <DialogContent className="sm:max-w-[600px]">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProduct.title}</DialogTitle>
                  <DialogDescription>
                    By {selectedProduct.artisan} from {selectedProduct.location}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  <div>
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.title}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Category</h4>
                      <p>{selectedProduct.category}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Artisan Story</h4>
                      <p>{selectedProduct.story}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Price</h4>
                      <p className="text-xl font-bold text-primary">{selectedProduct.price}</p>
                    </div>
                    <div className="pt-4 flex space-x-2">
                      <Button 
                        onClick={() => {
                          addToCart(selectedProduct);
                          setDetailsOpen(false);
                        }}
                        className="flex-1 bg-gradient-primary"
                      >
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => toggleFavorite(selectedProduct.id)}
                        className="w-10 p-0 flex items-center justify-center"
                      >
                        <Heart className={`h-4 w-4 ${favorites.includes(selectedProduct.id) ? "fill-red-500 text-red-500" : ""}`} />
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default MarketplacePreview;