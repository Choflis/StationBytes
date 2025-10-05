import './VentanaMinijuegos.css';

function VentanaMinijuegos({ onCerrar, children }) {
  return (
    <div className="ventanaMinijuego">
      <div className="contenidoMinijuego">
        {/* Cuadrícula de fondo */}
        <div className="cuadricula"></div>

        {/* Contenido del minijuego */}
        {children}

        {/* Botón de cierre */}
        <button className="cerrarMinijuego" onClick={onCerrar}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default VentanaMinijuegos;