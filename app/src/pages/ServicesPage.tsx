import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Plane, Home, BookOpen, Award, Banknote, Map, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Plane,
  Home,
  BookOpen,
  Award,
  Banknote,
  Map,
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative w-full min-h-[400px] md:h-[500px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Comprehensive Study Abroad Services.png"
            alt="Services"
            className="w-full h-full object-cover object-[center_60%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-12 md:pt-0 md:pb-0">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Comprehensive Study Abroad Services
            </h1>
            <p className="text-xl text-white/90">
              From counseling to visa approval, we provide end-to-end support for your
              international education journey. Explore our range of services designed
              to make your study abroad dream a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || GraduationCap;
              return (
                <article
                  key={service.id}
                  className="group relative bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-60 group-hover:opacity-70 transition-opacity">
                    <img
                      src={service.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {service.name}
                    </h2>

                    <p className="text-gray-200 mb-6 font-medium">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-primary-400 font-medium group-hover:text-primary-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600">
              We follow a structured approach to ensure your study abroad journey is smooth and successful.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Counseling',
                description: 'Discuss your goals and preferences with our experts',
              },
              {
                step: '02',
                title: 'University Selection',
                description: 'Get shortlisted universities based on your profile',
              },
              {
                step: '03',
                title: 'Application Support',
                description: 'Complete assistance with applications and documents',
              },
              {
                step: '04',
                title: 'Visa & Departure',
                description: 'Visa processing and pre-departure guidance',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our counselors can help you identify the services you need based on your
              current stage in the study abroad journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-white text-secondary-700 hover:bg-gray-100"
              >
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <a
                href="tel:+919824372321"
                className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
