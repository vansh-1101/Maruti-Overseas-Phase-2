import type { Testimonial, SiteStats } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Nikita Patel',
    avatar: '/images/testimonial-1.jpg',
    university: 'University of Melbourne',
    country: 'Australia',
    course: 'Master of Business Administration',
    rating: 5,
    content: 'I secured my Australia Visa in just 14 days with proper guidance of Mr. Chirag Soni. Thank you Maruti Overseas and team for making my dream come true!',
    verified: true,
    createdAt: new Date('2024-03-15')
  },
  {
    id: '2',
    name: 'Mehul Patel',
    avatar: '/images/testimonial-2.jpg',
    university: 'University of Technology Sydney',
    country: 'Australia',
    course: 'Master of Information Technology',
    rating: 5,
    content: 'I have not traveled any country outside India, but I got my Australia Visa with my Family due to proper guidance and documentation instruction given by Maruti Overseas and team.',
    verified: true,
    createdAt: new Date('2024-02-20')
  },
  {
    id: '3',
    name: 'Priya Sharma',
    avatar: '/images/testimonial-3.jpg',
    university: 'University of Manchester',
    country: 'UK',
    course: 'MSc Data Science',
    rating: 5,
    content: 'The team at Maruti Overseas made my UK study visa process incredibly smooth. From university selection to visa filing, everything was handled professionally. Highly recommended!',
    verified: true,
    createdAt: new Date('2024-01-10')
  },
  {
    id: '4',
    name: 'Rahul Desai',
    avatar: '/images/testimonial-4.jpg',
    university: 'University of Toronto',
    country: 'Canada',
    course: 'Bachelor of Engineering',
    rating: 5,
    content: 'Thanks to Maruti Overseas, I got into my dream university in Canada. Their guidance on the SOP and documentation was invaluable. The entire process was stress-free!',
    verified: true,
    createdAt: new Date('2024-04-05')
  },
  {
    id: '5',
    name: 'Neha Gupta',
    avatar: '/images/testimonial-5.jpg',
    university: 'Trinity College Dublin',
    country: 'Ireland',
    course: 'MSc Computer Science',
    rating: 5,
    content: 'I was confused about studying in Ireland, but the counselors at Maruti Overseas cleared all my doubts. They helped me secure a scholarship too! Forever grateful.',
    verified: true,
    createdAt: new Date('2024-03-22')
  },
  {
    id: '6',
    name: 'Karan Shah',
    avatar: '/images/team-rajesh.jpg',
    university: 'Northeastern University',
    country: 'USA',
    course: 'MS in Computer Science',
    rating: 5,
    content: 'The US visa process seemed daunting, but Maruti Overseas made it simple. Their mock interview sessions were particularly helpful. Got my visa approved in the first attempt!',
    verified: true,
    createdAt: new Date('2024-05-12')
  },
  {
    id: '7',
    name: 'Anjali Patel',
    avatar: '/images/testimonial-2.jpg',
    university: 'University of Auckland',
    country: 'New Zealand',
    course: 'Master of Commerce',
    rating: 5,
    content: 'Excellent service! The team was always available to answer my queries. My New Zealand student visa was approved within 3 weeks. Thank you Maruti Overseas!',
    verified: true,
    createdAt: new Date('2024-02-28')
  },
  {
    id: '8',
    name: 'Vivek Mehta',
    avatar: '/images/testimonial-3.jpg',
    university: 'McGill University',
    country: 'Canada',
    course: 'PhD in Biotechnology',
    rating: 5,
    content: 'As a PhD applicant, I needed specialized guidance. Maruti Overseas connected me with the right universities and helped me secure funding. Truly exceptional service!',
    verified: true,
    createdAt: new Date('2024-04-18')
  }
];

export const siteStats: SiteStats = {
  yearsExperience: 20,
  studentsPlaced: 10000,
  visaSuccessRate: 98,
  partnerUniversities: 850,
  countries: 15
};

export const getTestimonialsByCountry = (country: string): Testimonial[] => {
  return testimonials.filter(t => t.country.toLowerCase() === country.toLowerCase());
};

export const getRecentTestimonials = (count: number = 4): Testimonial[] => {
  return testimonials
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, count);
};
