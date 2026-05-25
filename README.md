# next-agent-rails

**Rails for AI agents building with Next.js.** A starter that lets agents
implement features _fast_ — while keeping your architecture and directory
structure on a controlled, predictable track.

Agents are quick, but left alone they sprawl: a new folder convention here, a
different state library there, a one-off pattern in every feature. This starter
makes those decisions up front. A fixed directory structure, enforced
conventions, a curated set of mainstream libraries (each with one clear job),
and preinstalled agent skills mean the code an agent writes lands where you
expect it and looks like the rest of the repo — quick to ship, easy to review.
Use it for SEO-facing sites or authenticated dashboards alike.

Built on Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript,
over an all-native toolchain (Bun, Oxc, Turbopack).

## Getting started

```bash
bunx degit levix0501/next-agent-rails my-app
cd my-app
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000). The repo ships a public
landing page and a protected `/dashboard` (sign in with `demo` / `demo123`) as a
working example of the rails — keep what you need, delete the rest, and start
adding features.

### Scripts

```bash
bun dev                # dev server (Turbopack)
bun run build          # production build
bun run lint           # oxlint — errors only
bun run lint:fix       # oxlint --fix, then oxfmt
bun run lint:strict    # oxlint --deny-warnings (CI)
bun run format         # oxfmt — write changes
bun run format:check   # oxfmt --check — no writes
```

## On the rails

The conventions every agent (and human) follows are pinned in
[`AGENTS.md`](./AGENTS.md) — and surfaced to Claude Code via `CLAUDE.md`. The
non-negotiables:

- **Use Bun.** `bun install` / `bun add`, respect `bun.lock`. No npm / pnpm / yarn.
- **Server Components first.** Default every component to a Server Component; add
  `'use client'` only on the smallest leaf that needs hooks, events, or browser APIs.
- **Official CLI first.** Scaffold through a tool's own CLI (e.g.
  `bunx shadcn@latest add <name>`) instead of hand-writing config or pasting source.
- **One home per kind of state.** URL / search-param state → `nuqs`;
  cross-component client state → `zustand`. Agents don't reinvent it per feature.

Every commit is auto-fixed and checked: Husky + lint-staged run `oxlint --fix`
and `oxfmt`, and commitlint enforces Conventional Commits.

### Directory structure

```text
src/
  app/                  # routing only — route groups, layouts, route handlers
    (public)/           # unauthenticated, SEO-facing pages
    (protected)/        # auth-gated pages (dashboard, …)
    api/                # route handlers — a thin BFF in front of your backend
  features/             # one self-contained folder per feature
    <feature>/
      components/        # feature UI
      api/               # TanStack Query hooks (queries.ts / mutations.ts)
      actions/           # server actions
      lib/               # feature-local helpers & types
      store.ts           # zustand store (when needed)
  components/
    ui/                  # shadcn/ui primitives
    layout/              # app-wide providers & chrome
  hooks/                 # shared hooks
  lib/                   # shared utils
  styles/                # global CSS & design tokens
  auth.ts                # Auth.js (next-auth) config
  proxy.ts               # middleware — route protection
```

A feature owns its UI, data hooks, server actions, and store, and reaches the
outside world only through `app/` routes. Adding a feature means adding a
folder — not threading code through the whole tree.

## The stack

Mainstream libraries, picked once, each with one job — so an agent reaches for
the same tool you would. They're wired up in
`src/components/layout/providers.tsx`.

| Concern                      | Library                                              |
| ---------------------------- | ---------------------------------------------------- |
| Framework                    | Next.js 16 (App Router) · React 19                   |
| Styling                      | Tailwind CSS v4                                      |
| UI components                | shadcn/ui (Radix, `radix-nova` style) · lucide-react |
| Server state / data fetching | TanStack Query                                       |
| URL / search-param state     | nuqs                                                 |
| Client state                 | Zustand                                              |
| Forms + validation           | React Hook Form + Zod                                |
| Auth                         | Auth.js (next-auth v5)                               |
| Theming · toasts · progress  | next-themes · Sonner · nextjs-toploader              |

**Frontend, meet backend.** Route handlers under `app/api` act as a thin BFF:
`auth.ts` and `app/api/me` ship with a commented-out `fetch` to an external
backend (`BACKEND_URL`), with a bearer token threaded through the session. Point
it at your own service, or keep everything inside Next.js.

## Preinstalled skills

[Agent skills](https://www.anthropic.com/news/skills) teach your agent how to
work in _this_ stack. Eight are vendored under `.agents/skills` (symlinked to
`.claude/skills`) and pinned by `skills-lock.json`:

| Skill                       | Source      |
| --------------------------- | ----------- |
| next-best-practices         | vercel-labs |
| vercel-react-best-practices | vercel-labs |
| vercel-composition-patterns | vercel-labs |
| web-design-guidelines       | vercel-labs |
| find-skills                 | vercel-labs |
| shadcn                      | shadcn-ui   |
| frontend-design             | anthropics  |
| skill-creator               | anthropics  |

## Why it's fast

Every dev-loop tool is a native binary — Bun (Zig) plus the Oxc family
(`oxlint`, `oxfmt`) and Tailwind v4 Oxide, all in Rust. No JS interpreter on the
hot path.

| Stage               | Tool                           | Replaces            | Language |
| ------------------- | ------------------------------ | ------------------- | -------- |
| Install / run       | `bun`                          | npm / node          | Zig      |
| Lint                | `oxlint`                       | ESLint              | Rust     |
| Format              | `oxfmt`                        | Prettier            | Rust     |
| Compile JS/TS       | SWC (in Next.js)               | Babel               | Rust     |
| Dev server / bundle | Turbopack (Next.js 16 default) | Webpack             | Rust     |
| CSS engine          | Tailwind v4 Oxide              | Tailwind v3 PostCSS | Rust     |

Real-world ballparks: `bun install` ~25× npm, `oxlint` ~50–100× ESLint,
`oxfmt` ~10–20× Prettier, Turbopack ~10× Webpack cold start. `oxfmt` also handles
import ordering, Tailwind class sorting, and `package.json` key sorting in a
single pass — no extra Prettier plugins needed.

## License

MIT
