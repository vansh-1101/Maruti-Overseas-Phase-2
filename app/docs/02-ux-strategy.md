# Maruti Overseas Consultancy - UX Strategy & Conversion Framework

## 1. CONVERSION ARCHITECTURE

### 1.1 Primary Conversion Funnel

```
AWARENESS ──────▶ INTEREST ──────▶ DESIRE ──────▶ ACTION ──────▶ RETENTION
   │                │               │              │              │
   ▼                ▼               ▼              ▼              ▼
SEO/Ads       Content Hub    Social Proof    Lead Form    Nurture Flow
Social        Tools          Testimonials    Counseling   Email/SMS
Referral      Webinars       Success Stats   WhatsApp     Community
```

### 1.2 Page-Level UX Specifications

#### **Homepage**

| Element | Specification |
|---------|---------------|
| **Primary CTA** | "Book Free Counseling" - Sticky header + Hero |
| **Secondary CTA** | "Explore Countries" - Hero secondary |
| **Tertiary CTA** | "Download Free Guide" - Lead magnet section |
| **Scroll Trigger** | Lead form appears after 50% scroll |
| **Exit Intent** | Modal with "Wait! Get Free Study Abroad Guide" |
| **Sticky Element** | WhatsApp floating button (bottom-right) |

**Section Flow**:
1. **Hero** (0-100vh) - Immediate value prop + dual CTAs
2. **Trust Bar** - Stats counter animation on scroll
3. **Countries** - 3D card hover effects, click to country page
4. **Services** - Icon grid with hover lift effect
5. **Partners** - Infinite scroll carousel
6. **Testimonials** - Auto-rotate slider with video support
7. **Counselors** - Profile cards with booking CTA
8. **Webinars** - Countdown timer for next event
9. **Lead Magnet** - PDF download with email capture
10. **FAQ** - Accordion with search
11. **Blog** - 3-card preview
12. **Footer CTA** - Final conversion push

---

#### **Country Pages**

| Element | Specification |
|---------|---------------|
| **Primary CTA** | "Talk to {Country} Expert" |
| **Secondary CTA** | "Compare with Other Countries" |
| **Sticky Nav** | In-page anchor links to sections |
| **Lead Trigger** | Scroll to visa section triggers form modal |

**Section Flow**:
1. **Hero** - Flag backdrop + key stats (universities, students placed)
2. **Benefits Grid** - 6-card grid with icons
3. **Top Universities** - Partner highlight with "View All"
4. **Popular Courses** - Category pills + course cards
5. **Requirements** - Step-by-step timeline
6. **Cost Calculator** - Interactive tool (embedded)
7. **Visa Process** - Visual timeline
8. **Work Opportunities** - Post-study work info
9. **Testimonials** - Country-specific reviews
10. **Lead Form** - Full form at bottom

---

#### **Course Finder**

| Element | Specification |
|---------|---------------|
| **Primary CTA** | "Request Course Information" |
| **Secondary CTA** | "Save to Favorites" (requires email) |
| **Filter Logic** | AND logic between categories, OR within |
| **Results** | 12 per page, lazy load on scroll |

**Interaction Pattern**:
- Filters: Sticky sidebar on desktop, bottom sheet on mobile
- Cards: Hover reveals quick actions
- Compare: Checkbox selection, max 3 courses
- Save: Triggers email capture if not logged in

---

### 1.3 Lead Capture Strategy

#### **Multi-Step Form Flow**

```
Step 1: Basic Info (Required)
├── Name
├── Email
├── Phone
└── WhatsApp (optional, checkbox same as phone)

Step 2: Academic Background
├── Current Education (Dropdown)
├── Field of Study
├── Percentage/CGPA
└── Backlogs (if any)

Step 3: Study Preferences
├── Preferred Countries (Multi-select)
├── Course Level (UG/PG/PhD)
├── Preferred Intake
└── Budget Range

Step 4: Test Scores (Optional)
├── IELTS/PTE/TOEFL (Toggle + Score)
├── GRE/GMAT (if applicable)
└── Planning to take (Date)

Step 5: Additional (Optional)
├── How did you hear about us?
├── Specific questions
└── Preferred contact time
```

**Form UX**:
- Progress indicator (step dots)
- Auto-save to localStorage
- Validation per step
- Smart defaults based on referrer
- Thank you page with next steps

---

### 1.4 Micro-Interactions & Animations

#### **Scroll-Triggered Animations**

| Element | Animation | Trigger |
|---------|-----------|---------|
| Section headings | Fade up + slide | 20% in viewport |
| Stats counters | Count up | 50% in viewport |
| Cards | Stagger fade up | 30% in viewport |
| Images | Parallax subtle | Continuous |
| Testimonials | Auto-slide | Every 5s |

#### **Hover Effects**

| Element | Effect | Duration |
|---------|--------|----------|
| Buttons | Scale 1.02 + shadow | 200ms |
| Cards | Lift + shadow increase | 300ms |
| Links | Underline slide in | 150ms |
| Images | Subtle zoom | 400ms |

#### **Loading States**

- Skeleton screens for course lists
- Spinner for form submission
- Progress bar for file uploads
- Shimmer for image loading

---

## 2. STICKY & FLOATING ELEMENTS

### 2.1 Sticky Header

```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO]  Nav Items...                    [Book Counseling] [📱] │
└─────────────────────────────────────────────────────────────────┘
         ↑ Sticky on scroll up
         ↓ Hides on scroll down (mobile)
         ↓ Always visible (desktop)
```

**Behavior**:
- Desktop: Always visible, shrinks on scroll
- Mobile: Auto-hide on scroll down, show on scroll up
- CTA: Changes from "Book Counseling" to "Call Now" on mobile

### 2.2 Floating WhatsApp Button

```
┌─────────┐
│  💬     │  ← Pulse animation
│ WhatsApp│  ← Tooltip on hover: "Chat with us"
└─────────┘
```

**Behavior**:
- Position: Bottom-right, 24px from edges
- Animation: Subtle pulse every 5s
- Click: Opens WhatsApp with pre-filled message
- Mobile: Smaller size, no pulse (battery saving)

### 2.3 Exit-Intent Modal

**Trigger**: Mouse leaving viewport (desktop), Back button (mobile)

**Content**:
```
┌─────────────────────────────────────┐
│  ✕                                  │
│                                     │
│  Wait! Before You Go...             │
│                                     │
│  Get Our FREE Study Abroad Guide    │
│  📘 50+ pages of expert advice      │
│                                     │
│  [Email Input]                      │
│  [Download Guide]                   │
│                                     │
│  or                                 │
│                                     │
│  [💬 Chat on WhatsApp]              │
│                                     │
└─────────────────────────────────────┘
```

**Rules**:
- Show max once per session
- Don't show if already converted
- Don't show on mobile scroll (annoying)
- Close on backdrop click or X

---

## 3. TRUST SIGNALS & SOCIAL PROOF

### 3.1 Trust Bar (Below Hero)

```
┌─────────────────────────────────────────────────────────────────┐
│  ⭐ 4.8/5 Google Reviews  │  🎓 10,000+ Students  │  🏆 20+ Years │
│  ✅ 98% Visa Success      │  🌍 15+ Countries     │  📜 Authorized │
└─────────────────────────────────────────────────────────────────┘
```

**Animation**: Numbers count up on scroll into view

### 3.2 Testimonial Components

#### **Card Layout**
```
┌─────────────────────────────────────┐
│  "Quote text here..."               │
│                                     │
│  ⭐⭐⭐⭐⭐                           │
│  [Avatar]  Name                     │
│            University, Country      │
│            [Verify badge]           │
└─────────────────────────────────────┘
```

**Features**:
- Video testimonials with play overlay
- Google review embed (real-time)
- Country-specific filtering
- "Verified Student" badge

### 3.3 Accreditation Badges

**Display Locations**:
- Footer (all pages)
- Homepage trust bar
- About page
- Contact page

**Badges**:
- ICEF Certified
- AAERI Member
- British Council Partner
- IDP Partner
- 20+ years established

---

## 4. CONTENT STRATEGY

### 4.1 Homepage Copy Framework

**Hero Headline**:
```
Study Abroad Dreams,
Made Reality

Subhead: 20+ years of expert guidance for students from Gujarat to global universities
```

**CTA Buttons**:
- Primary: "Book Free Counseling"
- Secondary: "Explore Countries"

**Value Props** (Benefit-focused):
1. "Free Expert Counseling" → "Personalized guidance, zero cost"
2. "98% Visa Success Rate" → "Your visa, our expertise"
3. "850+ Partner Universities" → "Global opportunities, local support"
4. "End-to-End Support" → "From application to arrival"

### 4.2 Micro-Copy Guidelines

**Form Labels**:
- Use sentence case
- Be specific: "Email Address" not "Email"
- Add helper text for complex fields

**Error Messages**:
- Be helpful, not blaming
- "Please enter a valid email address" not "Invalid email"
- Show inline, not at top

**Success Messages**:
- Celebrate the action
- Set expectations
- "Thank you! Our counselor will call you within 24 hours"

**Button Text**:
- Use action verbs
- Be specific: "Download Guide" not "Submit"
- Add urgency: "Book Now - Limited Slots"

---

## 5. MOBILE-FIRST DESIGN

### 5.1 Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | <640px | Phones |
| Tablet | 640-1024px | Tablets |
| Desktop | 1024-1440px | Laptops |
| Wide | >1440px | Desktops |

### 5.2 Mobile Optimizations

**Navigation**:
- Hamburger menu with accordion
- Sticky bottom CTA bar
- Swipeable carousels

**Forms**:
- Full-width inputs
- Large touch targets (44px min)
- Number pad for phone fields
- Date picker for intake selection

**Content**:
- Single column layout
- Collapsed sections (accordion)
- Lazy loading images
- Compressed hero images

**CTAs**:
- Bottom sticky bar: "Call Now" + "WhatsApp"
- Floating action button for counseling

---

## 6. PERSONALIZATION

### 6.1 Dynamic Content

**Based on Referrer**:
- Google Ads → Show relevant country
- Facebook → Social proof emphasis
- Organic → Content discovery

**Based on Location**:
- Detect city → Show nearest office
- Gujarat → Local language option
- Other states → Pan-India messaging

**Based on Behavior**:
- Viewed UK page → UK-focused retargeting
- Used calculator → High-intent messaging
- Downloaded guide → Nurture sequence

### 6.2 Smart Defaults

**Form Pre-fill**:
- Country from IP geolocation
- City from previous visits
- Course from referrer keyword

**Content Recommendations**:
- "Students like you also viewed..."
- Related courses based on profile
- Similar success stories

---

## 7. A/B TESTING ROADMAP

### 7.1 Priority Tests

1. **Hero CTA**:
   - A: "Book Free Counseling"
   - B: "Get Free Expert Advice"
   - C: "Start Your Journey"

2. **Form Length**:
   - A: 5-step multi-step
   - B: 3-step condensed
   - C: Single-step with optional fields

3. **Social Proof Placement**:
   - A: Below hero
   - B: Above fold
   - C: Floating sidebar

4. **Exit Intent**:
   - A: Guide download
   - B: Discount offer
   - C: Chat invitation

---

## 8. ACCESSIBILITY REQUIREMENTS

### 8.1 WCAG 2.1 AA Checklist

- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Focus indicators visible
- [ ] Keyboard navigation complete
- [ ] Alt text for all images
- [ ] ARIA labels for icons
- [ ] Form labels associated
- [ ] Error prevention (confirm destructive)
- [ ] Skip navigation link
- [ ] Consistent navigation
- [ ] Resizable text (200%)

### 8.2 Screen Reader Support

```html
<!-- Example: Button with icon -->
<button aria-label="Book free counseling session">
  <span aria-hidden="true">📅</span>
  Book Counseling
</button>

<!-- Example: Form error -->
<input 
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>
```

---

*Document Version: 1.0*
*Last Updated: February 2026*
