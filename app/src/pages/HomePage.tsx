import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import CountriesSection from '@/components/sections/CountriesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import CTASection from '@/components/sections/CTASection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CountriesSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
};

export default HomePage;
