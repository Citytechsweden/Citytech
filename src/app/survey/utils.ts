import { Language } from './types';

export const languageNames: Record<Language, string> = {
  sv: 'Svenska',
  no: 'Norsk',
  ru: 'Русский',
  ar: 'العربية',
  en: 'English',
};

export function formatTermsText(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');
}

export function getReadTermsFirstLabel(language: Language): string {
  const labels: Record<Language, string> = {
    sv: 'Läs och acceptera villkoren för att fortsätta',
    no: 'Les og aksepter vilkårene for å fortsette',
    ru: 'Прочитайте и примите условия, чтобы продолжить',
    ar: 'اقرأ وقبل الشروط للمتابعة',
    en: 'Read and accept the terms to continue',
  };
  return labels[language];
}

export function getSelectOneLabel(language: Language): string {
  const labels: Record<Language, string> = {
    sv: 'Välj ett alternativ',
    no: 'Velg ett alternativ',
    ru: 'Выберите один вариант',
    ar: 'اختر خياراً واحداً',
    en: 'Select one option',
  };
  return labels[language];
}

export function getOtherLocationPlaceholder(language: Language): string {
  const labels: Record<Language, string> = {
    sv: 'Ange din plats...',
    no: 'Skriv inn stedet ditt...',
    ru: 'Введите ваше местоположение...',
    ar: 'أدخل موقعك...',
    en: 'Enter your location...',
  };
  return labels[language];
}
