# Oranta Support page — handoff

**Source of truth:** local HTML mockup (`mockup/`). All current changes are local to the mockup; the Figma file has not been updated and is blocked by the MCP quota.

Open: `mockup/index.html` or `http://127.0.0.1:8765/mockup/` if the local server is running (`python3 -m http.server 8765` from the repo root).

Files: `mockup/index.html`, `mockup/styles.css`, `mockup/script.js`.

**Current local-only updates:** page backgrounds are white, external object borders have been removed, and the language switcher uses UA 🇺🇦 / EN 🇬🇧 buttons.

## Current layout (as built)

Header, left → right (nothing else):

1. Logo image (`assets/logo-oranta.png`) — icon + ORANTA wordmark as one block
2. Nav plate (pill, 1px stroke, flush items, hairline dividers): About / **Projects** / Help Request / **Reports**
3. Language: **EN selected**, UA inactive (visual toggle only; no UA copy yet)
4. Donate (scrolls to Donation Options)

Two columns under the header:

- **Left:** Text 1 (`content/text-1-thank-you.md`)
- **Right, one shared rectangle:**
  - **Donation Options** accordion — collapsed by default; title + `+`. Expanded: Text 2 intro, then rows for Zelle, PayPal, Personal or business checks payable, Cash donations, and the **“In addition…”** paragraph (sentence case, not all-caps). Do not use Mariah.
  - **THE IRS INFO** accordion — same pattern as Donation Options (title + `+`, collapsed by default), **inside the same panel**, not a second rectangle. Copy from `content/text-3-irs-info.md`. EIN stays `[INSERT EIN NUMBER]`.
- **Photo** immediately under that panel, **same width as the right column / IRS stack** (`assets/photo-tactical-medicine-kits.png`). Not full viewport width.

**Running line** is full viewport width, **below the two-column + photo block** (not constrained to the right column). Copy: `Donate for tactical medicine.` (`content/running-line.txt`). Repeat as a marquee.

Below the ticker: three campaign cards (photo, title, body, Support → `#donation-options`) from `content/campaigns.md`:

1. **TACTICAL MEDICINE** — `assets/campaign-tactical-medicine.png`
2. **PHARMACOLOGY AND GENERAL MEDICINE** — `assets/campaign-pharmacology.png`
3. **Animal Rescue & Care** — `assets/campaign-animal-rescue.png`

Then a stub footer.

## Figma file (paused)

- Name: **Oranta — Support page**
- URL: https://www.figma.com/design/PF0o03xuRtvauXpt30xvpn
- File key: `PF0o03xuRtvauXpt30xvpn`
- Plan: `team::1669906163328840281` (Nickolay Sergeenkov's team, Starter, **View** seat)
- Wrapper: `Oranta — Support` — `3:9` (1440px)
- Header: `3:10` (still old: text logo `oranta`, PROJECT, REPORTS AND QUESTIONS, UA selected)
- Placeholders: Hero `3:11`, Picture potential `3:12`, Slogan `3:13`, Campaigns `3:14`, Footer `3:15`
- Nav Item set `5:135` (`Label#5:0`)
- SDS Button key `cc8b558dc7d9684011b6b99ce8e6509399bc836b`

**Blocker:** Figma MCP Starter + View = ~20 tool calls/month. `whoami` works; `use_figma` / `upload_assets` / `get_metadata` return the paywall. Upgrade: https://www.figma.com/files/team/1669906163328840281/all-projects?upgrade=mcp_rate_limit_paywall — need Full/Dev seat. `generate_figma_design` is listed as rate-limit exempt; untried after the HTML mockup existed.

When MCP works: match **this mockup**, not the old Figma placeholders. Upload logo + photo, then rebuild header/hero to the rules above.

Skills: `figma-use` before every `use_figma`; `figma-generate-design` for page assembly; `upload_assets` then copy `imageHash`. Library: Simple Design System only.

## Visual reference

https://en.ptahy.vidchui.org/support — off-white, high-contrast black, Montserrat, thin dividers, pill buttons. Wireframe: `assets/wireframe-oranta-support.png`. Client header/accordion rules override the sketch.

## Assets / copy

See `assets/README.md`.

| Use | Path |
| --- | --- |
| Logo | `assets/logo-oranta.png` |
| Photo under IRS column | `assets/photo-tactical-medicine-kits.png` |
| Wireframe | `assets/wireframe-oranta-support.png` |
| Text 1 | `content/text-1-thank-you.md` |
| Text 2 | `content/text-2-donation-options.md` |
| Text 3 | `content/text-3-irs-info.md` |
| Running line | `content/running-line.txt` |
| Header labels | `content/header.txt` |
| Campaign cards | `content/campaigns.md` |
| Campaign photos | `assets/campaign-tactical-medicine.png`, `campaign-pharmacology.png`, `campaign-animal-rescue.png` |

## SDS tokens (for Figma later)

| Token | Key |
| --- | --- |
| Background/Default/Default | `a4865545b526a5b3399a512667f40c9efe0c2fc4` |
| Background/Default/Tertiary | `3fe6117980bb52e96ac3ed63a40765746e689874` |
| Background/Default/Secondary | `34f184ba91e9ebb52258b767a603f5c2c97956a2` |
| Background/Brand/Default | `69276caf7d902cb108d2f8f6463078190f11e0ac` |
| Text/Default/Default | `cf92d4e8c6a5a5ed82f024d47d11c21d5162ac3c` |
| Border/Default/Default | `395870afebb3397e858358930ffdd69a5ec0f73d` |
| Space/200 | `15bb1c0f339146e931cf0dc15f89ed57dcbd907e` |
| Space/400 | `16bc6f84b6e7e20e4234ef79030ee580ec0f4505` |
| Space/600 | `be3115966ea99eef888c9f25751b54695c7e88d2` |
| Space/800 | `9acadea8b7c7c9884455b896e21c88b8bc62d6da` |
| Radius/Full | `15d41e10759196590418df58d5bb77642991e569` |

Typography: Montserrat ExtraBold / Bold.

## Resume checklist

HTML mockup is the spec. Remaining product copy:

- Real EIN
- Footer links and contact
- Ukrainian translations

When Figma MCP is available: upload assets, rebuild the Figma file to match `mockup/`.
