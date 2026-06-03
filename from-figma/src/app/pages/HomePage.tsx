import { HeroSection } from "../components/HeroSection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { CTASection } from "../components/CTASection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
