import { Routes, Route } from "react-router-dom";
import PantallaInicio from "./pages/PantallaInicio/PantallaInicio.jsx";
import ZonaDeEntrenamiento from "./pages/ZonaDeEntrenamiento/ZonaDeEntrenamiento.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PantallaInicio />} />
      <Route path="/entrenamiento" element={<ZonaDeEntrenamiento />} />
    </Routes>
  );
}

export default App;
