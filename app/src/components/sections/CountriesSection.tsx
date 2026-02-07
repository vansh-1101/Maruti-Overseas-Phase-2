import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { countries } from '@/data';

const CountriesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Study Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Popular Study Destinations
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from world-renowned education destinations. Each country offers
            unique opportunities for academic excellence and career growth.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.slice(0, 6).map((country) => (
            <Link
              key={country.id}
              to={`/study-abroad/${country.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100"
            >
              {/* Background Image */}
              {/* Background Image */}
              <img
                src={country.heroImage}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{country.name}</h3>
                    <p className="text-white/80 text-sm">
                      {country.stats.universities}+ Universities
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    {country.stats.studentsPlaced}+ Students
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {country.stats.visaSuccessRate}% Success
                  </span>
                </div>

                <span className="inline-flex items-center text-primary-300 text-sm font-medium group-hover:text-primary-200">
                  Explore Programs
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-primary-200 hover:bg-primary-50"
          >
            <Link to="/study-abroad">
              View All Destinations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
