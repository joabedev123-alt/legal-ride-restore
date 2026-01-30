import { Instagram, Shield, Scale } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-graphite border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content - Compact 3 Columns */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">

            {/* Column 1: Brand, Social & Disclaimer */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src="/logo.png" alt="RESTCAR Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-display text-lg font-bold text-foreground block">
                    RESTCAR
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    Apreensões Judiciais
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=5511992232552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 hover:text-white hover:bg-green-500 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/restcar_?igsh=NHZkM3lzbHh6bmll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 hover:text-white hover:bg-pink-500 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-destructive" />
                  <span className="text-sm font-semibold text-foreground">Aviso Legal</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A RESTCAR não realiza serviços de despachante, nem liberações
                  administrativas por débitos. Nossa atuação é exclusivamente
                  jurídica, focada em processos judiciais de restituição veicular.
                </p>
              </div>
            </div>

            {/* Column 2: Navigation & Links */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-display text-sm font-bold text-foreground mb-4 uppercase tracking-widest">
                  Navegação
                </h4>
                <ul className="space-y-2">
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
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-foreground mb-4 uppercase tracking-widest">
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Termos de Uso
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Addresses & Map */}
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                  Endereços
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground block mb-1 text-xs">Unidade 1</strong>
                    Avenida Rui Barbosa, 1567, Centro, Carapicuíba - SP
                  </p>
                  <p>
                    <strong className="text-foreground block mb-1 text-xs">Unidade 2</strong>
                    R. Rubem Braga, 58, Melville Empresarial, Barueri - SP
                    <span className="block text-xs mt-0.5 text-primary">Smart Office Alphaville</span>
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-white/10 h-28 w-full bg-background/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.744169632832!2d-46.86603792376286!3d-23.50570367883658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03a3b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sR.%20Rubem%20Braga%2C%2058%20-%20Melville%20Empresarial%20II%2C%20Barueri%20-%20SP%2C%2006460-000!5e0!3m2!1spt-BR!2sbr!4v1706600000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>



          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50 pb-20 md:pb-0">
            <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} RESTCAR Apreensões Judiciais. Todos os direitos reservados.
              </p>
              <span className="hidden md:inline text-muted-foreground">|</span>
              <p className="text-sm text-muted-foreground">
                Produzida com <span className="text-green-500">💚</span> por{' '}
                <a
                  href="https://camaly.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-foreground hover:text-primary transition-colors hover:underline"
                >
                  CAMALY
                </a>
              </p>
            </div>

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
