import { Instagram, ChevronDown, Check, ShieldCheck, Scale, AlertTriangle, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const highlights = [
    { icon: Scale, text: 'Atuação exclusivamente judicial' },
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
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

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
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto mb-12">
            {highlights.map((item, index) => (
              <div
                key={item.text}
                className="glass-card p-4 rounded-xl flex flex-col items-center gap-3 opacity-0 animate-fade-up glow-border flex-1 w-full"
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
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-6 text-base font-bold tracking-wide rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105"
            >
              <a
                href="https://api.whatsapp.com/send?phone=5511992232552&text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20um%20ve%C3%ADculo%20apreendido."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Fale com um Especialista
              </a>
            </Button>

          </div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
