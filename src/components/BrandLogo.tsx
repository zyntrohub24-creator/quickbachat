import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  showBadge = true
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon: Modern Shopping Bag + Speed & Savings Bolt Monogram */}
      <div
        className={`${iconSizes[size]} relative rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-700 flex items-center justify-center text-white shadow-sm shadow-emerald-700/25 ring-1 ring-emerald-500/30 flex-shrink-0 transition-transform duration-200 group-hover:scale-105`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6 text-white drop-shadow-2xs"
        >
          {/* Subtle Background Glow Accent */}
          <circle cx="18" cy="18" r="14" fill="url(#qb-glow)" fillOpacity="0.15" />
          
          {/* Shopping Bag Contour / Outer Structure */}
          <path
            d="M9 13.5C9 12.1193 10.1193 11 11.5 11H24.5C25.8807 11 27 12.1193 27 13.5L25.8 24.5C25.65 25.85 24.5 26.85 23.14 26.85H12.86C11.5 26.85 10.35 25.85 10.2 24.5L9 13.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeOpacity="0.9"
          />

          {/* Bag Handle Loop (Arch) */}
          <path
            d="M13.5 11V8.5C13.5 6.567 15.067 5 17 5H19C20.933 5 22.5 6.567 22.5 8.5V11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Dynamic Speed & Savings 'Q' / '₹' Lightning Glyph */}
          <path
            d="M19.5 13.5L14 19H18L16.5 24.5L22.5 18H18.5L19.5 13.5Z"
            fill="#34d399"
            stroke="white"
            strokeWidth="0.75"
            strokeLinejoin="round"
          />

          <defs>
            <radialGradient id="qb-glow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex items-baseline">
        <span className={`${textSizes[size]} font-extrabold text-slate-900 dark:text-white tracking-tight`}>
          Quick<span className="text-emerald-600 dark:text-emerald-400">Bachat</span>
        </span>
        {showBadge && (
          <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800 ml-1 tracking-normal">
            .in
          </span>
        )}
      </div>
    </div>
  );
};

