# CodeSphere — React + Vite

Pixel-preserving React/Vite implementation of the supplied CodeSphere reference.

## Run

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
npm run preview
```

## Structure

- `src/main.jsx` — React shell and interaction logic
- `src/referenceBody.html` — reference markup preserved as the visual source of truth
- `src/index.css` — Tailwind build, safe-area handling, drawer/carousel transitions, orientation guard
- `tailwind.config.js` — exact reference color, typography, spacing and radius tokens

## Responsive behavior preserved

- Mobile portrait: single-card carousel + Android-style drawer + bottom navigation
- Mobile landscape: safe-area-aware fixed chrome and compact vertical handling
- Tablet/desktop: three-card featured carousel and original responsive grids
- Touch swipe for drawer and carousel
- Keyboard Escape closes the drawer
- 44px+ touch targets are retained from the reference

The implementation intentionally does not add new visual sections or redesign the supplied screen.
 hhhhh