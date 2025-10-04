import { Routes, Route } from "react-router-dom";
import PantallaInicio from "./pages/PantallaInicio/PantallaInicio.jsx";
import ZonaDeLlegada from "./pages/ZonaDeLlegada/ZonaDeLlegada.jsx";
import ZonaHarmony from "./pages/ZonaHarmony/ZonaHarmony.jsx";
import "./App.css";

function App() {
  return (
    <div className="PantallaPrincipal">
      <Routes>
        <Route path="/" element={<PantallaInicio />} />
        <Route path="/llegada" element={<ZonaDeLlegada />} />
        <Route path="/harmony" element={<ZonaHarmony />} />
      </Routes>
    </div>
  );
}

export default App;
