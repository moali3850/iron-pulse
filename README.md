**Live demo:** https://iron-pulse-beige.vercel.app


# IRON PULSE — React + Vite + Tailwind CSS

Front-end implementation of the **IRON PULSE** Figma design
(`https://www.figma.com/design/ZBobN9qLkV34zBdDOqBF2H`): 7 pages, trainer profile modal,
contact form states, and responsive layouts.

## Run it

```bash
npm install
bash scripts/download-images.sh   # downloads the photography into public/images (see "Images")
npm run dev                       # http://localhost:5173
npm run build && npm run preview  # production build
```

Stack: React 19, Vite 7, Tailwind CSS 4 (`@tailwindcss/vite`, tokens in `src/index.css` via `@theme`),
React Router DOM 7, Lucide React. JavaScript/JSX only.

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/programs` | Programs (category + level filters) |
| `/programs/:id` | Program Details (`strength-training`, `weight-training`, `cardio-training`, `personal-training`, `functional-fitness`) |
| `/trainers` | Trainers (specialty filter, profile modal, comparison table) |
| `/membership` | Membership Plans (monthly/yearly toggle, comparison, FAQ) |
| `/contact` | Contact (validated form; `?subject=` pre-fills the subject) |
| `*` | 404 |

## Behaviour implemented

- Sticky navbar with active-link indicator; mobile menu (Esc / link click closes, scroll lock); skip link.
- Programs: category chips + level dropdown, live result count, empty state.
- Trainers: specialty filter; **View Profile** opens an accessible modal (Esc, click-outside, focus return).
- Membership: billing toggle recalculates prices (yearly = 20% off); **Join** buttons open Contact with the plan pre-filled.
- FAQ accordions (`aria-expanded`), scroll-to-top on navigation, `#faq` anchor support.
- Contact form: per-field validation on blur, summary alert, inline error/success states, success panel.
- Scroll-reveal animations (`Reveal`) + hover transitions; all motion disabled under `prefers-reduced-motion`.

## Contact form — important

The form is **front-end only**. Without configuration it runs in *demo mode*: validation works and the
success screen appears, but **nothing is sent** (the success panel says so). To send real messages, set
`VITE_FORM_ENDPOINT` in `.env` (e.g. a Formspree URL; copy `.env.example`). The form POSTs JSON there.

## Images

The photos in the Figma file were AI-generated through Figma. They are referenced as `/images/*.jpg`.
`scripts/download-images.sh` fetches them, but the Figma-hosted URLs **expire 7 days after generation** —
if a download fails, export the images from Figma and save them under the same names:
`hero, gym, strength, weights, cardio, personal, functional, trainer-marcus, trainer-lena, trainer-darius, trainer-nora` (`.jpg`).
Until the files exist, each image area falls back to a dark gradient so layouts stay intact.
Use licensed photography for production.

## Structure

```
src/
  components/
    layout/      Navbar, MobileMenu, Footer, Layout, ScrollToTop
    common/      Button, Container, SectionHeading, Reveal, Photo, Badge, Chip, Logo, Icon,
                 FeatureCard, CheckList, FaqItem, FaqList, DataTable, PageHero, CtaBanner
    home/        Hero, IntroSection, ProgramsSection, BenefitsSection, TrainersSection,
                 MembershipSection, TestimonialsSection, TestimonialCard
    about/       StorySection, FacilitiesSection, StatsSection, ValuesSection
    programs/    ProgramCard, ProgramFilter, ProgramGlance
    trainers/    TrainerCard, TrainerFilter, TrainerModal, CompareTable
    membership/  MembershipCard, BillingToggle, ComparisonTable
    contact/     ContactForm, Field, ContactInfo
  pages/         Home, About, Programs, ProgramDetails, Trainers, Membership, Contact, NotFound
  data/          programs, trainers, memberships, testimonials, site, images
  hooks/         useInView, useBodyScrollLock
  utils/         validators, submitContact, pricing
```

## Design tokens (from Figma variables)

`ink #0B0B0B` · `panel #171717` · `raised #222222` · `line #2E2E2E` · `accent #FF5A1F` (hover `#FF7A47`, pressed `#E04812`) ·
`soft #B5B5B5` · `muted #8A8A8A` · font **Manrope** (Google Fonts link in `index.html`) · radii 8/12/20/pill · 4-pt spacing scale.
Primary buttons use dark text on orange (6.3:1) rather than white (3.1:1) for WCAG AA.

## Known gaps

- Content for Weight/Cardio/Personal/Functional program details was written to match the structure of the one
  Program Details frame designed in Figma (Strength Training) — review the copy.
- Social links are `#` placeholders; the map is a placeholder block; legal links are text only.
- No automated tests are included.
