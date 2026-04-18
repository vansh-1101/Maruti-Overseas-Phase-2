# Code Snippets for Maruti Overseas Website Fixes

## 🔧 IMMEDIATE FIXES

### 1. Logo Visibility Fix

**Check your HTML:**
```html
<!-- Make sure logo is properly structured -->
<header class="site-header">
  <div class="logo-container">
    <a href="/" class="logo-link">
      <img src="/images/maruti-logo.png" alt="Maruti Overseas" class="site-logo">
    </a>
  </div>
  <!-- rest of navigation -->
</header>
```

**CSS Fix:**
```css
/* Logo visibility fix */
.site-logo {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  width: auto;
  height: 45px;
  max-height: 45px;
  object-fit: contain;
  z-index: 100;
}

/* Ensure logo container is visible */
.logo-container {
  display: flex;
  align-items: center;
  z-index: 100;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .site-logo {
    height: 35px;
    max-height: 35px;
  }
}
```

---

### 2. Navigation Button Color Fix

**New CSS for Navigation:**
```css
/* Navigation container */
.main-navigation {
  display: flex;
  gap: 8px;
  align-items: center;
}

/* Navigation buttons */
.nav-button {
  padding: 12px 24px;
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

/* Hover state */
.nav-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

/* Active/Current page */
.nav-button.active,
.nav-button[aria-current="page"] {
  background: linear-gradient(135deg, #00d9b5, #00a896);
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 217, 181, 0.3);
}

/* Focus state for accessibility */
.nav-button:focus-visible {
  outline: 2px solid #00d9b5;
  outline-offset: 2px;
}

/* Mobile */
@media (max-width: 768px) {
  .nav-button {
    padding: 10px 16px;
    font-size: 14px;
  }
}
```

---

## 🎨 ANIMATIONS

### 3. Hero Section Load Animations

**Add to your HTML:**
```html
<div class="hero-section">
  <div class="hero-badge animate-slide-in-left">22 Years of Excellence</div>
  <h1 class="hero-title">
    <span class="animate-fade-up">Study Abroad Dreams,</span>
    <span class="animate-scale-up accent-text">Made Reality</span>
  </h1>
  <p class="hero-description animate-fade-in">Expert guidance for your international education journey...</p>
  <div class="cta-buttons">
    <button class="cta-button primary animate-fade-up-delay-1">Book Free Counseling</button>
    <button class="cta-button secondary animate-fade-up-delay-2">Explore Countries</button>
  </div>
</div>
```

**CSS Animations:**
```css
/* Base animation classes */
.animate-fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.3s;
}

.animate-fade-up-delay-1 {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: 0.7s;
}

.animate-fade-up-delay-2 {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: 0.9s;
}

.animate-slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.8s ease-out forwards;
  animation-delay: 0.2s;
}

.animate-scale-up {
  opacity: 0;
  transform: scale(0.9);
  animation: scaleUp 0.8s ease-out forwards;
  animation-delay: 0.5s;
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: 0.6s;
}

/* Keyframe definitions */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleUp {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-up,
  .animate-slide-in-left,
  .animate-scale-up,
  .animate-fade-in,
  .animate-fade-up-delay-1,
  .animate-fade-up-delay-2 {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

---

### 4. Button Hover Effects

```css
/* CTA Buttons with animations */
.cta-button {
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  position: relative;
  overflow: hidden;
}

.cta-button.primary {
  background: linear-gradient(135deg, #00d9b5, #00a896);
  color: #ffffff;
}

.cta-button.secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

/* Hover effects */
.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 217, 181, 0.4);
}

.cta-button.secondary:hover {
  border-color: #00d9b5;
  box-shadow: 0 10px 25px rgba(0, 217, 181, 0.2);
}

/* Active/Click effect */
.cta-button:active {
  transform: translateY(-1px);
}

/* Ripple effect on click */
.cta-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.cta-button:active::after {
  width: 300px;
  height: 300px;
}
```

---

### 5. Scroll-Triggered Animations

**JavaScript for scroll animations:**
```javascript
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Optional: stop observing after animation
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with scroll-animate class
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.scroll-animate');
  animatedElements.forEach(el => observer.observe(el));
});
```

**CSS for scroll animations:**
```css
/* Elements to animate on scroll */
.scroll-animate {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger animations for multiple elements */
.scroll-animate:nth-child(1) { transition-delay: 0.1s; }
.scroll-animate:nth-child(2) { transition-delay: 0.2s; }
.scroll-animate:nth-child(3) { transition-delay: 0.3s; }
.scroll-animate:nth-child(4) { transition-delay: 0.4s; }
```

---

### 6. Trust Badge Animations

```css
/* Pulsing badge for success metrics */
.visa-success-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(0, 217, 181, 0.1);
  border: 1px solid rgba(0, 217, 181, 0.3);
  border-radius: 24px;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(0, 217, 181, 0.3);
    border-color: rgba(0, 217, 181, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 217, 181, 0.6);
    border-color: rgba(0, 217, 181, 0.6);
  }
}

/* Green check icon */
.success-icon {
  width: 20px;
  height: 20px;
  color: #00d9b5;
  animation: pop-in 0.6s ease-out;
}

@keyframes pop-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
```

---

### 7. Sticky Navigation with Scroll Effect

**JavaScript:**
```javascript
// Sticky navigation with background change
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});
```

**CSS:**
```css
.site-header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 0;
  background: transparent;
  transition: all 0.3s ease;
  z-index: 1000;
}

.site-header.scrolled {
  padding: 12px 0;
  background: rgba(26, 43, 74, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.site-header.scrolled .site-logo {
  height: 38px;
}
```

---

## 📱 MOBILE OPTIMIZATIONS

### 8. Mobile Menu Animation

**HTML:**
```html
<button class="mobile-menu-toggle" aria-label="Toggle menu">
  <span class="hamburger"></span>
</button>

<nav class="mobile-menu">
  <!-- Navigation items -->
</nav>
```

**CSS:**
```css
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background: #1a2b4a;
  padding: 80px 24px 24px;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
}

.mobile-menu.active {
  right: 0;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
}

/* Hamburger animation */
.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: #ffffff;
  position: relative;
  transition: background 0.3s;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: #ffffff;
  transition: transform 0.3s;
}

.hamburger::before { top: -8px; }
.hamburger::after { top: 8px; }

.mobile-menu-toggle.active .hamburger {
  background: transparent;
}

.mobile-menu-toggle.active .hamburger::before {
  transform: rotate(45deg) translateY(8px);
}

.mobile-menu-toggle.active .hamburger::after {
  transform: rotate(-45deg) translateY(-8px);
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: block;
  }
}
```

**JavaScript:**
```javascript
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});
```

---

## ⚡ PERFORMANCE OPTIMIZATIONS

### 9. Lazy Loading Images

```javascript
// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});
```

**HTML:**
```html
<img data-src="/images/actual-image.jpg" 
     src="/images/placeholder.jpg" 
     alt="Description"
     class="lazy-image">
```

**CSS:**
```css
.lazy-image {
  opacity: 0.5;
  filter: blur(5px);
  transition: opacity 0.5s, filter 0.5s;
}

.lazy-image.loaded {
  opacity: 1;
  filter: blur(0);
}
```

---

## 🎯 QUICK IMPLEMENTATION GUIDE

### Step 1: Fix Logo
1. Copy logo visibility CSS
2. Paste into your main stylesheet
3. Check all pages

### Step 2: Update Navigation
1. Replace nav button CSS
2. Add active class to current page
3. Test hover effects

### Step 3: Add Animations
1. Add animation classes to HTML elements
2. Copy keyframe CSS
3. Include scroll observer JavaScript

### Step 4: Test Everything
- Desktop browsers
- Mobile devices
- Different screen sizes
- Accessibility with keyboard

---

**Need Help?** Test each snippet individually before combining them all.
