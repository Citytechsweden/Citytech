import React from 'react';
import { Language } from '../types';

interface FlagIconProps {
  language: Language;
  size?: number;
  /** Unique ID suffix to avoid SVG clipPath ID collisions on the same page */
  uid: string;
}

export function FlagIcon({ language, size = 32, uid }: FlagIconProps) {
  const clipId = `flag-clip-${language}-${uid}`;
  const r = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shadow-sm">
      <defs>
        <clipPath id={clipId}>
          <circle cx={r} cy={r} r={r} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {language === 'sv' && (
          <>
            <rect width={size} height={size} fill="#0066B3" />
            <rect x={size * 0.3125} y={0} width={size * 0.125} height={size} fill="#FECC00" />
            <rect x={0} y={size * 0.4375} width={size} height={size * 0.125} fill="#FECC00" />
          </>
        )}
        {language === 'no' && (
          <>
            <rect width={size} height={size} fill="#BA0C2F" />
            <rect x={size * 0.25} y={0} width={size * 0.25} height={size} fill="#FFFFFF" />
            <rect x={0} y={size * 0.375} width={size} height={size * 0.25} fill="#FFFFFF" />
            <rect x={size * 0.3125} y={0} width={size * 0.125} height={size} fill="#00205B" />
            <rect x={0} y={size * 0.4375} width={size} height={size * 0.125} fill="#00205B" />
          </>
        )}
        {language === 'ru' && (
          <>
            <rect width={size} height={size / 3} fill="#FFFFFF" />
            <rect y={size / 3} width={size} height={size / 3} fill="#0039A6" />
            <rect y={(size / 3) * 2} width={size} height={size / 3} fill="#D52B1E" />
          </>
        )}
        {language === 'ar' && (
          <>
            <rect width={size} height={size} fill="#006C35" />
            <text
              x={r}
              y={size * 0.42}
              fontSize={size * 0.25}
              fill="#FFFFFF"
              textAnchor="middle"
              fontFamily="Arial"
              fontWeight="bold"
            >
              لا إله
            </text>
            <text
              x={r}
              y={size * 0.625}
              fontSize={size * 0.25}
              fill="#FFFFFF"
              textAnchor="middle"
              fontFamily="Arial"
              fontWeight="bold"
            >
              إلا الله
            </text>
            <rect x={size * 0.333} y={size * 0.708} width={size * 0.333} height={size * 0.042} fill="#FFFFFF" />
          </>
        )}
        {language === 'en' && (
          <>
            <rect width={size} height={size} fill="#012169" />
            <path
              d={`M0 0 L${size} ${size} M${size} 0 L0 ${size}`}
              stroke="#FFFFFF"
              strokeWidth={size * 0.167}
            />
            <path
              d={`M0 0 L${size} ${size} M${size} 0 L0 ${size}`}
              stroke="#C8102E"
              strokeWidth={size * 0.1}
            />
            <rect x={size * 0.4167} y={0} width={size * 0.1667} height={size} fill="#FFFFFF" />
            <rect x={0} y={size * 0.4167} width={size} height={size * 0.1667} fill="#FFFFFF" />
            <rect x={size * 0.45} y={0} width={size * 0.1} height={size} fill="#C8102E" />
            <rect x={0} y={size * 0.45} width={size} height={size * 0.1} fill="#C8102E" />
          </>
        )}
      </g>
    </svg>
  );
}
