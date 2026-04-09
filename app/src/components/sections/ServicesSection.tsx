import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Plane, BookOpen, Award, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'student-visa',
    name: 'Student Visa',
    description: 'End-to-end support for student visa applications to top destinations worldwide.',
    icon: GraduationCap,
    // Using widely available colors
    color: 'from-blue-500 to-blue-600',
    lightColor: 'bg-blue-50',
    shadowColor: 'shadow-blue-200',
  },
  {
    id: 'tourist-visa',
    name: 'Tourist Visa',
    description: 'Hassle-free tourist visa processing for USA, UK, Schengen, and more.',
    icon: Plane,
    color: 'from-emerald-500 to-emerald-600',
    lightColor: 'bg-emerald-50',
    shadowColor: 'shadow-emerald-200',
  },


  {
    id: 'test-prep',
    name: 'Test Preparation',
    description: 'IELTS, PTE, TOEFL, GRE, and GMAT coaching with expert trainers.',
    icon: BookOpen,
    color: 'from-orange-500 to-orange-600',
    lightColor: 'bg-orange-50',
    shadowColor: 'shadow-orange-200',
  },
  {
    id: 'scholarships',
    name: 'Scholarship Assistance',
    description: 'Find and apply for scholarships to reduce your study abroad costs.',
    icon: Award,
    color: 'from-pink-500 to-pink-600',
    lightColor: 'bg-pink-50',
    shadowColor: 'shadow-pink-200',
  },
  {
    id: 'forex',
    name: 'Forex & Travel',
    description: 'Currency exchange, air tickets, and tour packages at best rates.',
    icon: Banknote,
    color: 'from-cyan-500 to-cyan-600',
    lightColor: 'bg-cyan-50',
    shadowColor: 'shadow-cyan-200',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white border border-gray-100 text-primary-600 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
            World-Class Services for <br />
            <span className="text-primary-600">Global Aspirations</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We provide comprehensive 360° support for your international education journey,
            ensuring a smooth transition from your home country to your dream university.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative bg-white rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-bl-[100px] transition-all duration-500`} />
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                {/* Icon Container */}
                <div className="relative mb-6 inline-block">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-500 mb-6 leading-relaxed min-h-[48px]">
                  {service.description}
                </p>

                <div className="flex items-center text-gray-900 font-semibold text-sm group-hover:text-primary-600 transition-colors">
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 group-hover:after:w-full">
                    Explore Service
                  </span>
                  <div className={`ml-2 w-6 h-6 rounded-full ${service.lightColor} flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300`}>
                    <ArrowRight className={`w-3 h-3 text-gray-900 group-hover:text-primary-600`} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            asChild
            className="rounded-full px-8 h-12 bg-gray-900 text-white hover:bg-primary-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-200"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
