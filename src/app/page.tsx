import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import EventCards from "@/components/home/EventCards";
import WhatYouGet from "@/components/home/WhatYouGet";
import ForWho from "@/components/home/ForWho";
import HowToJoin from "@/components/home/HowToJoin";
import Gallery from "@/components/home/Gallery";
import SupportedBy from "@/components/home/SupportedBy";
import FAQ from "@/components/home/FAQ";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <EventCards />
      <WhatYouGet />
      <ForWho />
      <HowToJoin />
      <Gallery />
      <SupportedBy />
      <FAQ />
      <ClosingCTA />
    </main>
  );
}
