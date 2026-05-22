const ROWS = [
  { stage: 'Install / run', tool: 'bun', replaces: 'npm / node', lang: 'Zig' },
  { stage: 'Lint', tool: 'oxlint', replaces: 'ESLint', lang: 'Rust' },
  { stage: 'Format', tool: 'oxfmt', replaces: 'Prettier', lang: 'Rust' },
  { stage: 'Compile JS/TS', tool: 'SWC', replaces: 'Babel', lang: 'Rust' },
  { stage: 'Bundle / dev', tool: 'Turbopack', replaces: 'Webpack', lang: 'Rust' },
  { stage: 'CSS engine', tool: 'Tailwind v4 Oxide', replaces: 'Tailwind v3 PostCSS', lang: 'Rust' }
] as const;

export function SpeedTable() {
  return (
    <section
      id='fast'
      className='scroll-mt-16 border-b border-white/[0.06] bg-[#0a0a0a] px-7 py-14 md:py-16'
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-3 font-mono text-[11px] tracking-wider text-[#98f590]/85'>
          {`// SECTION 01 — WHY IT'S FAST`}
        </div>
        <h2 className='text-2xl font-semibold tracking-tight text-white md:text-[28px]'>
          No JavaScript on the hot path.
        </h2>
        <p className='mt-2 max-w-xl text-sm text-white/60 md:text-base'>
          Every dev-loop tool is a native binary — Bun (Zig) plus the Oxc family and Tailwind Oxide,
          all in Rust.
        </p>

        <div className='mt-7 overflow-x-auto'>
          <table className='w-full min-w-[480px] border-collapse font-mono text-[12.5px]'>
            <thead>
              <tr className='text-[11px] tracking-wider text-white/55 uppercase'>
                <th className='py-2.5 pr-4 text-left font-medium'>Stage</th>
                <th className='py-2.5 pr-4 text-left font-medium'>Tool</th>
                <th className='py-2.5 pr-4 text-left font-medium'>Replaces</th>
                <th className='py-2.5 text-left font-medium'>Lang</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.stage} className='border-b border-dashed border-white/[0.08]'>
                  <td className='py-2.5 pr-4 text-white'>{row.stage}</td>
                  <td className='py-2.5 pr-4 text-white'>{row.tool}</td>
                  <td className='py-2.5 pr-4 text-white/45'>{row.replaces}</td>
                  <td className='py-2.5 text-[#98f590]'>{row.lang}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
