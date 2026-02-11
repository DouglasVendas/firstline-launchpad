import { BarChart3, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import dashboardPreview from '@/assets/dashboard-preview.png';

const DashboardSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-4">
              Acompanhe os principais indicadores e relatórios
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Dashboards interativos com métricas em tempo real para tomar decisões baseadas em dados.
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold hover:brightness-110 transition-all"
            >
              Quero conhecer
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border">
            <img src={dashboardPreview} alt="Dashboard de relatórios" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
