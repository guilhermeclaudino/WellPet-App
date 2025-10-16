import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { H3 } from "../components/Texto";

export default function Header() {
  return (
    <header className="bg-laranjaescuro border border-black rounded-2xl w-[1366px] h-[90px] flex justify-between items-center px-10 shadow-md 
                      sm:w-[95%] sm:flex-col sm:gap-2 sm:h-auto sm:py-4 transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo da WellPet" className="h-[60px] sm:h-[50px]" />
      </div>

      {/* Menu de navegação */}
      <nav className="flex gap-8 sm:gap-4">
        <H3>
          <Link to="/porte-cachorro" className="hover:underline text-white transition-all">Porte</Link>
        </H3>
        <H3>
            <Link to="/idade-cachorro" className="hover:underline text-white transition-all">Idade</Link>
        </H3>
        <H3>
          <Link to="/exercicios" className="hover:underline text-white transition-all">
            Exercícios
          </Link>
        </H3>
      </nav>
    </header>
  );
}
