import React from 'react';
import { 
  Building, 
  Target, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Compass,
  HeartHandshake,
  CheckCircle2,
  Info
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-white dark:bg-[#070b11] border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20 transition-colors"
      aria-labelledby="about-main-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
            <span>Our Mission & Vision</span>
          </div>

          <h2
            id="about-main-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            About QuickBachat
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            QuickBachat is an independent shopping discovery and comparison platform being built to bring clarity, transparency and basket optimization to everyday grocery and quick-commerce shopping.
          </p>
        </div>

        {/* 3 Core About Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Pillar 1 */}
          <div 
            id="about-pillar-consumer-first"
            className="p-6 sm:p-7 rounded-2xl bg-[#fafbfc] dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <Target className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  Independent & Consumer-First
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We are building an unbiased comparison tool designed to serve shoppers. Our product rankings and basket calculations prioritize true mathematical value and unit rate clarity without sponsored placement distortion.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Objective Price Intelligence</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div 
            id="about-pillar-hyderabad-focus"
            className="p-6 sm:p-7 rounded-2xl bg-[#fafbfc] dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  Tailored for Hyderabad
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Starting with Hyderabad's dynamic neighborhoods and quick-commerce ecosystem, our platform focuses on real-world local shopping habits, everyday pantry staples and multi-retailer delivery zones.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Hyperlocal Grocery Context</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div 
            id="about-pillar-smart-basket"
            className="p-6 sm:p-7 rounded-2xl bg-[#fafbfc] dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  Beyond Single-Item Comparison
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Real grocery shopping happens in baskets, not single items. Our Smart Basket architecture accounts for delivery fees, threshold minimums, pack sizes and multi-store splits to reveal the true bottom-line total.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Holistic Order Optimization</span>
            </div>
          </div>

        </div>

        {/* Pre-Launch Disclosure Banner */}
        <div 
          id="about-transparency-disclosure"
          className="max-w-4xl mx-auto rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 flex items-start gap-4 shadow-2xs"
        >
          <Info className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white">Pre-Launch Information: </span>
            QuickBachat is an independent software project currently in development. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with any quick-commerce or e-commerce platform. All product comparisons and features are in preview stage and subject to authorized retailer data availability at official launch.
          </div>
        </div>

      </div>
    </section>
  );
};
