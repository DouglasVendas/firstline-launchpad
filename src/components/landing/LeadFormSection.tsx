import { useState, FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toast } from 'sonner';

const LeadFormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }
    toast.success('Obrigado! Entraremos em contato em breve.');
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <section id="lead-form" className="py-20 lg:py-28 gradient-primary">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`max-w-lg mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-primary-foreground mb-4">
            Não perca nenhuma novidade!
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Cadastre-se e receba conteúdos exclusivos sobre vendas e atendimento.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm"
            />
            <input
              type="tel"
              placeholder="Seu telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold text-lg hover:brightness-110 transition-all"
            >
              Quero receber novidades
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
