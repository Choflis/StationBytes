import './VentanaEmergente.css'
import ejemploImg from '../../assets/nave_dragon.png'

function VentanaEmergente({ onCerrar }) {
  return (
    <div className="ventanaEmergente">
      <div className="ventanaContenido">
        <div className="bordeInterno"></div>

        <div className="seccionIzquierda">
          <img src={ejemploImg} alt="Imagen de ejemplo" />
        </div>

        <div className="seccionDerecha">
          <h2>Texto de ejemplo</h2>
          <p>Esta es la sección de información dentro de la ventana emergente.</p>
        </div>

        <button className="cerrarVentana" onClick={onCerrar}>X</button>
      </div>
    </div>
  )
}

export default VentanaEmergente
