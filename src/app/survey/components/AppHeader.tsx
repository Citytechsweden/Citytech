import React from 'react';
import { Home } from 'lucide-react';
import { FlagIcon } from './FlagIcon';
import { Language } from '../types';


interface AppHeaderProps {
  onHome: () => void;
  selectedLanguage: Language | null;
  /** Optionally show a coloured top bar. Pass a Tailwind bg colour class, e.g. "bg-green-500" */
  topBarClass?: string;
  /** Unique suffix for flag SVG clip-path IDs */
  uid: string;
  /** Hide the home button (e.g. on the last page) */
  hideHomeButton?: boolean;
}

export function AppHeader({ onHome, selectedLanguage, topBarClass, uid, hideHomeButton }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
      {topBarClass ? (
        <div className={`h-1.5 w-full ${topBarClass}`} />
      ) : (
        <div className="h-1.5 w-full bg-gray-50" />
      )}
      <div className="relative flex items-center justify-center px-6 py-4">
        {!hideHomeButton && (
        <button
          onClick={onHome}
          className="absolute left-6 w-10 h-10 flex items-center justify-center text-orange-500 hover:text-orange-600 active:scale-95 transition-all"
          aria-label="Go home"
        >
          <Home size={20} />
        </button>
        )}

        {/* CityTech inline logo */}
        <div className="h-12 flex items-center">
          <img
            src={logoImage}
            alt="CityTech Logo"
            className="h-16 w-48 object-contain"
          />
        </div>

        {selectedLanguage && (
          <button
            onClick={onHome}
            className="absolute right-6 hover:opacity-80 transition-opacity"
            aria-label="Change language"
          >
            <FlagIcon language={selectedLanguage} size={24} uid={uid} />
          </button>
        )}
      </div>
    </header>
  );
}