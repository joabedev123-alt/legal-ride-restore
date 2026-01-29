import { Instagram } from 'lucide-react';

const FloatingInstagramButton = () => {
  return (
    <a
      href="https://instagram.com/restcar"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-accent px-5 py-4 rounded-full shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-105 animate-glow-pulse group"
      aria-label="Contato pelo Instagram"
    >
      <Instagram className="w-6 h-6 text-primary-foreground" />
      <span className="text-primary-foreground font-semibold hidden sm:inline-block">
        Instagram
      </span>
    </a>
  );
};

export default FloatingInstagramButton;
