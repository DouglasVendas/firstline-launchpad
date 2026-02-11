import { Puzzle, Zap, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  { Icon: Puzzle, title: 'Integrações nativas', desc: 'Conecte WhatsApp, Instagram, VOIP e muito mais.' },
  { Icon: Zap, title: 'Automações inteligentes', desc: 'Configure gatilhos e ações automáticas.' },
  { Icon: Globe, title: 'Hub de soluções', desc: 'Acesse um ecossistema completo de ferramentas.' },
];

const IntegrationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 gradient-primary">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-primary-foreground mb-4">
            O poder de um CRM integrado com um hub de soluções
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Uma plataforma completa para escalar o seu negócio digital.
          </p>
        </div>

        <div className={`grid sm:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-center hover:bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-5">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-primary-foreground text-lg mb-2">{title}</h3>
              <p className="text-primary-foreground/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
