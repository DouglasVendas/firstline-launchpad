import HeroSection from '@/components/landing/HeroSection';
import AgentsSection from '@/components/landing/AgentsSection';
import ControlSection from '@/components/landing/ControlSection';
import FeatureCardsSection from '@/components/landing/FeatureCardsSection'; // Omnichannel
import FeaturesSection from '@/components/landing/FeaturesSection'; // 3 Pillars Recap
import DashboardSection from '@/components/landing/DashboardSection';
import LeadFormSection from '@/components/landing/LeadFormSection';
import FooterSection from '@/components/landing/FooterSection';
import FloatingWhatsApp from '@/components/landing/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <AgentsSection />
      <ControlSection />
      <FeatureCardsSection /> {/* Omnichannel */}
      <FeaturesSection />
      <DashboardSection />
      <LeadFormSection />
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
