import { useEffect, useRef, useState } from 'react';
import {
  Building2,
  Scale,
  KeyRound,
  Headphones,
  MapPin,
  Bike,
  ArrowRight,
  Warehouse
} from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Building2,
      title: 'Liberação em Delegacias',
      description: 'Agilizamos a retirada de veículos apreendidos, conforme autorização judicial.',
      message: 'Olá, gostaria de saber mais sobre Liberação em Delegacias.',
    },
    {
      icon: Scale,
      title: 'Ações Judiciais',
      description: 'Atuação jurídica para restituição mediante decisão judicial.',
      message: 'Olá, gostaria de saber mais sobre Ações Judiciais.',
    },
    {
      icon: KeyRound,
      title: 'Reintegração de Posse',
      description: 'Recuperação do veículo com segurança, legalidade e eficiência.',
      message: 'Olá, gostaria de saber mais sobre Reintegração de Posse.',
    },
    {
      icon: Warehouse,
      title: 'Liberação em Pátios',
      description: 'Procedimentos administrativos e jurídicos para liberação de veículos em pátios.',
      message: 'Olá, gostaria de saber mais sobre Liberação em Pátios.',
    },
    {
      icon: Headphones,
      title: 'Assessoria Jurídica e Operacional',
      description: 'Evitamos perdas de tempo, desgaste emocional e erros processuais.',
      message: 'Olá, gostaria de saber mais sobre Assessoria Jurídica e Operacional.',
    },
    {
      icon: MapPin,
      title: 'Localização de Veículos',
      description: 'Serviço especializado de busca e localização veicular.',
      message: 'Olá, gostaria de saber mais sobre Localização de Veículos.',
    },
    {
      icon: Bike,
      title: 'Motos Apreendidas pela Polícia',
      description: 'Atuação específica para restituição de motocicletas apreendidas.',
      message: 'Olá, gostaria de saber mais sobre Motos Apreendidas pela Polícia.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="inline-block text-sm text-primary font-semibold uppercase tracking-widest mb-4">
              Nossos Serviços
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Soluções Jurídicas
              <span className="block gradient-text">Completas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um conjunto completo de serviços jurídicos especializados
              em restituição de veículos apreendidos.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative glass-card p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 glow-border flex flex-col ${isVisible ? 'animate-fade-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/5511992232552?text=${encodeURIComponent(service.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold tracking-wide shadow-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02] group-hover:from-primary/90 group-hover:to-accent/90"
                >
                  <span className="text-sm">Fale com um Especialista</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
