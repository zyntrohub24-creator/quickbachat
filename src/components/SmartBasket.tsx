import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Layers, 
  Split, 
  Store, 
  CheckCircle2, 
  Info, 
  Plus, 
  Minus, 
  Scale, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface BasketItem {
  id: string;
  name: string;
  variant: string;
  category: string;
  initialQty: number;
}

export const SmartBasket: React.FC = () => {
  // Sample interactive quantity state for conceptual illustration
  const [quantities, setQuantities] = useState<Record<string, number>>({
    milk: 2,
    atta: 1,
    oil: 1,
    earphones: 1,
  });

  const sampleItems: BasketItem[] = [
    { id: 'milk', name: 'Fresh Milk', variant: '1 Litre • Standard Pack', category: 'Dairy', initialQty: 2 },
    { id: 'atta', name: 'Whole Wheat Atta', variant: '5 kg • Premium Grain', category: 'Pantry', initialQty: 1 },
    { id: 'oil', name: 'Cooking Oil', variant: '1 Litre • Cold Pressed', category: 'Cooking Staples', initialQty: 1 },
    { id: 'earphones', name: 'Wired Earphones', variant: 'Type-C • Everyday Audio', category: 'Electronics', initialQty: 1 },
  ];

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, Math.min(5, (prev[id] || 1) + delta))
    }));
  };

  return (
    <section
      id="smart-basket"
      className="relative py-16 md:py-24 bg-white dark:bg-[#0b0f17] border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20 transition-colors"
      aria-labelledby="smart-basket-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
            <span>Basket Optimization</span>
          </div>

          <h2
            id="smart-basket-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Your entire shopping list. One smarter comparison.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Smart Basket is being designed to help you compare the estimated cost of a complete shopping list across supported retailers, so you can evaluate your options before placing an order.
          </p>
        </div>

        {/* Two-Column Responsive Layout: Left Explanatory 3-Part Guide / Right Visual Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: 3 Explanatory Parts */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* PART 1 — BUILD YOUR BASKET */}
            <div 
              id="smart-basket-part-1"
              className="p-5 sm:p-6 rounded-2xl bg-[#fafbfc] dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center flex-shrink-0 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                  01
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                      Part 1 — Build Your Basket
                    </h3>
                    <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-800">
                      Multi-Item List
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Add multiple products across categories, select exact variants and pack sizes, and adjust quantities to mirror your real household shopping needs.
                  </p>
                </div>
              </div>
            </div>

            {/* PART 2 — COMPARE COMPLETE COSTS */}
            <div 
              id="smart-basket-part-2"
              className="p-5 sm:p-6 rounded-2xl bg-[#fafbfc] dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center flex-shrink-0 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                  02
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                      Part 2 — Compare Complete Costs
                    </h3>
                    <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      Holistic Calculation
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Evaluate available retailer prices alongside applicable delivery fees, minimum order thresholds, active offers, stock availability and fulfillment conditions when authorized data supports them.
                  </p>
                </div>
              </div>
            </div>

            {/* PART 3 — EXPLORE SHOPPING OPTIONS */}
            <div 
              id="smart-basket-part-3"
              className="p-5 sm:p-6 rounded-2xl bg-[#fafbfc] dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors space-y-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center flex-shrink-0 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                  03
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                      Part 3 — Explore Shopping Options
                    </h3>
                    <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-800">
                      Two Comparison Models
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Explore two structured approaches tailored to your convenience and estimated cost goals:
                  </p>
                </div>
              </div>

              {/* Sub-options for Part 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Store className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Best Single Store
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                    Evaluate purchasing the full available basket from a single retailer for maximum delivery simplicity.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Split className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Smart Split
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                    Explore whether splitting items across multiple retailers could reduce overall costs after factoring in delivery fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Shopping Logic Pillars */}
            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800 space-y-2">
              <div className="text-xs font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                Key Evaluation Principles
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pl-1">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Matches exact product variants and pack weights wherever reliable data permits.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Factors in estimated delivery charges, packaging fees, and minimum cart values.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Clearly marks potential out-of-stock items and substitution caveats.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Premium Concept Visual Illustration */}
          <div className="lg:col-span-6 space-y-4">
            
            <div 
              id="smart-basket-visual-card"
              className="bg-[#fafbfc] dark:bg-slate-900/90 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-md p-5 sm:p-6 space-y-5"
            >
              {/* Concept Header Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Sample Household Basket</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">4 Everyday Items • Hyderabad Metro</div>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.8 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Concept Preview — Not Live Retailer Data
                </span>
              </div>

              {/* Four Abstract Product Rows */}
              <div className="space-y-2.5">
                {sampleItems.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 dark:text-white truncate">{item.name}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">{item.variant}</div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[10px] text-slate-400 font-medium">Qty:</span>
                      <div className="inline-flex items-center border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 px-1.5 py-0.5 gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                        <button 
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 focus:outline-none cursor-pointer"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-3 text-center text-xs">{quantities[item.id] || item.initialQty}</span>
                        <button 
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 focus:outline-none cursor-pointer"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Two Option Concept Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                
                {/* Single-Store Option Concept Card */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                      Single-Store Option
                    </span>
                    <span className="text-[9px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">
                      Model A
                    </span>
                  </div>
                  
                  <div className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                    <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-700">
                      <span>Fulfillment</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">1 Delivery Slot</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-700">
                      <span>Fee Structure</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">Standard Threshold</span>
                    </div>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium pt-1">
                      • Compare estimated totals
                    </div>
                  </div>
                </div>

                {/* Split-Basket Option Concept Card */}
                <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5">
                      <Split className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                      Split-Basket Option
                    </span>
                    <span className="text-[9px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/80 px-1.5 py-0.5 rounded">
                      Model B
                    </span>
                  </div>
                  
                  <div className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                    <div className="flex justify-between py-0.5 border-b border-emerald-100 dark:border-emerald-900/60">
                      <span>Fulfillment</span>
                      <span className="font-semibold text-emerald-900 dark:text-emerald-300">Multi-Store Routing</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-emerald-100 dark:border-emerald-900/60">
                      <span>Fee Structure</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">Combined Delivery Net</span>
                    </div>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium pt-1">
                      • Consider delivery fees
                    </div>
                  </div>
                </div>

              </div>

              {/* Explanatory Guidance Tags */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2 text-[10px] text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                  <Info className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  <span>Review retailer availability</span>
                </div>
                <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                  <ShieldCheck className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  <span>Verify before checkout</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Section Disclosure Note */}
        <div 
          id="smart-basket-disclosure-card"
          className="mt-12 max-w-4xl mx-auto rounded-xl bg-[#fafbfc] dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs"
        >
          <Info className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Smart Basket is currently in development. Comparison results will depend on authorized retailer data, product availability, location, applicable fees and offer conditions. Final prices and order details must be verified with the retailer.
          </p>
        </div>

      </div>
    </section>
  );
};
