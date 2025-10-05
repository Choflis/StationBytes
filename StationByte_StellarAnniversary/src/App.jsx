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
        {/* Pantalla de inicio del juego */}
        <Route path="/" element={<PantallaInicio />} />
        
        {/* Secuencia de llegada a la estación (3 escenas animadas) */}
        <Route path="/llegada" element={<ZonaDeLlegada />} />
        
        {/* Zona principal - Harmony (hub central con efecto 3D) */}
        <Route path="/harmony" element={<ZonaHarmony />} />
        
        {/* Zonas específicas de la estación espacial */}
        <Route path="/cupula" element={<ZonaCupula />} />
        <Route path="/entrenamiento" element={<ZonaDeEntrenamiento />} />
        <Route path="/laboratorios" element={<ZonaDeLaboratorios />} />
        
        {/* Ruta 404 - Redirige a inicio si la ruta no existe */}
        <Route path="*" element={<PantallaInicio />} />
      </Routes>
    </div>
  );
}

export default App;