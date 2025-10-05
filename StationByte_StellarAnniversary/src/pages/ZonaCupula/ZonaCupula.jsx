import { useState } from 'react'
import './ZonaCupula.css'
import VentanaEmergente from '../../components/VentanaEmergente/VentanaEmergente'
import objetosData from '../../data/objetos.json'

function ZonaCupula() {
  const [mostrarVentana, setMostrarVentana] = useState(false)
  const [ventanaSeleccionada, setVentanaSeleccionada] = useState(null)

  const abrirVentana = (id) => {
    const datos = objetosData.find(obj => obj.id === id)
    setVentanaSeleccionada(datos)
    setMostrarVentana(true)
  }

  return (
    <div className="zonaCupula">
      {objetosData.map(obj => (
        <button
          key={obj.id}
          className="botonAbrir"
          onClick={() => abrirVentana(obj.id)}
        >
          Abrir {obj.titulo}
        </button>
      ))}

      {mostrarVentana && ventanaSeleccionada && (
        <VentanaEmergente
          onCerrar={() => setMostrarVentana(false)}
          titulo={ventanaSeleccionada.titulo}
          descripcion={ventanaSeleccionada.descripcion}
          imagen={ventanaSeleccionada.imagen}
        />
      )}
    </div>
  )
}

export default ZonaCupula
