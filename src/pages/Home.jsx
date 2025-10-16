import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import wellpet from "../assets/wellpet.png";
import x from "../assets/X.png";

import { H1, P } from "../components/Texto";
import Rodape from "../components/Rodape";

export function Home() {
  const [nomePet, setNomePet] = useState("");

  return (
    <div className="bg-laranjaclaro min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="bg-laranjaescuro border-b border-black w-full h-[122px] flex justify-between items-center px-8">
        <img src={logo} alt="Logo da WellPet" className="h-[80px]" />
        <div className="flex items-center gap-4 bg-laranjaclaro rounded-lg px-6 py-2 shadow">
          <p className="font-[Lexend-Deca] text-[20px]">
            Olá, {nomePet ? nomePet : "(nome do pet)"}
          </p>
          <img src={x} alt="Fechar" className="w-[20px] cursor-pointer" />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex flex-col md:flex-row justify-between items-center w-[90%] max-w-[1200px] mt-10">
        {/* Texto e formulário */}
        <div className="flex flex-col gap-8">
          <div>
            <H1>Dispenser de</H1>
            <H1 className="mt-[-10px]">Pets inteligente</H1>
          </div>

          <div>
            <P>Adicione o nome do seu pet:</P>
            <input
              type="text"
              value={nomePet}
              onChange={(e) => setNomePet(e.target.value)}
              placeholder="Nome:"
              className="bg-laranjaescuro placeholder-white text-white text-[28px] font-[Lexend-Deca] mt-2 rounded-xl w-[380px] h-[60px] px-4 outline-none"
            />
          </div>

          {/* Botões */}
          <div className="flex gap-6 mt-4">
            <Link to="/porte-cachorro">
              <button className="bg-laranjaescuro hover:brightness-110 transition-all text-white font-[Lexend-Deca] text-[28px] rounded-xl w-[180px] h-[70px]">
                Cachorro
              </button>
            </Link>
            <Link to="/porte-gato">
              <button className="bg-laranjaescuro hover:brightness-110 transition-all text-white font-[Lexend-Deca] text-[28px] rounded-xl w-[180px] h-[70px]">
                Gato
              </button>
            </Link>
          </div>
        </div>

        {/* Imagem lateral */}
        <div className="mt-10 md:mt-0">
          <img
            src={wellpet}
            alt="Imagem da WellPet"
            className="w-[400px] h-auto"
          />
        </div>
      </main>

      <Rodape />
    </div>
  );
}
