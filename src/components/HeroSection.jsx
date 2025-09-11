import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full pt-28 pb-20"
    >
      <div className="flex justify-between max-w-6xl mx-auto px-6 items-center">
        {/* Texto principal */}
       <div>
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Atendimento automático. <br />
            <span className="text-indigo-600">
              Vendas sem esforço.
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            O <span className="font-semibold text-indigo-600">FastChat</span>{" "}
            responde seus clientes em segundos, 24h por dia, aumentando suas
            vendas e economizando tempo no WhatsApp e redes sociais.
          </p>

          <div className="flex space-x-4">
            <a
              href="#planos"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-indigo-700 transition"
            >
              Começar Agora
            </a>
            <a
              href="#como-funciona"
              className="px-6 py-3 rounded-xl font-medium border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
            >
              Ver como funciona
            </a>
          </div>
        </motion.div>
       </div>

  
       <div>
         <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-10 w-72 h-72 flex items-center justify-center">
            {/* aqui você pode importar seu fastchat-icon.svg */}
            <img
              src="/fastchat-icon.svg"
              alt="FastChat Icon"
              className="w-40 h-40"
            />
          </div>
        </motion.div>
       </div>
      </div>
    </section>
  );
}
