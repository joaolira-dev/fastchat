import { MessageSquare, Settings, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "1. Conecte seu negócio",
      desc: "Integre o FastChat facilmente ao seu site ou sistema em poucos minutos.",
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "2. Configure seu atendimento",
      desc: "Defina mensagens automáticas, fluxos de resposta e personalização.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "3. Escale sem limites",
      desc: "Atenda milhares de clientes de forma automatizada e sem complicação.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="w-full py-20 bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Como <span className="text-blue-600 dark:text-blue-400">Funciona</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Em apenas três passos você terá um atendimento automatizado e
          eficiente para o seu negócio.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 dark:bg-zinc-900 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
