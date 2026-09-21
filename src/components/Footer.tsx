import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  ArrowUpRight, 
  Sparkles,
  ExternalLink,
  Store,
  Layers,
  ShoppingBag,
  HelpCircle,
  Shield,
  Scale,
  Instagram
} from 'lucide-react';

interface FooterProps {
  onNavigatePrivacy: () => void;
  onNavigateTerms?: () => void;
  onNavigateHomeSection?: (sectionId: string) => void;
  onOpenRoadmap?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigatePrivacy, 
  onNavigateTerms,
  onNavigateHomeSection,
  onOpenRoadmap 
}) => {
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavigateHomeSection) {
      onNavigateHomeSection(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer"
      className="border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#070b11] text-slate-600 dark:text-slate-400 transition-colors"
      aria-label="Website Footer"
    >
      {/* Upper Footer Navigation & Brand Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <BrandLogo size="md" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              QuickBachat is an independent smart grocery and quick-commerce price comparison platform being built to help Hyderabad households evaluate options, optimize shopping baskets, and save on daily essentials.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <span>Pre-Launch Development</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium border border-slate-200 dark:border-slate-700">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                id="footer-brand-instagram-link"
                href="https://www.instagram.com/quickbachat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-pink-50/70 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200/80 hover:border-pink-200 dark:border-slate-700 dark:hover:border-pink-900/60 text-slate-700 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400 text-xs font-medium transition-all group"
                aria-label="Follow QuickBachat on Instagram @quickbachat (opens in a new tab)"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                <span>@quickbachat</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Explore
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#how-it-works"
                  id="footer-link-how-it-works"
                  onClick={(e) => handleSectionClick(e, 'how-it-works')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  id="footer-link-features"
                  onClick={(e) => handleSectionClick(e, 'features')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  Key Features
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  id="footer-link-categories"
                  onClick={(e) => handleSectionClick(e, 'categories')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  Everyday Categories
                </a>
              </li>
              <li>
                <a
                  href="#smart-basket"
                  id="footer-link-smart-basket"
                  onClick={(e) => handleSectionClick(e, 'smart-basket')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  Smart Basket
                </a>
              </li>
              <li>
                <a
                  href="#platforms"
                  id="footer-link-platforms"
                  onClick={(e) => handleSectionClick(e, 'platforms')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  Planned Retailers
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem & Partnerships Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Company & Vision
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#about"
                  id="footer-link-about"
                  onClick={(e) => handleSectionClick(e, 'about')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  About QuickBachat
                </a>
              </li>
              <li>
                <a
                  href="#for-partners"
                  id="footer-link-for-partners"
                  onClick={(e) => handleSectionClick(e, 'for-partners')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  Work With Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  id="footer-link-contact"
                  onClick={(e) => handleSectionClick(e, 'contact')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  Contact Desk
                </a>
              </li>
              {onOpenRoadmap && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenRoadmap}
                    id="footer-btn-roadmap"
                    className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    Vision & Roadmap
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Legal & Governance Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Legal & Trust
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  id="footer-terms-and-conditions-link"
                  onClick={onNavigateTerms}
                  className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-semibold underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
                  aria-label="Open QuickBachat Terms and Conditions"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Terms & Conditions</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="footer-privacy-policy-link"
                  onClick={onNavigatePrivacy}
                  className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-semibold underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
                  aria-label="Open QuickBachat Privacy Policy"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <div className="text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Legal Contact:</span>
                  <br />
                  <a
                    id="footer-legal-email-link"
                    href="mailto:legal@quickbachat.in"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-mono text-[11px]"
                  >
                    legal@quickbachat.in
                  </a>
                </div>
              </li>
              <li className="pt-1">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  QuickBachat is an independent service under development. Trademarks and brand names belong to their respective holders.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60 py-6 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-slate-500 dark:text-slate-400">
            <span>© {currentYear} QuickBachat. All rights reserved.</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span>QuickBachat.in</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span>Pre-launch Hyderabad</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
            <button
              type="button"
              id="footer-sub-terms-btn"
              onClick={onNavigateTerms}
              className="text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors font-medium cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <button
              type="button"
              id="footer-sub-privacy-btn"
              onClick={onNavigatePrivacy}
              className="text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors font-medium cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href="mailto:hello@quickbachat.in"
              id="footer-general-email-link"
              className="text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors font-mono"
            >
              hello@quickbachat.in
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              id="footer-sub-instagram-link"
              href="https://www.instagram.com/quickbachat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
              aria-label="Visit QuickBachat official Instagram profile @quickbachat (opens in a new tab)"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
              <span>@quickbachat</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
