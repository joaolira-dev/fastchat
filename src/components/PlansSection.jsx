import { motion } from "framer-motion";

export default function PlansSection() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 49/mês",
      features: [
        "Atendimento automático 24/7",
        "Até 100 conversas por mês",
        "Integração com WhatsApp",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "R$ 99/mês",
      features: [
        "Conversas ilimitadas",
        "Atendimento em múltiplos canais",
        "Relatórios de desempenho",
        "Suporte prioritário",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "R$ 199/mês",
      features: [
        "Tudo do Pro",
        "Chatbots personalizados",
        "Treinamento avançado de IA",
        "Gestor de conta dedicado",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      id="planos"
      className="w-full py-20 bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Escolha o <span className="text-primary">plano ideal</span> para você
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 2 }}
              className={`rounded-2xl p-8 shadow-lg border border-border bg-card transition-colors duration-300 ${
                plan.highlight
                  ? "ring-3 ring-blue-600 scale-105"
                  : "hover:scale-105 transition-colors"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-primary mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-6 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn-primary w-full">Assinar agora</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
