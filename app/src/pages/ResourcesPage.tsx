import { Link } from 'react-router-dom';
import { Calculator, FileText, HelpCircle, Video, ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/lib/utils';

const ResourcesPage = () => {
  const tools = [
    {
      icon: Calculator,
      title: 'Cost Calculator',
      description: 'Estimate your total study abroad expenses including tuition, living costs, and more.',
      link: '/resources/calculator',
      image: '/images/tools/calculator-bg.png'
    },
    {
      icon: GraduationCap,
      title: 'GPA Converter',
      description: 'Convert your Indian percentage/CGPA to international GPA scales.',
      link: '/resources/gpa-converter',
      image: '/images/tools/checklist-bg.png'
    },
    {
      icon: FileText,
      title: 'Visa Checklist',
      description: 'Download comprehensive visa document checklists for each country.',
      link: '/resources/visa-checklist',
      image: '/images/tools/checklist-bg.png'
    },
    {
      icon: HelpCircle,
      title: 'IELTS Score Predictor',
      description: 'Estimate your IELTS band score based on practice test performance.',
      link: '/resources/ielts-predictor',
      image: '/images/tools/calculator-bg.png'
    },
  ];

  const faqs = [
    {
      question: 'What is your visa success rate?',
      answer: 'We maintain a 98% visa success rate across all destinations. Our expert counselors ensure your application is complete and accurate before submission.',
    },
    {
      question: 'Do you charge for counseling?',
      answer: 'Our initial counseling sessions are completely free. We only charge for specific services like visa filing assistance, which varies by destination.',
    },
    {
      question: 'How long does the visa process take?',
      answer: 'Visa processing times vary by country: UK (3 weeks), USA (3-5 days after interview), Canada (4-8 weeks), Australia (4-8 weeks), and Ireland (4-8 weeks).',
    },
    {
      question: 'What documents are required for a student visa?',
      answer: 'Common documents include: passport, academic transcripts, offer letter, financial proof, English test scores, SOP, and passport photos. Specific requirements vary by country.',
    },
    {
      question: 'Can I work while studying abroad?',
      answer: 'Yes, most countries allow international students to work part-time during their studies. The allowed hours vary: UK (20 hrs/week), USA (on-campus), Canada (20 hrs/week), Australia (40 hrs/fortnight).',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Study Abroad Resources.png"
            alt="Resources"
            className="w-full h-full object-cover object-[center_70%]"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex flex-col justify-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                Resources
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Study Abroad Resources
              </h1>
              <p className="text-xl text-white/90">
                Access our collection of guides, tools, and resources to help you
                navigate your study abroad journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free Tools
            </h2>
            <p className="text-gray-600">
              Use our interactive tools to plan your study abroad journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={index}
                  to={tool.link}
                  className="group relative bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all overflow-hidden block"
                >
                  {/* Background Image (Optional) */}
                  {tool.image && (
                    <>
                      <div className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity">
                        <img
                          src={tool.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                    </>
                  )}

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{tool.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{tool.description}</p>
                    <span className="text-white font-medium text-sm inline-flex items-center group-hover:underline">
                      Use Tool
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about studying abroad.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section id="webinars" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-gray-600">
              Join our free webinars to learn from experts and ask questions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-100 relative group">
                  <img
                    src={`/images/webinars/${['uk', 'usa', 'canada'][i - 1].toLowerCase()}-webinar.png`}
                    alt={`Study in ${['UK', 'USA', 'Canada'][i - 1]}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary-600 font-medium">
                    Feb {10 + i}, 2025
                  </span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-2">
                    Study in {['UK', 'USA', 'Canada'][i - 1]} Webinar
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Learn about admission requirements, visa process, and scholarships.
                  </p>
                  <Button
                    className="w-full"
                    onClick={() => window.open(generateWhatsAppLink('919824372321', `Hi, I would like to register for the Study in ${['UK', 'USA', 'Canada'][i - 1]} Webinar.`), '_blank')}
                  >Register Free</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
