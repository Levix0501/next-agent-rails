import { CuratedStack } from '@/features/landing/components/curated-stack';
import { Footer } from '@/features/landing/components/footer';
import { GetStarted } from '@/features/landing/components/get-started';
import { Hero } from '@/features/landing/components/hero';
import { OnTheRails } from '@/features/landing/components/on-the-rails';
import { SiteNav } from '@/features/landing/components/site-nav';
import { SkillsGrid } from '@/features/landing/components/skills-grid';
import { SpeedTable } from '@/features/landing/components/speed-table';

export default function Home() {
  return (
    <main className='bg-background text-foreground flex flex-1 flex-col'>
      <a
        href='#main'
        className='bg-foreground text-background sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm'
      >
        Skip to content
      </a>
      <SiteNav />
      <div id='main'>
        <Hero />
        <GetStarted />
        <OnTheRails />
        <CuratedStack />
        <SkillsGrid />
        <SpeedTable />
      </div>
      <Footer />
    </main>
  );
}
