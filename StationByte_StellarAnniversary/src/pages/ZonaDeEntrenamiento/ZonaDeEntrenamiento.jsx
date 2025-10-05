import { useState } from "react";
import "./ZonaDeEntrenamiento.css";
import fondo from "./module-room.png";
import VentanaMinijuegos from "../../components/VentanaMinijuegos/VentanaMinijuegos";
import MiniJuego3D from "../../components/Minijuego3D/MiniJuego3D";

function ZonaDeEntrenamiento() {
  const [mensaje, setMensaje] = useState("");
  const [minijuegoAbierto, setMinijuegoAbierto] = useState(false);

 const zonas = [
    {
      id: 1,
      nombre: "Zero-Gravity Treadmill ",
      descripcion: "Astronauts run here to maintain their physical fitness.",
      style: { top: "60%", left: "45%", width: "15%", height: "25%" },
    },
    {
      id: 2,
      nombre: "Space Bike ",
      descripcion: "Simulates pedaling in microgravity to strengthen muscles.",
      style: { top: "55%", left: "70%", width: "15%", height: "25%" },
    },
    {
      id: 3,
      nombre: "ARED Machine",
      descripcion: "Allows resistance exercises in space.",
      style: { top: "55%", left: "15%", width: "15%", height: "30%" },
    },
  ];


  return (
    <div className="zona-entrenamiento">
      {/* Fondo de la zona */}
      <img src={fondo} alt="Zona de Entrenamiento" className="fondo" />

      {/* Zonas clickables */}
      {zonas.map((z) => (
        <div
          key={z.id}
          className="zona-clickable"
          style={z.style}
          onClick={() => setMensaje(`${z.nombre}: ${z.descripcion}`)}
          onMouseLeave={() => setMensaje("")}
        ></div>
      ))}

      {/* Mensaje flotante al pasar el mouse */}
      {mensaje && (
        <div className="mensaje-flotante">
          <p>{mensaje}</p>
        </div>
      )}

      {/* Botón para abrir la ventana del mini juego */}
      <button
        className="boton-juego"
        onClick={() => setMinijuegoAbierto(true)}
      >
        Help the Astronaut
      </button>

      {/* Ventana emergente con mini juego */}
      {minijuegoAbierto && (
        <VentanaMinijuegos onCerrar={() => setMinijuegoAbierto(false)}>
          <MiniJuego3D />
        </VentanaMinijuegos>
      )}
    </div>
  );
}

export default ZonaDeEntrenamiento;