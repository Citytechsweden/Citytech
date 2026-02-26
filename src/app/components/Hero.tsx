import { ArrowRight, Smartphone, Code, Zap } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations";

export function Hero() {
  const { language } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden min-h-[350px] sm:min-h-[400px]">
      {/* Animated Background with Image */}
      <div className="absolute inset-0">
        {/* Background Image with Zoom/Pan Animation */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1768330187404-59e46cf222c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBkaWdpdGFsJTIwbmV0d29yayUyMGJsdWV8ZW58MXx8fHwxNzY5Nzc4OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
            animation: 'parallaxZoomPan 20s ease-in-out infinite alternate',
          }}
        />
        
        {/* Subtle Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/70" />
      </div>
      
      {/* CSS Keyframes for Parallax Zoom/Pan Animation */}
      <style>{`
        @keyframes parallaxZoomPan {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(-2%, -2%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Text Content */}
          <div className="mb-8 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{
                  color: '#00FF88',
                  textShadow: '0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.3), 0 4px 8px rgba(0, 0, 0, 0.8)'
                }}>
              {translations.hero.title[language]}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto"
               style={{
                 color: '#00D4FF',
                 textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.7)'
               }}>
              {translations.hero.subtitle[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}