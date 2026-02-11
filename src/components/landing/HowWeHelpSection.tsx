import { useState } from 'react';
import { Cpu, Layers, Users, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const items = [
  {
    Icon: Cpu,
    title: 'Tecnologia de ponta',
    content: 'Utilizamos as mais recentes tecnologias para garantir performance, segurança e escalabilidade para o seu negócio digital.',
  },
  {
    Icon: Layers,
    title: 'Organização de processos',
    content: 'Estruture seus fluxos de atendimento, vendas e pós-vendas com processos claros e automatizados.',
  },
  {
    Icon: Users,
    title: 'Contratação e treinamento do time',
    content: 'Ferramentas para onboarding rápido, acompanhamento de performance e capacitação contínua da sua equipe.',
  },
];

const HowWeHelpSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 gradient-primary">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-primary-foreground mb-8">
              Como a FirstLine CRM pode te ajudar?
            </h2>

            <div className="space-y-4">
              {items.map(({ Icon, title, content }, i) => (
                <div
                  key={title}
                  className="rounded-xl border border-primary-foreground/20 overflow-hidden backdrop-blur-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex items-center gap-4 p-5 text-left text-primary-foreground hover:bg-primary-foreground/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-display font-bold text-lg flex-1">{title}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-5 px-5' : 'max-h-0'}`}>
                    <p className="text-primary-foreground/80 leading-relaxed pl-14">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-0 h-0 border-l-[20px] border-l-accent border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                </div>
                <p className="text-primary-foreground/60 text-sm">Assista ao vídeo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
