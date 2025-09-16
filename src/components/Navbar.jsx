import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <>
      <ThemeToggle /> {/* Toggle sempre visível */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary cursor-pointer">
            <a href="/">FastChat</a>
          </div>

          <div className="hidden md:flex space-x-8 text-foreground font-medium">
            <a href="#beneficios" className="hover:text-primary transition">
              Benefícios
            </a>
             <a href="#sobre" className="hover:text-primary transition">
              Sobre
            </a>
            <a href="#como-funciona" className="hover:text-primary transition">
              Como Funciona
            </a>
            <a href="#planos" className="hover:text-primary transition">
              Planos
            </a>
            <a href="#contato" className="hover:text-primary transition">
              Contato
            </a>
            <a href="">
              <ThemeToggle/>
            </a>
          </div>

          <a
            href="#contato"
            className="hidden md:inline-block btn-primary"
          >
            Fale Conosco
          </a>
        </div>
      </nav>
    </>
  );
}
