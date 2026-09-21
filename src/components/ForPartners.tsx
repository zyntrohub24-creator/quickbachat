import React from 'react';
import { 
  Store, 
  Database, 
  Link2, 
  Cpu, 
  Mail, 
  Info, 
  ArrowUpRight, 
  Handshake, 
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import { PartnerCardItem } from '../types/index.ts';

export const ForPartners: React.FC = () => {
  const partnerCards: (PartnerCardItem & { icon: React.ReactNode })[] = [
    {
      id: 'retailers-quick-commerce',
      number: '01',
      title: 'RETAILERS & QUICK-COMMERCE PLATFORMS',
      subtitle: 'Catalog & Discovery',
      description: 'Explore authorized product discovery, catalog, pricing, availability, retailer deep-link and shopping integration opportunities.',
      icon: <Store className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: 'data-catalog-providers',
      number: '02',
      title: 'DATA & CATALOG PROVIDERS',
      subtitle: 'Data & Specifications',
      description: 'Explore licensed product information, product images, specifications, pack-size matching, location-aware availability and data freshness solutions.',
      icon: <Database className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: 'affiliate-commerce-programs',
      number: '03',
      title: 'AFFILIATE & COMMERCE PROGRAMS',
      subtitle: 'Commercial & Attribution',
      description: 'Explore approved referral programs, retailer attribution, affiliate links and transparent commercial arrangements.',
      icon: <Link2 className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: 'technology-product-partners',
      number: '04',
      title: 'TECHNOLOGY & PRODUCT PARTNERS',
      subtitle: 'Infrastructure & Matching',
      description: 'Explore relevant technologies supporting product matching, shopping basket comparison, nutrition-label information, product specifications and reliable consumer shopping experiences.',
      icon: <Cpu className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section
      id="for-partners"
      className="relative py-16 md:py-24 bg-white dark:bg-[#0b0f17] border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20 transition-colors"
      aria-labelledby="for-partners-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
            <span>Ecosystem & Collaborations</span>
          </div>

          <h2
            id="for-partners-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Work With QuickBachat
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            QuickBachat is building an independent shopping discovery and comparison platform, starting in Hyderabad. We welcome conversations with businesses interested in helping shoppers access accurate product information and make more informed purchasing decisions.
          </p>
        </div>

        {/* Four Partnership Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {partnerCards.map((card) => (
            <div
              key={card.id}
              id={`partner-card-${card.id}`}
              className="group relative bg-[#fafbfc] dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon + Number Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/60 group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-colors">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700">
                    {card.number}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight mb-2 uppercase leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-medium text-slate-500 dark:text-slate-400">{card.subtitle}</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">Open Dialog</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Area */}
        <div
          id="partners-contact-area"
          className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-7 sm:p-10 shadow-lg border border-slate-800 text-center relative overflow-hidden"
        >
          {/* Subtle Ambient Background Element */}
          <div 
            className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-emerald-400 text-xs font-semibold">
              <Handshake className="w-3.5 h-3.5" />
              <span>Partnership Opportunities</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Interested in working with QuickBachat?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tell us about your organization and the partnership or integration opportunity you would like to discuss.
            </p>

            <div className="pt-3 flex flex-col items-center justify-center gap-3">
              <a
                id="partner-contact-cta-button"
                href="mailto:partnerships@quickbachat.in"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-950/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Our Partnerships Team</span>
              </a>

              <div className="text-xs text-slate-400 font-mono">
                Direct Email:{' '}
                <a 
                  href="mailto:partnerships@quickbachat.in"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2"
                >
                  partnerships@quickbachat.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency Notice */}
        <div 
          id="partners-transparency-notice"
          className="mt-8 max-w-4xl mx-auto rounded-xl bg-[#fafbfc] dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs"
        >
          <Info className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white">Transparency Notice: </span>
            QuickBachat is currently in development. Partnership discussions do not imply an existing commercial relationship, approved retailer integration or guaranteed access to any retailer’s data or services.
          </p>
        </div>

      </div>
    </section>
  );
};
