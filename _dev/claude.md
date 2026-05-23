# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

---

## Design Direction (High Priority)
This project prioritizes:
- **Large typography**
- **Exceptional readability**
- **Strong visual hierarchy**
- **Professional presentation**
- **Image-rich layouts**
- **Modern vector illustrations**
- **Clean icon systems**
- **Minimal cognitive load**

The website should feel:
- premium
- modern
- editorial
- spacious
- confident

The website should NOT feel:
- childish
- playful
- cartoonish
- startup-template-like
- overly animated
- cluttered

---

## Typography Rules
- Use **large heading sizes throughout the site**
- Prioritize readability over compact layouts
- Body text should feel spacious and highly legible
- Use generous line-height (`1.7` minimum for paragraphs)
- Avoid tiny supporting text
- Use clear content hierarchy:
  - Hero Heading: extremely prominent
  - Section Headings: bold and readable
  - Paragraphs: comfortable reading width
- Max paragraph width: `65ch`
- Use modern professional font pairings:
  - Headings: elegant display sans or refined serif
  - Body: clean sans-serif
- Tight tracking on large headings (`-0.03em`)
- Never use condensed or gimmicky fonts

---

## Visual Style
- Use large visual blocks with breathing room
- Prioritize whitespace and layout clarity
- Use high-quality:
  - vectors
  - illustrations
  - editorial imagery
  - abstract visuals
- Visuals should support readability, not distract from it
- Use subtle overlays and depth
- Maintain consistent visual rhythm

---

## Icons
- Icons must look:
  - premium
  - minimal
  - professional
  - enterprise-grade
- Avoid:
  - emoji-style icons
  - colorful cartoon icons
  - childish illustrations
  - exaggerated rounded icon styles
- Use consistent icon stroke widths
- Prefer:
  - Lucide
  - Heroicons
  - Phosphor (professional variants only)
- Icons should support content hierarchy and readability

---

## Content Layout Rules
- Content should feel large, open, and easy to scan
- Use:
  - larger cards
  - generous padding
  - strong spacing systems
  - wide section gaps
- Avoid cramped UI
- Every section should have a clear focal point
- Important content must be visually dominant
- Use image + content pairings frequently

---

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft using these readability-first principles.
- Screenshot your output, compare against reference, fix mismatches, re-screenshot.
- Do at least 2 comparison rounds.

---

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server:
  ```bash
  node serve.mjs