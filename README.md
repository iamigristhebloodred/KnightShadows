# KNIGHTSHADOWS Website

Official website for the **KNIGHTSHADOWS** open-source organization, built from scratch with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.

## Products Featured

- **[Beru](https://github.com/KnightShadows/beru)** (`v0.6.2`) — Next-generation declarative C++ package manager & build orchestrator written in Rust, featuring PubGrub SAT dependency resolution and cryptographic ABI isolation.
- **[tuipdf](https://github.com/KnightShadows/tuipdf)** (`v0.1.1`) — Terminal-native, offline pure-Rust PDF compressor and utility built with `ratatui`, `lopdf`, `image`, `flate2`, and `rayon`.
- **[beru_index](https://github.com/KnightShadows/beru_index)** (`223+ Recipes`) — Decentralized Git-backed C/C++ package recipe registry powering Beru.

## Routes

- `/` — Main landing page with interactive install console, product showcase, architecture pillars, releases, and live package preview
- `/products/beru` — Full Beru overview, CLI cheatsheet, manifest/ad-hoc script examples, and ecosystem comparison
- `/products/tuipdf` — Full tuipdf overview, 6-stage pure-Rust pipeline, compression tiers, and TUI shortcuts
- `/products/beru-index` — Interactive 223+ package registry explorer with category filters and `recipe.toml` reference
- `/about` — Organization principles and open-source repository directory

## Development

```bash
npm run dev
npm run lint
npm run build
```
