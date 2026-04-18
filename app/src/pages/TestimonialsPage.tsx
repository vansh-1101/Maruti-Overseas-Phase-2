import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GOOGLE_REVIEWS_URL = 'https://share.google/jCA2DgQYt7JIf9Oui';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative w-full min-h-[400px] md:h-[500px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-main.jpg"
            alt="Success Stories"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-12 md:pt-0 md:pb-0">
          <div className="max-w-3xl text-center mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              What Our Students Say
            </h1>
            <p className="text-xl text-white/90">
              Real reviews from real students, verified by Google.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 md:p-14 text-center shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <span className="text-white text-2xl font-bold">Google Reviews</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-lg mb-2">
                  <span className="text-white font-bold text-4xl">5.0</span> &nbsp;·&nbsp; Trusted by hundreds of students on Google
                </p>
                <p className="text-white/60 text-sm mb-10">All reviews are verified by Google — no fake testimonials here.</p>

                <Button asChild size="lg" className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-base px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 mb-4 w-full sm:w-auto">
                  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Read All Google Reviews
                  </a>
                </Button>

                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-white/20" />
                  <span className="text-white/50 text-sm">or</span>
                  <div className="flex-1 h-px bg-white/20" />
                </div>

                <Button asChild variant="outline" size="lg" className="border-2 border-white/40 text-white hover:bg-white/10 bg-transparent font-semibold w-full sm:w-auto">
                  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Share Your Experience
                  </a>
                </Button>
                <p className="text-white/40 text-xs mt-6">Are you our student? We'd love to hear your story!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Start your study abroad journey today and become our next success story.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
