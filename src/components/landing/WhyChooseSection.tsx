import { Shield, Headphones, Rocket, Clock, BarChart, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reasons = [
  { Icon: Rocket, title: 'Escalabilidade', desc: 'Cresça sem limites com uma plataforma que acompanha seu ritmo.' },
  { Icon: Headphones, title: 'Suporte dedicado', desc: 'Time de suporte especializado para ajudar quando precisar.' },
  { Icon: Shield, title: 'Segurança', desc: 'Dados protegidos com criptografia e backups automáticos.' },
  { Icon: Clock, title: 'Economia de tempo', desc: 'Automatize tarefas repetitivas e foque no que importa.' },
  { Icon: BarChart, title: 'Dados em tempo real', desc: 'Métricas e indicadores atualizados em tempo real.' },
  { Icon: Users, title: 'Multi-usuários', desc: 'Gerencie equipes com permissões e funções personalizadas.' },
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-4">
            Porque Empreendedores Digitais utilizam a{' '}
            <span className="text-gradient">FirstLine CRM</span>
          </h2>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {reasons.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:-translate-y-1 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
