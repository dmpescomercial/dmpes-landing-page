# Technical Specification — Codex

## Stack
- Next.js App Router + TypeScript (strict) + Tailwind CSS.
- Prefer server-rendered static content; client components only for tabs, galleries, accordions and other interactive elements.
- Use semantic HTML, accessible labels, keyboard navigation, visible focus states, responsive images and reduced-motion support.
- Package versions should be pinned to compatible stable releases when repository is initialized, rather than inventing version numbers here.

## Suggested architecture
```text
app/
  layout.tsx
  page.tsx              # or approved /sudamerican route
  globals.css
components/
  layout/                # Header, Footer, StickyCTA
  sections/              # Hero, Stats, Leagues, Gallery, Versions, Compatibility,
                         # Offer, HowItWorks, Testimonials, FAQ, FinalCTA, VSL
  ui/                    # Button, Container, Accordion, Tabs
content/
  product.ts             # validated structured product facts and pricing
  faq.ts
  leagues.ts
lib/
  analytics.ts
  links.ts
public/
  assets/                # owner-approved media only
```

## Architecture rules
- Store price, access duration, version specs and renewal copy centrally; avoid contradictory hardcoded text.
- Put checkout/WhatsApp URLs in validated environment config or a central links module; no invented URLs.
- Telegram link only where owner approves visibility and access policy.
- Ensure external links use appropriate security attributes.
- For media, provide poster, alt text, dimensions, lazy loading; reserve layout space.
- Use metadata, Open Graph, canonical, robots and sitemap with the actual approved domain.
- Make route decisions compatible with eventual independent DMPES GLOBAL landing page.

## Analytics
- Define a minimal analytics adapter for GA4/GTM or other selected provider; provider IDs remain configuration values.
- Preserve permitted UTM parameters for attribution when navigating to checkout, subject to LastLink support.
- Track CTA clicks separately from confirmed purchases.
- Implement purchase conversion only with a verified LastLink callback, redirect, webhook, API or approved integration. Do not invent these capabilities.
- Review Brazil LGPD/cookie consent requirements before loading nonessential tracking.

## Quality gates
- `npm run lint`, `npx tsc --noEmit`, `npm run build` (adjust to package manager).
- Responsive check at common mobile/tablet/desktop widths.
- Keyboard-only navigation, headings hierarchy, labels, contrast and reduced motion.
- Test all CTA links, recurring price disclosures and version data.
- Check Lighthouse/Core Web Vitals on a real deployment; no invented scores.
- Verify LastLink checkout, renewal terms and actual purchase attribution manually before publishing.

## Delivery phases
1. Initialize repository and content models; implement brand tokens, fonts and layout.
2. Build hero, stats, league explorer and authentic media gallery.
3. Implement comparison, compatibility, pricing and renewal disclosures.
4. Add how-it-works, testimonials, FAQ, footer, responsive sticky CTA.
5. Add analytics and real links; test conversion paths.
6. Integrate VSL after approved production; optimize and deploy after owner sign-off.
