import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppHeader } from './AppHeader';
import { TermsModal } from './TermsModal';
import { Language } from '../types';
import { LanguageTranslation } from '../types';
import { getReadTermsFirstLabel } from '../utils';


interface IntroScreenProps {
  t: LanguageTranslation;
  selectedLanguage: Language;
  hasReadTerms: boolean;
  showTermsModal: boolean;
  onHome: () => void;
  onStartSurvey: () => void;
  onOpenTerms: () => void;
  onAcceptTerms: () => void;
  onCloseTerms: () => void;
}

export function IntroScreen({
  t,
  selectedLanguage,
  hasReadTerms,
  showTermsModal,
  onHome,
  onStartSurvey,
  onOpenTerms,
  onAcceptTerms,
  onCloseTerms,
}: IntroScreenProps) {
  return (
    <div className="relative flex min-h-screen flex-col font-sans overflow-hidden bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img src={introBg} alt="Background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <AppHeader onHome={onHome} selectedLanguage={selectedLanguage} uid="intro" />

        <main className="flex-1 flex items-start justify-center px-6 pt-8 pb-24 overflow-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-md w-full"
          >
            <div className="backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl bg-[#171158]">
              <h1 className="text-base font-bold text-white mb-2 text-center leading-tight drop-shadow-lg">
                Tillsammans bygger vi ett mer attraktivt Sandnessjøen
              </h1>

              <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-white/10 pr-2">
                <p className="text-xs text-white/90 leading-relaxed whitespace-pre-line">
                  {t.introText}
                </p>
              </div>

              <button
                onClick={onOpenTerms}
                className="w-full mt-3 py-2 px-4 bg-white/20 hover:bg-white/30 text-white text-xs rounded-lg transition-all border border-white/30"
              >
                {t.termsButton}
              </button>

              <button
                onClick={onStartSurvey}
                disabled={!hasReadTerms}
                className={`w-full mt-2 py-2.5 px-4 text-xs rounded-lg font-bold transition-all ${
                  hasReadTerms
                    ? 'bg-blue-900 hover:bg-blue-950 text-yellow-400 shadow-lg hover:shadow-xl active:scale-[0.98]'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-50'
                }`}
              >
                {t.startSurvey}
              </button>

              {!hasReadTerms && (
                <p className="text-xs text-white/70 text-center mt-2">
                  {getReadTermsFirstLabel(selectedLanguage)}
                </p>
              )}
            </div>
          </motion.div>
        </main>
      </div>

      <AnimatePresence>
        {showTermsModal && (
          <TermsModal
            title={t.termsTitle}
            text={t.termsText}
            acceptLabel={t.termsAccept}
            closeLabel={t.termsClose}
            onAccept={onAcceptTerms}
            onClose={onCloseTerms}
          />
        )}
      </AnimatePresence>
    </div>
  );
}