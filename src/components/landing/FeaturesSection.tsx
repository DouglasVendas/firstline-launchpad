import { MessageCircle, Instagram, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    Icon: MessageCircle,
    title: 'Gestão de atendimento no WhatsApp e Instagram',
    description: 'Centralize todas as conversas dos seus canais em um único painel inteligente.',
  },
  {
    Icon: Phone,
    title: 'Integração com VOIP e Google Agenda',
    description: 'Faça e receba ligações e gerencie agendamentos sem sair da plataforma.',
  },
  {
    Icon: Mail,
    title: 'Gestão de atendimento SMS e ligações',
    description: 'Acompanhe cada interação via SMS e telefone com histórico completo.',
  },
  {
    Icon: Instagram,
    title: 'Agendamentos de mensagens e reuniões',
    description: 'Programe envios automáticos e agende reuniões com facilidade.',
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-4">
            Gerencie seu time de vendas e pós vendas com a{' '}
            <span className="text-gradient">FirstLine CRM</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todas as ferramentas que você precisa em uma única solução integrada.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
