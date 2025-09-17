import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'hi';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    'hero.title': 'Artisan Connect',
    'hero.subtitle': 'Empowering traditional craftspeople with AI-generated stories, descriptions, and fair pricing. Share the heritage, sell the craft.',
    'hero.connecting': 'Connecting',
    'hero.indianArtisans': 'Indian Artisans',
    'hero.toTheWorld': 'to the World',
    'hero.description': 'Empowering traditional craftspeople with AI-generated stories, descriptions, and fair pricing. Share the heritage, sell the craft.',
    'marketplace.title': 'Featured Crafts',
    'marketplace.subtitle': 'Discover unique handcrafted items from talented artisans across India.',
    'nav.home': 'Home',
    'nav.marketplace': 'Marketplace',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.cart': 'Cart',
    'nav.features': 'Features',
    'nav.joinArtisan': 'Join as Artisan',
    'button.browse': 'Browse Crafts',
    'button.browseCrafts': 'Browse Crafts',
    'button.sell': 'Sell Your Craft',
    'button.sellYourCraft': 'Sell Your Craft',
    'button.explore': 'Explore All Products',
  },
  hi: {
    'hero.title': 'कारीगर कनेक्ट',
    'hero.subtitle': 'AI-जनित कहानियों, विवरणों और उचित मूल्य निर्धारण के साथ पारंपरिक शिल्पकारों को सशक्त बनाना। विरासत साझा करें, शिल्प बेचें।',
    'hero.connecting': 'जोड़ रहे हैं',
    'hero.indianArtisans': 'भारतीय कारीगरों को',
    'hero.toTheWorld': 'दुनिया से',
    'hero.description': 'AI-जनित कहानियों, विवरणों और उचित मूल्य निर्धारण के साथ पारंपरिक शिल्पकारों को सशक्त बनाना। विरासत साझा करें, शिल्प बेचें।',
    'marketplace.title': 'विशेष शिल्प',
    'marketplace.subtitle': 'भारत भर के प्रतिभाशाली कारीगरों से अनूठी हस्तनिर्मित वस्तुएं खोजें।',
    'nav.home': 'होम',
    'nav.marketplace': 'मार्केटप्लेस',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क',
    'nav.login': 'लॉगिन',
    'nav.cart': 'कार्ट',
    'nav.features': 'विशेषताएं',
    'nav.joinArtisan': 'कारीगर के रूप में जुड़ें',
    'button.browse': 'शिल्प ब्राउज़ करें',
    'button.browseCrafts': 'शिल्प ब्राउज़ करें',
    'button.sell': 'अपना शिल्प बेचें',
    'button.sellYourCraft': 'अपना शिल्प बेचें',
    'button.explore': 'सभी उत्पाद देखें',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};