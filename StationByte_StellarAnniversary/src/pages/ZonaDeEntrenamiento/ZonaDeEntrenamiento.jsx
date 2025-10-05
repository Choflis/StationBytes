import { useState } from "react";
import "./ZonaDeEntrenamiento.css";
import fondo from "./module-room.png";
import VentanaMinijuegos from "../../components/VentanaMinijuegos/VentanaMinijuegos";

// Componente de prueba para el juego
function MiniJuego3D() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#222",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "2rem"
    }}>
      Mini Juego 3D aquí
    </div>
  );
}

function ZonaDeEntrenamiento() {
  const [mensaje, setMensaje] = useState("");
  const [minijuegoAbierto, setMinijuegoAbierto] = useState(false);

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
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "12px 20px",
          borderRadius: "12px",
          backgroundColor: "#1E8FFF",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          border: "none",
          zIndex: 10,
        }}
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
