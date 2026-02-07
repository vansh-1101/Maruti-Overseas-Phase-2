# Maruti Overseas Consultancy - Visual Identity System

## 1. BRAND FOUNDATION

### 1.1 Brand Attributes

| Attribute | Expression |
|-----------|------------|
| **Trustworthy** | Stable, reliable, professional |
| **Approachable** | Warm, welcoming, human |
| **Expert** | Knowledgeable, authoritative, global |
| **Modern** | Clean, current, tech-savvy |
| **Ambitious** | Aspirational, success-oriented, growth |

### 1.2 Brand Promise
"Your global education journey starts with expert guidance"

---

## 2. COLOR SYSTEM

### 2.1 Primary Palette

```css
:root {
  /* Primary Blue - Trust, Professionalism */
  --primary-50: #EFF6FF;
  --primary-100: #DBEAFE;
  --primary-200: #BFDBFE;
  --primary-300: #93C5FD;
  --primary-400: #60A5FA;
  --primary-500: #3B82F6;  /* Main Primary */
  --primary-600: #2563EB;
  --primary-700: #1D4ED8;
  --primary-800: #1E40AF;
  --primary-900: #1E3A8A;

  /* Secondary Teal - Growth, Freshness */
  --secondary-50: #F0FDFA;
  --secondary-100: #CCFBF1;
  --secondary-200: #99F6E4;
  --secondary-300: #5EEAD4;
  --secondary-400: #2DD4BF;
  --secondary-500: #14B8A6;  /* Main Secondary */
  --secondary-600: #0D9488;
  --secondary-700: #0F766E;
  --secondary-800: #115E59;
  --secondary-900: #134E4A;

  /* Accent Orange - Energy, Action */
  --accent-50: #FFF7ED;
  --accent-100: #FFEDD5;
  --accent-200: #FED7AA;
  --accent-300: #FDBA74;
  --accent-400: #FB923C;
  --accent-500: #F97316;  /* Main Accent */
  --accent-600: #EA580C;
  --accent-700: #C2410C;
  --accent-800: #9A3412;
  --accent-900: #7C2D12;
}
```

### 2.2 Neutral Palette

```css
:root {
  /* Gray Scale */
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;

  /* Pure Colors */
  --white: #FFFFFF;
  --black: #000000;
}
```

### 2.3 Semantic Colors

```css
:root {
  /* Success - Green */
  --success-50: #F0FDF4;
  --success-500: #22C55E;
  --success-700: #15803D;

  /* Warning - Amber */
  --warning-50: #FFFBEB;
  --warning-500: #F59E0B;
  --warning-700: #B45309;

  /* Error - Red */
  --error-50: #FEF2F2;
  --error-500: #EF4444;
  --error-700: #B91C1C;

  /* Info - Blue */
  --info-50: #EFF6FF;
  --info-500: #3B82F6;
  --info-700: #1D4ED8;
}
```

### 2.4 Color Usage

| Context | Color | Usage |
|---------|-------|-------|
| Primary Buttons | `--primary-600` | Main CTAs |
| Secondary Buttons | `--secondary-500` | Alternative actions |
| Accent/Highlight | `--accent-500` | Urgency, badges, icons |
| Background | `--gray-50` | Page backgrounds |
| Cards | `--white` | Card backgrounds |
| Text Primary | `--gray-900` | Headlines, body |
| Text Secondary | `--gray-600` | Descriptions, meta |
| Borders | `--gray-200` | Dividers, inputs |
| Links | `--primary-600` | Text links |

### 2.5 Gradient Patterns

```css
/* Hero Gradient */
--gradient-hero: linear-gradient(135deg, var(--primary-900) 0%, var(--primary-700) 100%);

/* Card Hover */
--gradient-card: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.05) 100%);

/* CTA Button */
--gradient-cta: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-500) 100%);

/* Success State */
--gradient-success: linear-gradient(135deg, var(--secondary-500) 0%, var(--secondary-400) 100%);
```

---

## 3. TYPOGRAPHY SYSTEM

### 3.1 Font Families

```css
:root {
  /* Primary - Modern Sans */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Display - Elegant for headlines */
  --font-display: 'Plus Jakarta Sans', var(--font-primary);
  
  /* Mono - For numbers, codes */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

### 3.2 Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `display-1` | 72px / 48px mobile | 800 | 1.1 | -0.02em | Hero headlines |
| `display-2` | 56px / 40px mobile | 700 | 1.15 | -0.01em | Section heroes |
| `h1` | 48px / 36px mobile | 700 | 1.2 | -0.01em | Page titles |
| `h2` | 36px / 28px mobile | 600 | 1.25 | 0 | Section headings |
| `h3` | 28px / 24px mobile | 600 | 1.3 | 0 | Subsection headings |
| `h4` | 24px / 20px mobile | 600 | 1.35 | 0 | Card titles |
| `h5` | 20px / 18px mobile | 600 | 1.4 | 0 | Small headings |
| `h6` | 18px / 16px mobile | 600 | 1.4 | 0 | Labels |
| `body-lg` | 18px | 400 | 1.6 | 0 | Lead paragraphs |
| `body` | 16px | 400 | 1.6 | 0 | Body text |
| `body-sm` | 14px | 400 | 1.5 | 0 | Captions, meta |
| `caption` | 12px | 500 | 1.4 | 0.01em | Tags, badges |

### 3.3 Typography Patterns

```css
/* Hero Headline */
.hero-title {
  font-family: var(--font-display);
  font-size: var(--display-1);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--gray-900);
}

/* Section Heading */
.section-title {
  font-family: var(--font-display);
  font-size: var(--h2);
  font-weight: 600;
  line-height: 1.25;
  color: var(--gray-900);
}

/* Body Text */
.body-text {
  font-family: var(--font-primary);
  font-size: var(--body);
  font-weight: 400;
  line-height: 1.6;
  color: var(--gray-600);
}

/* Stats Numbers */
.stat-number {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 700;
  color: var(--primary-600);
}
```

---

## 4. SPACING SYSTEM

### 4.1 Spacing Scale

```css
:root {
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
}
```

### 4.2 Section Spacing

| Context | Padding Y | Notes |
|---------|-----------|-------|
| Hero | 120px / 80px mobile | Full viewport consideration |
| Standard Section | 80px / 60px mobile | Default section padding |
| Compact Section | 48px / 32px mobile | For dense content |
| Footer | 64px / 48px mobile | Footer area |

### 4.3 Container Widths

```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;
  
  --container-padding: 24px;
  --container-padding-mobile: 16px;
}
```

---

## 5. COMPONENT SYSTEM

### 5.1 Buttons

#### Primary Button
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-500) 100%);
  color: var(--white);
  font-family: var(--font-primary);
  font-size: var(--body);
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 200ms ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Secondary Button
```css
.btn-secondary {
  padding: var(--space-3) var(--space-6);
  background: var(--white);
  color: var(--primary-600);
  border: 2px solid var(--primary-200);
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
}

.btn-secondary:hover {
  background: var(--primary-50);
  border-color: var(--primary-400);
}
```

#### Ghost Button
```css
.btn-ghost {
  padding: var(--space-3) var(--space-6);
  background: transparent;
  color: var(--primary-600);
  border: none;
  font-weight: 600;
}

.btn-ghost:hover {
  background: var(--primary-50);
}
```

#### Button Sizes
| Size | Padding | Font Size | Usage |
|------|---------|-----------|-------|
| sm | 8px 16px | 14px | Compact UI |
| md | 12px 24px | 16px | Default |
| lg | 16px 32px | 18px | Hero CTAs |

### 5.2 Cards

#### Standard Card
```css
.card {
  background: var(--white);
  border-radius: 12px;
  border: 1px solid var(--gray-200);
  padding: var(--space-6);
  transition: all 300ms ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border-color: var(--primary-200);
}
```

#### Country Card
```css
.card-country {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.card-country-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease;
}

.card-country:hover .card-country-image {
  transform: scale(1.05);
}

.card-country-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-6);
  color: var(--white);
}
```

### 5.3 Forms

#### Input Field
```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--body);
  color: var(--gray-900);
  background: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  transition: all 200ms ease;
}

.input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px var(--primary-100);
}

.input::placeholder {
  color: var(--gray-400);
}
```

#### Form Label
```css
.label {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--body-sm);
  font-weight: 500;
  color: var(--gray-700);
}

.label-required::after {
  content: '*';
  color: var(--error-500);
  margin-left: var(--space-1);
}
```

### 5.4 Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  font-size: var(--caption);
  font-weight: 600;
  border-radius: 9999px;
}

.badge-primary {
  background: var(--primary-100);
  color: var(--primary-700);
}

.badge-success {
  background: var(--success-100);
  color: var(--success-700);
}

.badge-accent {
  background: var(--accent-100);
  color: var(--accent-700);
}
```

### 5.5 Alerts

```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4);
  border-radius: 8px;
}

.alert-info {
  background: var(--info-50);
  border: 1px solid var(--info-200);
  color: var(--info-700);
}

.alert-success {
  background: var(--success-50);
  border: 1px solid var(--success-200);
  color: var(--success-700);
}

.alert-error {
  background: var(--error-50);
  border: 1px solid var(--error-200);
  color: var(--error-700);
}
```

---

## 6. SHADOWS & EFFECTS

### 6.1 Shadow Scale

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.05);
  --shadow-card-hover: 0 12px 24px rgba(0, 0, 0, 0.1);
  --shadow-button: 0 4px 12px rgba(37, 99, 235, 0.2);
}
```

### 6.2 Border Radius

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

---

## 7. ANIMATION SYSTEM

### 7.1 Duration Scale

```css
:root {
  --duration-instant: 100ms;
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 400ms;
  --duration-slowest: 600ms;
}
```

### 7.2 Easing Functions

```css
:root {
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### 7.3 Animation Presets

```css
/* Fade Up */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide In Right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Count Up (for stats) */
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse (for WhatsApp) */
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(37, 211, 102, 0);
  }
}
```

---

## 8. ICONOGRAPHY

### 8.1 Icon System

- **Library**: Lucide React
- **Size Scale**: 16px, 20px, 24px, 32px, 48px
- **Stroke Width**: 1.5px (default), 2px (large)
- **Color**: Inherit from text color

### 8.2 Icon Usage

| Context | Size | Color |
|---------|------|-------|
| Button icons | 20px | Current text color |
| Form icons | 20px | `--gray-400` |
| Feature icons | 24px | `--primary-500` |
| Large feature icons | 48px | `--primary-500` |
| Social icons | 20px | `--gray-500` |

---

## 9. RESPONSIVE PATTERNS

### 9.1 Grid System

```css
/* 12-column grid */
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive */
@media (min-width: 640px) {
  .sm\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 768px) {
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}
```

### 9.2 Responsive Typography

```css
/* Fluid typography using clamp */
.display-1 {
  font-size: clamp(2.5rem, 5vw + 1rem, 4.5rem);
}

.h2 {
  font-size: clamp(1.75rem, 3vw + 0.5rem, 2.25rem);
}
```

---

## 10. COUNTRY BRANDING

### 10.1 Country Color Accents

| Country | Primary Accent | Secondary Accent |
|---------|----------------|------------------|
| UK | #012169 (Royal Blue) | #C8102E (Red) |
| USA | #3C3B6E (Navy) | #B22234 (Red) |
| Canada | #FF0000 (Red) | #FFFFFF (White) |
| Australia | #00008B (Blue) | #FF0000 (Red) |
| New Zealand | #00247D (Blue) | #CC142B (Red) |
| Ireland | #169B62 (Green) | #FF883E (Orange) |

---

*Document Version: 1.0*
*Last Updated: February 2026*
