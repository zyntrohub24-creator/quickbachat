import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Info,
  Scale,
  ShoppingBag,
  TrendingDown,
  ShieldCheck
} from 'lucide-react';
import { ConceptTabType } from '../types/index.ts';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ConceptTabType>('comparison');

  return (
    <div
      id="hero-concept-preview-card"
      className="relative w-full max-w-lg lg:max-w-none mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 overflow-hidden transition-colors"
    >
      {/* Concept Preview Banner Header */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Concept Preview
          </span>
          <span className="text-xs font-medium text-slate-300 hidden sm:inline">
            Smart Decision Engine
          </span>
        </div>
        <div className="text-[11px] text-slate-400 flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          <span>Simulated Architecture</span>
        </div>
      </div>

      {/* Abstract Search & Discovery Input Bar */}
      <div className="p-4 bg-slate-50/70 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800">
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 px-3.5 py-2 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                Organic Rolled Oats (1kg) + Cold Pressed Oil
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                Multi-category discovery • Hyderabad Central
              </div>
            </div>
          </div>
          <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-800 flex-shrink-0 ml-2">
            Auto-Match
          </span>
        </div>

        {/* Feature Mode Selector Tabs */}
        <div className="grid grid-cols-3 gap-1.5 mt-3">
          <button
            type="button"
            onClick={() => setActiveTab('comparison')}
            className={`py-1.5 px-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'comparison'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600 font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800'
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="truncate">Compare Options</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('basket')}
            className={`py-1.5 px-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'basket'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600 font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="truncate">Smart Basket</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('insights')}
            className={`py-1.5 px-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'insights'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600 font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="truncate">Product Insights</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Concept Canvas */}
      <div className="p-4 sm:p-5 min-h-[260px] flex flex-col justify-between">
        {/* Tab 1: Multi-Platform Comparison Concept */}
        {activeTab === 'comparison' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pb-1">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Planned Platform Matrix</span>
              <span className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">
                Normalized Unit Values
              </span>
            </div>

            {/* Platform Card A - Optimal */}
            <div className="p-3 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-emerald-50/40 dark:bg-emerald-950/40 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                    #1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      Target Provider A
                      <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/80 px-1.5 py-0.2 rounded">
                        Optimized Choice
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Full Basket Available • Direct Fulfillment</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Highest Net Value</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Unit metric: Best balance</div>
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-emerald-200/60 dark:border-emerald-800/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Free delivery threshold met
                </span>
                <span className="font-medium text-emerald-800 dark:text-emerald-300">Score: 9.6 / 10</span>
              </div>
            </div>

            {/* Platform Card B */}
            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/70">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center">
                    #2
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Target Provider B</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">1 Item Partial Match • Standard Hub</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Alternate Option</div>
                  <div className="text-[10px] text-slate-400">Score: 8.8 / 10</div>
                </div>
              </div>
            </div>

            {/* Platform Card C */}
            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/70">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center">
                    #3
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Target Provider C</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Surge Packaging Fee Applicable</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">Higher Cost Base</div>
                  <div className="text-[10px] text-slate-400">Score: 7.9 / 10</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Smart Basket Optimization Concept */}
        {activeTab === 'basket' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="p-3 rounded-xl bg-slate-900 dark:bg-slate-950 text-white flex items-center justify-between border dark:border-slate-800">
              <div>
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4" />
                  Basket Optimization Logic
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  Multi-Source vs. Single Order Analysis
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-300 bg-emerald-950 px-2 py-1 rounded-md border border-emerald-800">
                  Concept Model
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2">
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                <span>Sample 5-Item Household Cart</span>
                <span className="text-slate-500 dark:text-slate-400">Hyderabad Metro</span>
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                  <span className="text-slate-700 dark:text-slate-300">Strategy A: Single Platform Checkout</span>
                  <span className="font-semibold text-slate-600 dark:text-slate-400">Standard Baseline</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                  <span className="font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Strategy B: QuickBachat Smart Split
                  </span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">Optimal Savings Route</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 italic text-center">
              Evaluates delivery fees, bundle thresholds, and unit prices automatically.
            </p>
          </div>
        )}

        {/* Tab 3: Product Insights Concept */}
        {activeTab === 'insights' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Comprehensive Product Clarity</span>
                <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/80 px-2 py-0.5 rounded">
                  Transparency
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase">Unit Rate Metric</div>
                  <div className="font-bold text-slate-800 dark:text-slate-200 mt-0.5">Price Per Gram / ml</div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">Reveals shrinkflation</div>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase">Nutrition & Quality</div>
                  <div className="font-bold text-slate-800 dark:text-slate-200 mt-0.5">Protein & Sugar Flag</div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">Clean label discovery</div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/40 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 dark:text-emerald-400 flex-shrink-0" />
              <div className="text-xs text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white">Unbiased Evaluation:</span> We don't rank by sponsored placement. Products are sorted by real mathematical value to you.
              </div>
            </div>
          </div>
        )}

        {/* Planned Platforms Footnote Strip inside the card */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Planned Quick-Commerce Coverage:</span>
            <span className="text-[10px] text-slate-400">Hyderabad (Initial)</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket'].map((platform) => (
              <span
                key={platform}
                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/80 dark:border-slate-700"
              >
                {platform}
              </span>
            ))}
          </div>

          <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
            *Planned coverage targets. Retailer names shown for roadmap context only. QuickBachat is an independent project and is not affiliated or partnered with these services.
          </p>
        </div>
      </div>
    </div>
  );
};
