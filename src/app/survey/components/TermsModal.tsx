import React from 'react';
import { motion } from 'motion/react';
import { formatTermsText } from '../utils';

interface TermsModalProps {
  title: string;
  text: string;
  acceptLabel: string;
  closeLabel: string;
  onAccept: () => void;
  onClose: () => void;
}

export function TermsModal({ title, text, acceptLabel, closeLabel, onAccept, onClose }: TermsModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl p-5 max-w-md w-full max-h-[80vh] flex flex-col shadow-2xl"
      >
        <h2 className="text-base font-bold mb-3 text-gray-900">{title}</h2>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
          <div
            className="text-xs text-gray-700 leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: formatTermsText(text)
              .replace(/Akram Abdulkadir/g, '<strong>Akram Abdulkadir</strong>')
              .replace(/info@citytech\.se/g, '<strong>info@citytech.se</strong>')
              // "Villkor för deltagande" – alla språk
              .replace(/Villkor för deltagande/g, '<strong>Villkor för deltagande</strong>')
              .replace(/Vilkår for deltakelse/g, '<strong>Vilkår for deltakelse</strong>')
              .replace(/Условия участия/g, '<strong>Условия участия</strong>')
              .replace(/شروط المشاركة/g, '<strong>شروط المشاركة</strong>')
              .replace(/Terms of Participation/g, '<strong>Terms of Participation</strong>')
              // "Syfte med undersökningen" – alla språk
              .replace(/Syfte med undersökningen/g, '<strong>Syfte med undersökningen</strong>')
              .replace(/Formål med undersøkelsen/g, '<strong>Formål med undersøkelsen</strong>')
              .replace(/Цель опроса/g, '<strong>Цель опроса</strong>')
              .replace(/الغرض من الاستطلاع/g, '<strong>الغرض من الاستطلاع</strong>')
              .replace(/Purpose of the survey/g, '<strong>Purpose of the survey</strong>')
              // "Frivillighet" – alla språk
              .replace(/Frivillighet/g, '<strong>Frivillighet</strong>')
              .replace(/Добровольность/g, '<strong>Добровольность</strong>')
              .replace(/الطوعية/g, '<strong>الطوعية</strong>')
              .replace(/Voluntariness/g, '<strong>Voluntariness</strong>')
              // "Anonymitet och personuppgifter" – alla språk
              .replace(/Anonymitet och personuppgifter/g, '<strong>Anonymitet och personuppgifter</strong>')
              .replace(/Anonymitet og personopplysninger/g, '<strong>Anonymitet og personopplysninger</strong>')
              .replace(/Анонимность и персональные данные/g, '<strong>Анонимность и персональные данные</strong>')
              .replace(/إخفاء الهوية والبيانات الشخصية/g, '<strong>إخفاء الهوية والبيانات الشخصية</strong>')
              .replace(/Anonymity and personal data/g, '<strong>Anonymity and personal data</strong>')
              // "Belöning för deltagande" – alla språk
              .replace(/Belöning för deltagande/g, '<strong>Belöning för deltagande</strong>')
              .replace(/Belønning for deltakelse/g, '<strong>Belønning for deltakelse</strong>')
              .replace(/Вознаграждение за участие/g, '<strong>Вознаграждение за участие</strong>')
              .replace(/المكافأة على المشاركة/g, '<strong>المكافأة على المشاركة</strong>')
              .replace(/Reward for participation/g, '<strong>Reward for participation</strong>')
              // "10.06.2026" – samma på alla språk
              .replace(/10\.06\.2026/g, '<strong>10.06.2026</strong>')
              // "17.06.2026" – samma på alla språk
              .replace(/17\.06\.2026/g, '<strong>17.06.2026</strong>')
            }}
          />
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={onAccept}
            className="flex-1 py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-xs rounded-lg font-bold transition-all shadow-md hover:shadow-lg"
          >
            {acceptLabel}
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs rounded-lg font-bold transition-all"
          >
            {closeLabel}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}