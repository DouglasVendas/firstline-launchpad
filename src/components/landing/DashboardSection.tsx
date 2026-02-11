import { BarChart3, PieChart, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import dashboardPreview from '@/assets/dashboard-preview.png';

const DashboardSection = () => {
  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary opacity-20 blur-xl rounded-2xl group-hover:opacity-40 transition-opacity duration-1000" />
            <img
              src={dashboardPreview}
              alt="Dashboard Analytics"
              className="relative rounded-xl border border-border shadow-2xl w-full h-auto"
            />

            {/* Floating Stats */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-4 top-10 bg-background/90 backdrop-blur border border-border p-4 rounded-lg shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-md">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Conversão</p>
                  <p className="font-bold text-foreground">+24.5%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <BarChart3 className="w-4 h-4 text-foreground" />
              <span className="text-xs font-bold text-foreground uppercase tracking-wider">Business Intelligence</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Não Dirija no Escuro. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tenha Visão de Raio-X.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Esqueça "eu acho". Com dashboards nível PowerBI nativos, você sabe exatamente o CAC, LTV e Taxa de Conversão por etapa e por vendedor.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-background border border-border p-4 rounded-xl">
                <PieChart className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-bold text-foreground">Funil em Tempo Real</h4>
                <p className="text-sm text-muted-foreground">Identifique gargalos instantaneamente.</p>
              </div>
              <div className="bg-background border border-border p-4 rounded-xl">
                <TrendingUp className="w-6 h-6 text-accent mb-2" />
                <h4 className="font-bold text-foreground">Previsibilidade</h4>
                <p className="text-sm text-muted-foreground">Saiba quanto vai entrar no caixa.</p>
              </div>
            </div>

            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group"
            >
              Explorar Analytics
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
