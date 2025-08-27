'use cache'

import HomepagHero from "@/components/Hero/HomepageHero";
import HowWeWorkSection from "@/components/Section/HowWeWorkSection";

export default function Home() {
  return (
    <main>
      <HomepagHero />
      <HowWeWorkSection />
    </main>
  );
}