# Tanin Rahman — portfolio (being-incredibble)

The site from the "Colourful version" / "Minimal — my own style" design, built with React + Vite.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production files in dist/
npm run preview    # serve the built dist/ locally
```

Needs Node 20 or newer.

## Switch between the two designs

Open `src/data.js` and set:

```js
export const THEME = "colorful"; // or "minimal"
```

To compare without editing, add `?theme=minimal` or `?theme=colorful` to the URL.

## Edit the content

Every word on the site lives in **`src/data.js`**: hero text, about, what I can do, experience,
skills, courses, the eight releases and the recommendations. The four recommendations are still
placeholders; paste the real ones there.

For each course in `courses`, fill in `year`, `provider`, `note` and, if you have one, a
certificate link in `href`. Put a banner image in `public/photos/` and set `banner` to its path;
without one, the card shows a drawn tile.

To add an earlier job, add a second object to `experience` with the same shape. Set
`earlierRolePlaceholder` to `""` to hide the dashed "add a role" row.

## Photos

- `public/photos/tanin-about.jpg` is the full-bleed hero photo.
- `public/photos/tanin.png` is the portrait in About and the footer.
- `public/my-site-hand-icon.jpg` is the plugin icon.

Replace a file with the same name to change a photo.

## What's where

- `src/components/Nav.jsx`: the segmented boxed navbar, plus the phone menu
- `src/components/Hero.jsx`: the full-bleed photo that folds into a panel ("Meet Tanin")
- `src/components/Sections.jsx`: statement, about, what I can do, experience, skills, courses,
  the sticky release stack, the looping recommendation deck, contact and the footer
- `src/styles.css`: all styling; desktop first, with the phone layout under `@media (max-width: 900px)`
- `src/theme.js`: the colours that cycle per card in each theme

## Deploy

Run `npm run build` and upload the `dist/` folder to any static host (Netlify, Vercel,
GitHub Pages, cPanel). No server is needed.
