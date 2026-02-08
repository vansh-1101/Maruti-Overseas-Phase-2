import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getServiceBySlug } from '@/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative w-full min-h-[400px] md:h-[500px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-12 md:pt-0 md:pb-0">
          <Link
            to="/services"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {service.name}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What We Offer
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Process
                </h2>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div
                      key={step.step}
                      className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-xl px-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Get Started Today
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    Book a free consultation to discuss your {service.name.toLowerCase()} needs.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-white text-primary-700 hover:bg-gray-100 mb-3"
                  >
                    <Link to="/contact">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Link>
                  </Button>
                  <a
                    href="tel:+919824372321"
                    className="flex items-center justify-center gap-2 w-full py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>

                {/* Other Services */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Other Services
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Student Visa', slug: 'student-visa' },
                      { name: 'Test Preparation', slug: 'test-prep' },
                      { name: 'Scholarship Assistance', slug: 'scholarships' },
                      { name: 'Immigration Services', slug: 'immigration' },
                    ]
                      .filter(s => s.slug !== service.slug)
                      .slice(0, 4)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-gray-700">{s.name}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our {service.name} services and
            how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-600 hover:bg-primary-700"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
