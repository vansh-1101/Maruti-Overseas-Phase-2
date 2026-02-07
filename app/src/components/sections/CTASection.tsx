import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/lib/utils';

const CTASection = () => {
  const whatsappLink = generateWhatsAppLink(
    '919824372321',
    'Hi, I am interested in studying abroad. Can you please provide more information?'
  );

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book a free consultation with our experts and take the first step towards
            your international education dreams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary-700 hover:bg-gray-100 font-semibold px-8"
            >
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Counseling
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <a href="tel:+919824372321" className="flex items-center gap-2 hover:text-white">
              <Phone className="w-5 h-5" />
              <span>+91 98243 72321</span>
            </a>
            <span className="hidden sm:block">|</span>
            <a href="tel:+917926532221" className="flex items-center gap-2 hover:text-white">
              <Phone className="w-5 h-5" />
              <span>+91 79-40030637</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-10 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4">Trusted by students across Gujarat</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-white/60 text-sm">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-white/60 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">850+</div>
                <div className="text-white/60 text-sm">Partner Universities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
