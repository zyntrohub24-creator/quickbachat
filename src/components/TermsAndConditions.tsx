import React, { useEffect } from 'react';
import { 
  FileText, 
  ArrowLeft, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ExternalLink, 
  Clock, 
  AlertCircle, 
  HelpCircle, 
  Layers, 
  Scale, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  ShoppingBag, 
  Cpu, 
  Info,
  Globe
} from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface TermsAndConditionsProps {
  onBackToHome: () => void;
  onNavigatePrivacy?: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ 
  onBackToHome,
  onNavigatePrivacy 
}) => {
  // Ensure page scrolls to top when Terms & Conditions mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const sections = [
    { id: 'about-quickbachat', title: '1. About QuickBachat & Pre-Launch Status' },
    { id: 'independent-service', title: '2. Independent Comparison Service & No Retailer Partnerships' },
    { id: 'product-info-limits', title: '3. Product Information, Pricing & Accuracy Limitations' },
    { id: 'planned-features', title: '4. Planned Comparison, Smart Basket & AI Features' },
    { id: 'retailer-checkout', title: '5. External Retailer Websites & Checkout Transactions' },
    { id: 'concept-previews', title: '6. Illustrative Previews & Non-Live Sample Data' },
    { id: 'acceptable-use', title: '7. Acceptable Website Use & Prohibited Conduct' },
    { id: 'intellectual-property', title: '8. Intellectual Property & Brand Rights' },
    { id: 'third-party-links', title: '9. Third-Party Links & External Services' },
    { id: 'service-availability', title: '10. Website Availability & Modifications' },
    { id: 'disclaimers-limitations', title: '11. Limitations of Liability & Disclaimers' },
    { id: 'terms-changes', title: '12. Revisions & Updates to These Terms' },
    { id: 'contact-info', title: '13. Legal Contact Information & Governing Scope' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const lastUpdatedDate = 'September 21, 2026';
  const effectiveDate = 'September 21, 2026';

  return (
    <div className="min-h-screen bg-[#fafbfc] dark:bg-[#070b11] text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Header Sticky Bar */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            id="terms-back-to-home-btn"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-800 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            aria-label="Navigate back to QuickBachat home page"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-xs text-slate-400 dark:text-slate-500">Document:</span>
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              Official Terms & Conditions
            </span>
          </div>
        </div>
      </div>

      {/* Hero Banner Header */}
      <div className="relative py-12 md:py-16 bg-white dark:bg-[#0b0f17] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Legal Terms & User Agreement</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              QuickBachat Terms & Conditions
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              These Terms & Conditions govern your access to and use of the QuickBachat website (<span className="font-semibold text-slate-900 dark:text-slate-200">QuickBachat.in</span>). Please read these terms carefully before exploring our informational previews, upcoming features, and pre-launch updates.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Last Updated: {lastUpdatedDate}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Initial Launch Market: Hyderabad, India</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse"></span>
                <span>Pre-Launch Development Status</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Quick Navigation Sidebar (Desktop sticky) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Table of Contents Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                  <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Table of Contents</span>
                  </h2>
                  <span className="text-[10px] text-slate-400 font-mono">13 Sections</span>
                </div>

                <nav aria-label="Terms of service sections" className="space-y-1">
                  {sections.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className="block px-2.5 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 rounded-md transition-colors leading-snug"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Legal Contact Card */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Legal & Terms Inquiries</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Have questions, concerns, or feedback regarding these Terms & Conditions? Direct inquiries to our legal desk:
                </p>
                <a
                  href="mailto:legal@quickbachat.in"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:underline font-mono bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>legal@quickbachat.in</span>
                </a>
              </div>

              {/* Cross-Link to Privacy Policy */}
              {onNavigatePrivacy && (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Privacy Policy</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Read how we handle voluntary inquiries, local theme storage, and technical diagnostic data.
                  </p>
                  <button
                    type="button"
                    onClick={onNavigatePrivacy}
                    className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Privacy Policy</span>
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                  </button>
                </div>
              )}

            </div>
          </aside>

          {/* Right Column: Detailed Document Content */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-10">
            
            {/* Quick Summary / Key Highlights Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/90 to-slate-50/90 dark:from-emerald-950/40 dark:to-slate-900/40 border border-emerald-200 dark:border-emerald-800/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Pre-Launch Summary & Important Highlights</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
                <li><strong className="text-slate-900 dark:text-white">Pre-Launch Platform:</strong> QuickBachat is currently in active development for Hyderabad, India, and does not yet operate a live ordering or grocery fulfillment engine.</li>
                <li><strong className="text-slate-900 dark:text-white">Independent Aggregator:</strong> QuickBachat is an independent comparison service and is not partnered with, sponsored by, or affiliated with third-party retailers like Blinkit, Zepto, Swiggy Instamart, or BigBasket.</li>
                <li><strong className="text-slate-900 dark:text-white">Informational Use Only:</strong> All product listings, basket simulations, and comparison metrics on this website are illustrative previews for demonstration and user feedback.</li>
                <li><strong className="text-slate-900 dark:text-white">No In-App Purchases:</strong> We do not collect money, process checkout transactions, or sell goods. Final purchases occur solely on external retailer channels.</li>
              </ul>
            </div>

            {/* Section 1: About QuickBachat */}
            <section id="about-quickbachat" className="space-y-4 pt-4 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  1. About QuickBachat & Current Pre-Launch Status
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Welcome to <strong className="text-slate-900 dark:text-white">QuickBachat</strong>, accessible via <strong className="text-slate-900 dark:text-white">QuickBachat.in</strong> (the “Website”, “Platform”, “we”, “us”, or “our”). QuickBachat is an independent smart grocery and quick-commerce price comparison concept being engineered to help households evaluate grocery options, compare unit pricing, and optimize multi-item shopping baskets across quick-commerce providers.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Current Pre-Launch Status:</strong> The Website is presently operating in a <em>pre-launch, coming-soon informational preview state</em> with an initial focus on the <strong className="text-slate-900 dark:text-white">Hyderabad, India</strong> metropolitan region. During this stage, the Website serves as an interactive showcase of our planned architectural features, product roadmap, and value proposition.
                </p>
                <p>
                  By accessing, browsing, or interacting with the Website, you acknowledge and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should refrain from using the Website.
                </p>
              </div>
            </section>

            {/* Section 2: Independent Comparison Service */}
            <section id="independent-service" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  2. Independent Comparison Service & Absence of Retailer Partnerships
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  QuickBachat is an <strong className="text-slate-900 dark:text-white">independent consumer price intelligence platform</strong>. We are not owned, operated, authorized, endorsed, or sponsored by any third-party quick-commerce service, supermarket chain, or grocery retailer, including but not limited to Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, or Dunzo.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 text-xs">
                    <ShieldAlert className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>No Claim of Partnership or Agency</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    References to merchant names, platform titles, logos, product brands, and service trademarks on the Website are utilized strictly for descriptive, informational, and comparative identification purposes under standard fair dealing and nominative fair use principles. QuickBachat makes no claim of partnership, official integration, or agency with any named retailer unless expressly stated in writing.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Product Information & Accuracy */}
            <section id="product-info-limits" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  3. Product Information, Pricing & Accuracy Limitations
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Quick-commerce and grocery marketplaces experience rapid, hyper-localized fluctuations in product availability, Maximum Retail Price (MRP), discounted rates, surge charges, packaging fees, delivery thresholds, and inventory levels across specific pin codes and fulfillment dark stores.
                </p>
                <p>
                  While QuickBachat strives to design systems that accurately capture and compare grocery prices:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600 dark:text-slate-300">
                  <li><strong className="text-slate-900 dark:text-white">Informational Estimation:</strong> All comparative data, price differentials, unit calculations, and potential savings shown on the Website are provided solely for general informational and educational illustration.</li>
                  <li><strong className="text-slate-900 dark:text-white">Retailer Sole Authority:</strong> The authoritative price, taxes, platform fees, delivery times, and final availability of any item are determined exclusively by the respective retailer at the exact moment of checkout on their official app or website.</li>
                  <li><strong className="text-slate-900 dark:text-white">No Price Guarantees:</strong> QuickBachat does not warrant, guarantee, or represent that any displayed price or discount will be honored by third-party retailers.</li>
                </ul>
              </div>
            </section>

            {/* Section 4: Planned Features */}
            <section id="planned-features" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  4. Planned Comparison, Smart Basket & AI Features
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Our Website highlights several upcoming proprietary tools, including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-1">
                    <div className="font-semibold text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                      <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Smart Basket Multi-Store Split</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Algorithms designed to split grocery baskets across stores to maximize savings while factoring in minimum order thresholds and delivery costs.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-1">
                    <div className="font-semibold text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                      <span>AI-Powered Value & Quality Analysis</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Planned nutritional and unit-cost benchmarking to highlight healthier or higher-value alternative products.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <em>Disclaimer on Roadmap Items:</em> Descriptions of planned features, algorithms, interfaces, and capabilities represent product roadmaps and pre-launch objectives. QuickBachat reserves the right to modify, refine, delay, or discontinue any feature during ongoing research and deployment phases without liability.
                </p>
              </div>
            </section>

            {/* Section 5: External Retailer Websites & Checkout */}
            <section id="retailer-checkout" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  5. External Retailer Websites & Retailer Checkout Transactions
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  <strong className="text-slate-900 dark:text-white">QuickBachat is not a merchant or seller.</strong> We do not sell groceries, maintain physical inventory, fulfill orders, handle logistics, process credit card/UPI payments, or operate customer service for delivery issues.
                </p>
                <p>
                  When you decide to purchase goods based on comparison information, you will interact directly with the independent third-party retailer via their respective application or website. Any transaction, agreement, payment, refund, cancellation, delivery, or product quality dispute is strictly between you and the respective retailer.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Payment & Account Safety:</span>
                  <p>
                    QuickBachat never requests your bank account credentials, UPI PIN, card numbers, OTPs, or retailer account passwords. Never provide sensitive financial credentials on any unauthorized third-party site.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Illustrative Previews */}
            <section id="concept-previews" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  6. Illustrative Concept Previews & Non-Live Sample Information
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  The interactive sample comparisons, category cards, price differentials, savings counters, and basket mockups currently demonstrated on <strong className="text-slate-900 dark:text-white">QuickBachat.in</strong> are <strong className="text-slate-900 dark:text-white">simulated illustrative concepts</strong>.
                </p>
                <p>
                  These sample values demonstrate how our planned optimization algorithms function and do not reflect real-time live inventory feeds or guaranteed store prices. You should not rely on pre-launch mockup values as legal or binding purchase quotes.
                </p>
              </div>
            </section>

            {/* Section 7: Acceptable Website Use */}
            <section id="acceptable-use" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  7. Acceptable Website Use & Prohibited Conduct
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  You agree to use QuickBachat solely for lawful, personal, non-commercial evaluation purposes. You expressly agree not to:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600 dark:text-slate-300">
                  <li>Use automated scrapers, bots, crawlers, or extraction tools to harvest data or interface structures from the Website without prior written authorization.</li>
                  <li>Attempt to probe, scan, test the vulnerability of, or breach any security mechanism protecting our web infrastructure.</li>
                  <li>Transmit any viruses, malware, trojan horses, worms, or malicious code designed to interrupt or compromise the Platform.</li>
                  <li>Impersonate any person, entity, or QuickBachat representative in communications with us.</li>
                  <li>Decompile, reverse-engineer, disassemble, or derive the source code of the Website’s algorithms or components.</li>
                </ul>
              </div>
            </section>

            {/* Section 8: Intellectual Property */}
            <section id="intellectual-property" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  8. Intellectual Property & Brand Rights
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  <strong className="text-slate-900 dark:text-white">QuickBachat Proprietary Assets:</strong> All original content, visual layouts, graphics, user interface designs, logos, software algorithms, text descriptions, and branding elements created by QuickBachat are the intellectual property of QuickBachat and are protected by applicable intellectual property laws.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Third-Party Trademarks:</strong> All third-party merchant trademarks, product names, logos, brand titles, and service marks mentioned on the Website (including Blinkit, Zepto, Swiggy Instamart, BigBasket, and product brand names) are the property of their respective owners. Their mention does not imply any sponsorship, endorsement, or business association with QuickBachat.
                </p>
              </div>
            </section>

            {/* Section 9: Third-Party Links & External Services */}
            <section id="third-party-links" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  9. Third-Party Links & External Services
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  The Website may contain links or redirects to third-party merchant applications, websites, resources, or digital storefronts. These links are provided solely as a convenience to our visitors.
                </p>
                <p>
                  QuickBachat has no control over the content, terms of service, privacy practices, customer support, or operational uptime of third-party websites. Accessing external links is done entirely at your own discretion and risk. We recommend reviewing the terms and privacy policies of any third-party service you visit.
                </p>
              </div>
            </section>

            {/* Section 10: Service Availability & Modifications */}
            <section id="service-availability" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  10. Website Availability & Modifications
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Because QuickBachat is currently in active pre-launch engineering and design iteration, we do not guarantee uninterrupted, error-free, or continuous availability of the Website.
                </p>
                <p>
                  We reserve the right to modify, suspend, update, or temporarily withdraw any portion of the Website, preview tools, or roadmap information at any time without prior notice or liability.
                </p>
              </div>
            </section>

            {/* Section 11: Limitations of Liability & Disclaimers */}
            <section id="disclaimers-limitations" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  11. Limitations of Liability & Disclaimers
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider">
                    Disclaimer of Warranties
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    To the maximum extent permitted under applicable law, the Website is provided on an “AS IS” and “AS AVAILABLE” basis. QuickBachat makes no warranties, express or implied, regarding merchantability, fitness for a particular purpose, pricing accuracy, or completeness of informational previews.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider">
                    Limitation of Liability
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Under no circumstances shall QuickBachat, its creators, founders, developers, or contributors be liable for any indirect, incidental, consequential, special, or punitive damages arising from your access to or reliance on information presented on this Website, third-party shopping purchases, price discrepancies, or delivery failures by independent retailers.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Revisions to These Terms */}
            <section id="terms-changes" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  12. Revisions & Updates to These Terms
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  As QuickBachat progresses through pre-launch milestones, launches mobile apps, or introduces live comparison services in Hyderabad and subsequent regions, we may periodically revise these Terms & Conditions to accurately reflect new features, legal regulations, or operational practices.
                </p>
                <p>
                  Any updates will be posted on this page with an updated “Last Updated” timestamp at the top of the document. We encourage you to review these terms periodically. Continued access to the Website following updates signifies your acceptance of the revised Terms & Conditions.
                </p>
              </div>
            </section>

            {/* Section 13: Contact Information */}
            <section id="contact-info" className="space-y-4 pt-6 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/80 pb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  13. Legal Contact Information & Governing Scope
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                <p>
                  These Terms & Conditions are governed by and construed in accordance with the laws of India. For any inquiries, formal legal notices, or feedback regarding these terms, please contact:
                </p>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>QuickBachat Legal Desk</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Email Contact:</span>
                      <br />
                      <a
                        href="mailto:legal@quickbachat.in"
                        id="terms-legal-email-direct"
                        className="text-emerald-700 dark:text-emerald-400 hover:underline font-mono text-xs inline-flex items-center gap-1 mt-0.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>legal@quickbachat.in</span>
                      </a>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Pre-Launch Market:</span>
                      <br />
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        Hyderabad, Telangana, India
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={onBackToHome}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-800 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Return to Home</span>
                  </button>

                  <div className="flex items-center gap-3 text-xs">
                    {onNavigatePrivacy && (
                      <button
                        type="button"
                        onClick={onNavigatePrivacy}
                        className="text-emerald-700 dark:text-emerald-400 hover:underline font-medium cursor-pointer"
                      >
                        Privacy Policy
                      </button>
                    )}
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <a
                      href="mailto:hello@quickbachat.in"
                      className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 font-mono"
                    >
                      hello@quickbachat.in
                    </a>
                  </div>
                </div>

              </div>
            </section>

          </article>

        </div>
      </div>
    </div>
  );
};
