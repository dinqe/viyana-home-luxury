import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import SuitesSection from "@/components/SuitesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AmenitiesSection />
      <SuitesSection />
      <TestimonialsSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
};

export default Index;
