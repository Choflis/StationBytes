import { useState } from "react";
import "./ZonaDeEntrenamiento.css";
import fondo from "./module-room.png";

function ZonaDeEntrenamiento() {
  const [mensaje, setMensaje] = useState("");

  const zonas = [
    {
      id: 1,
      nombre: "Cinta de gravedad cero 🏃‍♂️",
      descripcion: "Los astronautas corren aquí para mantener su condición física.",
      style: { top: "60%", left: "45%", width: "15%", height: "25%" },
    },
    {
      id: 2,
      nombre: "Bicicleta espacial 🚴‍♀️",
      descripcion: "Simula el pedaleo en microgravedad para fortalecer músculos.",
      style: { top: "55%", left: "70%", width: "15%", height: "25%" },
    },
    {
      id: 3,
      nombre: "Máquina ARED 💪",
      descripcion: "Permite ejercicios de resistencia en el espacio.",
      style: { top: "55%", left: "15%", width: "15%", height: "30%" },
    },
  ];

  return (
    <div className="zona-entrenamiento">
      <img src={fondo} alt="Zona de Entrenamiento" className="fondo" />

      {zonas.map((z) => (
        <div
          key={z.id}
          className="zona-clickable"
          style={z.style}
          onClick={() => setMensaje(`${z.nombre}: ${z.descripcion}`)}
          onMouseLeave={() => setMensaje("")}
        ></div>
      ))}

      {mensaje && (
        <div className="mensaje-flotante">
          <p>{mensaje}</p>
        </div>
      )}
    </div>
  );
}

export default ZonaDeEntrenamiento;
