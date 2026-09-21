/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustStrip } from './components/TrustStrip.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { Features } from './components/Features.tsx';
import { Categories } from './components/Categories.tsx';
import { SmartBasket } from './components/SmartBasket.tsx';
import { PlannedPlatforms } from './components/PlannedPlatforms.tsx';
import { ForPartners } from './components/ForPartners.tsx';
import { About } from './components/About.tsx';
import { Contact } from './components/Contact.tsx';
import { MotionSection } from './components/MotionSection.tsx';
import { VisionModal } from './components/VisionModal.tsx';
import { PrivacyPolicy } from './components/PrivacyPolicy.tsx';
import { TermsAndConditions } from './components/TermsAndConditions.tsx';
import { Footer } from './components/Footer.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (
        hash === '#terms' || 
        hash === '#terms-and-conditions' || 
        hash === '#terms-of-service' ||
        path === '/terms' || 
        path === '/terms-and-conditions' ||
        search.includes('page=terms')
      ) {
        return 'terms';
      }
      if (
        hash === '#privacy' || 
        hash === '#privacy-policy' || 
        path === '/privacy' || 
        path === '/privacy-policy' ||
        search.includes('page=privacy')
      ) {
        return 'privacy';
      }
    }
    return 'home';
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialTab, setModalInitialTab] = useState<'explore' | 'how-it-works' | 'roadmap'>('explore');

  // Handle browser back/forward and hash changes
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();

      if (
        hash === '#terms' || 
        hash === '#terms-and-conditions' || 
        hash === '#terms-of-service' ||
        path === '/terms' || 
        path === '/terms-and-conditions' ||
        search.includes('page=terms')
      ) {
        setCurrentPage('terms');
      } else if (
        hash === '#privacy' || 
        hash === '#privacy-policy' || 
        path === '/privacy' || 
        path === '/privacy-policy' ||
        search.includes('page=privacy')
      ) {
        setCurrentPage('privacy');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigatePrivacy = () => {
    setCurrentPage('privacy');
    try {
      window.history.pushState({ page: 'privacy' }, 'Privacy Policy — QuickBachat', '#privacy');
    } catch {
      window.location.hash = 'privacy';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateTerms = () => {
    setCurrentPage('terms');
    try {
      window.history.pushState({ page: 'terms' }, 'Terms & Conditions — QuickBachat', '#terms');
    } catch {
      window.location.hash = 'terms';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (sectionId?: string) => {
    setCurrentPage('home');
    try {
      window.history.pushState({ page: 'home' }, 'QuickBachat — Compare, Save & Shop Smarter', '#');
    } catch {
      window.location.hash = '';
    }

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenExplore = () => {
    setModalInitialTab('explore');
    setModalOpen(true);
  };

  const handleOpenHowItWorks = () => {
    if (currentPage !== 'home') {
      handleNavigateHome('how-it-works');
      return;
    }
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalInitialTab('how-it-works');
      setModalOpen(true);
    }
  };

  const handleOpenRoadmap = () => {
    setModalInitialTab('roadmap');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] dark:bg-[#070b11] text-slate-900 dark:text-slate-100 selection:bg-emerald-100 selection:text-emerald-900 transition-colors">
      {/* 1. Global Navigation Header */}
      <Header 
        onOpenHowItWorks={handleOpenHowItWorks} 
        onOpenRoadmap={handleOpenRoadmap} 
        onNavigateHome={handleNavigateHome}
        isPrivacyPage={currentPage === 'privacy'}
        isSubPage={currentPage !== 'home'}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'terms' ? (
          <TermsAndConditions 
            onBackToHome={() => handleNavigateHome()} 
            onNavigatePrivacy={handleNavigatePrivacy}
          />
        ) : currentPage === 'privacy' ? (
          <PrivacyPolicy 
            onBackToHome={() => handleNavigateHome()} 
            onNavigateTerms={handleNavigateTerms}
          />
        ) : (
          <>
            {/* 2. Hero Section */}
            <Hero 
              onExploreClick={handleOpenExplore}
              onHowItWorksClick={handleOpenHowItWorks}
            />

            {/* 3. Trust & Status Strip */}
            <MotionSection>
              <TrustStrip />
            </MotionSection>

            {/* 4. How QuickBachat Works Section */}
            <MotionSection>
              <HowItWorks />
            </MotionSection>

            {/* 5. Explore QuickBachat Features Section */}
            <MotionSection>
              <Features />
            </MotionSection>

            {/* 6. Shop Across Everyday Categories Section */}
            <MotionSection>
              <Categories />
            </MotionSection>

            {/* 7. Smart Basket Section */}
            <MotionSection>
              <SmartBasket />
            </MotionSection>

            {/* 8. Planned Shopping Platforms Section */}
            <MotionSection>
              <PlannedPlatforms />
            </MotionSection>

            {/* 9. Work With QuickBachat Section */}
            <MotionSection>
              <ForPartners />
            </MotionSection>

            {/* 10. About QuickBachat Section */}
            <MotionSection>
              <About />
            </MotionSection>

            {/* 11. Contact QuickBachat Section */}
            <MotionSection>
              <Contact />
            </MotionSection>
          </>
        )}
      </main>

      {/* Complete Connected Footer */}
      <Footer 
        onNavigatePrivacy={handleNavigatePrivacy} 
        onNavigateTerms={handleNavigateTerms}
        onNavigateHomeSection={handleNavigateHome} 
        onOpenRoadmap={handleOpenRoadmap}
      />

      {/* Interactive Vision & Roadmap Modal */}
      <VisionModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialTab={modalInitialTab} 
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

