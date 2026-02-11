import { useState, FormEvent } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const LeadFormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast.success('Solicitação recebida! Nossa IA entrará em contato.');
      setName('');
      setEmail('');
      setPhone('');
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="lead-form" className="py-24 bg-background relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 lg:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Acesso Antecipado</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                Pronto para demitir o trabalho braçal?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Junte-se a gestores que estão trocando planilhas por agentes de IA.
                <br />
                Solicite sua demonstração e veja sua nova equipe em ação.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Setup em 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Migração de Dados Gratuita</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Treinamento da IA Incluso</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 bg-background/50 p-6 rounded-2xl border border-border">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase ml-1 mb-2 block">Seu Nome</label>
                <input
                  type="text"
                  placeholder="Douglas Lopes"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase ml-1 mb-2 block">Seu Melhor E-mail</label>
                <input
                  type="email"
                  placeholder="douglas@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase ml-1 mb-2 block">WhatsApp</label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {loading ? 'Enviando...' : 'Liberar Meu Acesso'}
                {!loading && <ArrowRight className="w-5 h-5" />}
              </button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                * Sem cartão de crédito necessário para a demo.
              </p>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
