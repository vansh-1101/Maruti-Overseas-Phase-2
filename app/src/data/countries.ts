import type { Country } from '@/types';

export const countries: Country[] = [
  {
    id: '1',
    name: 'United Kingdom',
    slug: 'uk',
    flag: '🇬🇧',
    heroImage: '/images/country-uk.jpg',
    description: 'The UK is home to some of the world\'s oldest and most prestigious universities. With a rich academic heritage, diverse culture, and excellent post-study work opportunities, the UK remains a top choice for Indian students.',
    benefits: [
      {
        icon: 'GraduationCap',
        title: 'World-Class Education',
        description: '4 of the top 10 universities globally are in the UK'
      },
      {
        icon: 'Briefcase',
        title: 'Post-Study Work Visa',
        description: '2-year graduate visa to work after graduation'
      },
      {
        icon: 'Clock',
        title: 'Shorter Duration',
        description: '1-year Masters programs save time and money'
      },
      {
        icon: 'Heart',
        title: 'Free Healthcare',
        description: 'NHS coverage for students during studies'
      },
      {
        icon: 'Globe',
        title: 'Multicultural Society',
        description: 'Welcoming environment for international students'
      },
      {
        icon: 'Banknote',
        title: 'Scholarships',
        description: 'Numerous funding options for Indian students'
      }
    ],
    stats: {
      universities: 150,
      studentsPlaced: 2500,
      visaSuccessRate: 97,
      avgTuitionFee: '£15,000 - £25,000'
    },
    universities: [
      {
        id: '1',
        name: 'University of Manchester',
        logo: '/images/universities/manchester.png',
        location: 'Manchester, England',
        ranking: 28,
        courses: ['Business', 'Engineering', 'Computer Science'],
        isPartner: true
      },
      {
        id: '2',
        name: 'University of Birmingham',
        logo: '/images/universities/birmingham.png',
        location: 'Birmingham, England',
        ranking: 84,
        courses: ['Medicine', 'Law', 'Arts'],
        isPartner: true
      },
      {
        id: '3',
        name: 'University of Glasgow',
        logo: '/images/universities/glasgow.png',
        location: 'Glasgow, Scotland',
        ranking: 76,
        courses: ['Engineering', 'Science', 'Business'],
        isPartner: true
      }
    ],
    popularCourses: ['MBA', 'Computer Science', 'Engineering', 'Data Science', 'Medicine', 'Law'],
    requirements: [
      {
        title: 'Academic Requirements',
        items: [
          'Bachelor\'s degree with minimum 55-60%',
          'Some courses require relevant work experience',
          'Portfolio for creative courses'
        ]
      },
      {
        title: 'English Language',
        items: [
          'IELTS: 6.5 overall (minimum 6.0 in each band)',
          'PTE: 58-65 overall',
          'TOEFL iBT: 88-100'
        ]
      },
      {
        title: 'Documents Required',
        items: [
          'Academic transcripts',
          'Statement of Purpose',
          'Letters of Recommendation',
          'CV/Resume',
          'Passport copy'
        ]
      }
    ],
    costs: {
      tuitionRange: '£15,000 - £35,000 per year',
      livingExpenses: '£12,000 - £15,000 per year',
      totalEstimate: '£27,000 - £50,000 per year'
    },
    visaProcess: [
      {
        step: 1,
        title: 'CAS Issuance',
        description: 'Receive Confirmation of Acceptance for Studies from university',
        duration: '2-4 weeks'
      },
      {
        step: 2,
        title: 'Document Preparation',
        description: 'Gather all required documents including financial proof',
        duration: '1-2 weeks'
      },
      {
        step: 3,
        title: 'Online Application',
        description: 'Complete visa application on UKVI website',
        duration: '1 day'
      },
      {
        step: 4,
        title: 'Biometrics & Interview',
        description: 'Visit VFS center for biometrics and possible interview',
        duration: '1 day'
      },
      {
        step: 5,
        title: 'Decision',
        description: 'Receive visa decision',
        duration: '3 weeks (priority: 5 days)'
      }
    ],
    workOpportunities: [
      {
        title: 'During Studies',
        description: 'Work up to 20 hours per week during term time',
        duration: 'Part-time'
      },
      {
        title: 'Graduate Visa',
        description: '2-year post-study work visa after graduation',
        duration: '2 years'
      },
      {
        title: 'Skilled Worker Visa',
        description: 'Switch to work visa after graduate route',
        duration: 'Long-term'
      }
    ],
    testimonials: []
  },
  {
    id: '2',
    name: 'United States',
    slug: 'usa',
    flag: '🇺🇸',
    heroImage: '/images/country-usa.jpg',
    description: 'The USA offers unparalleled academic excellence with the largest number of top-ranked universities globally. Known for innovation, research opportunities, and diverse campus life.',
    benefits: [
      {
        icon: 'Trophy',
        title: 'Top-Ranked Universities',
        description: 'Home to 8 of the world\'s top 10 universities'
      },
      {
        icon: 'FlaskConical',
        title: 'Research Opportunities',
        description: 'Cutting-edge research facilities and funding'
      },
      {
        icon: 'Building2',
        title: 'Optional Practical Training',
        description: '12-36 months work authorization after graduation'
      },
      {
        icon: 'Users',
        title: 'Diverse Campuses',
        description: 'Students from over 100 countries'
      },
      {
        icon: 'DollarSign',
        title: 'Scholarships',
        description: 'Merit-based and need-based financial aid'
      },
      {
        icon: 'Network',
        title: 'Global Network',
        description: 'Alumni networks across Fortune 500 companies'
      }
    ],
    stats: {
      universities: 4000,
      studentsPlaced: 1800,
      visaSuccessRate: 95,
      avgTuitionFee: '$25,000 - $50,000'
    },
    universities: [
      {
        id: '1',
        name: 'Northeastern University',
        logo: '/images/universities/northeastern.png',
        location: 'Boston, MA',
        ranking: 44,
        courses: ['Business', 'Engineering', 'CS'],
        isPartner: true
      },
      {
        id: '2',
        name: 'Arizona State University',
        logo: '/images/universities/asu.png',
        location: 'Tempe, AZ',
        ranking: 156,
        courses: ['Engineering', 'Business', 'Design'],
        isPartner: true
      }
    ],
    popularCourses: ['MS in CS', 'MBA', 'Data Science', 'Engineering', 'Public Health', 'Finance'],
    requirements: [
      {
        title: 'Academic Requirements',
        items: [
          'Bachelor\'s degree with minimum 60%',
          'GRE/GMAT for most programs',
          'Relevant prerequisites for specific courses'
        ]
      },
      {
        title: 'English Language',
        items: [
          'IELTS: 6.5 - 7.0 overall',
          'TOEFL iBT: 80 - 100',
          'PTE: 53 - 70'
        ]
      },
      {
        title: 'Documents Required',
        items: [
          'Transcripts (WES evaluation)',
          'GRE/GMAT scores',
          'Statement of Purpose',
          '2-3 Recommendation Letters',
          'CV/Resume',
          'Financial documents'
        ]
      }
    ],
    costs: {
      tuitionRange: '$20,000 - $60,000 per year',
      livingExpenses: '$12,000 - $18,000 per year',
      totalEstimate: '$32,000 - $78,000 per year'
    },
    visaProcess: [
      {
        step: 1,
        title: 'I-20 Issuance',
        description: 'Receive I-20 form from university after admission',
        duration: '2-3 weeks'
      },
      {
        step: 2,
        title: 'SEVIS Fee',
        description: 'Pay SEVIS I-901 fee online',
        duration: 'Same day'
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete online non-immigrant visa application',
        duration: '1-2 hours'
      },
      {
        step: 4,
        title: 'Visa Interview',
        description: 'Schedule and attend visa interview at US Embassy',
        duration: '10-15 minutes'
      },
      {
        step: 5,
        title: 'Visa Issuance',
        description: 'Passport returned with visa stamp',
        duration: '3-5 business days'
      }
    ],
    workOpportunities: [
      {
        title: 'On-Campus Work',
        description: 'Work up to 20 hours per week on campus',
        duration: 'Part-time'
      },
      {
        title: 'CPT',
        description: 'Curricular Practical Training during studies',
        duration: 'Varies'
      },
      {
        title: 'OPT',
        description: 'Optional Practical Training after graduation',
        duration: '12-36 months'
      }
    ],
    testimonials: []
  },
  {
    id: '3',
    name: 'Canada',
    slug: 'canada',
    flag: '🇨🇦',
    heroImage: '/images/country-canada.jpg',
    description: 'Canada offers high-quality education at affordable costs, with excellent post-graduation work permits and pathways to permanent residency. A safe and welcoming destination.',
    benefits: [
      {
        icon: 'Wallet',
        title: 'Affordable Education',
        description: 'Lower tuition fees compared to US/UK'
      },
      {
        icon: 'MapPin',
        title: 'PGWP',
        description: '3-year post-graduation work permit'
      },
      {
        icon: 'Home',
        title: 'Pathway to PR',
        description: 'Easy transition to permanent residency'
      },
      {
        icon: 'Shield',
        title: 'Safe Country',
        description: 'One of the safest countries globally'
      },
      {
        icon: 'Palette',
        title: 'Multicultural',
        description: 'Diverse and inclusive society'
      },
      {
        icon: 'Briefcase',
        title: 'Work While Study',
        description: 'Work 20 hours/week during studies'
      }
    ],
    stats: {
      universities: 100,
      studentsPlaced: 3200,
      visaSuccessRate: 96,
      avgTuitionFee: 'CAD 15,000 - 35,000'
    },
    universities: [
      {
        id: '1',
        name: 'University of Toronto',
        logo: '/images/universities/toronto.png',
        location: 'Toronto, ON',
        ranking: 21,
        courses: ['Business', 'Engineering', 'CS'],
        isPartner: true
      },
      {
        id: '2',
        name: 'McGill University',
        logo: '/images/universities/mcgill.png',
        location: 'Montreal, QC',
        ranking: 30,
        courses: ['Medicine', 'Law', 'Science'],
        isPartner: true
      }
    ],
    popularCourses: ['Computer Science', 'Engineering', 'Business', 'Healthcare', 'Data Analytics'],
    requirements: [
      {
        title: 'Academic Requirements',
        items: [
          'Bachelor\'s degree with minimum 65%',
          'Some programs require GRE/GMAT',
          'Relevant academic background'
        ]
      },
      {
        title: 'English Language',
        items: [
          'IELTS: 6.5 overall (minimum 6.0)',
          'PTE: 60 overall',
          'TOEFL iBT: 88+'
        ]
      },
      {
        title: 'Documents Required',
        items: [
          'Academic transcripts',
          'Statement of Purpose',
          'Recommendation Letters',
          'CV/Resume',
          'Proof of funds (GIC recommended)'
        ]
      }
    ],
    costs: {
      tuitionRange: 'CAD 15,000 - 40,000 per year',
      livingExpenses: 'CAD 12,000 - 15,000 per year',
      totalEstimate: 'CAD 27,000 - 55,000 per year'
    },
    visaProcess: [
      {
        step: 1,
        title: 'LOA',
        description: 'Receive Letter of Acceptance from DLI',
        duration: '2-6 weeks'
      },
      {
        step: 2,
        title: 'GIC (Recommended)',
        description: 'Purchase Guaranteed Investment Certificate',
        duration: '1-2 weeks'
      },
      {
        step: 3,
        title: 'Medical Exam',
        description: 'Complete immigration medical examination',
        duration: '1 week'
      },
      {
        step: 4,
        title: 'Online Application',
        description: 'Submit study permit application online',
        duration: '1-2 hours'
      },
      {
        step: 5,
        title: 'Biometrics',
        description: 'Provide biometrics at VAC',
        duration: '1 day'
      }
    ],
    workOpportunities: [
      {
        title: 'During Studies',
        description: 'Work 20 hours/week, full-time during breaks',
        duration: 'Part-time'
      },
      {
        title: 'PGWP',
        description: 'Post-Graduation Work Permit',
        duration: '1-3 years'
      },
      {
        title: 'Express Entry',
        description: 'Pathway to permanent residency',
        duration: 'Long-term'
      }
    ],
    testimonials: []
  },
  {
    id: '4',
    name: 'Australia',
    slug: 'australia',
    flag: '🇦🇺',
    heroImage: '/images/country-australia.jpg',
    description: 'Australia offers world-class education with a focus on research and innovation. Known for its high quality of life, beautiful landscapes, and welcoming culture.',
    benefits: [
      {
        icon: 'Star',
        title: 'Top Universities',
        description: '8 universities in top 100 worldwide'
      },
      {
        icon: 'Sun',
        title: 'Great Lifestyle',
        description: 'High quality of life and weather'
      },
      {
        icon: 'Clock',
        title: 'Work Rights',
        description: '40 hours per fortnight work allowance'
      },
      {
        icon: 'GraduationCap',
        title: 'Post-Study Work',
        description: '2-4 years temporary graduate visa'
      },
      {
        icon: 'Globe',
        title: 'Research Focus',
        description: 'Strong research and innovation culture'
      },
      {
        icon: 'Heart',
        title: 'Student Support',
        description: 'Excellent support services for students'
      }
    ],
    stats: {
      universities: 43,
      studentsPlaced: 1500,
      visaSuccessRate: 98,
      avgTuitionFee: 'AUD 25,000 - 45,000'
    },
    universities: [
      {
        id: '1',
        name: 'University of Melbourne',
        logo: '/images/universities/melbourne.png',
        location: 'Melbourne, VIC',
        ranking: 14,
        courses: ['Business', 'Law', 'Medicine'],
        isPartner: true
      },
      {
        id: '2',
        name: 'UNSW Sydney',
        logo: '/images/universities/unsw.png',
        location: 'Sydney, NSW',
        ranking: 19,
        courses: ['Engineering', 'CS', 'Business'],
        isPartner: true
      }
    ],
    popularCourses: ['Business', 'Engineering', 'IT', 'Health Sciences', 'Accounting'],
    requirements: [
      {
        title: 'Academic Requirements',
        items: [
          'Bachelor\'s degree with minimum 60%',
          'Some courses require work experience',
          'Portfolio for design courses'
        ]
      },
      {
        title: 'English Language',
        items: [
          'IELTS: 6.5 overall (minimum 6.0)',
          'PTE: 58+',
          'TOEFL iBT: 79+'
        ]
      },
      {
        title: 'Documents Required',
        items: [
          'Academic transcripts',
          'Statement of Purpose',
          'Recommendation Letters',
          'CV/Resume',
          'GTE (Genuine Temporary Entrant) statement'
        ]
      }
    ],
    costs: {
      tuitionRange: 'AUD 22,000 - 50,000 per year',
      livingExpenses: 'AUD 21,041 per year (as per visa)',
      totalEstimate: 'AUD 43,000 - 71,000 per year'
    },
    visaProcess: [
      {
        step: 1,
        title: 'COE',
        description: 'Receive Confirmation of Enrolment',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'OSHC',
        description: 'Purchase Overseas Student Health Cover',
        duration: 'Same day'
      },
      {
        step: 3,
        title: 'Online Application',
        description: 'Submit student visa application (Subclass 500)',
        duration: '1-2 hours'
      },
      {
        step: 4,
        title: 'Health Exam',
        description: 'Complete health examination if required',
        duration: '1 week'
      },
      {
        step: 5,
        title: 'Decision',
        description: 'Receive visa grant notification',
        duration: '4-8 weeks'
      }
    ],
    workOpportunities: [
      {
        title: 'During Studies',
        description: 'Work 40 hours per fortnight',
        duration: 'Part-time'
      },
      {
        title: 'Temporary Graduate Visa',
        description: 'Post-study work visa (485)',
        duration: '2-4 years'
      },
      {
        title: 'Skilled Migration',
        description: 'Pathway to permanent residency',
        duration: 'Long-term'
      }
    ],
    testimonials: []
  },
  {
    id: '5',
    name: 'New Zealand',
    slug: 'new-zealand',
    flag: '🇳🇿',
    heroImage: '/images/country-newzealand.jpg',
    description: 'New Zealand offers a unique study experience with world-class education, stunning natural beauty, and a peaceful environment. All 8 universities are in the top 500 globally.',
    benefits: [
      {
        icon: 'Mountain',
        title: 'Quality of Life',
        description: 'Peaceful, safe, and beautiful environment'
      },
      {
        icon: 'GraduationCap',
        title: 'All Universities Ranked',
        description: 'All 8 universities in top 500 worldwide'
      },
      {
        icon: 'Briefcase',
        title: 'Work Rights',
        description: '20 hours/week during term, full-time in holidays'
      },
      {
        icon: 'Home',
        title: 'Post-Study Visa',
        description: 'Up to 3 years post-study work visa'
      },
      {
        icon: 'Users',
        title: 'Welcoming Culture',
        description: 'Friendly and inclusive society'
      },
      {
        icon: 'Palette',
        title: 'Research Excellence',
        description: 'Strong in agriculture, environmental science'
      }
    ],
    stats: {
      universities: 8,
      studentsPlaced: 800,
      visaSuccessRate: 99,
      avgTuitionFee: 'NZD 22,000 - 35,000'
    },
    universities: [
      {
        id: '1',
        name: 'University of Auckland',
        logo: '/images/universities/auckland.png',
        location: 'Auckland',
        ranking: 68,
        courses: ['Business', 'Engineering', 'Arts'],
        isPartner: true
      }
    ],
    popularCourses: ['Business', 'IT', 'Engineering', 'Hospitality', 'Agriculture'],
    requirements: [
      {
        title: 'Academic Requirements',
        items: [
          'Bachelor\'s degree with minimum 55%',
          'Relevant academic background',
          'Portfolio for specific courses'
        ]
      },
      {
        title: 'English Language',
        items: [
          'IELTS: 6.5 overall (minimum 6.0)',
          'PTE: 58+',
          'TOEFL iBT: 79+'
        ]
      },
      {
        title: 'Documents Required',
        items: [
          'Academic transcripts',
          'Statement of Purpose',
          'Recommendation Letters',
          'Proof of funds',
          'Medical and police certificates'
        ]
      }
    ],
    costs: {
      tuitionRange: 'NZD 22,000 - 40,000 per year',
      livingExpenses: 'NZD 15,000 - 20,000 per year',
      totalEstimate: 'NZD 37,000 - 60,000 per year'
    },
    visaProcess: [
      {
        step: 1,
        title: 'Offer Letter',
        description: 'Receive offer from NZ institution',
        duration: '2-4 weeks'
      },
      {
        step: 2,
        title: 'Fee Payment',
        description: 'Pay tuition fees to get COE',
        duration: '1 week'
      },
      {
        step: 3,
        title: 'Online Application',
        description: 'Submit student visa application',
        duration: '1-2 hours'
      },
      {
        step: 4,
        title: 'Documents',
        description: 'Upload all required documents',
        duration: '1 week'
      },
      {
        step: 5,
        title: 'Decision',
        description: 'Receive visa decision',
        duration: '4-6 weeks'
      }
    ],
    workOpportunities: [
      {
        title: 'During Studies',
        description: '20 hours/week, full-time in holidays',
        duration: 'Part-time'
      },
      {
        title: 'Post-Study Work Visa',
        description: 'Work visa after graduation',
        duration: '1-3 years'
      },
      {
        title: 'Skilled Migrant',
        description: 'Pathway to residence',
        duration: 'Long-term'
      }
    ],
    testimonials: []
  },
  {
    id: '6',
    name: 'Ireland',
    slug: 'ireland',
    flag: '🇮🇪',
    heroImage: '/images/country-europe.jpg',
    description: 'Ireland is Europe\'s tech hub with headquarters of major tech companies. Offers excellent education, post-study work visa, and is the only English-speaking country in the Eurozone.',
    benefits: [
      {
        icon: 'Laptop',
        title: 'Tech Hub',
        description: 'European HQ for Google, Apple, Meta, etc.'
      },
      {
        icon: 'Euro',
        title: '2-Year Stay Back',
        description: 'Post-study work visa for graduates'
      },
      {
        icon: 'Languages',
        title: 'English Speaking',
        description: 'Only English-speaking EU country'
      },
      {
        icon: 'Plane',
        title: 'Gateway to Europe',
        description: 'Easy travel across European countries'
      },
      {
        icon: 'Building',
        title: 'Pharma & Tech Jobs',
        description: 'Major industry presence'
      },
      {
        icon: 'Heart',
        title: 'Friendly People',
        description: 'Welcoming and safe environment'
      }
    ],
    stats: {
      universities: 20,
      studentsPlaced: 600,
      visaSuccessRate: 98,
      avgTuitionFee: '€12,000 - 25,000'
    },
    universities: [
      {
        id: '1',
        name: 'Trinity College Dublin',
        logo: '/images/universities/tcd.png',
        location: 'Dublin',
        ranking: 81,
        courses: ['Computer Science', 'Business', 'Arts'],
        isPartner: true
      }
    ],
    popularCourses: ['Computer Science', 'Data Analytics', 'Business', 'Pharmaceuticals'],
    requirements: [
      {
        title: 'Academic Requirements',
        items: [
          'Bachelor\'s degree with minimum 60%',
          'Relevant academic background',
          'Some courses require experience'
        ]
      },
      {
        title: 'English Language',
        items: [
          'IELTS: 6.5 overall',
          'PTE: 63+',
          'TOEFL iBT: 88+'
        ]
      },
      {
        title: 'Documents Required',
        items: [
          'Academic transcripts',
          'Statement of Purpose',
          'Recommendation Letters',
          'CV/Resume',
          'Proof of funds (€10,000)'
        ]
      }
    ],
    costs: {
      tuitionRange: '€12,000 - 30,000 per year',
      livingExpenses: '€10,000 - 14,000 per year',
      totalEstimate: '€22,000 - 44,000 per year'
    },
    visaProcess: [
      {
        step: 1,
        title: 'Offer Letter',
        description: 'Receive offer from Irish institution',
        duration: '2-4 weeks'
      },
      {
        step: 2,
        title: 'Fee Payment',
        description: 'Pay tuition fees',
        duration: '1 week'
      },
      {
        step: 3,
        title: 'Online Application',
        description: 'Submit visa application on AVATS',
        duration: '1-2 hours'
      },
      {
        step: 4,
        title: 'Documents & Biometrics',
        description: 'Submit documents and biometrics',
        duration: '1 week'
      },
      {
        step: 5,
        title: 'Decision',
        description: 'Receive visa decision',
        duration: '4-8 weeks'
      }
    ],
    workOpportunities: [
      {
        title: 'During Studies',
        description: '20 hours/week, 40 hours in holidays',
        duration: 'Part-time'
      },
      {
        title: 'Third Level Graduate Scheme',
        description: '2-year stay back option',
        duration: '2 years'
      },
      {
        title: 'Critical Skills Employment',
        description: 'Pathway to permanent residence',
        duration: 'Long-term'
      }
    ],
    testimonials: []
  }
];

export const getCountryBySlug = (slug: string): Country | undefined => {
  return countries.find(country => country.slug === slug);
};

export const getAllCountrySlugs = (): string[] => {
  return countries.map(country => country.slug);
};
