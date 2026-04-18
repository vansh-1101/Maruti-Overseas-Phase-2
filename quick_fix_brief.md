# Quick Fix Brief - Maruti Overseas Website

## 🚨 CRITICAL ISSUES (Fix First)

### Issue #1: Logo Not Visible
**Problem:** Logo doesn't show on desktop OR mobile
**Fix Needed:**
- Check CSS visibility/display properties
- Verify image path is correct
- Ensure proper z-index
- Test contrast against background
- Logo size: 40-50px (desktop), 35-40px (mobile)
- Make it clickable → links to home

### Issue #2: Navigation Colors Are Bad
**Current:** Bright blue button looks unprofessional
**New Color Scheme:**
```
Default: Transparent with white text
Hover: Light glow background
Active: Turquoise (#00d9b5) - matches site accent
```

## 🎨 ANIMATIONS NEEDED

### On Page Load:
1. Logo fades in from top
2. Hero text slides up with fade
3. "Made Reality" scales up with glow
4. Buttons appear with stagger effect
5. All with smooth timing (0.5-2s delays)

### Hover Effects:
- Buttons lift slightly (2px up)
- Navigation items glow on hover
- Smooth color transitions (0.3s)

### Scroll Effects:
- Sections fade in as you scroll down
- Trust badges pulse gently
- Parallax on background

## 🎭 HUMANIZATION

### Make It Feel Alive:
- Add subtle animations (don't overdo it!)
- Smooth transitions everywhere
- Interactive hover states
- Responsive feedback on clicks
- Mobile: swipe-friendly, touch-optimized

### Trust Elements:
- Animate success percentage counter
- Gentle pulse on "Visa Approved" badge
- Smooth video player interactions

## 📱 MOBILE MUST-HAVES
- Hamburger menu with slide animation
- Bigger tap targets (44px minimum)
- Faster, lighter animations
- No horizontal scroll

## ✅ QUICK CHECKLIST
- [ ] Logo shows everywhere
- [ ] New nav colors applied
- [ ] Smooth animations added
- [ ] Works on mobile
- [ ] Page loads fast
- [ ] Feels professional & engaging

## 🎨 COLOR CODE REFERENCE
```
Navy Background: #1a2b4a
Turquoise Accent: #00d9b5
White: #ffffff
```

## ⚡ PERFORMANCE
- Use GPU-accelerated animations
- Lazy load below-fold content
- Keep page speed under 3 seconds
- No janky animations!

---
**Priority:** Fix logo → Fix colors → Add animations
**Timeline:** Phase 1 (urgent) → Phase 2 (enhancements)
**Goal:** Professional, engaging, fast-loading website
