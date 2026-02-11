import { Zap, GitBranch, Settings } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const cards = [
  {
    Icon: Zap,
    title: 'Mensagens Rápidas',
    desc: 'Crie templates de mensagens para respostas ágeis e consistentes em todos os canais.',
    gradient: true,
  },
  {
    Icon: GitBranch,
    title: 'Funis Programados',
    desc: 'Configure funis de vendas automatizados com etapas personalizadas e acompanhamento inteligente.',
    gradient: false,
  },
  {
    Icon: Settings,
    title: 'Gatilhos Automáticos',
    desc: 'Automatize ações com base em comportamentos do cliente para nunca perder uma oportunidade.',
    gradient: true,
  },
];

const FeatureCardsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {cards.map(({ Icon, title, desc, gradient }, i) => (
            <div
              key={title}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                gradient
                  ? 'gradient-primary text-primary-foreground shadow-lg'
                  : 'bg-card border border-border shadow-card hover:shadow-card-hover'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                gradient ? 'bg-primary-foreground/20' : 'gradient-primary'
              }`}>
                <Icon className={`w-7 h-7 ${gradient ? 'text-primary-foreground' : 'text-primary-foreground'}`} />
              </div>
              <h3 className={`font-display font-bold text-xl mb-3 ${gradient ? '' : 'text-foreground'}`}>{title}</h3>
              <p className={`leading-relaxed ${gradient ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
