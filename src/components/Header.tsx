import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Atuamos', href: '#como-funciona' },
    { label: 'Especialização', href: '#por-que-escolher' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled
          ? 'glass-card border-b border-border/50'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
              <img src="/logo.png" alt="RESTCAR Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-foreground tracking-wide">
                RESTCAR
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Apreensões Judiciais
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-gradient-accent hover:opacity-90 text-primary-foreground px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-glow"
            >
              <a
                href="https://instagram.com/restcar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                Falar pelo Instagram
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-card border-t border-border/50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className="text-foreground py-2 px-4 hover:bg-secondary/50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-gradient-accent hover:opacity-90 text-primary-foreground mt-4"
          >
            <a
              href="https://instagram.com/restcar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              Falar pelo Instagram
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
