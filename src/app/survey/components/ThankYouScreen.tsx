import React, { RefObject, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { Smile } from 'lucide-react';
import { AppHeader } from './AppHeader';
import { VoucherCard } from './VoucherCard';
import { Language, LanguageTranslation } from '../types';



const reminderMessages: Record<Language, string> = {
  sv: 'Kom ihåg ditt kupong innan du lämnar denna sida!',
  no: 'Husk kupongen din før du forlater denne siden!',
  ru: 'Не забудьте ваш купон перед тем, как покинуть эту страницу!',
  ar: 'تذكر قسيمتك قبل مغادرة هذه الصفحة!',
  en: 'Remember your coupon before leaving this page!',
};

const readMoreLabels: Record<Language, string> = {
  sv: 'Läs mer om initiativet',
  no: 'Les mer om initiativet',
  ru: 'Читать об инициативе',
  ar: 'اقرأ المزيد عن المبادرة',
  en: 'Read more about the initiative',
};

interface ThankYouScreenProps {
  t: LanguageTranslation;
  selectedLanguage: Language;
  bgImage: string;
  qrRef: RefObject<HTMLDivElement>;
  onHome: () => void;
  onDownloadQR: () => void;
  /** The unique QR code value / coupon URL assigned to this participant */
  qrValue?: string;
}

export function ThankYouScreen({
  t,
  selectedLanguage,
  bgImage,
  qrRef,
  onHome,
  onDownloadQR,
  qrValue,
}: ThankYouScreenProps) {
  const navigate = useNavigate();
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [showReminderPopup, setShowReminderPopup] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const handleDownloadQR = () => {
    setHasDownloaded(true);
    setShowArrow(false);
    onDownloadQR();
  };

  const handleHomeClick = () => {
    if (hasDownloaded) {
      onHome();
    } else {
      setShowReminderPopup(true);
    }
  };

  const handleReminderOk = () => {
    setShowReminderPopup(false);
    setShowArrow(true);
  };

  const handleReadMore = () => {
    if (hasDownloaded) {
      navigate(`/initiative?lang=${selectedLanguage}`);
    } else {
      setShowReminderPopup(true);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col font-sans overflow-hidden bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img src={thankYouBg} alt="Background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <AppHeader
          onHome={onHome}
          selectedLanguage={selectedLanguage}
          topBarClass="bg-green-500"
          uid="thankyou"
          hideHomeButton
        />

        <main className="flex-1 flex items-start justify-center px-6 pt-3">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="max-w-md w-full text-center"
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl bg-[#171158a6]">
              {/* Checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="flex justify-center mb-4"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#f2f82d]">
                  <Smile size={40} className="text-[#005293]" />
                </div>
              </motion.div>

              <h1 className="text-lg font-bold text-white mb-2 drop-shadow-lg">{t.thankYou}</h1>
              <p className="text-white/90 leading-relaxed mb-4 text-[13px]">{t.thankYouText}</p>

              <VoucherCard
                disclaimer={t.voucherDisclaimer}
                qrRef={qrRef}
                onDownloadQR={handleDownloadQR}
                qrValue={qrValue}
                showArrow={showArrow}
              />

              <button
                onClick={handleReadMore}
                className="w-full py-2.5 bg-[#006AA7] hover:bg-[#005a8e] text-[#FECC02] rounded-lg font-bold transition-all shadow-lg hover:shadow-xl active:scale-[0.98] px-[16px] py-[20px] text-[20px] italic"
              >
                {readMoreLabels[selectedLanguage]}
              </button>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Reminder Popup */}
      <AnimatePresence>
        {showReminderPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            style={{ backgroundColor: 'rgba(0,0,0,0.65)' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-white rounded-2xl shadow-2xl p-7 max-w-sm w-full text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
                  <img src={coffeeCup} alt="Narvesen kaffe" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed px-1 text-[20px] font-bold">
                {reminderMessages[selectedLanguage]}
              </p>
              <button
                onClick={handleReminderOk}
                className="w-full py-3 px-6 bg-[#FECC02] hover:bg-[#e6b800] text-[#005293] rounded-xl font-bold transition-all shadow-md active:scale-[0.97] text-sm"
              >
                Ok
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}