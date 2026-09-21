import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { NavItem } from '../types/index.ts';
import { ThemeToggle } from './ThemeToggle.tsx';

interface HeaderProps {
  onOpenHowItWorks?: () => void;
  onOpenRoadmap?: () => void;
  onNavigateHome?: (sectionId?: string) => void;
  isPrivacyPage?: boolean;
  isSubPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenHowItWorks, 
  onOpenRoadmap,
  onNavigateHome,
  isPrivacyPage = false,
  isSubPage = false
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'categories', label: 'Categories', href: '#categories' },
    { id: 'smart-basket', label: 'Smart Basket', href: '#smart-basket' },
    { id: 'for-partners', label: 'For Partners', href: '#for-partners' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if ((isPrivacyPage || isSubPage) && onNavigateHome) {
      onNavigateHome(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'how-it-works' && onOpenHowItWorks) {
      onOpenHowItWorks();
    } else if (onOpenRoadmap) {
      onOpenRoadmap();
    }
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#070b11]/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800'
          : 'bg-white/80 dark:bg-[#070b11]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <a
            href="/"
            id="header-brand-link"
            onClick={handleBrandClick}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg cursor-pointer"
            aria-label="QuickBachat Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav-menu"
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Status Pill, Theme Toggle & Action */}
          <div className="hidden md:flex items-center gap-3">
            <div
              id="header-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/80 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-400"></span>
              </span>
              <span>Coming Soon in Hyderabad</span>
            </div>

            <ThemeToggle />

            <button
              id="header-preview-button"
              type="button"
              onClick={onOpenRoadmap}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xs hover:border-slate-300 dark:hover:border-slate-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Vision & Roadmap</span>
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Navigation Architecture
          </div>
          {navItems.map((item) => (
            <a
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}

          <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenRoadmap) onOpenRoadmap();
              }}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800 transition-colors cursor-pointer"
            >
              Explore Vision & Planned Coverage
            </button>
            <div className="text-center text-[11px] text-slate-500 dark:text-slate-400 py-1">
              Starting in Hyderabad • Independent Platform
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
