import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
          <a href="/">FastChat</a>
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#beneficios" className="hover:text-indigo-600 transition">
            Benefícios
          </a>
          <a href="#como-funciona" className="hover:text-indigo-600 transition">
            Como Funciona
          </a>
          <a href="#planos" className="hover:text-indigo-600 transition">
            Planos
          </a>
          <a href="#contato" className="hover:text-indigo-600 transition">
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-block bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium shadow hover:bg-indigo-700 transition"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
