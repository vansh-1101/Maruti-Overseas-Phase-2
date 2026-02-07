import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredTestimonials = testimonials.slice(0, 6);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(featuredTestimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(featuredTestimonials.length / 2) - 1 : prev - 1
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from students who achieved their study abroad dreams with our guidance.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(featuredTestimonials.length / 2) }).map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="w-full flex-shrink-0 grid md:grid-cols-2 gap-6"
              >
                {featuredTestimonials
                  .slice(groupIndex * 2, groupIndex * 2 + 2)
                  .map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-gray-50 rounded-2xl p-6 md:p-8 relative"
                    >
                      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-200" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                              }`}
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-100 flex-shrink-0">
                          {testimonial.avatar ? (
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                          ) : null}
                          <div className={`w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold ${testimonial.avatar ? 'hidden' : ''}`}>
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900">
                              {testimonial.name}
                            </span>
                            {testimonial.verified && (
                              <BadgeCheck className="w-4 h-4 text-blue-500" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {testimonial.course}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.university}, {testimonial.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-primary-200 hover:bg-primary-50"
          >
            <Link to="/about/testimonials">
              View All Testimonials
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
