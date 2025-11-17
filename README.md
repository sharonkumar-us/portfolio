# Portfolio Page

## Version Log

| Version | Date       | Area(s) Touched              | Highlights |
|---------|------------|-----------------------------|------------|
| v1.2    | 2025-11-16 | Content, Projects, Styling  | • Simplified to a single dark theme and removed the light/dark toggle.<br>• Updated **About** to a unified icon-based list for 🌱 ProjectZen, 🌀 PM in the Wild, 🔭 Observatory.wiki, 🤝 Code Forward (Seattle GiveCamp).<br>• Restructured **Projects** to focus on artifacts: combined ProjectZen + PM in the Wild into a single “Content Systems” card, clarified BeKind5.org as a **Website Overhaul**, and turned Observatory.wiki into a **Selected Articles** card with deep links.<br>• Added a **Certifications** section with a badge grid.<br>• Introduced a warm accent palette using CSS variables and updated links, buttons, cards, and editorial article links for better readability. |
| v1.1    | 2025-11-15 | Content, Layout             | • Rewrote **Hero**, **About**, and **Projects** to reflect Senior Program Manager + product-minded narrative instead of generic developer portfolio copy.<br>• Replaced placeholder project cards (“Project One/Two/Three”) with real work: content series, nonprofit website, and editorial work.<br>• Updated **Skills** from dev stack (HTML/React/etc.) to program/product skills (launch readiness, metrics, stakeholder alignment, storytelling).<br>• Simplified **Contact** by removing the non-functional form and keeping a single “Email me” button.<br>• Kept original dark/light toggle in place. |
| v1.0    | 2025-11-12 | Initial Setup               | • Initial GitHub Pages portfolio scaffold with sections for Hero, About, Projects, Skills, and Contact.<br>• Basic dark/light theme toggle and contact form wired into the layout (non-functional submit).<br>• Placeholder project cards and developer-focused skills list.<br>• Resume download button pointing to a PDF in the `assets/` folder. |


---
This is a simple, responsive portfolio template you can customize.

Files:
- index.html — main page
- styles.css — styles (variables at the top)
- script.js — small interactivity (theme toggle, form demo)
- assets/ — place images, resume PDF, and other static files here

Quick start:
1. Replace the placeholder text, project entries, and social links in `index.html`.
2. Put your photo at `assets/avatar.jpg` or update the markup.
3. Replace the resume link `assets/Sharon-Kumar-Resume.pdf` with your actual resume.
4. Hook the contact form to your backend or a form service (Netlify Forms, Formspree, etc.), or keep the mailto link.

Deploy:
- Host on GitHub Pages by pushing to a repository and enabling Pages.
- Or use Vercel / Netlify for easy deployments.

Customization ideas:
- Replace project cards with dynamic JSON and load them via JS.
- Add a CMS (Sanity, Contentful) or use a static site generator (Next.js, Eleventy).
- Improve accessibility audits using Lighthouse or axe.

Made for quick iteration — edit freely and make it yours!
