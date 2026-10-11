# AGENTS.md — DMPES Sudamerican Landing Page

## Mission
Build and maintain the independent landing page for **DMPES SUDAMERICAN 5.4 — Next Season**, a commercial PES 2017 mod. This is NOT the DMPES GLOBAL landing page.

## Source of truth
Read `docs/PRODUCT.md`, `docs/BRAND.md`, `docs/LANDING-PAGE.md`, `docs/TECHNICAL.md`, and `docs/DECISIONS.md` before implementing features. Product facts and business rules in PRODUCT.md override design mockups. Unresolved matters in DECISIONS.md must not be invented.

## Non-negotiables
- Stack: Next.js App Router, TypeScript, Tailwind CSS. Prefer Server Components; use Client Components only for interactions.
- Build mobile-first, accessible, fast, and SEO-ready. Avoid unnecessary heavy animation, autoplay with sound, and layout shifts.
- Do not invent screenshots, gameplay, logos, customer testimonials, payment links, compatibility claims, performance metrics, discounts, or endorsements.
- Use authentic DMPES assets provided by the project owner. Until provided, use clearly marked placeholders, not fabricated in-game images.
- **R$ 49,99 per 3-month period** includes Completo, Lite and Mobile. Never present the versions as separately priced products.
- The installed PATCH continues to work after expiry, but membership/download access, updates and Telegram support expire.
- Credit card and PIX Automático renew automatically only where authorized/implemented in checkout; ordinary PIX does not renew automatically. Explain this clearly near pricing and FAQ.
- WhatsApp = pre-sales/commercial leads only. Telegram = official post-purchase technical support. Do not interchange.
- Extra championships and Master League Pro are **Completo only**.
- Never imply DMPES is an official Konami product or officially affiliated with clubs/competitions. Add appropriate independent-product clarification subject to legal review.
- Do not silently modify product facts, prices, terms, support policy, or checkout behavior.
- Keep user-facing copy in Brazilian Portuguese (pt-BR).
- Never commit secrets, tracking credentials, customer data, or private checkout credentials.

## Implementation workflow
1. Inspect repository, assets, and documents; summarize any gaps.
2. Propose a small implementation plan before large changes.
3. Implement in reviewable increments, with reusable components and semantic HTML.
4. Run lint, typecheck, build and relevant tests; report actual results, not assumptions.
5. Keep `docs/DECISIONS.md` updated when the owner approves a change.
6. Ask for confirmation before publishing, enabling payment links, or changing legal/commercial terms.

## Definition of done
Responsive mobile/desktop layout; correct copy; accessible navigation and forms; asset optimization; transparent subscription terms; checkout/WhatsApp links configured; SEO metadata; consent-aware analytics where applicable; validated links; passing quality checks; deployment instructions.
