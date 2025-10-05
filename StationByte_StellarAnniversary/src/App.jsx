import { Routes, Route } from "react-router-dom";
import PantallaInicio from "./pages/PantallaInicio/PantallaInicio.jsx";
import ZonaDeLlegada from "./pages/ZonaDeLlegada/ZonaDeLlegada.jsx";
import ZonaHarmony from "./pages/ZonaHarmony/ZonaHarmony.jsx";
import ZonaCupula from "./pages/ZonaCupula/ZonaCupula.jsx";
import ZonaDeEntrenamiento from "./pages/ZonaDeEntrenamiento/ZonaDeEntrenamiento.jsx";
import ZonaDeLaboratorios from "./pages/ZonaDeLaboratorios/ZonaDeLaboratorios.jsx";
import "./App.css";

function App() {
  return (
    <div className="PantallaPrincipal">
      <Routes>
        <Route path="/" element={<PantallaInicio />} />
        <Route path="/llegada" element={<ZonaDeLlegada />} />
        <Route path="/harmony" element={<ZonaHarmony />} />
        <Route path="/cupula" element={<ZonaCupula />} />
        <Route path="/entrenamiento" element={<ZonaDeEntrenamiento />} />
        <Route path="/laboratorios" element={<ZonaDeLaboratorios />} />
      </Routes>
    </div>
  );
}

export default App;