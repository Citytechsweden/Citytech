import React, { RefObject } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scan } from 'lucide-react';
import QRCode from 'react-qr-code';


interface VoucherCardProps {
  disclaimer: string;
  qrRef: RefObject<HTMLDivElement>;
  onDownloadQR: () => void;
  /** The QR code value / URL — unique coupon URL from Supabase */
  qrValue?: string;
  /** 8-digit coupon code shown below the QR image */
  couponCode?: string;
  /** Show blinking arrow above screenshot button */
  showArrow?: boolean;
}

export function VoucherCard({
  disclaimer,
  qrRef,
  onDownloadQR,
  qrValue = 'https://www.narvesen.no',
  couponCode = '23235423',
  showArrow = false,
}: VoucherCardProps) {
  return (
    <motion.div
      ref={qrRef}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl mb-6 text-left"
    >
      {/* Narvesen-style header */}
      <div className="flex justify-center items-center bg-[#ffffff00] w-[16px] h-[16px]">
        
      </div>

      {/* Tagline bar */}
      

      {/* QR section */}
      <div className="p-4 flex flex-col items-center border-b border-dashed border-gray-200">
        {/* Narvesen logo above QR code */}
        <div className="flex justify-center items-center mb-3">
          <img src={narvesenLogo} alt="Narvesen" className="h-[118px] object-contain mx-[0px] mt-[-50px] mb-[0px]" />
        </div>

        <div className="bg-white p-2 rounded-lg shadow-inner border border-gray-100 mb-2">
          <QRCode
            value={qrValue}
            size={200}
            fgColor="#005293"
            className="m-0"
          />
        </div>

        {/* Coupon code below QR */}
        <div className="flex flex-col items-center mb-3">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Kupongkod</p>
          <div className="bg-[#f0f4f8] border border-dashed border-[#005293] rounded-lg px-4 py-2">
            <span className="font-mono font-bold text-[22px] tracking-[0.25em] text-[#005293] select-all">
              {couponCode}
            </span>
          </div>
        </div>

        {/* Screenshot button with blinking arrow */}
        <div className="w-full flex justify-end items-center mb-2 relative">
          {/* Blinking blue arrow */}
          <AnimatePresence>
            {showArrow && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 -top-9 flex flex-col items-center pointer-events-none"
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  {/* Arrow shaft */}
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut' }}
                    className="w-1 h-4 rounded-full bg-[#006AA7]"
                  />
                  {/* Arrow head pointing down */}
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut' }}
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: '7px solid transparent',
                      borderRight: '7px solid transparent',
                      borderTop: '10px solid #006AA7',
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={onDownloadQR}
            title="Ta skärmbild"
            className="flex items-center gap-1 px-2 py-1 hover:bg-[#004070] text-[#F9A825] rounded-md text-[8px] font-bold transition-all active:scale-95 shadow bg-[#fbe816c4]"
          >
            <Scan size={20} className="text-[#005293]" />
          </button>
        </div>

        
      </div>

      {/* Footer */}
      <div className="p-2 flex justify-center items-center bg-gray-50">
        
      </div>
    </motion.div>
  );
}