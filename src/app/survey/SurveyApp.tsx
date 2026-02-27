import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSurvey } from './hooks/useSurvey';
import { LanguageSelectScreen } from './components/LanguageSelectScreen';
import { IntroScreen } from './components/IntroScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { ThankYouScreen } from './components/ThankYouScreen';


const fadeScaleVariants = {
  enter: { opacity: 0, scale: 0.96 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

const fadeScaleTransition = { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const };

export function SurveyApp() {
  const qrRef = useRef<HTMLDivElement>(null);
  const survey = useSurvey(qrRef);

  // ── Language selection ────────────────────────────────────────────────────
  if (!survey.selectedLanguage || survey.screen === 'language') {
    return <LanguageSelectScreen onSelectLanguage={survey.onSelectLanguage} />;
  }

  // ── Submitting / loading ──────────────────────────────────────────────────
  if (survey.screen === 'submitting') {
    return (
      <div className="fixed inset-0 bg-[#171158] flex flex-col items-center justify-center gap-6 px-8">
        <div className="w-14 h-14 border-4 border-white/20 border-t-yellow-400 rounded-full animate-spin" />
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-white text-lg">
            {survey.t.submittingLine1}
          </p>
          <p className="text-yellow-400 text-lg">
            {survey.t.submittingLine2}
          </p>
        </div>
      </div>
    );
  }

  // ── Thank you ─────────────────────────────────────────────────────────────
  if (survey.screen === 'thankyou') {
    return (
      <ThankYouScreen
        t={survey.t}
        selectedLanguage={survey.selectedLanguage}
        bgImage={survey.bgImage}
        qrRef={qrRef}
        onHome={survey.onHome}
        onDownloadQR={survey.onDownloadQR}
        qrValue={survey.couponUrl}
      />
    );
  }

  // ── Intro → Questions slide transition ────────────────────────────────────
  return (
    <div className="relative overflow-hidden">
      {/* Background image shown during fade transition */}
      <div className="fixed inset-0 z-0">
        <img src={transitionBg} alt="" className="h-full w-full object-cover" />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {survey.screen === 'intro' && (
          <motion.div
            key="intro"
            variants={fadeScaleVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={fadeScaleTransition}
          >
            <IntroScreen
              t={survey.t}
              selectedLanguage={survey.selectedLanguage}
              hasReadTerms={survey.hasReadTerms}
              showTermsModal={survey.showTermsModal}
              onHome={survey.onHome}
              onStartSurvey={survey.onStartSurvey}
              onOpenTerms={survey.onOpenTerms}
              onAcceptTerms={survey.onAcceptTerms}
              onCloseTerms={survey.onCloseTerms}
            />
          </motion.div>
        )}

        {survey.screen === 'questions' && (
          <motion.div
            key="questions"
            variants={fadeScaleVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={fadeScaleTransition}
          >
            <QuestionScreen
              t={survey.t}
              selectedLanguage={survey.selectedLanguage}
              currentStep={survey.currentStep}
              selections={survey.selections}
              otherLocationText={survey.otherLocationText}
              otherLocationConfirmed={survey.otherLocationConfirmed}
              isSelected={survey.isSelected}
              questionText={survey.questionText}
              questionOptions={survey.questionOptions}
              progress={survey.progress}
              emailAddress={survey.emailAddress}
              showExitModal={survey.showExitModal}
              bgImage={survey.bgImage}
              onSelect={survey.onSelect}
              onNext={survey.onNext}
              onBack={survey.onBack}
              onHome={survey.onHome}
              onConfirmExit={survey.onConfirmExit}
              onCancelExit={survey.onCancelExit}
              setEmailAddress={survey.setEmailAddress}
              setOtherLocationText={survey.setOtherLocationText}
              setOtherLocationConfirmed={survey.setOtherLocationConfirmed}
              setIsCompleted={survey.setIsCompleted}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}