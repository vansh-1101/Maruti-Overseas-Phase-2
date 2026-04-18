 import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { countries } from '@/data';
import { submitFormToEmail } from '@/lib/emailService';
import { ScrollingVideoReels } from '@/components/shared/ScrollingVideoReels';

const HeroSection = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll-triggered animations via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const animatedEls = document.querySelectorAll('.scroll-animate');
    animatedEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitFormToEmail({
      ...formData,
      country: selectedCountry,
      formType: 'hero',
    });

    if (success) {
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
      setSelectedCountry('');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
        {/* Abstract blobs — smaller on mobile */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-secondary-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="w-full max-w-[1536px] mx-auto relative z-10 pt-24 pb-10 sm:pt-28 md:pt-36 md:pb-16 px-4 sm:px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 sm:gap-12 lg:gap-16 items-stretch h-full overflow-hidden">

          {/* ── Left Column — Text & Form ── */}
          <div className="flex flex-col justify-center gap-8 sm:gap-10 lg:gap-12 min-w-0">
            <div className="text-white space-y-4 sm:space-y-5 md:space-y-6">

              {/* Badge */}
              <div className="hero-animate-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm visa-success-badge">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                22 Years of Excellence
              </div>

              {/* Heading — responsive sizing that never overflows */}
              <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:leading-tight">
                <span className="hero-animate-title block">
                  Study Abroad Dreams,{' '}
                </span>
                <span className="hero-animate-accent text-secondary-300 block mt-1">
                  Made Reality
                </span>
              </h1>

              {/* Description */}
              <p className="hero-animate-desc text-[13px] leading-relaxed sm:text-base md:text-xl lg:text-2xl text-white/85">
                Expert guidance for your international education journey. From university
                selection to visa approval, we're with you every step of the way.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 pt-1">
                <span className="hero-animate-btn1">
                  <Button
                    size="lg"
                    onClick={scrollToForm}
                    className="w-full xs:w-auto bg-white text-primary-700 hover:bg-gray-100 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,217,181,0.3)] text-sm sm:text-base py-2.5 sm:py-3"
                  >
                    Book Free Counseling
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </span>
                <span className="hero-animate-btn2">
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full xs:w-auto border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base py-2.5 sm:py-3"
                  >
                    <Link to="/study-abroad">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Explore Countries
                    </Link>
                  </Button>
                </span>
              </div>

              {/* Trust Indicators */}
              <div className="hero-animate-trust flex flex-wrap gap-3 sm:gap-6 pt-2 sm:pt-4">
                <div className="flex items-center gap-1.5 sm:gap-2 trust-badge-pulse px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">98% Visa Success</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 trust-badge-pulse px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/5 border border-white/10" style={{ animationDelay: '0.5s' }}>
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Free Counseling</span>
                </div>
              </div>
            </div>



            {/* Quick Form */}
            <div
              className="hero-animate-form bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-5 sm:p-6 md:p-8 w-full max-w-3xl border border-white/20"
              id="lead-form"
            >
              <div className="text-center mb-5 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Start Your Journey</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1.5">Get a free consultation with our experts</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      placeholder="Rahul"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00d9b5] focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base bg-gray-50/50 hover:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Sharma"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00d9b5] focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base bg-gray-50/50 hover:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="rahul.sharma@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00d9b5] focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base bg-gray-50/50 hover:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00d9b5] focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base bg-gray-50/50 hover:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Preferred Country</label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-full py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-gray-200 bg-gray-50/50 hover:bg-white">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.id} value={country.slug}>
                          <span className="flex items-center gap-2">
                            <span
                              className={`fi fi-${country.countryCode} rounded-sm`}
                              style={{ width: '1.25em', height: '0.9em', display: 'inline-block', flexShrink: 0 }}
                            />
                            {country.name}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00d9b5] to-[#00a896] hover:from-[#00c4a3] hover:to-[#009b8a] py-5 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,217,181,0.4)] rounded-xl"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
                </Button>

                <p className="text-xs text-gray-500 text-center pt-1">
                  By submitting, you agree to our{' '}
                  <Link to="/privacy-policy" className="text-[#00a896] hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
          </div>

          {/* ── Right Column — Video Reels ── */}
          <div className="hero-animate-video relative w-full h-[450px] sm:h-[500px] lg:h-auto lg:min-h-[700px] overflow-hidden">
            <ScrollingVideoReels />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
