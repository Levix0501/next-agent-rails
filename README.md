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

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. Edit
`app/page.tsx` to start — the page auto-updates as you save.

## Conventions

See [`AGENTS.md`](./AGENTS.md) for the full ruleset that agents (and humans)
should follow when working in this repository.
