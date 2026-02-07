import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Student Visa',
    slug: 'student-visa',
    icon: 'GraduationCap',
    image: '/images/tools/blog/uk-study.jpg',
    shortDescription: 'Expert guidance for student visa applications to top study destinations worldwide.',
    fullDescription: 'Our student visa services provide end-to-end support for your study abroad journey. From university selection to visa approval, we guide you through every step with personalized counseling and expert advice. With a 98% visa success rate, we are your trusted partner in achieving your international education dreams.',
    features: [
      'Free counseling sessions with certified experts',
      'University and course shortlisting',
      'Application documentation support',
      'Visa file preparation and review',
      'Interview preparation and mock sessions',
      'Pre-departure orientation',
      'Post-arrival support'
    ],
    process: [
      {
        step: 1,
        title: 'Free Counseling',
        description: 'Discuss your academic background, career goals, and preferences with our experts'
      },
      {
        step: 2,
        title: 'University Selection',
        description: 'Get shortlisted universities based on your profile and preferences'
      },
      {
        step: 3,
        title: 'Application Support',
        description: 'Complete assistance with applications, SOPs, and recommendation letters'
      },
      {
        step: 4,
        title: 'Offer Acceptance',
        description: 'Guidance on accepting offers and paying deposits'
      },
      {
        step: 5,
        title: 'Visa Processing',
        description: 'Complete visa file preparation and submission support'
      },
      {
        step: 6,
        title: 'Pre-Departure',
        description: 'Orientation session and travel arrangements'
      }
    ],
    faqs: [
      {
        question: 'What is your visa success rate?',
        answer: 'We maintain a 98% visa success rate across all destinations. Our expert counselors ensure your application is complete and accurate before submission.'
      },
      {
        question: 'Do you charge for counseling?',
        answer: 'Our initial counseling sessions are completely free. We only charge for specific services like visa filing assistance, which varies by destination.'
      },
      {
        question: 'How long does the visa process take?',
        answer: 'Visa processing times vary by country: UK (3 weeks), USA (3-5 days after interview), Canada (4-8 weeks), Australia (4-8 weeks), and Ireland (4-8 weeks).'
      },
      {
        question: 'What documents are required for a student visa?',
        answer: 'Common documents include: passport, academic transcripts, offer letter, financial proof, English test scores, SOP, and passport photos. Specific requirements vary by country.'
      }
    ]
  },
  {
    id: '2',
    name: 'Tourist Visa',
    slug: 'tourist-visa',
    icon: 'Plane',
    image: '/images/service-tourist-visa.png',
    shortDescription: 'Hassle-free tourist visa processing for USA, UK, Schengen, and more.',
    fullDescription: 'Planning a vacation or visiting family abroad? Our tourist visa services make the process smooth and stress-free. We handle all documentation, appointment scheduling, and provide interview guidance to maximize your chances of approval.',
    features: [
      'Complete documentation support',
      'Appointment scheduling',
      'Travel itinerary planning',
      'Financial documentation guidance',
      'Interview preparation',
      'Express processing options',
      'Multi-country visa packages'
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Discuss your travel plans and visa requirements'
      },
      {
        step: 2,
        title: 'Document Checklist',
        description: 'Receive personalized document checklist'
      },
      {
        step: 3,
        title: 'File Preparation',
        description: 'We prepare and review your complete visa file'
      },
      {
        step: 4,
        title: 'Appointment Booking',
        description: 'Schedule visa appointment at embassy/VFS'
      },
      {
        step: 5,
        title: 'Interview Prep',
        description: 'Mock interview and guidance session'
      },
      {
        step: 6,
        title: 'Visa Collection',
        description: 'Collect passport with visa stamp'
      }
    ],
    faqs: [
      {
        question: 'Which countries do you process tourist visas for?',
        answer: 'We process tourist visas for USA, UK, Schengen countries, Canada, Australia, New Zealand, Singapore, Dubai, and many more destinations.'
      },
      {
        question: 'How much bank balance is required?',
        answer: 'Requirements vary by country. Generally, you need to show funds covering your trip cost plus a buffer. We provide specific guidance based on your destination.'
      },
      {
        question: 'Can you guarantee visa approval?',
        answer: 'No consultant can guarantee visa approval as it\'s at the discretion of the embassy. However, our expertise significantly improves your chances.'
      }
    ]
  },
  {
    id: '3',
    name: 'Immigration Services',
    slug: 'immigration',
    icon: 'Home',
    image: '/images/service-immigration.png',
    shortDescription: 'Permanent residency and work visa assistance for Canada, Australia, and more.',
    fullDescription: 'Looking to build a new life abroad? Our immigration services help you navigate the complex pathways to permanent residency. From Express Entry to Provincial Nominee Programs, we provide comprehensive support for your immigration journey.',
    features: [
      'Eligibility assessment',
      'CRS score calculation',
      'Express Entry profile creation',
      'PNP application support',
      'Document verification',
      'Job search assistance',
      'Settlement guidance'
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'Evaluate your eligibility for various programs'
      },
      {
        step: 2,
        title: 'Strategy Planning',
        description: 'Create personalized immigration roadmap'
      },
      {
        step: 3,
        title: 'Documentation',
        description: 'Gather and verify all required documents'
      },
      {
        step: 4,
        title: 'Application Filing',
        description: 'Submit application with complete accuracy'
      },
      {
        step: 5,
        title: 'Follow-up',
        description: 'Track application and respond to queries'
      },
      {
        step: 6,
        title: 'Landing Support',
        description: 'Post-ITA and landing assistance'
      }
    ],
    faqs: [
      {
        question: 'Which countries do you help with immigration?',
        answer: 'We primarily assist with Canada (Express Entry, PNP), Australia (SkillSelect), and New Zealand (Skilled Migrant Category).'
      },
      {
        question: 'What is the minimum CRS score needed for Canada?',
        answer: 'The minimum CRS score varies by draw. Recent draws have ranged from 450-500+. We help improve your score through various strategies.'
      },
      {
        question: 'How long does the immigration process take?',
        answer: 'Processing times vary: Canada Express Entry (6-8 months), Australia (8-12 months), and New Zealand (6-12 months).'
      }
    ]
  },
  {
    id: '4',
    name: 'Test Preparation',
    slug: 'test-prep',
    icon: 'BookOpen',
    image: '/images/about-image.jpg',
    shortDescription: 'IELTS, PTE, TOEFL, GRE, and GMAT coaching with expert trainers.',
    fullDescription: 'Achieve your target scores with our comprehensive test preparation programs. Our certified trainers use proven methodologies and personalized attention to help you excel in IELTS, PTE, TOEFL, GRE, and GMAT exams.',
    features: [
      'Certified and experienced trainers',
      'Small batch sizes (max 10 students)',
      'Comprehensive study material',
      'Mock tests with detailed analysis',
      'One-on-one doubt clearing',
      'Flexible batch timings',
      'Online and offline options'
    ],
    process: [
      {
        step: 1,
        title: 'Diagnostic Test',
        description: 'Assess your current level and identify weak areas'
      },
      {
        step: 2,
        title: 'Customized Plan',
        description: 'Get a personalized study plan based on your target score'
      },
      {
        step: 3,
        title: 'Training',
        description: 'Attend classes covering all test sections'
      },
      {
        step: 4,
        title: 'Practice Tests',
        description: 'Regular mock tests to track progress'
      },
      {
        step: 5,
        title: 'Review & Improve',
        description: 'Detailed feedback and focused improvement'
      },
      {
        step: 6,
        title: 'Exam Booking',
        description: 'Assistance with test registration'
      }
    ],
    faqs: [
      {
        question: 'What courses do you offer?',
        answer: 'We offer coaching for IELTS (Academic & General), PTE, TOEFL, GRE, and GMAT.'
      },
      {
        question: 'How long is the course duration?',
        answer: 'Course duration varies: IELTS/PTE (4-6 weeks), GRE/GMAT (8-12 weeks). Crash courses also available.'
      },
      {
        question: 'Do you guarantee a specific score?',
        answer: 'While we cannot guarantee scores, our students consistently achieve their target scores with our proven methods. We provide additional support if needed.'
      },
      {
        question: 'What is your success rate?',
        answer: 'Over 90% of our students achieve their target scores on the first attempt.'
      }
    ]
  },
  {
    id: '5',
    name: 'Scholarship Assistance',
    slug: 'scholarships',
    icon: 'Award',
    image: '/images/hero-main.jpg',
    shortDescription: 'Find and apply for scholarships to reduce your study abroad costs.',
    fullDescription: 'Don\'t let finances hold back your dreams. Our scholarship assistance service helps you discover and secure scholarships, grants, and financial aid opportunities. We guide you through the entire application process to maximize your chances of funding.',
    features: [
      'Scholarship database access',
      'Eligibility assessment',
      'Application guidance',
      'Essay/SOP review',
      'Document preparation',
      'Deadline tracking',
      'Interview preparation'
    ],
    process: [
      {
        step: 1,
        title: 'Profile Analysis',
        description: 'Evaluate your academic and extracurricular profile'
      },
      {
        step: 2,
        title: 'Scholarship Search',
        description: 'Identify relevant scholarship opportunities'
      },
      {
        step: 3,
        title: 'Application Strategy',
        description: 'Plan applications for maximum success'
      },
      {
        step: 4,
        title: 'Documentation',
        description: 'Prepare all required documents and essays'
      },
      {
        step: 5,
        title: 'Submission',
        description: 'Submit applications before deadlines'
      },
      {
        step: 6,
        title: 'Follow-up',
        description: 'Track applications and respond to queries'
      }
    ],
    faqs: [
      {
        question: 'What types of scholarships are available?',
        answer: 'Scholarships include merit-based, need-based, country-specific, university-specific, and subject-specific awards.'
      },
      {
        question: 'How much funding can I get?',
        answer: 'Scholarships range from partial tuition (10-50%) to full rides covering tuition, living expenses, and travel.'
      },
      {
        question: 'When should I apply for scholarships?',
        answer: 'Most scholarship deadlines are 6-12 months before program start. Early application is crucial.'
      }
    ]
  },
  {
    id: '6',
    name: 'Air Ticketing',
    slug: 'air-tickets',
    icon: 'Plane',
    image: '/images/service-air.jpg',
    shortDescription: 'Domestic and international flight bookings at competitive prices.',
    fullDescription: 'Get the best deals on domestic and international flights with our air ticketing services. We offer competitive prices, multiple airline options, and complete travel support for students and tourists alike.',
    features: [
      'Competitive pricing',
      'Multiple airline options',
      'Student discounts',
      'Flexible booking options',
      '24/7 support',
      'Group bookings',
      'Travel insurance'
    ],
    process: [
      {
        step: 1,
        title: 'Quote Request',
        description: 'Share your travel dates and preferences'
      },
      {
        step: 2,
        title: 'Options',
        description: 'Receive multiple flight options'
      },
      {
        step: 3,
        title: 'Booking',
        description: 'Confirm and complete payment'
      },
      {
        step: 4,
        title: 'Tickets',
        description: 'Receive e-tickets and itinerary'
      }
    ],
    faqs: [
      {
        question: 'Do you offer student discounts?',
        answer: 'Yes, we offer special student fares with extra baggage allowance on select airlines.'
      },
      {
        question: 'Can I book one-way tickets?',
        answer: 'Yes, we book both one-way and round-trip tickets based on your requirements.'
      }
    ]
  },
  {
    id: '7',
    name: 'Forex Services',
    slug: 'forex',
    icon: 'Banknote',
    image: '/images/service-forex.jpg',
    shortDescription: 'Buy and sell foreign currency at best rates through RBI approved agents.',
    fullDescription: 'Get the best exchange rates for all major currencies through our RBI-approved forex partners. We offer currency exchange, forex cards, and wire transfer services for students and travelers.',
    features: [
      'Best exchange rates',
      'All major currencies',
      'Forex cards',
      'Wire transfers',
      'RBI approved partners',
      'Quick processing',
      'Secure transactions'
    ],
    process: [
      {
        step: 1,
        title: 'Rate Inquiry',
        description: 'Get current exchange rates'
      },
      {
        step: 2,
        title: 'Documentation',
        description: 'Submit KYC documents'
      },
      {
        step: 3,
        title: 'Transaction',
        description: 'Complete the exchange'
      },
      {
        step: 4,
        title: 'Receipt',
        description: 'Get currency/card and receipt'
      }
    ],
    faqs: [
      {
        question: 'What currencies do you deal in?',
        answer: 'We deal in USD, GBP, EUR, CAD, AUD, NZD, SGD, AED, and all major currencies.'
      },
      {
        question: 'What documents are required?',
        answer: 'PAN card, passport, and visa copy (for students) are required as per RBI guidelines.'
      }
    ]
  },
  {
    id: '8',
    name: 'Tour Packages',
    slug: 'tours',
    icon: 'Map',
    image: '/images/service-tours.jpg',
    shortDescription: 'Domestic and international holiday packages for families and groups.',
    fullDescription: 'Explore the world with our carefully curated tour packages. From domestic getaways to international adventures, we offer complete travel solutions including flights, hotels, transfers, and guided tours.',
    features: [
      'Customized itineraries',
      'Hotel bookings',
      'Airport transfers',
      'Guided tours',
      'Travel insurance',
      '24/7 support',
      'Group discounts'
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Discuss your travel preferences'
      },
      {
        step: 2,
        title: 'Itinerary',
        description: 'Receive customized tour plan'
      },
      {
        step: 3,
        title: 'Booking',
        description: 'Confirm and make payment'
      },
      {
        step: 4,
        title: 'Travel',
        description: 'Enjoy your hassle-free vacation'
      }
    ],
    faqs: [
      {
        question: 'Do you offer customized packages?',
        answer: 'Yes, we create personalized itineraries based on your preferences and budget.'
      },
      {
        question: 'What destinations do you cover?',
        answer: 'We offer packages for domestic destinations, Dubai, Singapore, Thailand, Europe, USA, and more.'
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
