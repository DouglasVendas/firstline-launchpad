import { Phone, CheckCircle2, Lock, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const ControlSection = () => {
    return (
        <section className="py-24 bg-secondary/20 border-y border-border relative">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Lock className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Auditoria & VoIP</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
                            A Caixa Preta da Sua Operação <br />
                            <span className="text-primary">Foi Aberta.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 text-justify">
                            Chega de confiar na memória do vendedor. Com o FirstLine, cada ligação é gravada, transcrita e analisada.
                            <br /><br />
                            Você saberá exatamente não apenas <strong>quantas</strong> ligações foram feitas, mas a <strong>qualidade</strong> real de cada uma.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "VoIP Nativo: ligue direto do navegador.",
                                "Gravação Automática de todas as chamadas.",
                                "Auditoria de Promessas: Saiba o que foi vendido."
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual: Audio Player Card */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 2 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-30 blur-xl rounded-2xl" />
                        <div className="relative bg-card border border-border p-8 rounded-2xl shadow-2xl">

                            {/* Mock Call Card */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border">
                                        <span className="font-bold text-foreground">JD</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">João (Vendedor)</p>
                                        <p className="text-xs text-muted-foreground">Ligando para Cliente (11) 999...</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded">GRAVANDO</span>
                                    <p className="text-xs text-muted-foreground mt-1">02:14</p>
                                </div>
                            </div>

                            {/* Waveform Visualization */}
                            <div className="flex items-center gap-2 h-12 mb-8 justify-center opacity-80">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [12, 32, 12] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
                                        className="w-1.5 bg-primary rounded-full"
                                    />
                                ))}
                            </div>

                            {/* Controls */}
                            <div className="flex items-center gap-4 bg-secondary/50 p-4 rounded-xl border border-border">
                                <button className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform">
                                    <Play className="w-4 h-4 ml-1" />
                                </button>
                                <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                                    <div className="w-1/3 h-full bg-foreground" />
                                </div>
                                <span className="text-xs text-muted-foreground font-mono">Transcrevendo com IA...</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ControlSection;
