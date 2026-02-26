import { useState, useCallback, useMemo, RefObject } from 'react';
import { useNavigate } from 'react-router';
import { toPng } from 'html-to-image';
import { Language, LanguageTranslation, QuestionOption, SurveyScreen } from '../types';
import { surveyTranslations } from '../translations';
import { supabase } from '../../../lib/supabase';
import sandnessjoenBg from 'figma:asset/f5ce1ccf36439d36cdf3776998ab023ddbc7ffa4.png';

// Steps to skip entirely for Herøy users (0-indexed)
const HEROY_SKIP_STEPS = [8]; // App experience question is now at step 8

// Option indices to filter out for Herøy users, per step
const HEROY_SKIP_OPTIONS: Record<number, number[]> = {
  6: [3], // Q6: "Map & local places" option skipped for Herøy (was Q5, shifted by gender step)
};

const TOTAL_STEPS = 10; // Questions 0–9, ends at notification question

// Gender question step — only shown for Sandnessjøen users
const SANDNESSJOEN_GENDER_STEP = 2;

// Q0: Herøy = option index 1, Sandnessjøen = option index 0, Dønna = option index 2
const isHeroySelection = (selections: Record<number, string>) => selections[0] === '1';
const isSandnessjoenSelection = (selections: Record<number, string>) => selections[0] === '0';
const isDonnaSelection = (selections: Record<number, string>) => selections[0] === '2';
const isLeirfjordSelection = (selections: Record<number, string>) => selections[0] === '3';

const BG_IMAGE = sandnessjoenBg;
// Sandnessjøen = option index 0 in Q0; age group question = step 1
const SANDNESSJOEEN_OPTION = '0';
const SANDNESSJOEEN_AGE_STEP = 1;

export interface UseSurveyReturn {
  screen: SurveyScreen;
  selectedLanguage: Language | null;
  t: LanguageTranslation;
  hasReadTerms: boolean;
  showTermsModal: boolean;
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
  couponUrl: string | undefined;
  onSelectLanguage: (lang: Language) => void;
  onHome: () => void;
  onStartSurvey: () => void;
  onOpenTerms: () => void;
  onAcceptTerms: () => void;
  onCloseTerms: () => void;
  onSelect: (optionId: string) => void;
  onNext: () => void;
  onBack: () => void;
  onConfirmExit: () => void;
  onCancelExit: () => void;
  setEmailAddress: (v: string) => void;
  setOtherLocationText: (v: Record<number, string>) => void;
  setOtherLocationConfirmed: (v: Record<number, boolean>) => void;
  setIsCompleted: (v: boolean) => void;
  onDownloadQR: () => void;
}

export function useSurvey(qrRef: RefObject<HTMLDivElement>): UseSurveyReturn {
  const navigate = useNavigate();

  const [screen, setScreen] = useState<SurveyScreen>('language');
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [hasReadTerms, setHasReadTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [otherLocationText, setOtherLocationText] = useState<Record<number, string>>({});
  const [otherLocationConfirmed, setOtherLocationConfirmed] = useState<Record<number, boolean>>({});
  const [emailAddress, setEmailAddress] = useState('');
  const [showExitModal, setShowExitModal] = useState(false);
  const [couponUrl, setCouponUrl] = useState<string | undefined>(undefined);

  const t: LanguageTranslation = useMemo(
    () => surveyTranslations[selectedLanguage ?? 'no'],
    [selectedLanguage]
  );

  const isHeroy = isHeroySelection(selections);
  const isSandnessjoen = isSandnessjoenSelection(selections);
  const isDonna = isDonnaSelection(selections);
  const isLeirfjord = isLeirfjordSelection(selections);

  // Visible steps accounting for location-based skips
  const visibleSteps = useMemo(() => {
    const all = Array.from({ length: TOTAL_STEPS }, (_, i) => i);
    return all.filter((s) => {
      // Gender question (step 2) is now shown for ALL locations — no skip needed
      if (HEROY_SKIP_STEPS.includes(s) && isHeroy) return false;
      return true;
    });
  }, [isHeroy]);

  // Filtered options for the current step
  const questionOptions = useMemo((): QuestionOption[] => {
    if (!selectedLanguage) return [];
    const q = t.questions[currentStep];
    if (!q) return [];
    if (isHeroy && q.heroyOptions) return q.heroyOptions;
    if (isDonna && q.donnaOptions) return q.donnaOptions;
    if (isLeirfjord && q.leirfjordOptions) return q.leirfjordOptions;
    const opts = q.options ?? [];
    if (!isHeroy) return opts;
    const skipIdx = HEROY_SKIP_OPTIONS[currentStep] ?? [];
    return opts.filter((_, i) => !skipIdx.includes(i));
  }, [t, currentStep, isHeroy, isDonna, isLeirfjord, selectedLanguage]);

  const questionText = useMemo(() => {
    if (!selectedLanguage) return '';
    const q = t.questions[currentStep];
    if (!q) return '';
    if (isHeroy && q.heroyText) return q.heroyText;
    if (isDonna && q.donnaText) return q.donnaText;
    if (isLeirfjord && q.leirfjordText) return q.leirfjordText;
    return q.text ?? '';
  }, [t, currentStep, selectedLanguage, isHeroy, isDonna, isLeirfjord]);

  const progress = useMemo(() => {
    const idx = visibleSteps.indexOf(currentStep);
    const pos = idx >= 0 ? idx + 1 : 1;
    return (pos / visibleSteps.length) * 100;
  }, [currentStep, visibleSteps]);

  // isSelected: step has a selection; for Q0 option 4 (Other), must also be confirmed
  const isSelected = useMemo(() => {
    const sel = selections[currentStep];
    if (sel === undefined) return false;
    if (currentStep === 0 && sel === '4') return !!otherLocationConfirmed[0];
    return true;
  }, [currentStep, selections, otherLocationConfirmed]);

  // ─── Submit to Supabase ────────────────────────────────────────────────────
  const handleSubmit = useCallback(async () => {
    setScreen('submitting');

    // Minimum display time so the participant can read the loading message
    const minDelay = new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      // Build answers map
      const answers: Record<string, string> = {};
      Object.entries(selections).forEach(([step, optIdx]) => {
        const stepNum = parseInt(step);
        const q = t.questions[stepNum];
        if (q) {
          answers[`q${stepNum}`] = q.options[parseInt(optIdx)]?.label ?? optIdx;
        }
      });

      // Determine location label
      const locationLabel =
        selections[0] !== '4'
          ? (t.questions[0]?.options[parseInt(selections[0] ?? '0')]?.label ?? '')
          : (otherLocationText[0] ?? '');

      // 1. Insert survey response
      const { data: responseData, error: responseError } = await supabase
        .from('survey_responses')
        .insert({
          language: selectedLanguage,
          location: locationLabel,
          answers,
          email: emailAddress || null,
        })
        .select('id')
        .single();

      if (responseError) throw responseError;
      const surveyResponseId = responseData.id;

      // 2. Try to claim a coupon via RPC (atomic)
      let url: string | null = null;
      const { data: rpcData, error: rpcError } = await supabase.rpc('claim_coupon', {
        p_survey_response_id: surveyResponseId,
      });

      if (!rpcError && rpcData && rpcData.length > 0) {
        url = rpcData[0].url;
      } else {
        // Fallback: manual claim (may have slight race condition for high volume)
        const { data: coupons, error: fetchErr } = await supabase
          .from('coupons')
          .select('id, url, code')
          .eq('is_used', false)
          .order('expires_at', { ascending: true })
          .order('created_at', { ascending: true })
          .limit(1);

        if (fetchErr) throw fetchErr;
        if (!coupons || coupons.length === 0) throw new Error('No coupons available');

        const coupon = coupons[0];
        const { error: updateErr } = await supabase
          .from('coupons')
          .update({
            is_used: true,
            used_at: new Date().toISOString(),
            survey_response_id: surveyResponseId,
          })
          .eq('id', coupon.id)
          .eq('is_used', false);

        if (updateErr) throw updateErr;
        url = coupon.url;
      }

      setCouponUrl(url ?? 'https://www.narvesen.no');
      await minDelay;
      setScreen('thankyou');
    } catch (err) {
      console.error('Survey submission error:', err);
      // Still show thank-you page with fallback URL
      setCouponUrl('https://www.narvesen.no');
      await minDelay;
      setScreen('thankyou');
    }
  }, [selections, t, selectedLanguage, otherLocationText, emailAddress]);

  // ─── Navigation ───────────────────────────────────────────────────────────
  const onNext = useCallback(() => {
    const lastVisible = visibleSteps[visibleSteps.length - 1];
    const isLastQuestion = currentStep === lastVisible;
    if (isLastQuestion) {
      handleSubmit();
      return;
    }
    // Find next visible step
    let next = currentStep + 1;
    while (next < TOTAL_STEPS) {
      if (HEROY_SKIP_STEPS.includes(next) && isHeroy) { next++; continue; }
      break;
    }
    if (next >= TOTAL_STEPS) {
      handleSubmit();
    } else {
      setCurrentStep(next);
    }
  }, [currentStep, isHeroy, handleSubmit, visibleSteps]);

  const onBack = useCallback(() => {
    let prev = currentStep - 1;
    while (prev > 0) {
      if (HEROY_SKIP_STEPS.includes(prev) && isHeroy) { prev--; continue; }
      break;
    }
    if (prev >= 0) setCurrentStep(prev);
  }, [currentStep, isHeroy]);

  const onSelect = useCallback(
    (optionId: string) => {
      setSelections((prev) => ({ ...prev, [currentStep]: optionId }));
    },
    [currentStep]
  );

  // ─── Home / Exit ──────────────────────────────────────────────────────────
  const resetSurvey = () => {
    setScreen('language');
    setSelectedLanguage(null);
    setHasReadTerms(false);
    setCurrentStep(0);
    setSelections({});
    setOtherLocationText({});
    setOtherLocationConfirmed({});
    setEmailAddress('');
    setCouponUrl(undefined);
  };

  const onHome = useCallback(() => {
    if (screen === 'questions') {
      setShowExitModal(true);
    } else if (screen === 'thankyou') {
      navigate('/case-study');
    } else {
      resetSurvey();
    }
  }, [screen, navigate]);

  const onConfirmExit = useCallback(() => {
    setShowExitModal(false);
    resetSurvey();
  }, []);

  const onCancelExit = useCallback(() => {
    setShowExitModal(false);
  }, []);

  // ─── Language & Terms ─────────────────────────────────────────────────────
  const onSelectLanguage = useCallback((lang: Language) => {
    setSelectedLanguage(lang);
    setScreen('intro');
  }, []);

  const onStartSurvey = useCallback(() => {
    setScreen('questions');
    setCurrentStep(0);
  }, []);

  const onOpenTerms = useCallback(() => setShowTermsModal(true), []);
  const onAcceptTerms = useCallback(() => {
    setHasReadTerms(true);
    setShowTermsModal(false);
  }, []);
  const onCloseTerms = useCallback(() => setShowTermsModal(false), []);

  // ─── Completion ───────────────────────────────────────────────────────────
  const setIsCompleted = useCallback(
    (v: boolean) => {
      if (v) handleSubmit();
    },
    [handleSubmit]
  );

  // ─── Screenshot ───────────────────────────────────────────────────────────
  const onDownloadQR = useCallback(async () => {
    if (!qrRef.current) return;
    try {
      const dataUrl = await toPng(qrRef.current, {
        backgroundColor: '#ffffff',
        pixelRatio: 3,
      });
      const link = document.createElement('a');
      link.download = 'narvesen-kupong.png';
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Could not capture coupon image:', err);
      alert('Kunne ikke lagre bildet automatisk. Ta et skjermbilde manuelt.');
    }
  }, [qrRef]);

  return {
    screen,
    selectedLanguage,
    t,
    hasReadTerms,
    showTermsModal,
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
    bgImage:
      selections[0] === SANDNESSJOEEN_OPTION && currentStep === SANDNESSJOEEN_AGE_STEP
        ? sandnessjoenBg
        : BG_IMAGE,
    couponUrl,
    onSelectLanguage,
    onHome,
    onStartSurvey,
    onOpenTerms,
    onAcceptTerms,
    onCloseTerms,
    onSelect,
    onNext,
    onBack,
    onConfirmExit,
    onCancelExit,
    setEmailAddress,
    setOtherLocationText,
    setOtherLocationConfirmed,
    setIsCompleted,
    onDownloadQR,
  };
}