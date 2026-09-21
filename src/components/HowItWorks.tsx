import React from 'react';
import { 
  Search, 
  FileText, 
  Scale, 
  ShoppingBag, 
  TrendingDown, 
  Store,
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';
import { JourneyStep } from '../types/index.ts';

export const HowItWorks: React.FC = () => {
  const steps: (JourneyStep & { icon: React.ReactNode })[] = [
    {
      number: '01',
      title: 'DISCOVER',
      tag: 'Product Discovery',
      description: 'Search for groceries, electronics, everyday essentials and more.',
      icon: <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      number: '02',
      title: 'UNDERSTAND',
      tag: 'Information Clarity',
      description: 'Explore relevant product details, specifications and available information to help you evaluate your options.',
      icon: <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      number: '03',
      title: 'COMPARE',
      tag: 'Multi-Retailer View',
      description: 'Compare matching products and shopping options across supported retailers when authorized data becomes available.',
      icon: <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      number: '04',
      title: 'OPTIMIZE',
      tag: 'Basket Intelligence',
      description: 'Build a shopping basket and explore ways to reduce the estimated total cost.',
      icon: <ShoppingBag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      number: '05',
      title: 'SAVE',
      tag: 'Value Analysis',
      description: 'Review relevant prices, offers and basket-level savings opportunities before deciding.',
      icon: <TrendingDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      number: '06',
      title: 'SHOP',
      tag: 'Retailer Checkout',
      description: 'Continue to your chosen retailer to verify the final price, availability and complete your purchase.',
      icon: <Store className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-24 bg-slate-50/50 dark:bg-[#070b11] border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20 transition-colors"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
            <span>The Decision Journey</span>
          </div>

          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            How QuickBachat Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            From finding the right product to choosing where to shop, QuickBachat is being built to make everyday buying decisions simpler.
          </p>
        </div>

        {/* Desktop & Tablet Grid with Connected Visual Flow */}
        <div className="relative">
          
          {/* Interconnecting Background Line on Desktop (Row 1 to Row 2) */}
          <div 
            className="hidden lg:block absolute top-[72px] left-[15%] right-[15%] h-[2px] bg-slate-200 dark:bg-slate-800 -z-0 pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="hidden lg:block absolute bottom-[180px] left-[15%] right-[15%] h-[2px] bg-slate-200 dark:bg-slate-800 -z-0 pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Connected Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                id={`how-it-works-step-${step.number}`}
                className="group relative bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Top Bar: Icon + Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center shadow-2xs group-hover:bg-emerald-100/80 dark:group-hover:bg-emerald-900/60 transition-colors">
                      {step.icon}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Step
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Title & Tag */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {step.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-800">
                        {step.tag}
                      </span>
                    </div>

                    {/* Step Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Bottom Progress Accent */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                  <span className="font-medium text-[11px] text-slate-500 dark:text-slate-400">
                    Phase {index + 1} of 6
                  </span>
                  {index < steps.length - 1 ? (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-0.5 transition-transform">
                      Next Step <ArrowRight className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-700 dark:text-slate-200 font-semibold">
                      Complete Purchase
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Transparency & Development Notice */}
        <div 
          id="how-it-works-transparency-card"
          className="mt-12 max-w-4xl mx-auto rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center flex-shrink-0 border border-slate-200 dark:border-slate-700">
            <Info className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </div>

          <div className="space-y-1 flex-1">
            <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Transparency & Development Disclosure
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              QuickBachat is currently under development. Retailer coverage and shopping features will be introduced as authorized integrations become available. Purchases will be completed on the retailer's platform.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
