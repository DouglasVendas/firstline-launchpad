import { TrendingUp, ShoppingCart, FileText, Plug, History, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const benefits = [
  { Icon: TrendingUp, title: 'Escalar vendas', desc: 'Aumente suas vendas com automação inteligente.' },
  { Icon: ShoppingCart, title: 'Otimizar processos de vendas', desc: 'Estruture seu funil e feche mais negócios.' },
  { Icon: FileText, title: 'Documentar interações', desc: 'Tenha o histórico completo de cada cliente.' },
  { Icon: Plug, title: 'Integrar ferramentas', desc: 'Conecte suas ferramentas favoritas ao CRM.' },
  { Icon: History, title: 'Histórico completo', desc: 'Acesse todo o histórico de atendimentos.' },
  { Icon: Target, title: 'Previsibilidade', desc: 'Tenha controle total dos seus resultados.' },
];

const TargetAudienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-4">
            Para quem é a <span className="text-gradient">FirstLine CRM</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ideal para empreendedores digitais que buscam escalar seus resultados.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {benefits.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
