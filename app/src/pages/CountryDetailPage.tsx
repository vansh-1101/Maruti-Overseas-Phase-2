import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, GraduationCap, TrendingUp, DollarSign, Briefcase, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCountryBySlug } from '@/data';

const CountryDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const country = getCountryBySlug(slug || '');


  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Country Not Found</h1>
          <Link to="/study-abroad" className="text-primary-600 hover:underline">
            Back to Study Destinations
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
          <img src={country.heroImage} alt={country.name} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-12 md:pt-0 md:pb-0">
          <Link
            to="/study-abroad"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Destinations
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl md:text-7xl">{country.flag}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                Study in {country.name}
              </h1>
              <p className="text-white/80 text-lg mt-2">
                Your gateway to world-class education
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <GraduationCap className="w-6 h-6 text-primary-300 mb-2" />
              <div className="text-2xl font-bold text-white">{country.stats.universities}+</div>
              <div className="text-white/70 text-sm">Universities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <TrendingUp className="w-6 h-6 text-green-400 mb-2" />
              <div className="text-2xl font-bold text-white">{country.stats.visaSuccessRate}%</div>
              <div className="text-white/70 text-sm">Visa Success</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <DollarSign className="w-6 h-6 text-yellow-400 mb-2" />
              <div className="text-2xl font-bold text-white">{country.stats.studentsPlaced}+</div>
              <div className="text-white/70 text-sm">Students Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Briefcase className="w-6 h-6 text-secondary-300 mb-2" />
              <div className="text-2xl font-bold text-white">Work</div>
              <div className="text-white/70 text-sm">Opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Study in {country.name}?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {country.description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {country.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Admission Requirements
                </h2>
                <div className="space-y-6">
                  {country.requirements.map((req, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        {req.title}
                      </h3>
                      <ul className="space-y-2">
                        {req.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visa Process */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Visa Application Process
                </h2>
                <div className="space-y-4">
                  {country.visaProcess.map((step) => (
                    <div
                      key={step.step}
                      className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900">{step.title}</h3>
                          <span className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Costs */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cost of Studying
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-primary-50 rounded-xl p-6 text-center">
                    <DollarSign className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <div className="text-sm text-gray-600 mb-1">Tuition Fees</div>
                    <div className="font-semibold text-gray-900">{country.costs.tuitionRange}</div>
                  </div>
                  <div className="bg-secondary-50 rounded-xl p-6 text-center">
                    <MapPin className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                    <div className="text-sm text-gray-600 mb-1">Living Expenses</div>
                    <div className="font-semibold text-gray-900">{country.costs.livingExpenses}</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <div className="text-sm text-gray-600 mb-1">Total Estimate</div>
                    <div className="font-semibold text-gray-900">{country.costs.totalEstimate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Talk to a {country.name} Expert
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    Get personalized guidance for your study in {country.name} journey.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-white text-primary-700 hover:bg-gray-100"
                  >
                    <Link to="/contact">Book Free Consultation</Link>
                  </Button>
                </div>

                {/* Popular Courses */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Popular Courses
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {country.popularCourses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Work Opportunities */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Work Opportunities
                  </h3>
                  <div className="space-y-4">
                    {country.workOpportunities.map((work, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{work.title}</div>
                          <div className="text-sm text-gray-600">{work.description}</div>
                          <div className="text-xs text-primary-600 mt-1">{work.duration}</div>
                        </div>
                      </div>
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
            Ready to Study in {country.name}?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the entire process - from university
            selection to visa approval.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-600 hover:bg-primary-700"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link to="/study-abroad">Explore Other Countries</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryDetailPage;
