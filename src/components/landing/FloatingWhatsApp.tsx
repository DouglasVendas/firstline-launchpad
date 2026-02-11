import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-full font-bold shadow-lg hover:brightness-110 transition-all animate-pulse-green"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">DÚVIDAS WHATSAPP</span>
    </a>
  );
};

export default FloatingWhatsApp;
