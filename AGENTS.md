# Oranta Support page

Local HTML mockup of Oranta’s donation/support page. **Source of truth is `mockup/`**, not the Figma file.

## Layout

- `mockup/` — `index.html`, `styles.css`, `script.js`
- `content/` — EN copy; `*-ua.*` for Ukrainian. Keep both in sync when copy changes.
- `assets/` — logos, photos, wireframe. Index in `assets/README.md`.
- `HANDOFF.md` — current work, blockers, Figma IDs. Read it before continuing UI or Figma work.

Preview from repo root: `python3 -m http.server 8765` → `http://127.0.0.1:8765/mockup/`

After CSS changes, bump the `styles.css?v=` query in `index.html` so browsers do not keep a stale layout.

## Constraints

- Do not invent product copy. Edit `content/` (and matching UA files) then the mockup.
- Donation contact is `Oranta.UA.USA@gmail.com` (Zelle/PayPal). Do not use Mariah.
- EIN is `39-2800449` on its own line, not highlighted.
- Header: logo | nav (About / Projects / Request Help / Reports) | UA 🇺🇦 / EN 🇬🇧 | Donate.
- Header background `#f1f5f8`; rest of page white; no external object borders.
- Donation Options and IRS Information share one right-column panel (two accordions, collapsed by default). Photo under that panel, same width. Marquee is full viewport width below the two-column + photo block.
- Visual reference: https://en.ptahy.vidchui.org/support (Montserrat, high contrast). Client header/accordion rules override the wireframe (`assets/wireframe-oranta-support.png`).
- Validate header changes in a real browser at **390px**, not only by reading CSS. Breakpoint is `980px`. Logo and flags/Donate share one row and must be vertically centered; nav is the row below; hide `UA`/`EN` labels on mobile (flags only).

## Figma

Paused (Starter View seat, MCP quota). When it works: match this mockup, load `figma-use` before every `use_figma`. Details in `HANDOFF.md`.
