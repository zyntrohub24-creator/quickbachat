import React from 'react';
import { 
  Mail, 
  Headphones, 
  Briefcase, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  Info,
  ArrowUpRight,
  Instagram
} from 'lucide-react';
import { ContactCardItem } from '../types/index.ts';

export const Contact: React.FC = () => {
  const contactCards: (ContactCardItem & { icon: React.ReactNode })[] = [
    {
      id: 'general-enquiries',
      title: 'GENERAL ENQUIRIES',
      category: 'General & Feedback',
      emails: ['hello@quickbachat.in'],
      description: 'For general questions, feedback and information about QuickBachat.',
      icon: <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'customer-support',
      title: 'CUSTOMER SUPPORT',
      category: 'Shopper Assistance',
      emails: ['support@quickbachat.in'],
      description: 'For questions about the QuickBachat experience and future customer support.',
      icon: <Headphones className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'business-partnerships',
      title: 'BUSINESS & PARTNERSHIPS',
      category: 'Commercial & Integrations',
      emails: ['partnerships@quickbachat.in'],
      description: 'For retailer integrations, authorized data access, affiliate programs and business collaboration enquiries.',
      icon: <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'privacy-legal',
      title: 'PRIVACY & LEGAL',
      category: 'Governance & Compliance',
      emails: ['privacy@quickbachat.in', 'legal@quickbachat.in'],
      description: 'For privacy-related questions, legal notices and relevant policy enquiries.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-[#fafbfc] dark:bg-[#070b11] border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20 transition-colors"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
            <span>Get in Touch</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Contact QuickBachat
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Have a question about QuickBachat, want to share feedback or explore a business opportunity? Get in touch with the appropriate team.
          </p>
        </div>

        {/* Four Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8">
          {contactCards.map((card) => (
            <div
              key={card.id}
              id={`contact-card-${card.id}`}
              className="group relative bg-white dark:bg-slate-900/90 hover:bg-slate-50/70 dark:hover:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100/90 dark:group-hover:bg-emerald-900/60 group-hover:border-emerald-200 dark:group-hover:border-emerald-700 transition-colors">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-100 dark:border-slate-700">
                    {card.category}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight mb-2 uppercase">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-5">
                  {card.description}
                </p>
              </div>

              {/* Bottom Email Action(s) */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                {card.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/60 border border-slate-200/80 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 text-slate-800 dark:text-slate-200 hover:text-emerald-900 dark:hover:text-emerald-300 transition-colors group/link focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-label={`Send email to ${email}`}
                  >
                    <span className="text-xs font-mono font-semibold truncate mr-2 text-slate-700 dark:text-slate-300 group-hover/link:text-emerald-800 dark:group-hover/link:text-emerald-300">
                      {email}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-emerald-600 dark:group-hover/link:text-emerald-400 flex-shrink-0 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Official Instagram Channel Card */}
        <div
          id="contact-instagram-channel"
          className="max-w-4xl mx-auto mb-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left hover:border-pink-300 dark:hover:border-pink-800/80 transition-all duration-200"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[2px] flex items-center justify-center flex-shrink-0 shadow-xs">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5 justify-center sm:justify-start">
                <span>Official Social Channel</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                <span>Community & Updates</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Follow QuickBachat on Instagram
              </div>
            </div>
          </div>

          <a
            id="contact-instagram-link"
            href="https://www.instagram.com/quickbachat/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-700 hover:via-rose-700 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 group flex-shrink-0"
            aria-label="Visit QuickBachat official Instagram profile @quickbachat (opens in a new tab)"
          >
            <Instagram className="w-4 h-4 text-white" />
            <span className="tracking-wide">@quickbachat</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-pink-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Location & Status Bar */}
        <div
          id="contact-location-status"
          className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center flex-shrink-0 text-emerald-700 dark:text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Headquarters & Launch Base</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Starting in Hyderabad, Telangana, India
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Pre-launch • Coming Soon</span>
          </div>
        </div>

        {/* Transparency Note */}
        <div 
          id="contact-transparency-note"
          className="mt-6 max-w-4xl mx-auto rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs"
        >
          <Info className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white">Transparency Note: </span>
            QuickBachat is currently under development. Product comparison and shopping services are not yet publicly available.
          </p>
        </div>

      </div>
    </section>
  );
};
