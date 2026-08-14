# Handoff — current session

Durable project map: `AGENTS.md`. Spec: `mockup/`.

**Status:** all current changes are local to the mockup. Figma is **not** updated.

Open: `mockup/index.html` or `http://127.0.0.1:8765/mockup/` (`python3 -m http.server 8765` from repo root).

## Last local updates

- Header background `#f1f5f8`; page body white; no external object borders
- Language switcher: UA 🇺🇦 / EN 🇬🇧, switches all page copy
- Horizontal logo: `assets/logo-oranta-horizontal.png`
- Thank-you copy from `content/text-1-thank-you.md`
- Donation contacts: clickable Zelle/PayPal mailto links
- Donation values in sentence case; EIN `39-2800449` on its own unhighlighted line
- Stylesheet cache-bust is currently `styles.css?v=8`

## Resume checklist

- Footer links and contact still stub
- Ukrainian copy is in the mockup and `content/*-ua.*`
- When Figma MCP works: upload logo + photos, rebuild the file to match `mockup/`

## Figma (paused)

- File: [Oranta — Support page](https://www.figma.com/design/PF0o03xuRtvauXpt30xvpn) (`PF0o03xuRtvauXpt30xvpn`)
- Plan: `team::1669906163328840281` (Starter, **View** seat)
- Wrapper `3:9` (1440px). Header `3:10` is still the old design. Placeholders: Hero `3:11`, Picture `3:12`, Slogan `3:13`, Campaigns `3:14`, Footer `3:15`
- Nav Item set `5:135` (`Label#5:0`). SDS Button key `cc8b558dc7d9684011b6b99ce8e6509399bc836b`
- **Blocker:** Starter + View ≈ 20 MCP calls/month. `whoami` works; `use_figma` / `upload_assets` / `get_metadata` hit the paywall. Upgrade: https://www.figma.com/files/team/1669906163328840281/all-projects?upgrade=mcp_rate_limit_paywall
- Library: Simple Design System only. Token keys (Background/Text/Border/Space/Radius) are in git history of this file if needed later.

Skills: `figma-use` before every `use_figma`; `figma-generate-design` for page assembly; `upload_assets` then copy `imageHash`.
