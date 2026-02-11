import { ArrowRight, Bot, MessageCircle, Phone, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import dashboardPreview from '@/assets/dashboard-preview.png';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-background overflow-hidden flex items-center">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 pt-20 pb-16 lg:pt-0">
        <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-4">
          <div className="container mx-auto flex items-center justify-between">
            <span className="text-2xl font-display font-bold text-foreground">
              FirstLine<span className="text-primary">.ai</span>
            </span>
            <a
              href="#lead-form"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground rounded-full font-medium text-sm transition-all border border-border"
            >
              Login
            </a>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Nova Era da Produtividade
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Aumente sua Receita <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Sem Aumentar sua Equipe.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              O primeiro CRM que une <strong>Agentes de IA</strong>, <strong>VoIP</strong> e <strong>WhatsApp</strong> para eliminar o trabalho braçal e deixar seus humanos focados apenas em fechar negócios.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#lead-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,242,234,0.3)] hover:shadow-[0_0_30px_rgba(0,242,234,0.5)]"
              >
                Ver a Máquina em Ação
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
                * Implementação em 24h
              </p>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground">
               <div className="flex items-center gap-2">
                 <Bot className="w-5 h-5 text-primary" />
                 <span className="text-sm">Agentes 24/7</span>
               </div>
               <div className="flex items-center gap-2">
                 <Phone className="w-5 h-5 text-primary" />
                 <span className="text-sm">VoIP Nativo</span>
               </div>
               <div className="flex items-center gap-2">
                 <BarChart3 className="w-5 h-5 text-accent" />
                 <span className="text-sm">Dashboards BI</span>
               </div>
            </div>
          </motion.div>

          {/* Visual Hero - The "Machine" Workflow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            {/* Abstract representation of the flow instead of just a screenshot */}
            <div className="relative rounded-2xl bg-card border border-border shadow-2xl overflow-hidden p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
                <img
                  src={dashboardPreview}
                  alt="FirstLine CRM Dashboard"
                  className="w-full h-auto rounded-xl shadow-inner opacity-90 hover:opacity-100 transition-opacity"
                  loading="eager"
                />
                
                {/* Floating "Live" Cards Effect */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-xl flex items-center gap-3 hidden md:flex"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Agente IA</p>
                    <p className="text-sm font-semibold text-foreground">Reunião Agendada ✅</p>
                  </div>
                </motion.div>

                 <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -top-6 -right-6 bg-card border border-border p-4 rounded-xl shadow-xl flex items-center gap-3 hidden md:flex"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Produtividade</p>
                    <p className="text-sm font-semibold text-foreground">+300% Leads Tratados</p>
                  </div>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
