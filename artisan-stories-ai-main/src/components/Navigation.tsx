import { Button } from "@/components/ui/button";
import { Palette, ShoppingBag, User, Menu, X, Trash, Mail, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };
  
  // Listen for addToCart events
  useEffect(() => {
    const handleAddToCart = (event: any) => {
      const newItem = event.detail;
      setCartItems(prev => [...prev, newItem]);
    };
    
    document.addEventListener('addToCart', handleAddToCart);
    return () => {
      document.removeEventListener('addToCart', handleAddToCart);
    };
  }, []);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", loginData);
    alert("Login successful!");
    setLoginDialogOpen(false);
    setLoginData({ email: "", password: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Palette className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Artisan Connect
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('marketplace')} className="text-foreground hover:text-primary transition-colors">
            Marketplace
          </button>
          <button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary transition-colors">
            Features
          </button>
          <button onClick={() => scrollToSection('artisans')} className="text-foreground hover:text-primary transition-colors">
            Join as Artisan
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Switch language">
            <Globe className="h-5 w-5" />
            <span className="ml-1 text-xs font-bold">{language.toUpperCase()}</span>
          </Button>
          <Dialog open={cartOpen} onOpenChange={setCartOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="relative" aria-label="Open cart">
                <ShoppingBag className="h-4 w-4 mr-1" />
                {t('nav.cart')}
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-primary">{cartItems.length}</Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Shopping Cart</DialogTitle>
                <DialogDescription>
                  Your selected items
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b pb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center">
                            <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />
                          </div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">₹{item.price}</p>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => {
                            setCartItems(cartItems.filter((_, i) => i !== index));
                          }}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <div className="flex justify-between pt-4">
                      <span className="font-medium">Total:</span>
                      <span className="font-bold">₹{cartItems.reduce((sum, item) => sum + item.price, 0)}</span>
                    </div>
                    <Button className="w-full bg-gradient-primary">
                      Checkout
                    </Button>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
            <DialogTrigger asChild id="login-dialog">
              <Button variant="outline" size="sm">Sign In</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Sign In</DialogTitle>
                <DialogDescription>
                  Enter your credentials to access your account.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleLoginSubmit} className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={loginData.email} 
                    onChange={handleLoginChange} 
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    value={loginData.password} 
                    onChange={handleLoginChange} 
                    required 
                  />
                </div>
                <div className="pt-4 flex flex-col space-y-2">
                  <Button type="submit" className="bg-gradient-primary">Sign In</Button>
                  <Button type="button" className="flex items-center justify-center gap-2" variant="outline">
                    <Mail className="h-4 w-4" />
                    Sign in with Gmail
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          <Button variant="default" size="sm" onClick={() => scrollToSection('artisans')}>
            Join as Artisan
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('marketplace')}>
                {t('nav.marketplace')}
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('features')}>
                {t('nav.features')}
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('artisans')}>
                {t('nav.joinArtisan')}
              </Button>
              <Button variant="ghost" className="w-full justify-start relative" onClick={() => {
                setMobileMenuOpen(false);
                setCartOpen(true);
              }}>
                <ShoppingBag className="h-5 w-5 mr-2" />
                {t('nav.cart')}
                {cartItems.length > 0 && (
                  <Badge className="absolute right-2 bg-primary">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => {
                setMobileMenuOpen(false);
                setLoginDialogOpen(true);
              }}>
                <User className="h-5 w-5 mr-2" />
                {t('nav.login')}
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => {
                toggleLanguage();
              }}>
                <Globe className="h-5 w-5 mr-2" />
                {language === 'en' ? 'हिंदी में देखें' : 'View in English'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;