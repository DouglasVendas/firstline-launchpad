import { Bot, UserCheck, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const agents = [
    {
        role: "Agente SDR",
        name: "Hunter",
        action: "Prospecta & Qualifica",
        description: "Analisa leads frios, envia a peimeira mensagem e qualifica o interesse.",
        status: "Ativo 24h",
        color: "bg-blue-500"
    },
    {
        role: "Agente Follow-up",
        name: "Farmer",
        action: "Recupera & Nutre",
        description: "Persegue leads que pararam de responder até obter um 'sim' ou 'não'.",
        status: "Implacável",
        color: "bg-orange-500"
    },
    {
        role: "Agente Agendador",
        name: "Closer Assistant",
        action: "Agenda Reunião",
        description: "Coordena horários com o Google Agenda e confirma a presença.",
        status: "Organizado",
        color: "bg-green-500"
    }
];

const AgentsSection = () => {
    return (
        <section id="agents" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <Bot className="w-4 h-4 text-accent" />
                        <span className="text-xs font-bold text-accent uppercase tracking-wider">Força de Trabalho Digital</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
                        Sua Nova Equipe de Vendas <br />
                        <span className="text-muted-foreground">Não Está na Folha de Pagamento.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Crie agentes de IA especializados que trabalham enquanto você dorme, comem ou treina seus humanos.
                        Eles não pedem aumento, não ficam doentes e nunca esquecem de enviar uma mensagem.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={agent.role}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
                        >
                            <div className={`w-12 h-12 rounded-xl ${agent.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <Bot className={`w-6 h-6 ${agent.color.replace('bg-', 'text-')}`} />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-1">{agent.role}</h3>
                            <p className="text-sm font-mono text-muted-foreground mb-4">Codinome: "{agent.name}"</p>

                            <div className="h-px w-full bg-border mb-4" />

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {agent.description}
                            </p>

                            <div className="flex items-center justify-between text-xs font-medium">
                                <span className="flex items-center gap-1 text-primary">
                                    <Clock className="w-3 h-3" /> {agent.status}
                                </span>
                                <span className="flex items-center gap-1 text-foreground">
                                    <UserCheck className="w-3 h-3" /> Autônomo
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table / ROI */}
                <div className="mt-20 bg-secondary/30 rounded-3xl p-8 lg:p-12 border border-border/50">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-6">Por que contratar Agentes FirstLine?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-3 h-3 text-green-500" />
                                    </div>
                                    <div>
                                        <strong className="text-foreground block">Custo Marginal Zero</strong>
                                        <span className="text-muted-foreground text-sm">Escale de 100 para 10.000 leads sem aumentar custos fixos.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-3 h-3 text-green-500" />
                                    </div>
                                    <div>
                                        <strong className="text-foreground block">Padronização Perfeita</strong>
                                        <span className="text-muted-foreground text-sm">O Agente fala exatamente como você treinou. Sem improvisos ruins.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-3 h-3 text-green-500" />
                                    </div>
                                    <div>
                                        <strong className="text-foreground block">Fim do Burnout</strong>
                                        <span className="text-muted-foreground text-sm">Humanos odeiam rejeição repetitiva. Robôs não sentem nada.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                            <div className="relative bg-card border border-border rounded-xl p-8 text-center space-y-6">
                                <div>
                                    <p className="text-muted-foreground text-sm uppercase tracking-wide">Custo Médio de 1 SDR Humano</p>
                                    <p className="text-4xl font-bold text-red-500 mt-2">R$ 4.500<span className="text-lg text-muted-foreground">/mês</span></p>
                                </div>
                                <div className="h-px bg-border w-1/2 mx-auto" />
                                <div>
                                    <p className="text-muted-foreground text-sm uppercase tracking-wide">Custo de 1 Agente FirstLine</p>
                                    <p className="text-4xl font-bold text-green-500 mt-2">R$ 0,00<span className="text-lg text-muted-foreground">/hora extra</span></p>
                                    <p className="text-xs text-muted-foreground mt-1">Incluso na assinatura</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AgentsSection;
