# Sol Andrew Domingo Jr. Portfolio

A static portfolio site built with React, TypeScript, Vite and Tailwind CSS.
No backend or database. All content lives in `src/config/`.

---

## 1. Run it on your computer

You need **Node.js 18 or newer** (download the LTS version from nodejs.org).

```bash
# in this folder
npm install        # once, installs dependencies
npm run dev        # starts a local preview at http://localhost:5173
```

Edits to any file appear in the browser straight away.

To check the production build:

```bash
npm run build      # type-checks and builds into /dist
npm run preview    # serves /dist at http://localhost:4173
```

---

## 2. Update your content

Everything you'll normally change is in **`src/config/`**:

| File | What it controls |
| --- | --- |
| `site.ts` | Name, title, hero text, About text, email, phone, LinkedIn, GitHub, CV path |
| `projects.ts` | Project cards, case studies, links, screenshots, the AI lab list |
| `tools.ts` | Tools & Technologies: categories, tools, icons, experience labels and official links |
| `experience.ts` | Work timeline and education |
| `certifications.ts` | Certificates: title, issuer, date, preview image, PDF and verify link (files in `public/certificates/`) |

**Links:** any link left as `""` is hidden automatically, so there are never broken buttons.

### Add a project screenshot
1. Save the image in `public/projects/` (e.g. `catalog.webp`, about 1600px wide).
2. In `projects.ts`, set `image: "projects/catalog.webp"` and an `imageAlt` description.

### Add a project (including AI projects)
1. Open `src/config/projects.ts`. All project text lives in the clearly marked
   PROJECTS DATA section, with a ready-to-copy template at the top.
2. Paste the template into the list and fill it in.
   - `category: "ai"` puts it under **AI projects**; `"experience"` under **Work experience**.
   - `summary` is the short preview on AI project cards.
   - `result` is the one-line outcome on work experience cards.
   - `caseStudy` holds the sections shown when someone clicks "View project":
     problem, my contribution (`role`), features, tools, outcome and screenshots.
3. Optional: set `featured: true` to make a card full width, and add a demo link in `links.demo`.

### Add case study screenshots
1. Save images in `public/projects/` (e.g. `order-dashboard.webp`, about 1600px wide).
2. In `projects.ts`, fill the matching `src`, e.g.
   `{ src: "projects/order-dashboard.webp", caption: "Department dashboard" }`.
3. For the card's header image, set `image: "projects/order-dashboard.webp"`.
Empty `src` values show a labelled placeholder frame.

Small experiments that don't need a full case study can go in the `aiLab` list instead.

### Add your CV
1. Put the PDF in `public/cv/`, e.g. `public/cv/Sol-Andrew-Domingo-Jr-CV.pdf`.
2. In `site.ts`, set `cvPath: "cv/Sol-Andrew-Domingo-Jr-CV.pdf"`.
Until then, the Experience section shows a "Request my CV" email button.

### Add an AI demo
Add an entry to `aiLab` in `projects.ts`:
```ts
{ title: "Support FAQ chatbot", description: "What it does in one line.", url: "https://..." }
```

### Add or update a tool
In `src/config/tools.ts`, add a line to the right category:
```ts
{ name: "Python", icon: siPython, level: "learning", url: "https://www.python.org" },
```
- `icon`: a brand logo from simpleicons.org (import `siName` at the top of the file) or any Lucide icon.
- `level`: `"hands-on"`, `"familiar"`, `"learning"` or `"exploring"`. Leave it out if unsure; no label is shown.
- `url`: official website. Leave it out for skills that aren't products; the tile won't be clickable.
A category with no tools is hidden automatically.

---

## 3. Publish it (free options)

**Netlify (easiest):**
1. Run `npm run build`.
2. Go to app.netlify.com/drop and drag the `dist` folder onto the page.
3. You get a live link. Add a custom domain later in Site settings.

**Vercel:** push this folder to a GitHub repository, import it at vercel.com/new.
It detects Vite automatically (build command `npm run build`, output `dist`).

**GitHub Pages:** push to GitHub, then use a GitHub Actions "Static HTML" or
"Vite" workflow that builds and deploys `dist`. Asset paths are relative, so
it works from a sub-folder too.

After publishing, open `index.html` and replace `https://your-domain.com/`
in `og:url` with your real address. For link previews on LinkedIn and
WhatsApp, also change both `./og-image.png` values to the full URL, e.g.
`https://your-domain.com/og-image.png`.

---

## 4. Placeholders to replace before publishing

- [ ] **GitHub URL** – `site.ts` → `social.github` (hidden until set)
- [x] **CV PDF** – added at `public/cv/Domingo_Sol_Andrew_CV.pdf` (replace the file and update `cvMeta` in `site.ts` when your CV changes)
- [ ] **Project screenshots** – `projects.ts` → `image` (illustrated placeholders until set)
- [ ] **Project links** – `projects.ts` → `links` (hidden until set)
- [ ] **Project outcomes** – `projects.ts` → `caseStudy.outcome` (only add confirmed results)
- [ ] **Graduation year** – `experience.ts` → `education[0].dates` (optional)
- [ ] **Live domain** – `index.html` → `og:url` and image URLs

---

## 5. Project structure

```
public/
  favicon.svg        SOL brand mark
  og-image.png       Social sharing image (1200×630)
  projects/          Your project screenshots
  cv/                Your CV PDF
src/
  config/            ← all editable content
  components/        Welcome, Nav, Hero, SystemMap, Projects, ProjectCard,
                     ProjectDialog, About, Skills, Experience, Contact, Footer
  hooks/useInView.ts Scroll-reveal helper
  index.css          Theme, glass surfaces, animations
  App.tsx            Welcome screen → portfolio
```

Accessibility: semantic sections, keyboard-friendly navigation and dialogs,
visible focus states, and all animations switch off when the visitor's device
has "reduce motion" turned on.
