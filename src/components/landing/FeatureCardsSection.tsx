import { MessageCircle, Instagram, ShieldCheck, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp Oficial & Híbrido",
    desc: "Use a API Oficial para escala ou conecte via QR Code (estilo Web) para manter seu número atual."
  },
  {
    icon: Instagram,
    title: "Instagram Direct",
    desc: "Responda DMs, stories e comentários diretamente do CRM. Nunca mais perca uma venda por direct não lido."
  },
  {
    icon: ShieldCheck,
    title: "Blindagem de Dados",
    desc: "O lead fala com a EMPRESA, não com o CPF do vendedor. Histórico centralizado e seguro."
  },
  {
    icon: Share2,
    title: "Omnichannel Real",
    desc: "O cliente começa no Insta, vai pro Zap e termina no telefone. O histórico segue ele."
  }
];

const FeatureCardsSection = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
              Seu Cliente está em Todo Lugar. <br />
              <span className="text-secondary-foreground">Sua Equipe deve estar em Um Só.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fim da "brincadeira de alt-tab". Uma única tela para gerenciar WhatsApp, Instagram, Ligações e E-mail.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            {/* Abstract Graphic Element - Connection */}
            <div className="relative w-full max-w-sm h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-50" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureCardsSection;
