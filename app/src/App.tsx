import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';

// Layouts
import MainLayout from '@/layouts/MainLayout';

// Pages
import HomePage from '@/pages/HomePage';
import CountriesPage from '@/pages/CountriesPage';
import CountryDetailPage from '@/pages/CountryDetailPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import CoursesPage from '@/pages/CoursesPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import AboutPage from '@/pages/AboutPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import ContactPage from '@/pages/ContactPage';
import ResourcesPage from '@/pages/ResourcesPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Tools
import CostCalculatorPage from '@/pages/tools/CostCalculatorPage';
import GPAConverterPage from '@/pages/tools/GPAConverterPage';
import VisaChecklistPage from '@/pages/tools/VisaChecklistPage';
import IELTSPredictorPage from '@/pages/tools/IELTSPredictorPage';

// Admin
import AdminLayout from '@/layouts/AdminLayout';
import AdminDashboard from '@/pages/admin/Dashboard';
import AdminLeads from '@/pages/admin/Leads';
import AdminContent from '@/pages/admin/Content';
import AdminAnalytics from '@/pages/admin/Analytics';

// Components
import ScrollToTop from '@/components/shared/ScrollToTop';

// Splash Screen Component
const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2400);
    const finishTimer = setTimeout(() => onFinish(), 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0B1B3D 0%, #1a3a6b 50%, #0B1B3D 100%)',
        transition: 'opacity 0.6s ease',
        opacity: fadeOut ? 0 : 1,
      }}
    >
      {/* Animated glow ring */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52,211,153,0.3) 0%, transparent 70%)',
          animation: 'splashPulse 1.5s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          border: '2px solid rgba(52,211,153,0.5)',
          animation: 'splashRing 2s linear infinite',
        }} />
        <img
          src="/images/logo.jpg"
          alt="Maruti Overseas Consultancy"
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid rgba(52,211,153,0.6)',
            boxShadow: '0 0 40px rgba(52,211,153,0.4), 0 0 80px rgba(11,27,61,0.8)',
            animation: 'splashScale 0.6s ease-out forwards',
          }}
        />
      </div>
      <div style={{
        marginTop: '28px',
        textAlign: 'center',
        animation: 'splashFadeUp 0.8s ease-out 0.3s both',
      }}>
        <div style={{
          color: '#ffffff',
          fontSize: '22px',
          fontWeight: '700',
          fontFamily: 'Georgia, serif',
          letterSpacing: '0.02em',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
        }}>Maruti Overseas Consultancy</div>
        <div style={{
          color: 'rgba(52,211,153,0.9)',
          fontSize: '13px',
          fontStyle: 'italic',
          marginTop: '6px',
          letterSpacing: '0.05em',
        }}>Let's Make Career...</div>
      </div>
      <style>{`
        @keyframes splashPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes splashRing {
          from { transform: rotate(0deg) scale(1); opacity: 0.6; }
          to { transform: rotate(360deg) scale(1); opacity: 0.6; }
        }
        @keyframes splashScale {
          from { transform: scale(0.7); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes splashFadeUp {
          from { transform: translateY(16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash on first load per session
    const shown = sessionStorage.getItem('splashShown');
    if (!shown) {
      sessionStorage.setItem('splashShown', '1');
      return true;
    }
    return false;
  });

  const handleSplashFinish = () => setShowSplash(false);

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/study-abroad" element={<CountriesPage />} />
            <Route path="/study-abroad/:slug" element={<CountryDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/calculator" element={<CostCalculatorPage />} />
            <Route path="/resources/gpa-converter" element={<GPAConverterPage />} />
            <Route path="/resources/visa-checklist" element={<VisaChecklistPage />} />
            <Route path="/resources/ielts-predictor" element={<IELTSPredictorPage />} />
            <Route path="/resources/blog" element={<BlogPage />} />
            <Route path="/resources/blog/:slug" element={<BlogPostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="leads" element={<AdminLeads />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="analytics" element={<AdminAnalytics />} />
          </Route>
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </>
  );
}

export default App;
