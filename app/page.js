'use cache'

import HomepagHero from "@/components/Hero/HomepageHero";
import HowWeWorkSection from "@/components/Section/HowWeWorkSection";
import DynamicBlackSection from "@/components/Section/DynamicBlackSection";

export default async function Home() {
  return (
    <main>
      <HomepagHero />
      <HowWeWorkSection />
      <DynamicBlackSection />
    </main>
  );
}