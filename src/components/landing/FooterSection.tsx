import { Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-2xl font-display font-bold text-accent mb-6 block">
            FirstLine CRM
          </span>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold hover:brightness-110 transition-all mb-8"
          >
            Começar agora
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
            <Facebook className="w-5 h-5 text-primary-foreground/70" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
            <Instagram className="w-5 h-5 text-primary-foreground/70" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
            <Youtube className="w-5 h-5 text-primary-foreground/70" />
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-8 text-sm">
          <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Termos de Uso</a>
          <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Política de Privacidade</a>
        </div>

        <div className="text-center text-primary-foreground/40 text-xs space-y-1">
          <p>© {new Date().getFullYear()} FirstLine CRM. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
