# COURTIER

Luxury marketing site for **COURTIER – Indoor Padel & Leisure Club** built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Site Structure

| Route | Description |
| ----- | ----------- |
| `/` | Hero-driven home with club overview, experience highlights, and founding membership teaser. |
| `/membership` | Membership tiers, benefits, and registration form. |
| `/padel` | Details on courts, coaching, clinics, and events with an updates form. |
| `/club` | Overview of the gym, recovery, and social spaces. |
| `/about` | Story, philosophy, future vision, and founder placeholders. |

## Components & Patterns

- **Navbar & ActiveLink**: Reusable navigation with active-state underline using the metallic accent tone. Mobile view reveals a full-screen overlay animated with Framer Motion.
- **Section**: Shared layout wrapper that applies consistent padding, max-width constraints, and a fade-up animation when scrolled into view.
- **Card**: Consistent treatment for informational blocks (experiences, tiers, founder bios) with balanced padding, borders, and hover depth.
- **FormField**: Standardised input/select/textarea styling with focus states and optional helper messaging; used across membership, padel, and footer forms.
- **Forms**: Submissions are intercepted client-side to log data to the console and surface a brief animated success message.

## Adding Pages or Sections

1. Create a new route inside `app/` and wrap each major block with the `Section` component to inherit padding and scroll-in animation.
2. Insert horizontal separators between major areas using `className="border-t border-white/10"` (or `border-b`) on `Section` as needed.
3. For content blocks, prefer the `Card` component to maintain a consistent grid appearance and hover treatment.
4. Build forms with `FormField` for aligned labels, borders, and focus rings. Use Framer Motion to animate any success or helper messaging.
5. Use the `Navbar` + `ActiveLink` components for navigation so active states and mobile overlays stay consistent.
6. When adding imagery, reference remote URLs (e.g., Unsplash) via inline styles or standard `<img>` tags—no local binary assets are stored in the repo.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Optimised for deployment on [Vercel](https://vercel.com/). No environment variables are required at this stage.
