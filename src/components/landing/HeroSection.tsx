import { MessageCircle, Instagram, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import dashboardPreview from '@/assets/dashboard-preview.png';

const floatingIcons = [
  { Icon: MessageCircle, label: 'WhatsApp', className: 'top-[20%] left-[5%] animate-float' },
  { Icon: Instagram, label: 'Instagram', className: 'top-[15%] right-[8%] animate-float-delay' },
  { Icon: Mail, label: 'SMS', className: 'bottom-[30%] left-[3%] animate-float-delay-2' },
  { Icon: Phone, label: 'Phone', className: 'bottom-[25%] right-[5%] animate-float' },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen gradient-primary overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, label, className }) => (
        <div
          key={label}
          className={`absolute hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 ${className}`}
        >
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      ))}

      <div className="container mx-auto px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 z-50 py-5 px-4 lg:px-8">
          <div className="container mx-auto flex items-center justify-between">
            <span className="text-2xl font-display font-bold text-accent">
              FirstLine CRM
            </span>
            <a
              href="#lead-form"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground rounded-full font-semibold text-sm hover:brightness-110 transition-all"
            >
              Começar agora
            </a>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold text-primary-foreground leading-tight mb-6">
              Automatize e centralize seus atendimentos em uma única plataforma para{' '}
              <span className="text-accent">vender mais</span>
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Elimine gargalos, estruture seu fluxo de trabalho e transforme cada interação em mais vendas
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:brightness-110 transition-all animate-pulse-green"
            >
              Quero conhecer
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
              <img
                src={dashboardPreview}
                alt="FirstLine CRM Dashboard Preview"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
