# Maruti Overseas Consultancy - Sitemap & Information Architecture

## Executive Summary
Enterprise-grade education consultancy platform designed to serve 10,000+ students/month with modular architecture for future AI integration and international expansion.

---

## 1. PUBLIC WEBSITE STRUCTURE

### 1.1 Primary Navigation

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  LOGO    Study Destinations  Services  Courses  Resources  About  [CTA]    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Page Hierarchy

#### **Homepage** `/`
**Purpose**: Primary conversion hub, trust establishment
**Primary CTA**: "Book Free Counseling"
**Secondary CTA**: "Explore Countries"

**Sections**:
1. Hero with country selector + lead capture
2. Trust badges & stats (20+ years, 10,000+ students, 98% visa success)
3. Country cards (UK, USA, Canada, Australia, NZ, Ireland, Europe)
4. Service quick links (Student Visa, Test Prep, Scholarships)
5. Partner universities carousel
6. Success stories slider
7. Counselor profiles
8. Upcoming webinars
9. Lead magnet (Free Guide Download)
10. FAQ accordion
11. Blog preview
12. Contact CTA

---

#### **Study Destinations Hub** `/study-abroad/`
**Purpose**: Country exploration and comparison
**Primary CTA**: "Compare Countries"

**Child Pages**:
- `/study-abroad/uk/` - United Kingdom
- `/study-abroad/usa/` - United States
- `/study-abroad/canada/` - Canada
- `/study-abroad/australia/` - Australia
- `/study-abroad/new-zealand/` - New Zealand
- `/study-abroad/ireland/` - Ireland
- `/study-abroad/europe/` - Europe (Schengen)
- `/study-abroad/singapore/` - Singapore
- `/study-abroad/dubai/` - Dubai/UAE

**Each Country Page Structure**:
1. Hero with flag + key stats
2. Why study here (benefits grid)
3. Top universities (partner highlight)
4. Popular courses
5. Admission requirements
6. Cost of living calculator
7. Visa process timeline
8. Work opportunities
9. Student testimonials
10. Lead capture form

---

#### **Services Hub** `/services/`
**Purpose**: Service discovery and qualification
**Primary CTA**: "Get Started"

**Child Pages**:
- `/services/student-visa/` - Student Visa Services
- `/services/tourist-visa/` - Tourist Visa
- `/services/immigration/` - Immigration Services
- `/services/test-prep/` - IELTS/PTE/TOEFL Coaching
- `/services/scholarships/` - Scholarship Assistance
- `/services/air-tickets/` - Air Ticketing
- `/services/forex/` - Forex Services
- `/services/tours/` - Tour Packages

---

#### **Course Finder** `/courses/`
**Purpose**: Program discovery and matching
**Primary CTA**: "Find Your Course"

**Features**:
- Filter by: Country, Level (UG/PG/PhD), Field, Duration, Budget
- Course comparison tool
- Save favorites
- Request info form

**Category Pages**:
- `/courses/mba/` - Business & Management
- `/courses/engineering/` - Engineering & Technology
- `/courses/computer-science/` - Computer Science & IT
- `/courses/medicine/` - Medicine & Healthcare
- `/courses/arts/` - Arts & Humanities
- `/courses/science/` - Science & Research

---

#### **Resources Hub** `/resources/`
**Purpose**: Content marketing and SEO
**Primary CTA**: "Subscribe to Updates"

**Child Pages**:
- `/resources/blog/` - Blog with categories
- `/resources/webinars/` - Upcoming & recorded webinars
- `/resources/guides/` - Downloadable guides
- `/resources/tools/` - Student tools
  - Cost calculator
  - GPA converter
  - IELTS score predictor
  - Visa checklist generator
  - Intake planner
- `/resources/faq/` - Comprehensive FAQ
- `/resources/events/` - Events & workshops

---

#### **About Section** `/about/`
**Purpose**: Trust and authority building
**Primary CTA**: "Meet Our Team"

**Child Pages**:
- `/about/company/` - Our Story
- `/about/team/` - Leadership & Counselors
- `/about/partners/` - University Partners
- `/about/accreditations/` - Certifications
- `/about/testimonials/` - Student Reviews
- `/about/gallery/` - Photo Gallery
- `/about/careers/` - Join Our Team

---

#### **Contact** `/contact/`
**Purpose**: Multi-channel contact options
**Primary CTA**: "Schedule Call"

**Features**:
- Location cards (Visnagar HQ, Ahmedabad Branch)
- Contact form with service selection
- WhatsApp click-to-chat
- Map integration
- Office hours
- Emergency contact

---

### 1.3 Utility Pages

- `/privacy-policy/` - GDPR compliant
- `/terms-of-service/` - Legal terms
- `/cookie-policy/` - Cookie consent
- `/sitemap/` - HTML sitemap
- `/404/` - Custom error page

---

## 2. ADMIN DASHBOARD STRUCTURE

### 2.1 Dashboard Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]    Search...                    [Notifications] [Profile] [Logout] │
├──────────┬──────────────────────────────────────────────────────────────────┤
│          │                                                                  │
│  NAV     │                    MAIN CONTENT AREA                           │
│  MENU    │                                                                  │
│          │                                                                  │
│  - Dashboard                                                                    │
│  - Leads                                                                        │
│  - Students                                                                     │
│  - Content                                                                      │
│  - Marketing                                                                    │
│  - Analytics                                                                    │
│  - Settings                                                                     │
│                                                                                 │
└──────────┴──────────────────────────────────────────────────────────────────┘
```

### 2.2 Admin Modules

#### **Dashboard** `/admin/`
- KPI cards (New leads, Conversions, Revenue, Active applications)
- Lead pipeline chart
- Recent activity feed
- Upcoming tasks
- Performance vs targets

#### **Lead Management** `/admin/leads/`
- Lead inbox with filters
- Lead detail view
- Status pipeline (New → Contacted → Qualified → Proposal → Converted/Lost)
- Counselor assignment
- Notes & activity log
- Communication history
- Bulk actions

#### **Student Management** `/admin/students/`
- Student profiles
- Application tracker
- Document vault
- Communication log
- Payment tracking

#### **Content Management** `/admin/content/`
- Pages editor
- Blog posts
- Country pages builder
- University database
- Course database
- Testimonials manager
- Gallery manager
- FAQ manager

#### **Marketing** `/admin/marketing/`
- Webinar creator
- Email campaigns
- SMS campaigns
- Lead magnets
- Promo codes
- Referral tracking

#### **Analytics** `/admin/analytics/`
- Traffic overview
- Conversion funnel
- Lead sources
- Page performance
- Counselor performance
- ROI by channel

#### **Settings** `/admin/settings/`
- User management (RBAC)
- Counselor profiles
- Notification settings
- Integration settings
- SEO settings
- Backup & export

---

## 3. DATABASE SCHEMA OVERVIEW

### 3.1 Core Entities

```
Users (Admin, Counselor, Staff)
  └── Leads (Prospective students)
        └── Students (Converted leads)
              └── Applications
              └── Documents
              └── Payments
              └── Communications

Content
  ├── Pages
  ├── BlogPosts
  ├── Countries
  ├── Universities
  ├── Courses
  ├── Testimonials
  └── Webinars

Marketing
  ├── Campaigns
  ├── LeadMagnets
  ├── WebinarRegistrations
  └── Referrals
```

### 3.2 Lead Schema

```typescript
interface Lead {
  id: string;
  source: 'website' | 'whatsapp' | 'referral' | 'paid' | 'organic';
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'converted' | 'lost';
  priority: 'hot' | 'warm' | 'cold';
  
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  
  // Academic Background
  currentEducation: string;
  percentage: number;
  backlogs?: number;
  
  // Study Preferences
  preferredCountries: string[];
  preferredCourses: string[];
  intake: string;
  budget: string;
  
  // Test Scores
  ieltsScore?: number;
  pteScore?: number;
  toeflScore?: number;
  greScore?: number;
  gmatScore?: number;
  
  // Metadata
  assignedTo?: string; // Counselor ID
  notes: Note[];
  activities: Activity[];
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 4. USER JOURNEY MAPS

### 4.1 Primary Journey: First-Time Visitor → Lead

```
Discovery
    │
    ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Google    │───▶│   Homepage  │───▶│ Hero Section│
│   Search    │    │    Landing  │    │  CTA Click  │
└─────────────┘    └─────────────┘    └──────┬──────┘
                                              │
┌─────────────┐    ┌─────────────┐    ┌───────▼───────┐
│  Thank You  │◀───│ Form Submit │◀───│  Lead Form    │
│   Page      │    │   Success   │    │ (Multi-step)  │
└──────┬──────┘    └─────────────┘    └───────────────┘
       │
       ▼
┌─────────────┐
│  Counselor  │
│  Follow-up  │
└─────────────┘
```

### 4.2 Secondary Journey: Course Researcher

```
Course Finder
    │
    ▼
Filter & Search ──▶ Compare Courses ──▶ Save Favorites ──▶ Request Info
```

### 4.3 Tertiary Journey: Content Consumer

```
Blog/Guide
    │
    ▼
Read Content ──▶ Related Resources ──▶ Download Lead Magnet ──▶ Email Capture
```

---

## 5. CONVERSION POINTS

### 5.1 Primary Conversions
1. **Free Counseling Booking** - Main CTA across site
2. **Course Inquiry** - From course finder
3. **Webinar Registration** - Event signups
4. **Guide Download** - Lead magnet
5. **WhatsApp Chat** - Direct messaging

### 5.2 Micro-Conversions
1. Newsletter signup
2. Course saved to favorites
3. Cost calculator used
4. University profile viewed
5. Testimonial video played

---

## 6. SEO STRUCTURE

### 6.1 URL Patterns

```
/study-abroad/{country}/                    - Country pages
/study-abroad/{country}/{university}/       - University pages
/study-abroad/{country}/courses/{course}/   - Course pages
/services/{service}/                        - Service pages
/courses/{category}/                        - Course categories
/resources/blog/{category}/{slug}/          - Blog posts
/resources/guides/{slug}/                   - Downloadable guides
```

### 6.2 Schema.org Implementation

- Organization schema
- LocalBusiness schema
- Course schema
- University schema
- Review schema
- FAQ schema
- Event schema
- BlogPosting schema

---

## 7. TECHNICAL SPECIFICATIONS

### 7.1 Performance Targets
- Lighthouse Score: >90
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Cumulative Layout Shift: <0.1

### 7.2 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast 4.5:1
- Focus indicators

### 7.3 Security
- HTTPS only
- reCAPTCHA v3 on forms
- Rate limiting
- Input sanitization
- CSRF protection
- XSS prevention

---

*Document Version: 1.0*
*Last Updated: February 2026*
*Next Review: March 2026*
