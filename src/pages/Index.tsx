import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppGallerySection from '@/components/WhatsAppGallerySection';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyChooseSection />
        <ContactSection />
        <WhatsAppGallerySection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
