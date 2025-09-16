import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactSection() {
  const whatsappNumber = "5583991224066"; // coloque aqui o seu número no formato internacional (55 + DDD + número)
  const message =
    "Oi, tenho interesse no seu serviço de chatbot, quero mais informações!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="contato"
      className="w-full py-20 bg-background text-foreground transition-colors duration-300 border-t-1 border-t-indigo-300"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Entre em <span className="text-primary">contato</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-10 max-w-2xl mx-auto text-foreground"
        >
          Tem dúvidas ou quer começar agora? Clique no botão abaixo e fale
          diretamente comigo pelo WhatsApp.
        </motion.p>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold bg-primary text-foreground shadow-lg transition-colors duration-300"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
