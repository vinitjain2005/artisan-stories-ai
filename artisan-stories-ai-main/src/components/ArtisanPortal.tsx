import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Bot, TrendingUp, Users, ArrowRight, CheckCircle, Camera, X } from "lucide-react";
import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ArtisanPortal = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"english" | "hindi">("english");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    craft: "",
    location: ""
  });
  
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    basePrice: "",
    region: "",
    description: ""
  });
  
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<null | {
    title: string;
    description: string;
    story: string;
    hashtags: string[];
    suggestedPrice: string;
    hindiTitle?: string;
    hindiDescription?: string;
  }>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleProductInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setProductData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handlePhotoUpload = () => {
    if (!photoPreview) return;
    
    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setIsGenerating(true);
      
      // Simulate AI generation
      setTimeout(() => {
        setIsGenerating(false);
        setGeneratedContent({
          title: "Handcrafted Terracotta Pot – Rustic Elegance",
          description: "Eco-friendly terracotta pot handmade with love using traditional techniques. Each piece is unique with natural variations in color and texture, making it perfect for indoor plants or as a decorative accent.",
          story: "Ramesh ji continues his family's 200-year-old pottery tradition from the clay-rich region of Kutch. His distinctive firing technique creates the signature rustic finish that has become sought after by collectors worldwide.",
          hashtags: ["#Handmade", "#Terracotta", "#IndianArtisans", "#EcoFriendly", "#TraditionalCraft"],
          suggestedPrice: "₹450–500",
          hindiTitle: "हस्तनिर्मित टेराकोटा बर्तन - रस्टिक एलिगेंस",
          hindiDescription: "पारंपरिक तकनीकों का उपयोग करके प्यार से हाथ से बनाया गया पर्यावरण के अनुकूल टेराकोटा बर्तन। प्रत्येक टुकड़ा रंग और बनावट में प्राकृतिक भिन्नताओं के साथ अद्वितीय है।"
        });
      }, 2000);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Artisan account creation:", formData);
    toast({
      title: "Registration Successful",
      description: "Thank you for registering! We'll contact you soon to complete your onboarding."
    });
    setIsDialogOpen(false);
    setFormData({ name: "", email: "", craft: "", location: "" });
  };
  
  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Product submission:", {...productData, ...generatedContent});
    toast({
      title: "Product Submitted",
      description: "Your product has been submitted for review and will be listed soon!"
    });
    setIsUploadDialogOpen(false);
    setProductData({
      title: "",
      category: "",
      basePrice: "",
      region: "",
      description: ""
    });
    setPhotoPreview(null);
    setGeneratedContent(null);
  };
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
              <div className="pt-4 space-y-3">
                <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-primary hover:shadow-warm transition-all" size="lg">
                      Upload Your Product
                      <Upload className="h-5 w-5 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Upload Your Product</DialogTitle>
                      <DialogDescription>
                        Upload your product photo and details to get AI-generated descriptions.
                      </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="upload" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="upload">Upload</TabsTrigger>
                        <TabsTrigger value="preview" disabled={!generatedContent}>Preview</TabsTrigger>
                      </TabsList>
                      <TabsContent value="upload" className="space-y-4 py-4">
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="photo">Product Photo</Label>
                            <div 
                              className="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                              onClick={() => fileInputRef.current?.click()}
                            >
                              {photoPreview ? (
                                <div className="relative">
                                  <img 
                                    src={photoPreview} 
                                    alt="Product preview" 
                                    className="max-h-[200px] mx-auto rounded-md"
                                  />
                                  <Button
                                    variant="destructive"
                                    size="icon"
                                    className="absolute top-2 right-2"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setPhotoPreview(null);
                                      if (fileInputRef.current) fileInputRef.current.value = '';
                                    }}
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>
                              ) : (
                                <div className="py-8">
                                  <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                                  <p className="text-sm text-muted-foreground">
                                    Click to upload or drag and drop
                                  </p>
                                </div>
                              )}
                              <input 
                                ref={fileInputRef}
                                type="file" 
                                id="photo" 
                                accept="image/*" 
                                className="hidden"
                                onChange={handleFileChange}
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="category">Category</Label>
                              <Select onValueChange={(value) => handleSelectChange("category", value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pottery">Pottery</SelectItem>
                                  <SelectItem value="textiles">Textiles</SelectItem>
                                  <SelectItem value="jewelry">Jewelry</SelectItem>
                                  <SelectItem value="woodwork">Woodwork</SelectItem>
                                  <SelectItem value="painting">Painting</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="basePrice">Base Price (₹)</Label>
                              <Input 
                                id="basePrice" 
                                name="basePrice" 
                                type="number" 
                                value={productData.basePrice} 
                                onChange={handleProductInputChange} 
                                placeholder="e.g. 400" 
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="title">Product Title (Optional)</Label>
                              <Input 
                                id="title" 
                                name="title" 
                                value={productData.title} 
                                onChange={handleProductInputChange} 
                                placeholder="e.g. Handcrafted Terracotta Pot" 
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="region">Region</Label>
                              <Select onValueChange={(value) => handleSelectChange("region", value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select region" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="rajasthan">Rajasthan</SelectItem>
                                  <SelectItem value="gujarat">Gujarat</SelectItem>
                                  <SelectItem value="kashmir">Kashmir</SelectItem>
                                  <SelectItem value="bengal">West Bengal</SelectItem>
                                  <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="pt-4">
                            <Button 
                              type="button" 
                              className="w-full bg-gradient-primary"
                              disabled={!photoPreview || isUploading || isGenerating}
                              onClick={handlePhotoUpload}
                            >
                              {isUploading ? "Uploading..." : isGenerating ? "Generating Content..." : "Generate AI Content"}
                            </Button>
                          </div>
                        </form>
                      </TabsContent>
                      
                      <TabsContent value="preview" className="space-y-4 py-4">
                        {generatedContent && (
                          <div className="space-y-6">
                            <div className="flex justify-end">
                              <div className="bg-muted rounded-full p-1">
                                <Button
                                  variant={currentLanguage === "english" ? "default" : "ghost"}
                                  size="sm"
                                  onClick={() => setCurrentLanguage("english")}
                                  className="rounded-full"
                                >
                                  English
                                </Button>
                                <Button
                                  variant={currentLanguage === "hindi" ? "default" : "ghost"}
                                  size="sm"
                                  onClick={() => setCurrentLanguage("hindi")}
                                  className="rounded-full"
                                >
                                  हिंदी
                                </Button>
                              </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <img 
                                  src={photoPreview!} 
                                  alt="Product" 
                                  className="w-full rounded-lg"
                                />
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <h3 className="text-xl font-bold">
                                    {currentLanguage === "english" 
                                      ? generatedContent.title 
                                      : generatedContent.hindiTitle}
                                  </h3>
                                  <p className="text-muted-foreground mt-2">
                                    {currentLanguage === "english" 
                                      ? generatedContent.description 
                                      : generatedContent.hindiDescription}
                                  </p>
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold">Artisan Story</h4>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {generatedContent.story}
                                  </p>
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold">Suggested Price</h4>
                                  <p className="text-lg font-bold text-primary mt-1">
                                    {generatedContent.suggestedPrice}
                                  </p>
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold">Hashtags</h4>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {generatedContent.hashtags.map((tag, i) => (
                                      <span key={i} className="bg-muted px-2 py-1 rounded-full text-xs">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <Button 
                              className="w-full bg-gradient-primary"
                              onClick={handleProductSubmit}
                            >
                              Submit Product for Review
                            </Button>
                          </div>
                        )}
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
                
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-primary hover:shadow-warm transition-all" size="lg">
                      Create Your Artisan Account
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Create Your Artisan Account</DialogTitle>
                      <DialogDescription>
                        Fill in your details to join our community of artisans.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          placeholder="Your full name" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          placeholder="your.email@example.com" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="craft">Your Craft</Label>
                        <Input 
                          id="craft" 
                          name="craft" 
                          value={formData.craft} 
                          onChange={handleInputChange} 
                          placeholder="e.g., Pottery, Weaving, Woodwork" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input 
                          id="location" 
                          name="location" 
                          value={formData.location} 
                          onChange={handleInputChange} 
                          placeholder="Your city/village" 
                          required 
                        />
                      </div>
                      <div className="pt-4 flex justify-end">
                        <Button type="submit" className="bg-gradient-primary">Register</Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
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