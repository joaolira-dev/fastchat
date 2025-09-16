import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full pt-28 pb-20 bg-background text-foreground transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto px-6 items-center">
        {/* Texto principal */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-foreground"
          >
            Atendimento automático. <br />
            <span className="text-primary">Vendas sem esforço.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-lg"
          >
            O <span className="font-semibold text-primary">FastChat</span> responde seus clientes em segundos, 24h por dia, aumentando suas vendas e economizando tempo no WhatsApp e redes sociais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex space-x-4"
          >
            <a href="#planos" className="btn-primary px-6 py-3 ">
              Começar Agora
            </a>
            <a
              href="#como-funciona"
              className="px-6 py-3 rounded-xl font-medium border border-primary text-primary hover:bg-primary/10 transition"
            >
              Ver como funciona
            </a>
          </motion.div>
        </div>

        {/* Ícone / imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-8 md:mt-0"
        >
          <div className="bg-card rounded-2xl shadow-lg p-10 w-72 h-72 flex items-center justify-center transition-colors duration-300">
            <img
              src="/fastchat-icon.svg"
              alt="FastChat Icon"
              className="w-40 h-40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
