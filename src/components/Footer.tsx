import { Instagram, Shield, Scale } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-graphite border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src="/logo.png" alt="RESTCAR Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-display text-xl font-bold text-foreground block">
                    RESTCAR
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    Apreensões Judiciais
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md mb-6">
                Soluções jurídicas especializadas em recuperação veicular.
                Atuação exclusivamente judicial com foco em segurança e legalidade.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/restcar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display text-lg font-bold text-foreground mb-4">
                Navegação
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Início', href: '#inicio' },
                  { label: 'Serviços', href: '#servicos' },
                  { label: 'Como Funciona', href: '#como-funciona' },
                  { label: 'Por Que Escolher', href: '#por-que-escolher' },
                  { label: 'Contato', href: '#contato' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display text-lg font-bold text-foreground mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="p-6 glass-card rounded-xl mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-2">Aviso Legal</h5>
                <p className="text-sm text-muted-foreground">
                  A RESTCAR não realiza serviços de despachante, nem liberações
                  administrativas por débitos. Nossa atuação é exclusivamente
                  jurídica, focada em processos judiciais de restituição veicular.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} RESTCAR Apreensões Judiciais. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Scale className="w-4 h-4" />
              <span>Atuação 100% Judicial</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
