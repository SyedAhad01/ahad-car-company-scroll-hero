# AHAD CAR COMPANY — Scroll-Driven Machine Experience

A custom cinematic scroll experience built for the Scroll-Driven Hero Section Animation assignment.

## Stack

- Next.js
- React
- Tailwind CSS
- JavaScript
- GSAP
- GSAP ScrollTrigger

## Concept

AHAD CAR COMPANY is an autonomous performance system. The scroll position controls one continuous story:

1. Awakening
2. Assembly
3. Intelligence
4. Performance
5. Overclock
6. Final CTA

The vehicle is an inline SVG, so no external car asset is required.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).


Assignment Mapping

- Above-the-fold hero: Yes
- Letter-spaced headline: AHAD CAR COMPANY
- Initial staggered headline reveal: Yes
- Sequential metrics: Yes
- Scroll-controlled main visual: Yes
- GSAP ScrollTrigger scrub: Yes
- Pinned hero: Yes
- Transform-based movement: Yes
- Responsive layout: Yes


Visual Polish

- AHAD CAR COMPANY title scales and fades away after the intro so later scenes have stronger visual hierarchy.
- Vehicle scaling is controlled across Performance and Overclock instead of dominating the viewport.
- Intro metrics fade out before the Performance phase to keep later scenes focused.
- Scroll progress indicator is driven by ScrollTrigger progress.


Originality

This is an original implementation built specifically for the assignment. The AHAD CAR COMPANY concept, content, inline SVG vehicle, visual design, and animation sequence are custom.


The project uses standard GSAP and ScrollTrigger techniques for scroll-driven animation.