import { CheckCircle } from "lucide-react";

export default function ProfitSection() {
  const beneficios = [
    "Atendimento automatizado 24/7",
    "Respostas rápidas e inteligentes",
    "Fácil integração com seu sistema",
    "Redução de custos operacionais",
    "Experiência personalizada para clientes",
    "Escalabilidade para qualquer tamanho de negócio",
  ];

  return (
    <section
      id="beneficios"
      className="w-full py-20 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Benefícios do <span className="text-blue-600">FastChat</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Veja como nosso sistema pode transformar o atendimento da sua
          empresa, trazendo mais agilidade e satisfação para os clientes.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <CheckCircle className="h-6 w-6 text-blue-600 shrink-0" />
              <span className="text-gray-800 dark:text-gray-200 text-left">
                {beneficio}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
