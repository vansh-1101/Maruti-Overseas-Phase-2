 import { useState } from 'react';
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
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      });
      setSelectedCountry('');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="w-full max-w-[1536px] mx-auto relative z-10 pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8 lg:px-12 xl:px-16 lg:px-20">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-stretch h-full">
          {/* Left Column - Text & Form */}
          <div className="flex flex-col justify-center gap-10 lg:pl-4 xl:pl-8">
            <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              22 Years of Excellence
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Study Abroad Dreams,{' '}
              <span className="text-secondary-300">Made Reality</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Expert guidance for your international education journey. From university
              selection to visa approval, we're with you every step of the way.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-white text-primary-700 hover:bg-gray-100 font-semibold"
              >
                Book Free Counseling
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link to="/study-abroad">
                  <MapPin className="w-5 h-5 mr-2" />
                  Explore Countries
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm">98% Visa Success</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm">Free Counseling</span>
              </div>
            </div>
            </div>

            {/* Quick Form (Moved to Left Column) */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-3xl" id="lead-form">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Start Your Journey
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Get a free consultation with our experts
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Country
                </label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="w-full py-3">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.id} value={country.slug}>
                        {country.flag} {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 py-6 text-lg font-semibold"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our{' '}
                <Link to="/privacy-policy" className="text-primary-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
          </div>

          {/* Right Column - Video Reels */}
          <div className="relative w-full h-[500px] lg:h-auto lg:min-h-[700px]">
            <ScrollingVideoReels />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
