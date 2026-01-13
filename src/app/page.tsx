import { Navigation } from "@/components/Navigation";
import { HeroSlide } from "@/components/slides/HeroSlide";
import { WhoWeAreSlide } from "@/components/slides/WhoWeAreSlide";
import { BrandsSlide } from "@/components/slides/BrandsSlide";
import { TeamSlide } from "@/components/slides/TeamSlide";
import { CalendarSlide } from "@/components/slides/CalendarSlide";
import { GrowthSlide } from "@/components/slides/GrowthSlide";
import { UseOfFundsSlide } from "@/components/slides/UseOfFundsSlide";
import { SponsorsSlide } from "@/components/slides/SponsorsSlide";
import { ValuationSlide } from "@/components/slides/ValuationSlide";
import { FinancingSlide } from "@/components/slides/FinancingSlide";
import { BenefitsSlide } from "@/components/slides/BenefitsSlide";
import { SummarySlide } from "@/components/slides/SummarySlide";

export default function PitchDeck() {
  return (
    <main className="relative">
      <Navigation />

      <div id="hero">
        <HeroSlide />
      </div>

      <div id="who-we-are">
        <WhoWeAreSlide />
      </div>

      <div id="brands">
        <BrandsSlide />
      </div>

      <div id="team">
        <TeamSlide />
      </div>

      <div id="calendar">
        <CalendarSlide />
      </div>

      <div id="growth">
        <GrowthSlide />
      </div>

      <div id="funds">
        <UseOfFundsSlide />
      </div>

      <div id="sponsors">
        <SponsorsSlide />
      </div>

      <div id="valuation">
        <ValuationSlide />
      </div>

      <div id="financing">
        <FinancingSlide />
      </div>

      <div id="benefits">
        <BenefitsSlide />
      </div>

      <div id="summary">
        <SummarySlide />
      </div>
    </main>
  );
}
