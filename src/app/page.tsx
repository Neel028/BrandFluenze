import BenefitSection from "@/components/page-level/landing/BenefitSection";
import ContactSection from "@/components/page-level/landing/ContactSection";
import FaqSection from "@/components/page-level/landing/FaqSection";
import FeaturesSection from "@/components/page-level/landing/FeaturesSection";
import HeroSection from "@/components/page-level/landing/HeroSection";
import StrategySelectionSection from "@/components/page-level/landing/StrategySelectionSection";

export default function Home() {
  return (
     <div className="space-y-4 lg:space-y-6">
         <HeroSection/>
         <FeaturesSection/>
         <StrategySelectionSection/>
         <BenefitSection/>
         <FaqSection/>
         <ContactSection/>
     </div>
  );
}
