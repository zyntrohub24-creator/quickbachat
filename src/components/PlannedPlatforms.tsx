import React from 'react';
import { 
  Building2, 
  Store, 
  Sparkles, 
  Info, 
  ArrowUpRight, 
  Globe, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import { PlatformCardItem } from '../types/index.ts';

export const PlannedPlatforms: React.FC = () => {
  const platforms: PlatformCardItem[] = [
    {
      id: 'blinkit',
      name: 'Blinkit',
      category: 'Quick Commerce • Groceries & Essentials',
      monogram: 'BL',
      statusBadge: 'Planned Coverage',
      description: 'Intended comparison coverage for quick grocery delivery and household essentials in Hyderabad.',
    },
    {
      id: 'zepto',
      name: 'Zepto',
      category: 'Quick Commerce • Daily Needs & Fresh',
      monogram: 'ZP',
      statusBadge: 'Planned Coverage',
      description: 'Intended comparison coverage for 10-minute grocery staples, fresh produce and daily requirements.',
    },
    {
      id: 'swiggy-instamart',
      name: 'Swiggy Instamart',
      category: 'Quick Commerce • Instant Groceries',
      monogram: 'SI',
      statusBadge: 'Planned Coverage',
      description: 'Intended comparison coverage for packaged foods, snacks, dairy and instant everyday goods.',
    },
    {
      id: 'bigbasket',
      name: 'BigBasket',
      category: 'E-Grocery • Wide Catalog & Bulk Staples',
      monogram: 'BB',
      statusBadge: 'Planned Coverage',
      description: 'Intended comparison coverage for monthly groceries, bulk pack savings and slotted grocery deliveries.',
    },
  ];

  return (
    <section
      id="platforms"
      className="relative py-16 md:py-24 bg-[#fafbfc] dark:bg-[#070b11] border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20 transition-colors"
      aria-labelledby="planned-platforms-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
            <span>Retailer Integration Scope</span>
          </div>

          <h2
            id="planned-platforms-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Planned Shopping Platforms
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            QuickBachat is being designed to help shoppers compare matching products and shopping options across multiple retailers, starting with quick commerce in Hyderabad.
          </p>
        </div>

        {/* Initial Target Platforms: 4 Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {platforms.map((platform, idx) => (
            <div
              key={platform.id}
              id={`platform-card-${platform.id}`}
              className="group relative bg-white dark:bg-slate-900/90 hover:bg-slate-50/60 dark:hover:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Monogram + Badge */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  {/* Original Neutral Monogram Emblem */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-bold text-sm tracking-wider font-mono shadow-2xs border border-slate-800 dark:border-slate-700 group-hover:bg-emerald-800 group-hover:border-emerald-700 transition-colors">
                    {platform.monogram}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                    <span>{platform.statusBadge}</span>
                  </span>
                </div>

                {/* Retailer Name */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {platform.name}
                </h3>

                {/* Category Scope */}
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2.5">
                  {platform.category}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {platform.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono font-medium text-slate-400 dark:text-slate-500">Target #{`0${idx + 1}`}</span>
                <span className="text-slate-500 dark:text-slate-400 font-medium">Hyderabad Launch</span>
              </div>
            </div>
          ))}
        </div>

        {/* Future Expansion Section */}
        <div
          id="future-shopping-coverage"
          className="mt-10 max-w-4xl mx-auto rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-2xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center flex-shrink-0 text-emerald-700 dark:text-emerald-400">
              <Globe className="w-5 h-5" />
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  Future Shopping Coverage
                </h3>
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                  Exploratory Roadmap
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Broader e-commerce comparison, including possible Amazon and Flipkart integrations, may be explored later, subject to authorized data access, technical feasibility and applicable agreements.
              </p>
            </div>
          </div>
        </div>

        {/* Transparency Notice Card */}
        <div 
          id="platforms-transparency-notice"
          className="mt-6 max-w-4xl mx-auto rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs"
        >
          <Info className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white">Transparency Notice: </span>
            QuickBachat is an independent service under development. The retailers listed above represent intended comparison coverage, not confirmed partnerships or active integrations. Product information, prices, availability and shopping options will be introduced only when suitable authorized data access becomes available. Purchases will take place on the retailer’s platform.
          </p>
        </div>

      </div>
    </section>
  );
};
