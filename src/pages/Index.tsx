import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowWeHelpSection from '@/components/landing/HowWeHelpSection';
import TargetAudienceSection from '@/components/landing/TargetAudienceSection';
import TabsSection from '@/components/landing/TabsSection';
import IntegrationSection from '@/components/landing/IntegrationSection';
import FeatureCardsSection from '@/components/landing/FeatureCardsSection';
import WebhookSection from '@/components/landing/WebhookSection';
import DashboardSection from '@/components/landing/DashboardSection';
import WhyChooseSection from '@/components/landing/WhyChooseSection';
import LeadFormSection from '@/components/landing/LeadFormSection';
import FooterSection from '@/components/landing/FooterSection';
import FloatingWhatsApp from '@/components/landing/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowWeHelpSection />
      <TargetAudienceSection />
      <TabsSection />
      <IntegrationSection />
      <FeatureCardsSection />
      <WebhookSection />
      <DashboardSection />
      <WhyChooseSection />
      <LeadFormSection />
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
