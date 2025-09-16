import { motion } from "framer-motion";
import ChatBot from "../assets/images/chatbot-demo.png";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="w-full py-20 bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Lado esquerdo - imagem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={ChatBot}
            alt="Sobre nós"
            className="rounded-2xl shadow-lg border border-border transition-colors duration-300"
          />
        </motion.div>

        {/* Lado direito - texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-foreground">
            Sobre o <span className="text-primary">FastChat</span>
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            O FastChat nasceu para revolucionar a forma como empresas e clientes se conectam. Com nossa plataforma, você tem praticidade, rapidez e uma experiência de atendimento moderna.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Nosso objetivo é simplificar pedidos e comunicação, garantindo eficiência e satisfação em cada atendimento.
          </p>
          <button className="btn-primary">Saiba mais</button>
        </motion.div>
      </div>
    </section>
  );
}
