import React from 'react';
import { 
  Search, 
  Scale, 
  ShoppingBag, 
  Tag, 
  Bell, 
  Bot, 
  ChefHat, 
  Compass,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import { FeatureCardItem } from '../types/index.ts';

export const Features: React.FC = () => {
  const features: (FeatureCardItem & { icon: React.ReactNode })[] = [
    {
      id: 'smart-product-search',
      number: '01',
      title: 'SMART PRODUCT SEARCH',
      status: 'In Development',
      description: 'Help shoppers discover relevant products, brands, pack sizes and variants across everyday shopping categories.',
      icon: <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'multi-platform-price-comparison',
      number: '02',
      title: 'MULTI-PLATFORM PRICE COMPARISON',
      status: 'In Development',
      description: 'Compare matching products across supported shopping platforms using authorized retailer information when available. Display prices, offers and availability with appropriate freshness and location context.',
      icon: <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'smart-basket',
      number: '03',
      title: 'SMART BASKET',
      status: 'In Development',
      description: 'Build a complete shopping list and explore single-retailer and split-basket options to understand estimated total costs and potential savings.',
      icon: <ShoppingBag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'deals-offers',
      number: '04',
      title: 'DEALS & OFFERS',
      status: 'In Development',
      description: 'Discover relevant retailer offers and evaluate their actual conditions and potential value before choosing where to shop.',
      icon: <Tag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'watchlist-price-alerts',
      number: '05',
      title: 'WATCHLIST & PRICE ALERTS',
      status: 'In Development',
      description: 'Save products of interest and receive useful price or availability updates when supported by verified data and notification infrastructure.',
      icon: <Bell className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'bachatai-assistant',
      number: '06',
      title: 'BACHATAI SHOPPING ASSISTANT',
      status: 'Planned Feature',
      description: 'A planned conversational assistant designed to help shoppers express their specific needs, discover suitable options and understand product trade-offs.',
      icon: <Bot className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'ai-recipe-shopping',
      number: '07',
      title: 'AI RECIPE SHOPPING',
      status: 'Planned Feature',
      description: 'A planned feature where users can search for a dish, review an ingredient list, adjust quantities and compare a complete ingredient basket.',
      icon: <ChefHat className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'smart-buying-guidance',
      number: '08',
      title: 'SMART BUYING GUIDANCE',
      status: 'Planned Feature',
      description: 'Future evidence-based product guidance that helps shoppers compare relevant specifications, quantity, nutrition information where appropriate, price and value across categories such as everyday groceries, kids snacks, fitness foods, phones and electronics.',
      icon: <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <section
      id="features"
      className="relative py-16 md:py-24 bg-white dark:bg-[#070b11] border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20 transition-colors"
      aria-labelledby="features-main-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
            <span>Platform Capabilities</span>
          </div>

          <h2
            id="features-main-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Explore QuickBachat Features
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            From comparing individual products to planning an entire shopping basket, QuickBachat is being designed to help you make more informed everyday shopping decisions.
          </p>
        </div>

        {/* 8 Feature Cards Grid (4 columns on large screens, 2 on tablets, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((feature) => {
            const isInDevelopment = feature.status === 'In Development';
            return (
              <div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                className="group relative bg-[#fafbfc] dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Status Badge */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:border-emerald-200 dark:group-hover:border-emerald-700 group-hover:bg-emerald-50/50 dark:group-hover:bg-emerald-950/50 transition-colors">
                      {feature.icon}
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                        isInDevelopment
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isInDevelopment ? 'bg-emerald-600 dark:bg-emerald-400' : 'bg-slate-400 dark:bg-slate-500'
                        }`}
                      ></span>
                      <span>{feature.status}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight mb-2 uppercase leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Number Tag */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                  <span className="font-mono text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                    FEATURE #{feature.number}
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                    Pre-Launch
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Roadmap & Pre-Launch Note */}
        <div 
          id="features-prelaunch-notice"
          className="mt-12 max-w-4xl mx-auto rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs"
        >
          <Info className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white">Pre-Launch Roadmap Context: </span>
            Features labeled <span className="font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 text-[11px]">In Development</span> are currently in active development for the initial Hyderabad rollout. Features labeled <span className="font-semibold text-slate-800 dark:text-slate-200 bg-slate-200/70 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 text-[11px]">Planned Feature</span> represent future product roadmap capabilities to be rolled out progressively with authorized integrations.
          </div>
        </div>

      </div>
    </section>
  );
};
