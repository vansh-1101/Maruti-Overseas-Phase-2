import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';

import MainLayout from '@/layouts/MainLayout';

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

import CostCalculatorPage from '@/pages/tools/CostCalculatorPage';
import GPAConverterPage from '@/pages/tools/GPAConverterPage';
import VisaChecklistPage from '@/pages/tools/VisaChecklistPage';
import IELTSPredictorPage from '@/pages/tools/IELTSPredictorPage';

import AdminLayout from '@/layouts/AdminLayout';
import AdminDashboard from '@/pages/admin/Dashboard';
import AdminLeads from '@/pages/admin/Leads';
import AdminContent from '@/pages/admin/Content';
import AdminAnalytics from '@/pages/admin/Analytics';

import ScrollToTop from '@/components/shared/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
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

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="leads" element={<AdminLeads />} />
          <Route path="content" element={<AdminContent />} />
          <Route path="analytics" element={<AdminAnalytics />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
