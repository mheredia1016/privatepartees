# PrivatePartees Astro Site

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Netlify

Build command:

```bash
npm run build
```

Publish directory:

```bash
dist
```

## Editing venues

Edit venue details in:

```txt
src/data/venues.js
```

Changing a venue there updates the homepage cards, slider, and venue page.

## Replacing hero slider backgrounds

Replace these files:

```txt
public/images/hero/home-hero.png
public/images/hero/cielo-hero.png
public/images/hero/avenue-hero.png
public/images/hero/club-elmwood-hero.png
```

Use the same filenames to avoid editing code.

## Replacing logos

Replace these files:

```txt
public/images/logos/privatepartees.png
public/images/logos/cielo.png
public/images/logos/avenue.png
public/images/logos/club-elmwood.png
```

Transparent PNGs work best.

## Adding more slider slides

Open:

```txt
src/components/HeroSlider.astro
```

Add another object inside the `slides` array, or add a new venue to `src/data/venues.js` and it will be added automatically.

## Main files

```txt
src/layouts/BaseLayout.astro       Shared page layout
src/components/Header.astro        Shared header
src/components/Footer.astro        Shared footer
src/components/HeroSlider.astro    Homepage slider
src/components/VenueCards.astro    Homepage venue cards
src/pages/index.astro              Homepage
src/pages/venues/[slug].astro      Reusable venue page template
src/styles/global.css              All styling
public/js/site.js                  Slider, mobile menu, scroll animations
```
