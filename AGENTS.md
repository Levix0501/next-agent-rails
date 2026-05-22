# AGENTS.md

A Next.js 16 project using the App Router, with React 19, Tailwind CSS v4, and TypeScript.

## Key Constraints

- **Use bun.** Package manager is `bun` — use `bun install` / `bun add`, respect `bun.lock`.
  Don't use npm / pnpm / yarn.
- **Server Components first.** Default every component to a Server Component. Add
  `'use client'` only when you need hooks, event handlers, or browser APIs — and put it
  on the smallest, leaf-most component. Fetch data on the server and pass it down as
  serializable props; never make a parent a Client Component just to give a child interactivity.
- **Official CLI first.** Whenever a tool can be installed or scaffolded via its official
  CLI (e.g. `bunx shadcn@latest add <name>` to add a shadcn component), use that CLI.
  Don't hand-write config files or paste source code to replicate what the CLI generates.

## On-demand References

Material pulled in only when the task matches.
