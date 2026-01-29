import { useEffect, useRef, useState } from 'react';
import { Search, FileCheck, Lightbulb, Gavel, Car } from 'lucide-react';

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Análise Inicial',
      description: 'Realizamos uma análise completa do seu caso e documentação.',
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Verificação Jurídica',
      description: 'Examinamos todos os aspectos legais do processo.',
    },
    {
      number: '03',
      icon: Lightbulb,
      title: 'Estratégia Personalizada',
      description: 'Desenvolvemos a melhor estratégia jurídica para o seu caso.',
    },
    {
      number: '04',
      icon: Gavel,
      title: 'Atuação Judicial',
      description: 'Entramos com as ações necessárias perante o judiciário.',
    },
    {
      number: '05',
      icon: Car,
      title: 'Restituição',
      description: 'Seu veículo é restituído com segurança e legalidade.',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="como-funciona" 
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-dark to-background" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="inline-block text-sm text-primary font-semibold uppercase tracking-widest mb-4">
              Como Atuamos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Processo
              <span className="block gradient-text">Simplificado</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso processo é transparente e eficiente, garantindo que você 
              acompanhe cada etapa da restituição.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-border">
              <div 
                className="h-full bg-gradient-accent transition-all duration-500"
                style={{ width: `${(activeStep / 4) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {/* Step Content */}
                  <div 
                    className={`text-center transition-all duration-500 ${
                      activeStep === index ? 'scale-105' : ''
                    }`}
                  >
                    {/* Circle */}
                    <div className="relative inline-flex mb-6">
                      <div 
                        className={`w-[120px] h-[120px] rounded-full flex items-center justify-center transition-all duration-500 ${
                          activeStep === index 
                            ? 'bg-gradient-accent shadow-glow' 
                            : 'glass-card'
                        }`}
                      >
                        <step.icon 
                          className={`w-10 h-10 transition-colors duration-300 ${
                            activeStep === index ? 'text-primary-foreground' : 'text-primary'
                          }`} 
                        />
                      </div>
                      
                      {/* Number Badge */}
                      <div 
                        className={`absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          activeStep === index 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-secondary text-muted-foreground'
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Step Indicators - Mobile */}
            <div className="flex justify-center gap-2 mt-8 lg:hidden">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index ? 'bg-primary w-8' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
