import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { PorteCachorro } from "./pages/PorteCachorro"
import { IdadeCachorro } from "./pages/IdadeCachorro"
import { Exercicios } from "./pages/Exercicios"

export function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/porte-cachorro" element={<PorteCachorro />} />
        <Route path="/idade-cachorro" element={<IdadeCachorro />} />
        <Route path="/exercicios" element={<Exercicios />} />
      </Routes>
  );
}
