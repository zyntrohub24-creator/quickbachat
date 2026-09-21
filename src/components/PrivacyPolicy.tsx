import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Lock, 
  Database, 
  Eye, 
  Layers, 
  ExternalLink, 
  RefreshCw, 
  UserCheck, 
  Clock, 
  FileText,
  AlertCircle,
  HelpCircle,
  Server,
  Globe
} from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
  onNavigateTerms?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToHome, onNavigateTerms }) => {
  // Ensure we scroll to top when Privacy Policy is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const sections = [
    { id: 'introduction', title: '1. Introduction & Overview' },
    { id: 'pre-launch-scope', title: '2. Pre-Launch Status & Distinctions' },
    { id: 'voluntary-info', title: '3. Information You Voluntarily Provide' },
    { id: 'technical-info', title: '4. Technical Data, Cookies & Storage' },
    { id: 'location-data', title: '5. Location Information' },
    { id: 'how-we-use', title: '6. How We Use Collected Information' },
    { id: 'third-party-links', title: '7. External Retailer Links & Disclaimers' },
    { id: 'information-sharing', title: '8. Information Sharing & Disclosures' },
    { id: 'data-security', title: '9. Data Security & Storage Practices' },
    { id: 'data-retention', title: '10. Data Retention Lifecycles' },
    { id: 'visitor-rights', title: '11. Your Privacy Rights & Choices' },
    { id: 'children-privacy', title: '12. Children’s Privacy' },
    { id: 'policy-updates', title: '13. Updates to This Policy' },
    { id: 'contact-us', title: '14. Privacy Contact & Governance' },
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

  return (
    <div className="min-h-screen bg-[#fafbfc] dark:bg-[#070b11] text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header Bar with Breadcrumbs and Back Action */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            id="privacy-back-to-home-btn"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-800 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            aria-label="Navigate back to QuickBachat home page"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-xs text-slate-400 dark:text-slate-500">Document:</span>
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              Official Privacy Policy
            </span>
          </div>
        </div>
      </div>

      {/* Hero Banner Header */}
      <div className="relative py-12 md:py-16 bg-white dark:bg-[#0b0f17] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Transparency & Privacy Governance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              QuickBachat Privacy Policy
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              We value your trust and are committed to complete transparency regarding how data is handled on our pre-launch website and our forthcoming quick-commerce comparison platform.
            </p>

            {/* Meta tags summary strip */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Website: <strong>QuickBachat.in</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Jurisdiction: <strong>Hyderabad, India</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Effective Date: <strong>September 2026</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Status: <strong>Pre-launch / Coming Soon</strong></span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Layout with Sticky Table of Contents and Clauses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Table of Contents
                </span>
              </div>

              <nav className="space-y-1 text-xs" aria-label="Privacy Policy Sections">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className="block py-1.5 px-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-emerald-50/70 dark:hover:bg-slate-800/80 transition-colors font-medium"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Questions regarding privacy?
                  </div>
                  <a
                    href="mailto:privacy@quickbachat.in"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline underline-offset-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>privacy@quickbachat.in</span>
                  </a>
                </div>

                {onNavigateTerms && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={onNavigateTerms}
                      className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Terms & Conditions</span>
                      <ArrowLeft className="w-3 h-3 rotate-180" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Policy Clauses */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* Summary Notice Box */}
            <div 
              id="privacy-summary-notice"
              className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800/80 space-y-3"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-950 dark:text-emerald-200">
                <AlertCircle className="w-4 h-4 text-emerald-700 dark:text-emerald-400 flex-shrink-0" />
                <span>Key Summary for Website Visitors</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                QuickBachat is currently an independent pre-launch informational website. We do not sell user data, we do not require account registration to browse this website, we do not run third-party advertising tracking cookies, and we only use local browser storage to remember your visual theme preference (Light/Dark mode).
              </p>
            </div>

            {/* SECTION 1: Introduction & Overview */}
            <section id="introduction" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>1. Introduction & Overview</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Welcome to <strong>QuickBachat</strong> (accessible at <a href="https://quickbachat.in" className="text-emerald-700 dark:text-emerald-400 font-medium underline">QuickBachat.in</a>, referred to as &ldquo;QuickBachat&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). QuickBachat is an independent consumer platform being built to help shoppers discover grocery products, compare prices across quick-commerce retailers, and optimize shopping baskets in Hyderabad, India.
                </p>
                <p>
                  This Privacy Policy explains how information is handled when you visit our website, communicate with us, or explore our concept previews. We are dedicated to respecting your personal privacy and adhering to applicable data protection principles.
                </p>
              </div>
            </section>

            {/* SECTION 2: Pre-Launch Status & Distinctions */}
            <section id="pre-launch-scope" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>2. Pre-Launch Status & Distinctions</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  It is important to clearly distinguish our <strong>current pre-launch website functionality</strong> from <strong>future planned platform capabilities</strong>:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                      Current Website (Live Now)
                    </div>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                      <li>Informational & architectural concept overview</li>
                      <li>Interactive UI preview models & theme toggle</li>
                      <li>Voluntary email correspondence links</li>
                      <li>No customer logins, accounts, or payment processing</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                    <div className="text-xs font-bold text-emerald-950 dark:text-emerald-200 uppercase tracking-wide">
                      Planned Application (Future)
                    </div>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                      <li>Live multi-platform price comparison engine</li>
                      <li>Smart Basket optimizer & store split recommendations</li>
                      <li>Personalized price watchlists & alert notifications</li>
                      <li>User accounts & saved preference profiles</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  When our full mobile application or live shopping engine launches, an updated Privacy Policy addressing account management, saved shopping baskets, and live retailer integrations will be published before active user enrollment.
                </p>
              </div>
            </section>

            {/* SECTION 3: Information You Voluntarily Provide */}
            <section id="voluntary-info" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>3. Information You Voluntarily Provide</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  You can browse our pre-launch website without submitting any personal identity details. We only receive personal information when you deliberately choose to communicate with us:
                </p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Direct Email Inquiries:</strong> When you send an email to any of our contact addresses (such as <a href="mailto:hello@quickbachat.in" className="text-emerald-700 dark:text-emerald-400 underline">hello@quickbachat.in</a> or <a href="mailto:privacy@quickbachat.in" className="text-emerald-700 dark:text-emerald-400 underline">privacy@quickbachat.in</a>), we receive your email address, sender name, email header metadata, and whatever message content you voluntarily provide.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Partnership & Retailer Dialogs:</strong> If you represent a retailer, data catalog provider, or technology partner and contact us at <a href="mailto:partnerships@quickbachat.in" className="text-emerald-700 dark:text-emerald-400 underline">partnerships@quickbachat.in</a>, we receive your business contact details and organization information.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 4: Technical Data, Cookies & Storage */}
            <section id="technical-info" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>4. Technical Data, Cookies & Browser Storage</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  We strive to maintain a lightweight, privacy-respecting website. Here is how technical data is handled:
                </p>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                      Local Browser Storage (`localStorage`)
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                      We store a single preference key (<code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-[11px] font-mono">qb_theme</code>) in your browser’s local storage to remember whether you selected Light or Dark theme. This data remains on your device and is never transmitted to external analytics servers.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                      Cookies & Advertising Trackers
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                      The pre-launch website does not deploy third-party advertising cookies, cross-site trackers, or marketing pixel trackers.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                      Server Diagnostics & Network Logs
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                      Our cloud hosting and content delivery infrastructure automatically records standard connection logs (including IP addresses, browser user agent strings, requested URLs, and request timestamps) to maintain network security, prevent DDoS attacks, and diagnose infrastructure health.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: Location Information */}
            <section id="location-data" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>5. Location Information</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  QuickBachat is designed primarily for consumers in <strong>Hyderabad, Telangana, India</strong>.
                </p>
                <p>
                  The current pre-launch informational website does not request or track precise GPS location data from your mobile or desktop device. In future live releases, users may optionally provide their Hyderabad delivery pincode or neighborhood to calculate accurate dark-store product availability and localized delivery fees.
                </p>
              </div>
            </section>

            {/* SECTION 6: How We Use Information */}
            <section id="how-we-use" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>6. How We Use Collected Information</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Any information received through our website or direct communications is used strictly for legitimate operational purposes:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm pl-1">
                  <li>To answer your questions, feedback, and customer support inquiries.</li>
                  <li>To discuss potential integration or partnership opportunities with authorized platforms.</li>
                  <li>To diagnose technical errors and ensure the security and uptime of our web service.</li>
                  <li>To comply with applicable legal obligations or lawful requests under Indian law.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 7: External Retailer Links & Disclaimers */}
            <section id="third-party-links" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>7. External Retailer Links & Disclaimers</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  QuickBachat is an independent price comparison concept. When live comparison links or future partner redirections are accessed, you may be redirected to third-party quick-commerce platforms or retailer websites (such as Blinkit, Zepto, Swiggy Instamart, or BigBasket).
                </p>
                <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/60 space-y-1 text-xs text-amber-900 dark:text-amber-300">
                  <div className="font-bold flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Independent Retailer Policies</span>
                  </div>
                  <p>
                    We do not control and are not responsible for the privacy practices, cookie policies, or content of third-party retailer websites. Any purchases or data submitted on a retailer’s platform are governed exclusively by that retailer’s terms and privacy policies.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Information Sharing & Disclosures */}
            <section id="information-sharing" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>8. Information Sharing & Disclosures</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  We do not sell, rent, trade, or commercialize your personal information or email communications to third parties.
                </p>
                <p>
                  We may only share information in the following limited circumstances:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm pl-1">
                  <li><strong>Infrastructure Providers:</strong> With trusted cloud hosting and email service providers operating under strict confidentiality obligations.</li>
                  <li><strong>Legal Compliance:</strong> When required by law, subpoena, court order, or governmental authority in India.</li>
                  <li><strong>Safety & Protection:</strong> To enforce our terms, investigate security incidents, or protect the safety and rights of QuickBachat, our users, and the public.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 9: Data Security & Storage Practices */}
            <section id="data-security" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>9. Data Security & Storage Practices</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  We employ standard administrative and technical safeguards—including HTTPS encryption in transit—to protect information against unauthorized access, loss, alteration, or misuse.
                </p>
                <p>
                  While we implement appropriate security measures, please be aware that no electronic transmission over the Internet or storage system can be guaranteed 100% secure.
                </p>
              </div>
            </section>

            {/* SECTION 10: Data Retention Lifecycles */}
            <section id="data-retention" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>10. Data Retention Lifecycles</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  We retain voluntary email communications only for the period necessary to respond to your queries, maintain correspondence records, or fulfill administrative requirements.
                </p>
                <p>
                  Server diagnostic logs are routinely overwritten and maintained in accordance with standard infrastructure log-rotation schedules.
                </p>
              </div>
            </section>

            {/* SECTION 11: Your Privacy Rights & Choices */}
            <section id="visitor-rights" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>11. Your Privacy Rights & Choices</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  As a visitor to QuickBachat, you have specific choices regarding your data:
                </p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Local Storage Management:</strong> You can clear your browser&rsquo;s cache and local storage at any time via your browser settings to remove saved theme preferences.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>Communication Inquiries:</strong> You can contact us at <a href="mailto:privacy@quickbachat.in" className="text-emerald-700 dark:text-emerald-400 font-mono font-medium underline">privacy@quickbachat.in</a> to request access, correction, or deletion of any email correspondence you have previously sent to our team.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 12: Children’s Privacy */}
            <section id="children-privacy" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>12. Children’s Privacy</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  QuickBachat is a general-audience shopping platform not directed at children under 13 years of age. We do not knowingly collect or solicit personal data from children. If you believe a child has provided us with personal information, please contact us at <a href="mailto:privacy@quickbachat.in" className="text-emerald-700 dark:text-emerald-400 underline">privacy@quickbachat.in</a> and we will promptly remove such records.
                </p>
              </div>
            </section>

            {/* SECTION 13: Updates to This Policy */}
            <section id="policy-updates" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>13. Updates to This Policy</span>
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  We may periodically revise this Privacy Policy to reflect platform evolution, new features, or changing legal standards. The &ldquo;Effective Date&rdquo; at the top of this document indicates when the latest version took effect. We encourage visitors to review this page periodically.
                </p>
              </div>
            </section>

            {/* SECTION 14: Privacy Contact & Governance */}
            <section id="contact-us" className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-white">
                  14. Privacy Contact & Governance
                </h2>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                If you have questions, feedback, or requests concerning this Privacy Policy or our data handling practices, please contact our privacy desk directly:
              </p>

              <div className="pt-2 p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">
                  QuickBachat Privacy Team
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <div>
                    <div className="text-sm font-bold text-white">Dedicated Privacy Email</div>
                    <a
                      id="privacy-contact-email-link"
                      href="mailto:privacy@quickbachat.in"
                      className="text-emerald-400 hover:text-emerald-300 font-mono text-sm font-semibold underline underline-offset-2 inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-4 h-4" />
                      <span>privacy@quickbachat.in</span>
                    </a>
                  </div>

                  <div className="text-xs text-slate-300 sm:text-right">
                    <div>Website: <strong>QuickBachat.in</strong></div>
                    <div>Location: <strong>Hyderabad, Telangana, India</strong></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom Back To Home Action Card */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800">
              <div className="text-center sm:text-left space-y-1">
                <div className="text-sm font-bold text-slate-900 dark:text-white">Finished reading the policy?</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Return to explore QuickBachat features and Hyderabad launch roadmap.</div>
                {onNavigateTerms && (
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={onNavigateTerms}
                      className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Also read Terms & Conditions</span>
                      <ArrowLeft className="w-3 h-3 rotate-180" />
                    </button>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={onBackToHome}
                id="bottom-back-to-home-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home Page</span>
              </button>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
};
