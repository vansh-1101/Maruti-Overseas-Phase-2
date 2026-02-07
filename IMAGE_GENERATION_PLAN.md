# Website Image Analysis and Generation Plan

## Overview
This document outlines the analysis of the Maruti Overseas website image requirements. We have identified all necessary images for Pages, Components, and Data files, ensuring a consistent and premium visual identity.

## Image Categories

### 1. Country Hero Images
**Purpose**: Visual headers for Country Detail pages and Cards.
**Location**: `public/images/`
- `country-uk.jpg`: Iconic London/UK landmark.
- `country-usa.jpg`: Statue of Liberty or recognizable US campus.
- `country-canada.jpg`: CN Tower or Nature vs City blend.
- `country-australia.jpg`: Opera House or Coastline.
- `country-newzealand.jpg`: Landscape or Auckland skyline.
- `country-europe.jpg`: Generic European Street/Architecture (Used for Ireland, Germany, etc.).

### 2. Service Icons/Images
**Purpose**: Visuals for the Services Section and Service Detail pages.
**Location**: `public/images/`
- `service-student-visa.png`: Visa documents, application focus.
- `service-test-prep.png`: Studying, exam prep context.
- `service-scholarships.png`: Achievement, certificate, joy.
- `service-air.jpg`: Travel, Airplane, Airport.
- `service-forex.jpg`: Currency, Cards, Finance.
- `service-tours.jpg`: Group travel, sightseeing.
- `service-immigration.jpg`: Family, settling down, moving.
- `service-tourist-visa.jpg`: Leisure travel, passport.

### 3. Blog & Course Thumbnails
**Purpose**: Featured images for Blog posts and Course cards.
**Location**: `public/images/blog/`
- `uk-study.jpg`: Students in UK context.
- `ielts-exam.jpg`: Exam setting.
- `scholarship.jpg`: Award ceremony or certificate.
- `canada-visa.jpg`: Canada specific visa documents.
- `top-courses.jpg`: Classroom/Lecture hall.
- `usa-visa.jpg`: US Consulate/Interview context.

### 4. Webinar Thumbnails
**Purpose**: Thumbnails for the Webinar resource section.
**Location**: `public/images/webinars/`
- `uk-webinar.jpg`: "Study in UK" theme.
- `usa-webinar.jpg`: "Study in USA" theme.
- `canada-webinar.jpg`: "Study in Canada" theme.

### 5. Testimonials & Team
**Purpose**: Avatars for social proof and trust.
**Location**: `public/images/`
- `testimonial-1.jpg` to `testimonial-5.jpg`: Diverse Indian student portraits.
- `team-chirag.jpg`, `team-priya.jpg`, etc.: Professional headshots.

### 6. University Logos
**Location**: `public/images/universities/`
*Note: Due to trademark restrictions, these should be sourced directly from university brand kits or official websites.*
- `manchester.png`, `birmingham.png`, `glasgow.png`, etc.

## Script Usage
A Python script `generate_site_images.py` has been created in the root directory.

Run it to verify which images are missing and get the specific generation prompts:
```bash
python generate_site_images.py
```

## Image Placement Strategy
- **Cards**: Use relevant Country or Course images. If a specific image isn't available, fallback to the generic `hero-main.jpg` or `country-europe.jpg`.
- **Tools**: Currently using Icons. To upgrade to images, use soft abstract backgrounds with the icon overlaid.
- **Backgrounds**: The site uses CSS gradients (`primary-900` to `primary-700`). For a texture upgrade, a subtle `pattern-bg.svg` can be added to the `HeroSection`.

## Action Taken
1.  Analyzed all `data/*.ts` files and `components/**/*.tsx`.
2.  Identified missing images (Webinars, specific service names).
3.  Renamed generated placeholders to clean semantic names (`service-student-visa.png`, etc.).
4.  Updated `services.ts` to reflect new filenames.
5.  Created `generate_site_images.py` to manage the inventory.
