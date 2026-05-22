export default function Home() {
  return (
    <main className='flex flex-1 flex-col bg-[#0a0a0a] text-white'>
      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black'
      >
        Skip to content
      </a>
      <div id='main' />
    </main>
  );
}
