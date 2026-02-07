import { Award, Users, Globe, CheckCircle2 } from 'lucide-react';
import { siteStats } from '@/data/testimonials';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

const AboutPage = () => {
  const values = [
    {
      icon: Users,
      title: 'Student First',
      description: 'We always put our students\' interests first, ensuring personalized guidance tailored to each individual.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, maintaining the highest standards of quality.',
    },
    {
      icon: CheckCircle2,
      title: 'Integrity',
      description: 'We believe in transparent and honest counseling, providing accurate information to our students.',
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'We help students see beyond boundaries and achieve their global education dreams.',
    },
  ];

  const team = [
    {
      name: 'Chirag Soni',
      role: 'Founder & Director',
      image: '/images/team-chirag.jpg',
      description: '20+ years of experience in overseas education consulting.',
    },
    {
      name: 'Parth',
      role: 'Senior Counselor',
      image: '/images/team-rajesh.jpg',
      description: 'Expert counselor helping students achieve their study abroad dreams.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <img
            src="/images/Your Trusted Partner in Global Education.png"
            alt="About Us"
            className="w-full h-full object-cover object-center scale-130 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        </div>
        <div className="relative h-full flex flex-col justify-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Your Trusted Partner in Global Education
              </h1>
              <p className="text-xl text-white/90">
                Since 2004, Maruti Overseas Consultancy has been guiding students from
                Gujarat to achieve their dreams of international education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Maruti Overseas Consultancy was established in July 2004 with a simple
                  mission: to help students from Gujarat access world-class education
                  opportunities abroad.
                </p>
                <p>
                  What started as a small consultancy in Visnagar has grown into one of
                  Gujarat's most trusted overseas education consultancies, with offices
                  in Visnagar and Ahmedabad.
                </p>
                <p>
                  Over the past 20 years, we have helped over 10,000 students achieve
                  their dreams of studying in top universities across the UK, USA, Canada,
                  Australia, New Zealand, and Europe.
                </p>
                <p>
                  Our success is built on our core values of integrity, excellence, and
                  student-first approach. We are committed to providing honest, transparent,
                  and personalized guidance to every student who walks through our doors.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="/images/hero-main.jpg" alt="Our Story" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="text-4xl font-bold text-primary-600">20+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Certificates
            </h2>
            <p className="text-gray-600">
              Recognized and certified by leading international education organizations and authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div
                key={num}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  {/* Loading placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse text-gray-400">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <img
                    src={`/images/certificates/${num}.jpg`}
                    alt={`Certificate ${num}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.previousElementSibling?.classList.add('hidden');
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {siteStats.yearsExperience}+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {siteStats.studentsPlaced.toLocaleString()}+
              </div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {siteStats.visaSuccessRate}%
              </div>
              <div className="text-gray-600">Visa Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {siteStats.partnerUniversities}+
              </div>
              <div className="text-gray-600">Partner Universities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              These principles guide everything we do at Maruti Overseas Consultancy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600">
              Our experienced counselors are dedicated to helping you achieve your study abroad goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-8 text-center"
              >
                <h3 className="font-bold text-gray-900 text-xl mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
