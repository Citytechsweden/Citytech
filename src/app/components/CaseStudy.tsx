import { ArrowLeft, CheckCircle2, TrendingUp, Users, Clock, Code, Server, Smartphone, Zap, Mail, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations";
import { LanguageSelector } from "@/app/components/LanguageSelector";
import heroImage from "figma:asset/2eaea74bda9c646563ded4d477ed6ec7828c9421.png";

export function CaseStudy() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer1 = setInterval(() => {
      setCount1(prev => {
        if (prev >= 85) {
          clearInterval(timer1);
          return 85;
        }
        return prev + 2;
      });
    }, interval);

    const timer2 = setInterval(() => {
      setCount2(prev => {
        if (prev >= 200) {
          clearInterval(timer2);
          return 200;
        }
        return prev + 4;
      });
    }, interval);

    const timer3 = setInterval(() => {
      setCount3(prev => {
        if (prev >= 50) {
          clearInterval(timer3);
          return 50;
        }
        return prev + 1;
      });
    }, interval);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className={`relative ${language === 'ru' ? 'min-h-[40vh] pb-8' : 'min-h-[50vh]'} flex items-start pt-24 justify-center overflow-hidden`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${language === 'ru' ? 'from-blue-900/70 via-purple-900/70 to-pink-900/70' : 'from-blue-900/97 via-purple-900/97 to-pink-900/97'}`}
            style={{ 
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        {/* Back Button */}
        <Link to="/" className="absolute top-8 left-8 z-20">
          
        </Link>

        {/* Language Flags */}
        <div className="absolute top-8 right-8 z-20">
          <LanguageSelector />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-500/30 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/30 shadow-2xl -mt-[105px] bg-[#0a1d38d9]"
          >
            
            <h1 
              className="font-extrabold text-white mb-6 text-[32px] italic font-[Arial]"
              style={{ textShadow: '0 6px 24px rgba(0, 0, 0, 0.9), 0 3px 10px rgba(0, 0, 0, 0.7)' }}
            >
              {translations.caseStudy.hero.title[language]}
            </h1>
            
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-2 bg-[#fffffffc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-blue-900/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl max-w-5xl mx-auto mt-[10px] bg-[#2a2b1bba]"
          >
            <div className="text-white space-y-6 leading-relaxed text-lg">
              <p className="text-[20px]">
                {translations.caseStudy.overview.surveyIntro[language]}
              </p>
              <div className="flex justify-center mt-8">
                <a 
                  href="/survey"
                >
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-[#d7ff36fc]"
                  >
                    {translations.caseStudy.overview.surveyButton[language]}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      

      {/* Our Solution */}
      

      {/* Technical Architecture */}
      

      {/* Results & Metrics */}
      

      {/* CTA Section */}
      <section className="py-2 bg-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-[#2e4a6a] via-[#2a3f5f] to-[#2c4d70] backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/15 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="text-center">
              
              
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* Email Card */}
                

                {/* Phone Card */}
                
              </div>

              {/* Tech Badges */}
              <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
                {/* React */}
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
                    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.3" fill="none"/>
                    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(60 12 12)"/>
                    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(120 12 12)"/>
                  </svg>
                  <span className="text-white font-semibold text-sm">React</span>
                </div>

                {/* C++ */}
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
                  <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 3.5a10 10 0 0 1 0 17M7.5 3.5a10 10 0 0 0 0 17" stroke="#6295CB" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
                    <text x="3.5" y="16" fontFamily="monospace" fontWeight="bold" fontSize="10" fill="#6295CB">C++</text>
                  </svg>
                  <span className="text-white font-semibold text-sm">C++</span>
                </div>

                {/* WebAssembly */}
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#654FF0"/>
                    <text x="2" y="16.5" fontFamily="monospace" fontWeight="900" fontSize="9.5" fill="white">Wasm</text>
                  </svg>
                  <span className="text-white font-semibold text-sm">WebAssembly</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}