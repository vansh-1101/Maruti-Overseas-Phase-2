import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, TrendingUp, CheckCircle2 } from 'lucide-react';
import { countries } from '@/data';

const CountriesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative w-full min-h-[400px] md:h-[500px] overflow-hidden flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        {/* World Map Background */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <img
            src="/images/world-map.svg"
            alt=""
            className="w-full h-full object-cover object-center scale-110"
          />
        </div>

        {/* Text Visibility Overlay */}
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        <div className="container-custom relative z-10 pt-32 pb-12 md:pt-0 md:pb-0">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Study Destinations
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Choose Your Study Destination
            </h1>
            <p className="text-xl text-white/90">
              Explore top study destinations around the world. Each country offers unique
              opportunities for academic excellence, cultural experiences, and career growth.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <article
                key={country.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <Link
                  to={`/study-abroad/${country.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden"
                >
                  <img
                    src={country.heroImage}
                    alt={country.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <span className="text-5xl">{country.flag}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{country.name}</h2>
                      <p className="text-white/80 text-sm">
                        {country.stats.universities}+ Universities
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {country.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900">
                        {country.stats.studentsPlaced}+
                      </div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900">
                        {country.stats.visaSuccessRate}%
                      </div>
                      <div className="text-xs text-gray-500">Success</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-secondary-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900">
                        {country.popularCourses.length}+
                      </div>
                      <div className="text-xs text-gray-500">Courses</div>
                    </div>
                  </div>

                  {/* Popular Courses */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Popular Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {country.popularCourses.slice(0, 4).map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/study-abroad/${country.slug}`}
                    className="flex items-center justify-center w-full py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Explore {country.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not Sure Which Country is Right for You?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our expert counselors can help you choose the perfect destination based on
              your academic profile, career goals, and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Free Counseling
              </Link>
              <a
                href="tel:+919824372321"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountriesPage;
