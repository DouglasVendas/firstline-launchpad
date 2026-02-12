import { useState } from 'react';
import { MessageSquare, CheckSquare, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import crmImage from '@/assets/crm-interface.png';

const tabs = [
  {
    id: 'atendimento',
    label: 'Atendimento',
    Icon: MessageSquare,
    title: 'Centralize todos os atendimentos',
    description: 'Gerencie conversas de WhatsApp, Instagram, SMS e ligações em um painel único com distribuição inteligente para sua equipe.',
  },
  {
    id: 'tarefas',
    label: 'Tarefas',
    Icon: CheckSquare,
    title: 'Organize tarefas do time',
    description: 'Crie, atribua e acompanhe tarefas da sua equipe com prazos, prioridades e notificações automáticas.',
  },
  {
    id: 'historico',
    label: 'Histórico',
    Icon: Clock,
    title: 'Histórico completo do cliente',
    description: 'Acesse todo o histórico de interações, compras e atendimentos de cada cliente em uma timeline completa.',
  },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('atendimento');
  const { ref, isVisible } = useScrollAnimation();
  const active = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-4">
            Tudo que você precisa em <span className="text-gradient">um só lugar</span>
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Tab buttons */}
          <div className="flex justify-center gap-2 mb-10">
            {tabs.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === id
                  ? 'gradient-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
                  }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <active.Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{active.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{active.description}</p>
              </div>
              <div className="bg-muted p-8 flex items-center justify-center min-h-[300px]">
                <img
                  src={crmImage}
                  alt="CRM Interface"
                  className="w-full max-w-sm rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
