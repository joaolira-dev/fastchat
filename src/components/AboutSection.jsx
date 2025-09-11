import { motion } from "framer-motion"
import ChatBot from "../assets/images/chatbot-demo.png"

export default function AboutSection() {
  return (
    <section className="w-full py-20"
    id="como-funciona">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Lado esquerdo - imagem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex justify-center">
            <img
              src={ChatBot}
              alt="Sobre nós"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Lado direito - texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre o <span className="text-indigo-600">FastChat</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O FastChat nasceu para revolucionar a forma como empresas e
              clientes se conectam. Com nossa plataforma, você tem praticidade,
              rapidez e uma experiência de atendimento moderna.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nosso objetivo é simplificar pedidos e comunicação, garantindo
              eficiência e satisfação em cada atendimento.
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow-md hover:bg-indigo-700 transition">
              Saiba mais
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
