import { Instagram, Linkedin, Twitter } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <span className="text-2xl font-display font-bold text-foreground block mb-4">
              FirstLine<span className="text-primary">.ai</span>
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Acreditamos que humanos foram feitos para criar, negociar e liderar.
              Não para atualizar CRM. Nossos agentes cuidam do resto.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#agents" className="hover:text-primary transition-colors">Agentes de IA</a></li>
              <li><a href="#control" className="hover:text-primary transition-colors">VoIP & Auditoria</a></li>
              <li><a href="#omni" className="hover:text-primary transition-colors">Omnichannel</a></li>
              <li><a href="#dashboard" className="hover:text-primary transition-colors">Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FirstLine Technologies.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
