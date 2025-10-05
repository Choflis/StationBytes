import { useState } from 'react'
import './ZonaCupula.css'
import VentanaEmergente from '../../components/VentanaEmergente/VentanaEmergente'

function ZonaCupula() {
  const [mostrarVentana, setMostrarVentana] = useState(false)

  return (
    <div className="zonaCupula">
      <button className="botonAbrir" onClick={() => setMostrarVentana(true)}>
        Abrir ventana
      </button>

      {mostrarVentana && (
        <VentanaEmergente onCerrar={() => setMostrarVentana(false)} />
      )}
    </div>
  )
}

export default ZonaCupula