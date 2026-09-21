import React from 'react';
import { Search, Scale, Lightbulb, Shield } from 'lucide-react';
import { TrustPrinciple } from '../types/index.ts';

export const TrustStrip: React.FC = () => {
  const principles: TrustPrinciple[] = [
    {
      id: 'independent-discovery',
      title: 'Independent Discovery',
      description: 'Transparent exploration across grocery and everyday essentials without biased sponsored positioning.',
      iconName: 'Search',
    },
    {
      id: 'multi-platform-comparison',
      title: 'Multi-Platform Comparison',
      description: 'Structured comparison across target quick-commerce providers to evaluate true delivered value.',
      iconName: 'Scale',
    },
    {
      id: 'smarter-shopping-decisions',
      title: 'Smarter Shopping Decisions',
      description: 'Intelligent basket optimization, unit price transparency, and clear insights for every rupee spent.',
      iconName: 'Lightbulb',
    },
  ];

  const renderIcon = (id: string) => {
    switch (id) {
      case 'independent-discovery':
        return <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'multi-platform-comparison':
        return <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'smarter-shopping-decisions':
        return <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section 
      id="trust-status-strip" 
      className="border-y border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/60 py-10 transition-colors"
      aria-label="Core Principles and Trust Status"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle) => (
            <div
              key={principle.id}
              id={`trust-principle-${principle.id}`}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/60 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xs">
                {renderIcon(principle.id)}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Independent Development Note */}
        <div 
          id="trust-status-disclaimer" 
          className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400"
        >
          <div className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
            <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Development Disclosure</span>
          </div>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
          <p className="text-slate-500 dark:text-slate-400">
            QuickBachat is an independent service currently under development.
          </p>
        </div>
      </div>
    </section>
  );
};
