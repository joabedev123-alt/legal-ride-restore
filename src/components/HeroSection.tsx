import { Instagram, ChevronDown, Check, ShieldCheck, Scale, AlertTriangle, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const highlights = [
    { icon: Scale, text: 'Atuação exclusivamente judicial' },
    { icon: AlertTriangle, text: 'Não somos despachantes' },
    { icon: ShieldCheck, text: 'Especialistas em apreensões criminais' },
    { icon: Gavel, text: 'Segurança, legalidade e estratégia' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 opacity-0 animate-fade-up">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Soluções Jurídicas Especializadas</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 opacity-0 animate-fade-up delay-100">
            <span className="text-foreground">Especialistas em </span>
            <span className="gradient-text">Restituição</span>
            <br />
            <span className="text-foreground">de Veículos Apreendidos</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 opacity-0 animate-fade-up delay-200">
            Atuação jurídica estratégica na recuperação de veículos envolvidos em 
            processos judiciais e apreensões criminais.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {highlights.map((item, index) => (
              <div
                key={item.text}
                className="glass-card p-4 rounded-xl flex flex-col items-center gap-3 opacity-0 animate-fade-up glow-border"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <span className="text-sm text-foreground text-center font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-500">
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-glow animate-glow-pulse"
            >
              <a
                href="https://instagram.com/restcar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Instagram className="w-5 h-5" />
                Solicitar Análise pelo Instagram
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#como-funciona')}
              className="border-border/50 text-foreground hover:bg-secondary/50 px-8 py-6 text-base font-medium rounded-xl"
            >
              Entenda Como Funciona
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-500">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Rolar</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
