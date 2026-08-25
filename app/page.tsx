import { siteConfig } from "@/config/site";
import { Hero } from "@/components/sections/Hero";
import { FeaturedVehicles } from "@/components/sections/FeaturedVehicles";
import { Advantages } from "@/components/sections/Advantages";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DurationOffers } from "@/components/sections/DurationOffers";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ShowroomHome } from "@/components/showroom/ShowroomHome";

export default function Home() {
  // Le gabarit est choisi par agence dans config/brands/<id>.ts.
  if (siteConfig.template === "showroom") {
    return <ShowroomHome />;
  }

  return (
    <>
      <Hero />
      <FeaturedVehicles />
      <Advantages />
      <HowItWorks />
      <DurationOffers />
      <TrustSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
