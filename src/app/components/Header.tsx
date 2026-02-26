import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations";
import { LanguageSelector } from "@/app/components/LanguageSelector";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-0 sm:px-2 lg:px-4">
        <div className="flex items-center justify-between h-20 bg-[rgba(255,251,251,0)]">
          {/* Logo */}
          <div className="flex items-center -ml-0 sm:-ml-2">
            <div className="h-10 sm:h-12 px-4 flex items-center">
              <svg className="h-8 sm:h-10 w-auto" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="8" width="24" height="24" rx="4" fill="url(#gradient1)"/>
                <path d="M8 16L12 20L20 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="30" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="700" fill="url(#gradient2)">CityTech</text>
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="20" x2="24" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563eb"/>
                    <stop offset="1" stopColor="#f97316"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="30" y1="26" x2="180" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563eb"/>
                    <stop offset="1" stopColor="#f97316"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              {translations.header.cta[language]}
            </Button>
            <LanguageSelector />
          </div>

          {/* Mobile Language Selector */}
          <div className="md:hidden">
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-white border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-6 rounded-full"
                >
                  {translations.header.cta[language]}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}