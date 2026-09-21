import React from 'react';
import { HeroVisual } from './HeroVisual.tsx';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  HelpCircle,
  Clock,
  Compass,
  ChevronDown
} from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onHowItWorksClick }) => {
  const handleScrollDown = () => {
    const target = document.getElementById('how-it-works') || document.getElementById('features');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      onHowItWorksClick();
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative pt-8 pb-12 md:pt-14 md:pb-20 overflow-hidden"
      aria-labelledby="hero-main-heading"
    >
      {/* Background Subtle Ambience */}
      <div 
        className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-emerald-50/40 to-transparent pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            
            {/* Location & Status Banner */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <div 
                id="hero-market-badge"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold tracking-wide shadow-xs border dark:border-slate-700"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Starting in Hyderabad</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400">Coming Soon</span>
              </div>

              <div 
                id="hero-category-scope-badge"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium shadow-2xs"
              >
                <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Quick Commerce & Everyday Shopping</span>
              </div>
            </div>

            {/* Primary Headline */}
            <div className="space-y-3">
              <h1 
                id="hero-main-heading"
                className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]"
              >
                Shop smarter. <br />
                <span className="text-emerald-600 dark:text-emerald-400">Compare better.</span> <br />
                Save more.
              </h1>
              
              {/* Supporting Copy */}
              <p 
                id="hero-subtext"
                className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal"
              >
                QuickBachat is being built to help you discover products, compare shopping options and make better buying decisions — starting with quick commerce in Hyderabad.
              </p>
            </div>

            {/* CTAs */}
            <div 
              id="hero-cta-group"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <button
                id="hero-primary-cta"
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-base shadow-sm shadow-emerald-700/20 hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              >
                <span>Explore QuickBachat</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                type="button"
                onClick={onHowItWorksClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 active:bg-slate-100 dark:active:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-base border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-slate-300 dark:hover:border-slate-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>How It Works</span>
              </button>
            </div>

            {/* Journey Flow Ribbon: DISCOVER → UNDERSTAND → COMPARE → OPTIMIZE → SAVE → SHOP */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                The QuickBachat Experience Architecture
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.8 rounded text-slate-800 dark:text-slate-200">Discover</span>
                <span className="text-slate-400 dark:text-slate-600">→</span>
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.8 rounded text-slate-800 dark:text-slate-200">Understand</span>
                <span className="text-slate-400 dark:text-slate-600">→</span>
                <span className="bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.8 rounded text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">Compare</span>
                <span className="text-slate-400 dark:text-slate-600">→</span>
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.8 rounded text-slate-800 dark:text-slate-200">Optimize</span>
                <span className="text-slate-400 dark:text-slate-600">→</span>
                <span className="bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.8 rounded text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">Save</span>
                <span className="text-slate-400 dark:text-slate-600">→</span>
                <span className="bg-slate-900 dark:bg-emerald-600 px-2 py-0.8 rounded text-white font-semibold">Shop</span>
              </div>
            </div>

          </div>

          {/* Right Column: Original Concept Preview Visual */}
          <div className="lg:col-span-6 xl:col-span-6 mt-4 lg:mt-0">
            <HeroVisual />
          </div>

        </div>

        {/* Subtle Scroll Down Animation Indicator */}
        <div className="mt-12 md:mt-16 flex flex-col items-center justify-center text-center">
          <button
            id="hero-scroll-down-indicator"
            type="button"
            onClick={handleScrollDown}
            className="group inline-flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-2 cursor-pointer"
            aria-label="Scroll down to explore features and how QuickBachat works"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 group-hover:text-emerald-700 transition-colors">
              Explore Experience
            </span>
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200/90 shadow-2xs group-hover:border-emerald-300 group-hover:shadow-xs flex items-center justify-center transition-all animate-bounce">
              <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-emerald-600 transition-colors" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
