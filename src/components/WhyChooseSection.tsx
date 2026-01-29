import { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Target, 
  Eye, 
  Shield, 
  Users,
  CheckCircle2
} from 'lucide-react';

const WhyChooseSection = () => {
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

  const features = [
    {
      icon: Award,
      title: 'Especialização Jurídica Real',
      description: 'Equipe composta por profissionais especializados em direito veicular e apreensões.',
    },
    {
      icon: Target,
      title: 'Foco em Apreensões Criminais',
      description: 'Atuação direcionada aos casos mais complexos envolvendo processos criminais.',
    },
    {
      icon: Eye,
      title: 'Transparência Total',
      description: 'Você acompanha cada passo do processo com comunicação clara e objetiva.',
    },
    {
      icon: Shield,
      title: 'Segurança Jurídica',
      description: 'Todas as ações respeitam rigorosamente a legislação vigente.',
    },
    {
      icon: Users,
      title: 'Atendimento Profissional',
      description: 'Suporte dedicado e humanizado durante todo o processo.',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="por-que-escolher" 
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Gradient Orb */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="inline-block text-sm text-primary font-semibold uppercase tracking-widest mb-4">
                Por que nos escolher
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Diferenciais que
                <span className="block gradient-text">Fazem a Diferença</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa experiência e dedicação garantem um serviço de excelência 
                na recuperação do seu veículo apreendido.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {features.slice(0, 3).map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="flex items-start gap-4 p-4 glass-card rounded-xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div 
              className={`space-y-6 ${isVisible ? 'animate-fade-up delay-200' : 'opacity-0'}`}
            >
              {features.slice(3).map((feature, index) => (
                <div 
                  key={feature.title}
                  className="p-6 glass-card rounded-2xl group hover:-translate-y-1 transition-all duration-300 glow-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Stats Box */}
              <div className="p-8 bg-gradient-accent rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                    <span className="font-display text-2xl font-bold text-primary-foreground">
                      Compromisso
                    </span>
                  </div>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Trabalhamos incansavelmente para garantir a restituição do seu 
                    veículo com toda a segurança jurídica necessária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
