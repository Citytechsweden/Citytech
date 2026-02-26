import { useLanguage } from "@/app/contexts/LanguageContext";
import { useState } from "react";

interface LanguageSelectorProps {
  className?: string;
}

export function LanguageSelector({ className = "" }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Active Language Flag */}
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-[25px] h-[25px] rounded-full overflow-hidden hover:scale-110 transition-transform shadow-lg"
      >
        {language === "sv" && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#006AA7"/>
            <rect x="30" y="0" width="10" height="100" fill="#FECC00"/>
            <rect x="0" y="45" width="100" height="10" fill="#FECC00"/>
          </svg>
        )}
        {language === "en" && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#012169"/>
            <path d="M50 0 L65 50 L50 100 L35 50 Z" fill="#FFFFFF"/>
            <path d="M0 50 L50 35 L100 50 L50 65 Z" fill="#FFFFFF"/>
            <path d="M50 0 L60 50 L50 100 L40 50 Z" fill="#C8102E"/>
            <path d="M0 50 L50 40 L100 50 L50 60 Z" fill="#C8102E"/>
          </svg>
        )}
        {language === "no" && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#BA0C2F"/>
            <rect x="28" y="0" width="14" height="100" fill="#FFFFFF"/>
            <rect x="0" y="43" width="100" height="14" fill="#FFFFFF"/>
            <rect x="31" y="0" width="8" height="100" fill="#00205B"/>
            <rect x="0" y="46" width="100" height="8" fill="#00205B"/>
          </svg>
        )}
        {language === "ru" && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#FFFFFF"/>
            <path d="M 0 33.33 Q 0 0, 33.33 0 L 66.67 0 Q 100 0, 100 33.33 L 100 33.33 L 0 33.33 Z" fill="#FFFFFF"/>
            <path d="M 0 33.33 L 100 33.33 L 100 66.67 L 0 66.67 Z" fill="#0039A6"/>
            <path d="M 0 66.67 L 100 66.67 Q 100 100, 66.67 100 L 33.33 100 Q 0 100, 0 66.67 Z" fill="#D52B1E"/>
          </svg>
        )}
        {language === "ar" && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#165B32"/>
            <text x="50" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="bold" fontFamily="Arial">ع</text>
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 top-12 bg-white rounded-lg shadow-2xl p-2 flex flex-col gap-2 border border-gray-200 z-50">
          {language !== "sv" && (
            <button 
              onClick={() => {
                setLanguage("sv");
                setIsDropdownOpen(false);
              }}
              className="w-[25px] h-[25px] rounded-full overflow-hidden hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#006AA7"/>
                <rect x="30" y="0" width="10" height="100" fill="#FECC00"/>
                <rect x="0" y="45" width="100" height="10" fill="#FECC00"/>
              </svg>
            </button>
          )}
          {language !== "en" && (
            <button 
              onClick={() => {
                setLanguage("en");
                setIsDropdownOpen(false);
              }}
              className="w-[25px] h-[25px] rounded-full overflow-hidden hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#012169"/>
                <path d="M50 0 L65 50 L50 100 L35 50 Z" fill="#FFFFFF"/>
                <path d="M0 50 L50 35 L100 50 L50 65 Z" fill="#FFFFFF"/>
                <path d="M50 0 L60 50 L50 100 L40 50 Z" fill="#C8102E"/>
                <path d="M0 50 L50 40 L100 50 L50 60 Z" fill="#C8102E"/>
              </svg>
            </button>
          )}
          {language !== "no" && (
            <button 
              onClick={() => {
                setLanguage("no");
                setIsDropdownOpen(false);
              }}
              className="w-[25px] h-[25px] rounded-full overflow-hidden hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#BA0C2F"/>
                <rect x="28" y="0" width="14" height="100" fill="#FFFFFF"/>
                <rect x="0" y="43" width="100" height="14" fill="#FFFFFF"/>
                <rect x="31" y="0" width="8" height="100" fill="#00205B"/>
                <rect x="0" y="46" width="100" height="8" fill="#00205B"/>
              </svg>
            </button>
          )}
          {language !== "ru" && (
            <button 
              onClick={() => {
                setLanguage("ru");
                setIsDropdownOpen(false);
              }}
              className="w-[25px] h-[25px] rounded-full overflow-hidden hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#FFFFFF"/>
                <path d="M 0 33.33 Q 0 0, 33.33 0 L 66.67 0 Q 100 0, 100 33.33 L 100 33.33 L 0 33.33 Z" fill="#FFFFFF"/>
                <path d="M 0 33.33 L 100 33.33 L 100 66.67 L 0 66.67 Z" fill="#0039A6"/>
                <path d="M 0 66.67 L 100 66.67 Q 100 100, 66.67 100 L 33.33 100 Q 0 100, 0 66.67 Z" fill="#D52B1E"/>
              </svg>
            </button>
          )}
          {language !== "ar" && (
            <button 
              onClick={() => {
                setLanguage("ar");
                setIsDropdownOpen(false);
              }}
              className="w-[25px] h-[25px] rounded-full overflow-hidden hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#165B32"/>
                <text x="50" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="bold" fontFamily="Arial">ع</text>
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}