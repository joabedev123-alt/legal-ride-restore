import { useEffect, useRef, useState } from 'react';
import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contato" 
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-dark to-graphite" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Estamos prontos para ajudar</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Precisa recuperar um
              <span className="block gradient-text">veículo apreendido?</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Entre em contato pelo Instagram para uma análise inicial do seu caso. 
              Nossa equipe está pronta para orientá-lo.
            </p>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent hover:opacity-90 text-primary-foreground px-10 py-7 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-glow animate-glow-pulse group"
            >
              <a
                href="https://instagram.com/restcar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Instagram className="w-6 h-6" />
                <span>Falar pelo Instagram</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-border/50">
              {[
                'Resposta Rápida',
                'Atendimento Personalizado',
                'Sigilo Total',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
