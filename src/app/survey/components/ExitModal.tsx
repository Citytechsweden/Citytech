import React from 'react';
import { motion } from 'motion/react';

interface ExitModalProps {
  title: string;
  text: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ExitModal({ title, text, confirmLabel, cancelLabel, onConfirm, onCancel }: ExitModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-5 max-w-sm w-full shadow-2xl"
      >
        <h2 className="text-base font-bold mb-2 text-gray-900">{title}</h2>
        <p className="text-xs text-gray-600 mb-4">{text}</p>

        <div className="flex gap-2">
          <button
            onClick={onConfirm}
            className="flex-1 py-2 px-4 bg-red-500 hover:bg-red-600 text-white text-xs rounded-lg font-bold transition-all"
          >
            {confirmLabel}
          </button>
          <button
            onClick={onCancel}
            className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs rounded-lg font-bold transition-all"
          >
            {cancelLabel}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
