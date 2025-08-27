'use cache'

import HomepagHero from "@/components/Hero/HomepageHero";
import HowWeWorkSection from "@/components/Section/HowWeWorkSection";

export default async function Home() {
  return (
    <main>
      <HomepagHero />
      <HowWeWorkSection />
    </main>
  );
}