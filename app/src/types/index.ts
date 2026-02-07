// Lead Types
export interface Lead {
  id: string;
  source: 'website' | 'whatsapp' | 'referral' | 'paid' | 'organic';
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'converted' | 'lost';
  priority: 'hot' | 'warm' | 'cold';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  currentEducation: string;
  percentage: number;
  backlogs?: number;
  preferredCountries: string[];
  preferredCourses: string[];
  intake: string;
  budget: string;
  ieltsScore?: number;
  pteScore?: number;
  toeflScore?: number;
  greScore?: number;
  gmatScore?: number;
  assignedTo?: string;
  notes: Note[];
  activities: Activity[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Note {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
}

export interface Activity {
  id: string;
  type: 'call' | 'email' | 'sms' | 'whatsapp' | 'meeting' | 'note';
  description: string;
  author: string;
  createdAt: Date;
}

// Country Types
export interface Country {
  id: string;
  name: string;
  slug: string;
  flag: string;
  heroImage: string;
  description: string;
  benefits: Benefit[];
  stats: CountryStats;
  universities: University[];
  popularCourses: string[];
  requirements: Requirement[];
  costs: CostInfo;
  visaProcess: VisaStep[];
  workOpportunities: WorkOpportunity[];
  testimonials: Testimonial[];
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface CountryStats {
  universities: number;
  studentsPlaced: number;
  visaSuccessRate: number;
  avgTuitionFee: string;
}

export interface University {
  id: string;
  name: string;
  logo: string;
  location: string;
  ranking?: number;
  courses: string[];
  isPartner: boolean;
}

export interface Requirement {
  title: string;
  items: string[];
}

export interface CostInfo {
  tuitionRange: string;
  livingExpenses: string;
  totalEstimate: string;
}

export interface VisaStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface WorkOpportunity {
  title: string;
  description: string;
  duration: string;
}

// Course Types
export interface Course {
  id: string;
  name: string;
  fullName?: string; // Added
  slug?: string; // Made optional if not used strictly yet
  category: string;
  level: string; // broadened from specific union
  duration: string;
  tuitionFee?: string; // Made optional
  description: string;
  universities?: string[]; // Made optional
  countries?: string[]; // Added
  careers?: string[]; // Made optional
  requirements?: string[]; // Made optional
  image?: string; // Added
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  university: string;
  country: string;
  course: string;
  rating: number;
  content: string;
  isVideo?: boolean;
  videoUrl?: string;
  verified: boolean;
  createdAt: Date;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  process: ProcessStep[];
  faqs: FAQ[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: Date;
  readTime: number;
  views: number;
}

export interface Author {
  name: string;
  avatar: string;
  role: string;
}

// Webinar Types
export interface Webinar {
  id: string;
  title: string;
  description: string;
  date: Date;
  duration: string;
  speaker: Speaker;
  registrationUrl: string;
  isRecorded: boolean;
  recordingUrl?: string;
  attendees: number;
}

export interface Speaker {
  name: string;
  avatar: string;
  designation: string;
  bio: string;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'counselor' | 'staff';
  permissions: string[];
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Stats Types
export interface SiteStats {
  yearsExperience: number;
  studentsPlaced: number;
  visaSuccessRate: number;
  partnerUniversities: number;
  countries: number;
}

// Form Types
export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsappSame: boolean;
  currentEducation: string;
  percentage: string;
  preferredCountries: string[];
  preferredLevel: string;
  intake: string;
  budget: string;
  hasTestScore: boolean;
  testType?: string;
  testScore?: string;
  questions?: string;
  source: string;
}
