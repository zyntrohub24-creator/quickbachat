import React from 'react';
import { X, MapPin, Sparkles, Mail, ArrowRight, Shield, Bell } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface VisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'explore' | 'how-it-works' | 'roadmap';
}

export const VisionModal: React.FC<VisionModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'explore',
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="vision-info-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vision-modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-[#0d131f] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" showBadge={false} />
            <div className="border-l border-slate-200 dark:border-slate-700 pl-3">
              <h3 id="vision-modal-title" className="text-sm font-bold text-slate-900 dark:text-white">
                Pre-Launch Vision
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Starting in Hyderabad, India • Official Overview
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-slate-700 dark:text-slate-300">
          {/* Core Vision Statement */}
          <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-slate-800 dark:text-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Empowering Smarter Everyday Choices
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              QuickBachat is designed to help consumers discover products, compare shopping options across multiple quick-commerce providers, and optimize full shopping baskets to make better buying decisions.
            </p>
          </div>

          {/* 6-Step Experience Flow */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              The 6-Step Experience Flow
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <div className="font-bold text-slate-900 dark:text-white">1. Discover</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Products across everyday categories</div>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <div className="font-bold text-slate-900 dark:text-white">2. Understand</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Unit prices, ingredients & value</div>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <div className="font-bold text-slate-900 dark:text-white">3. Compare</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Cross-platform availability & cost</div>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <div className="font-bold text-slate-900 dark:text-white">4. Optimize</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Smart basket splitting & thresholds</div>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <div className="font-bold text-slate-900 dark:text-white">5. Save</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Real savings on every order</div>
              </div>
              <div className="p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40">
                <div className="font-bold text-emerald-900 dark:text-emerald-300">6. Shop</div>
                <div className="text-[11px] text-emerald-700 dark:text-emerald-400">Seamlessly on retailer apps</div>
              </div>
            </div>
          </div>

          {/* Planned Coverage Notice */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
            <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Planned Coverage Notice
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Initial planned coverage in Hyderabad includes quick-commerce platforms such as Blinkit, Zepto, Swiggy Instamart, and BigBasket. QuickBachat is an independent platform under active development and is not affiliated or partnered with these services.
            </p>
          </div>

          {/* Pre-launch Inquiries Channel */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <div className="p-4 rounded-xl bg-[#fafbfc] dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Pre-Launch Inquiries & Feedback
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Have questions, early feedback, or partnership queries regarding our Hyderabad launch?
                </p>
              </div>

              <a
                href="mailto:hello@quickbachat.in"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors flex-shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>hello@quickbachat.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>QuickBachat.in • Hyderabad Launch</span>
          <button
            type="button"
            onClick={onClose}
            className="font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-1 rounded hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
