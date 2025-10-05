import './VentanaEmergente.css'

function VentanaEmergente({ onCerrar, titulo, descripcion, imagen }) {
  return (
    <div className="ventanaEmergente">
      <div className="ventanaContenido">
        <div className="bordeInterno"></div>

        <div className="seccionIzquierda">
          <img src={imagen} alt={titulo} />
        </div>

        <div className="seccionDerecha">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </div>

        <button className="cerrarVentana" onClick={onCerrar}>X</button>
      </div>
    </div>
  )
}

export default VentanaEmergente
