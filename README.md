# TesteNest — Fantastic Food (React + Vite + TS + Tailwind)

Standalone clone of the Page 2 Home-1 Figma design. This branch contains
only this site — no Delizioso pages or routes.

## Setup (pnpm only)

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # production build -> dist/
pnpm preview    # preview the build
```

## Structure

```
src/
  pages/Home1.tsx   # entire page (header, hero, about, BBQ, promos,
                    # reserve, dishes, testimonials, experts, app,
                    # news, gallery, footer)
  data/home1.ts     # all copy + image map
public/images/h1/   # 28 assets exported from Figma via figma-cli
```

Type system: Fredoka One (display), Epilogue (body), Oswald (eyebrows).
Palette: `#f3274c` primary, `#ffd40d` accent, `#212121` ink, `#f5f8fd` alt bg.
Icons: `lucide-react` only.
