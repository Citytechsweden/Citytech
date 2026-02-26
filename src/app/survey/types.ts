export type Language = 'sv' | 'no' | 'ru' | 'ar' | 'en';

export interface QuestionOption {
  label: string;
  description?: string;
  skipForHeroy?: boolean;
}

export interface SurveyQuestion {
  text: string;
  heroyText?: string;
  heroyOptions?: QuestionOption[];
  donnaText?: string;
  donnaOptions?: QuestionOption[];
  leirfjordText?: string;
  leirfjordOptions?: QuestionOption[];
  options: QuestionOption[];
}

export interface LanguageTranslation {
  welcomeTitle: string;
  welcomeText: string;
  introText: string;
  termsButton: string;
  termsTitle: string;
  termsText: string;
  termsAccept: string;
  termsClose: string;
  startSurvey: string;
  thankYou: string;
  thankYouText: string;
  voucherDisclaimer: string;
  goToHome: string;
  back: string;
  next: string;
  finish: string;
  completeSurvey: string;
  emailPlaceholder: string;
  exitModalTitle: string;
  exitModalText: string;
  exitModalConfirm: string;
  exitModalCancel: string;
  submittingLine1: string;
  submittingLine2: string;
  questions: SurveyQuestion[];
}

export type SurveyScreen = 'language' | 'intro' | 'questions' | 'submitting' | 'thankyou';

export interface Coupon {
  id: string;
  url: string;
  code: string;
  expires_at: string;
  batch: number;
}