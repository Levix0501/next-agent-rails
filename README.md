# next-agent-rails

Rails for AI agents building with Next.js — a starter that gets the frontend
running fast while keeping agents on a controlled, conventional track.

Built on Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript.

## What's on the rails

- **Agent guardrails.** `AGENTS.md` pins the conventions agents must follow in
  this repo: use `bun`, default to Server Components, push `'use client'` down to
  the smallest leaf components.
- **Preinstalled skills.** A curated set of agent skills under `.agents/skills`
  (with `.claude/skills` symlinks, tracked by `skills-lock.json`): Next.js & React
  best practices, composition patterns, shadcn discovery/review, frontend design,
  and web design guidelines.
- **Modern baseline.** Next.js 16, React 19, Tailwind v4, TypeScript, Geist font.
- **Native toolchain.** Every dev-loop tool is a native binary — Bun (Zig) plus
  the Oxc family (`oxlint`, `oxfmt`) and Tailwind v4 Oxide, all in Rust.
  No JS interpreter on the hot path. See [Why it's fast](#why-its-fast).

## Why it's fast

| Stage               | Tool                            | Replaces            | Language |
| ------------------- | ------------------------------- | ------------------- | -------- |
| Install / run       | `bun`                           | npm / node          | Zig      |
| Lint                | `oxlint`                        | ESLint              | Rust     |
| Format              | `oxfmt`                         | Prettier            | Rust     |
| Compile JS/TS       | SWC (in Next.js)                | Babel               | Rust     |
| Dev server / bundle | Turbopack (Next.js 16 default)  | Webpack             | Rust     |
| CSS engine          | Tailwind v4 Oxide               | Tailwind v3 PostCSS | Rust     |

Real-world ballparks: `bun install` ~25× npm, `oxlint` ~50–100× ESLint,
`oxfmt` ~10–20× Prettier, Turbopack ~10× Webpack cold start.

`oxfmt` also handles import ordering, Tailwind class sorting, and
`package.json` key sorting in a single pass — no extra Prettier plugins
needed.

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. Edit
`app/page.tsx` to start — the page auto-updates as you save.

### Scripts

```bash
bun run lint           # oxlint (errors only)
bun run lint:fix       # oxlint --fix && bun format
bun run lint:strict    # oxlint --deny-warnings (CI)
bun run format         # oxfmt — write changes
bun run format:check   # oxfmt --check — no writes
```

## Conventions

See [`AGENTS.md`](./AGENTS.md) for the full ruleset that agents (and humans)
should follow when working in this repository.
