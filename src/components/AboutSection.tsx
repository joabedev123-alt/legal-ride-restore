import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, XCircle, CreditCard, FileText, Receipt } from 'lucide-react';

const AboutSection = () => {
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

  const notIncluded = [
    { icon: CreditCard, text: 'Multas' },
    { icon: FileText, text: 'IPVA' },
    { icon: Receipt, text: 'Licenciamento' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="quem-somos" 
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <div>
                <span className="inline-block text-sm text-primary font-semibold uppercase tracking-widest mb-4">
                  Quem Somos
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Atuação Jurídica
                  <span className="block gradient-text">Especializada</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A <span className="text-foreground font-semibold">RESTCAR</span> atua de forma 
                especializada na restituição de veículos apreendidos em processos judiciais, 
                com foco em apreensões criminais. Nosso trabalho é técnico, jurídico e 
                estratégico, respeitando rigorosamente a legalidade e a segurança do cliente.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: '100%', label: 'Judicial' },
                  { number: 'Zero', label: 'Burocracia' },
                  { number: 'Total', label: 'Transparência' },
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center p-4 glass-card rounded-xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Alert Box */}
            <div 
              className={`${isVisible ? 'animate-fade-up delay-200' : 'opacity-0'}`}
            >
              <div className="glass-card p-8 rounded-2xl border border-destructive/20 relative overflow-hidden">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-destructive/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  {/* Alert Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-destructive/20 flex items-center justify-center">
                      <AlertTriangle className="w-7 h-7 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Importante Saber
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        O que NÃO fazemos
                      </p>
                    </div>
                  </div>

                  {/* Alert Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full mb-6">
                    <XCircle className="w-4 h-4 text-destructive" />
                    <span className="text-sm font-semibold text-destructive">
                      Não somos despachantes
                    </span>
                  </div>

                  {/* Not Included List */}
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      Não realizamos liberação por:
                    </p>
                    <div className="grid gap-3">
                      {notIncluded.map((item) => (
                        <div 
                          key={item.text}
                          className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl"
                        >
                          <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                            <XCircle className="w-5 h-5 text-destructive" />
                          </div>
                          <span className="text-foreground font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
