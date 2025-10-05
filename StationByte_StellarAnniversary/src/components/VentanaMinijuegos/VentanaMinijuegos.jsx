import './VentanaMinijuegos.css';

function VentanaMinijuegos({ onCerrar, children }) {
  return (
    <div className="ventanaMinijuego">
      <div className="contenidoMinijuego">
        {children}

        <button className="cerrarMinijuego" onClick={onCerrar}>X</button>
      </div>
    </div>
  );
}

export default VentanaMinijuegos;
