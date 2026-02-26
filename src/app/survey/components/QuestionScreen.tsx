import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { AppHeader } from './AppHeader';
import { ExitModal } from './ExitModal';
import { Language, LanguageTranslation, QuestionOption } from '../types';
import { getSelectOneLabel, getOtherLocationPlaceholder } from '../utils';
import locationBg from 'figma:asset/d43aef083f830ea7b88039af76e56761089d5b4a.png';
import heroyBg from 'figma:asset/b366c4aea1717a8f210baef72d464c6ecab4e1ed.png';
import donnaBg from 'figma:asset/90f7644b5bd4f8b9098eebef59ede51ef5764dac.png';
import leirfjordBg from 'figma:asset/3a0f958cedd927fb678bdfb9f8eee2ec47027ed5.png';
import sandnessjoenBg from 'figma:asset/f5ce1ccf36439d36cdf3776998ab023ddbc7ffa4.png';
import paddleBg from 'figma:asset/dff503705b43f0bbed991f8491972a788e525859.png';

interface QuestionScreenProps {
  t: LanguageTranslation;
  selectedLanguage: Language;
  currentStep: number;
  selections: Record<number, string>;
  otherLocationText: Record<number, string>;
  otherLocationConfirmed: Record<number, boolean>;
  isSelected: boolean;
  questionText: string;
  questionOptions: QuestionOption[];
  progress: number;
  emailAddress: string;
  showExitModal: boolean;
  bgImage: string;
  onSelect: (optionId: string) => void;
  onNext: () => void;
  onBack: () => void;
  onHome: () => void;
  onConfirmExit: () => void;
  onCancelExit: () => void;
  setEmailAddress: (v: string) => void;
  setOtherLocationText: (v: Record<number, string>) => void;
  setOtherLocationConfirmed: (v: Record<number, boolean>) => void;
  setIsCompleted: (v: boolean) => void;
}

export function QuestionScreen({
  t,
  selectedLanguage,
  currentStep,
  selections,
  otherLocationText,
  otherLocationConfirmed,
  isSelected,
  questionText,
  questionOptions,
  progress,
  emailAddress,
  showExitModal,
  bgImage,
  onSelect,
  onNext,
  onBack,
  onHome,
  onConfirmExit,
  onCancelExit,
  setEmailAddress,
  setOtherLocationText,
  setOtherLocationConfirmed,
  setIsCompleted,
}: QuestionScreenProps) {
  const isLastQuestion = currentStep === 9;
  const wantsNotification = selections[currentStep] === '0' && currentStep === 9;

  return (
    <div className="relative flex min-h-screen flex-col font-sans overflow-hidden bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img src={bgImage} alt="Background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Paddleboard image – visible during step transitions */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="fixed inset-0 z-[1]"
      >
        <img src={paddleBg} alt="" className="h-full w-full object-cover" />
      </motion.div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <AppHeader onHome={onHome} selectedLanguage={selectedLanguage} uid={`q${currentStep}`} />

        <main className="flex-1 flex flex-col px-6 py-6 overflow-auto">
          {/* Custom background only for step 0 ("Var bor du huvudsakligen") */}
          {currentStep === 0 && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={locationBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 1 when Herøy is selected */}
          {currentStep === 1 && selections[0] === '1' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={heroyBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 1 when Sandnessjøen is selected */}
          {currentStep === 1 && selections[0] === '0' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={sandnessjoenBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 2 when Sandnessjøen is selected (gender question) */}
          {currentStep === 2 && selections[0] === '0' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={sandnessjoenBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 2 when Herøy is selected (gender question) */}
          {currentStep === 2 && selections[0] === '1' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={heroyBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 2 when Dønna is selected (gender question) */}
          {currentStep === 2 && selections[0] === '2' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={donnaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 2 when Leirfjord is selected (gender question) */}
          {currentStep === 2 && selections[0] === '3' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={leirfjordBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 2 when Annan ort is selected (gender question) */}
          {currentStep === 2 && selections[0] === '4' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={sandnessjoenBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 3 when Herøy is selected */}
          {currentStep === 3 && selections[0] === '1' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={heroyBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 3 when Sandnessjøen is selected */}
          {currentStep === 3 && selections[0] === '0' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={sandnessjoenBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 4 when Herøy is selected */}
          {currentStep === 4 && selections[0] === '1' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={heroyBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 4 when Sandnessjøen is selected */}
          {currentStep === 4 && selections[0] === '0' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={sandnessjoenBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 5 when Herøy is selected */}
          {currentStep === 5 && selections[0] === '1' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={heroyBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 5 when Sandnessjøen is selected */}
          {currentStep === 5 && selections[0] === '0' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={sandnessjoenBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 6 when Herøy is selected */}
          {currentStep === 6 && selections[0] === '1' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={heroyBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 6 when Sandnessjøen is selected */}
          {currentStep === 6 && selections[0] === '0' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={sandnessjoenBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 7 when Herøy is selected */}
          {currentStep === 7 && selections[0] === '1' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={heroyBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 7 when Sandnessjøen is selected */}
          {currentStep === 7 && selections[0] === '0' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={sandnessjoenBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 9 when Herøy is selected (step 8 skipped) */}
          {currentStep === 9 && selections[0] === '1' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={heroyBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 8 when Sandnessjøen is selected */}
          {currentStep === 8 && selections[0] === '0' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={sandnessjoenBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 9 when Sandnessjøen is selected */}
          {currentStep === 9 && selections[0] === '0' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={sandnessjoenBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 1 when Dønna is selected */}
          {currentStep === 1 && selections[0] === '2' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={donnaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 3 when Dønna is selected */}
          {currentStep === 3 && selections[0] === '2' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={donnaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 4 when Dønna is selected */}
          {currentStep === 4 && selections[0] === '2' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={donnaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 5 when Dønna is selected */}
          {currentStep === 5 && selections[0] === '2' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={donnaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 6 when Dønna is selected */}
          {currentStep === 6 && selections[0] === '2' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={donnaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 7 when Dønna is selected */}
          {currentStep === 7 && selections[0] === '2' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={donnaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 8 when Dønna is selected */}
          {currentStep === 8 && selections[0] === '2' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={donnaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 9 when Dønna is selected */}
          {currentStep === 9 && selections[0] === '2' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={donnaBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 1 when Leirfjord is selected */}
          {currentStep === 1 && selections[0] === '3' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={leirfjordBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 3 when Leirfjord is selected */}
          {currentStep === 3 && selections[0] === '3' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={leirfjordBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 4 when Leirfjord is selected */}
          {currentStep === 4 && selections[0] === '3' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={leirfjordBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 5 when Leirfjord is selected */}
          {currentStep === 5 && selections[0] === '3' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={leirfjordBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 6 when Leirfjord is selected */}
          {currentStep === 6 && selections[0] === '3' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={leirfjordBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 7 when Leirfjord is selected */}
          {currentStep === 7 && selections[0] === '3' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={leirfjordBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 8 when Leirfjord is selected */}
          {currentStep === 8 && selections[0] === '3' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={leirfjordBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          {/* Custom background for step 9 when Leirfjord is selected */}
          {currentStep === 9 && selections[0] === '3' && (
            <div className="fixed inset-0 z-[5] pointer-events-none">
              <img src={leirfjordBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="flex-1 flex flex-col relative z-10"
            >
              {/* Progress bar */}
              <div className="mb-4">
                <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                    initial={{ width: '100%' }}
                    animate={{ width: `${100 - progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-4">
                <h2 className="font-bold text-white text-center mb-1 drop-shadow-lg text-[20px]">
                  {questionText}
                </h2>
                <p className="text-white/80 text-center text-[15px] font-bold text-[#fcfffbcc]">
                  {getSelectOneLabel(selectedLanguage)}
                </p>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-2 items-center">
                {questionOptions.map((option, index) => (
                  <div key={index} className="w-3/4">
                    <motion.button
                      onClick={() => onSelect(String(index))}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`w-full p-3 rounded-xl backdrop-blur-md border transition-all ${
                        selections[currentStep] === String(index)
                          ? 'bg-yellow-400 border-yellow-500 shadow-lg scale-[1.02]'
                          : 'bg-white/20 border-white/20 hover:bg-white/30'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            selections[currentStep] === String(index)
                              ? 'border-white bg-white'
                              : 'border-white/50'
                          }`}
                        >
                          {selections[currentStep] === String(index) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-blue-500"
                            />
                          )}
                        </div>
                        <div className="flex-1 text-center">
                          <p className="text-xs font-bold text-black leading-tight">{option.label}</p>
                          {option.description && (
                            <p className="text-xs text-black/80 mt-0.5">{option.description}</p>
                          )}
                        </div>
                      </div>
                    </motion.button>

                    {/* "Other location" free-text input (question 0, option index 4) */}
                    {currentStep === 0 && index === 4 && selections[currentStep] === String(index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 flex flex-col gap-2"
                      >
                        <input
                          type="text"
                          placeholder={getOtherLocationPlaceholder(selectedLanguage)}
                          value={otherLocationText[0] ?? ''}
                          onChange={(e) =>
                            setOtherLocationText({ ...otherLocationText, 0: e.target.value })
                          }
                          className="w-full p-2 rounded-lg bg-white/30 backdrop-blur-md border border-white/40 text-black text-xs placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        {(otherLocationText[0] ?? '').trim().length > 1 && (
                          <button
                            onClick={() =>
                              setOtherLocationConfirmed({ ...otherLocationConfirmed, 0: true })
                            }
                            className="self-end px-3 py-1 bg-yellow-400 text-black rounded-lg text-xs font-bold"
                          >
                            OK
                          </button>
                        )}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Email input for last question when "Yes" is selected */}
              {wantsNotification && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 flex flex-col items-center gap-3"
                >
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-3/4 p-3 rounded-xl backdrop-blur-md bg-white/30 border border-white/40 text-black text-xs placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {emailAddress.includes('@') && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => setIsCompleted(true)}
                      className="px-4 py-2 bg-[#006AA7] hover:bg-[#005a8e] text-[#FECC02] rounded-lg transition-all active:scale-95 shadow-md text-xs font-bold"
                    >
                      {t.completeSurvey}
                    </motion.button>
                  )}
                </motion.div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center gap-3 mt-3">
                {currentStep > 0 ? (
                  <button
                    onClick={onBack}
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-800 hover:bg-blue-900 text-yellow-400 rounded-md transition-all active:scale-95 shadow-md"
                  >
                    <ArrowLeft size={12} />
                    <span className="text-[9px] font-bold">{t.back}</span>
                  </button>
                ) : (
                  <div className="w-20" />
                )}

                <AnimatePresence>
                  {isSelected && !wantsNotification && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={onNext}
                      className="flex items-center gap-1 px-3 py-1.5 bg-blue-900 hover:bg-blue-950 text-yellow-400 rounded-md transition-all active:scale-95 shadow-md"
                    >
                      <span className="text-[9px] font-bold">
                        {isLastQuestion ? t.finish : t.next}
                      </span>
                      <ChevronRight size={12} />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Exit confirmation modal */}
      {showExitModal && (
        <ExitModal
          title={t.exitModalTitle}
          text={t.exitModalText}
          confirmLabel={t.exitModalConfirm}
          cancelLabel={t.exitModalCancel}
          onConfirm={onConfirmExit}
          onCancel={onCancelExit}
        />
      )}
    </div>
  );
}