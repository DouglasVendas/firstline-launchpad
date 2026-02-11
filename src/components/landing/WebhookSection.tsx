import { Webhook, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WebhookSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 gradient-primary">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <Webhook className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-primary-foreground mb-4">
            Integre-se às principais ferramentas do mercado
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Conecte sua plataforma às ferramentas que você já usa através de webhooks e APIs poderosas.
          </p>

          {/* Connection illustration */}
          <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">
            {['Hotmart', 'Kiwify', 'Eduzz', 'Monetizze', 'ActiveCampaign'].map((name) => (
              <div key={name} className="px-5 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl text-primary-foreground/90 text-sm font-medium backdrop-blur-sm">
                {name}
              </div>
            ))}
          </div>

          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:brightness-110 transition-all"
          >
            Começar agora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebhookSection;
