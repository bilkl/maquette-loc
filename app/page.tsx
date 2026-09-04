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
import { GarageHome } from "@/components/garage/GarageHome";
import { DealerHome } from "@/components/dealer/DealerHome";
import { ElectricienHome } from "@/components/electricien/ElectricienHome";
import { PlombierHome } from "@/components/plombier/PlombierHome";
import { MenuiserieHome } from "@/components/menuiserie/MenuiserieHome";
import { ImmobilierHome } from "@/components/immobilier/ImmobilierHome";

export default function Home() {
  // Le gabarit est choisi par agence dans config/brands/<id>.ts.
  if (siteConfig.template === "showroom") {
    return <ShowroomHome />;
  }
  if (siteConfig.template === "garage") {
    return <GarageHome />;
  }
  if (siteConfig.template === "dealer") {
    return <DealerHome />;
  }
  if (siteConfig.template === "electricien") {
    return <ElectricienHome />;
  }
  if (siteConfig.template === "plombier") {
    return <PlombierHome />;
  }
  if (siteConfig.template === "menuiserie") {
    return <MenuiserieHome />;
  }
  if (siteConfig.template === "immobilier") {
    return <ImmobilierHome />;
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
