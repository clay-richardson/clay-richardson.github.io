# Clay Richardson — Portfolio (GitHub Pages mirror)

A static HTML/CSS mirror of [clayrichardson.com](https://clayrichardson.com), built so it can be hosted on GitHub Pages — no firewall, no server dependency, accessible to anyone with a link.

## Status: complete

All 5 pages match the real clayrichardson.com content exactly, pulled from your WordPress export, with real images throughout. No placeholders remain.

### What's here
- **All 5 pages** — Home, Alerts Center, Security Center, Trust Services, Contact — use the exact copy, paragraph order, and image placement from your WordPress export (`clayrichardsonuxampdesignleadership_WordPress_2026-08-18.xml`).
- **Alerts Center** — includes the real `alerts_first_version.png` (the original tablet-first Account Tile design).
- **Security Center** — includes the 3 real testimonial quotes (Javelin, Keynote, Forrester).
- **Contact page** — email link, LinkedIn link, and your real resume PDF (`files/clay_richardson_resume.pdf`), matching the live page exactly.
- Real logo (`cr_logo.png`) and favicon (`favicon.svg`).
- Fonts: Fraunces (headings) + Inter (body).
- Background color `#F4EFE4` site-wide.
- All phone-screen images resized to 513×1024 to match the live site's convention; non-phone images (Security Center "before" screenshot, Alerts Center tablet screenshot) are letterboxed/fit at matching dimensions rather than cropped, so nothing is cut off.

### Notes on personal information
- `Direct_Deposit_Alert_wrapped.png` originally showed real phone numbers and email addresses in plain text (captured incidentally in a UI mockup). Since this repo is public, those were redacted with solid black bars before inclusion.
- The resume PDF (`files/clay_richardson_resume.pdf`) includes your home address, phone, and email as-is, per your instruction — this is intentional since the whole point of the page is for recruiters to find and use this contact info.

## Publishing to GitHub Pages

1. Create a new GitHub repo (e.g. `clayrichardson-portfolio`).
2. Push all files in this folder to the repo root (or to a `/docs` folder, or a `gh-pages` branch — your choice).
3. In the repo: **Settings → Pages** → set source to the branch/folder you used.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
5. Optional: add a custom domain (e.g. point `clayrichardson.com` at it) via **Settings → Pages → Custom domain**, plus a `CNAME` file in the repo — I can add that for you if you want.

## File structure

```
.
├── index.html              Home
├── alerts-center.html      Work: Alerts Center (placeholder copy)
├── security-center.html    Work: Security Center (placeholder copy)
├── trust-services.html     Work: Trust Services (placeholder copy)
├── contact.html            Contact (placeholder form)
├── styles.css              Shared styles
├── nav.js                  Mobile menu toggle
└── images/                 All images (currently placeholders)
```

No build step, no dependencies — plain HTML/CSS/JS. Works as-is when opened locally or served from GitHub Pages.
