import React from 'react';
import { motion } from 'motion/react';
import { FlagIcon } from './FlagIcon';
import { Language } from '../types';
import { languageNames } from '../utils';




const LANGUAGES: Language[] = ['sv', 'no', 'ru', 'ar', 'en'];

const BG_IMAGE = exampleImage;

interface LanguageSelectScreenProps {
  onSelectLanguage: (lang: Language) => void;
}

export function LanguageSelectScreen({ onSelectLanguage }: LanguageSelectScreenProps) {
  return (
    <div className="relative flex min-h-screen flex-col font-sans overflow-hidden bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img src={BG_IMAGE} alt="Background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Minimal header */}
        <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
          <div className="h-1.5 w-full bg-gray-50" />
          <div className="relative flex items-center justify-center px-6 py-4">
            <div className="h-16 flex items-center">
              <img src={cityTechLogo} alt="CityTech logo" className="h-16 w-48 object-contain" />
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-start justify-center px-6 pt-[20vh]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full"
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl bg-[#171158a6]">
              <h1 className="text-lg font-bold text-white mb-1 text-center drop-shadow-lg">
                Välj ditt språk / Velg språk
              </h1>
              <p className="text-xs text-white/90 text-center mb-3 leading-relaxed">
                Select your language / Выберите язык / اختر لغتك
              </p>

              <div className="flex flex-wrap justify-center gap-8">
                {/* First row: sv, no, ru */}
                {LANGUAGES.slice(0, 3).map((lang) => (
                  <motion.button
                    key={lang}
                    onClick={() => onSelectLanguage(lang)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-1 p-2 transition-all"
                  >
                    <FlagIcon language={lang} size={32} uid={`ls-${lang}`} />
                    <span className="text-xs font-bold text-white">{languageNames[lang]}</span>
                  </motion.button>
                ))}

                {/* Second row: ar, en */}
                <div className="flex gap-8 w-full justify-center">
                  {LANGUAGES.slice(3).map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={() => onSelectLanguage(lang)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-1 p-2 transition-all"
                    >
                      <FlagIcon language={lang} size={32} uid={`ls-${lang}`} />
                      <span className="text-xs font-bold text-white">{languageNames[lang]}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}