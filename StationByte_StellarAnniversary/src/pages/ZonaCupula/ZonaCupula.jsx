import { useState } from 'react'
import './ZonaCupula.css'
import VentanaEmergente from '../../components/VentanaEmergente/VentanaEmergente'

// Importa tu JSON
import objetosData from '../../data/objetos.json'

// Importa las imágenes desde assets
import naveDragon from '../../assets/nave_dragon.png'
import spaceStation from '../../assets/SpaceStation.png'

// Mapea el JSON para usar las imágenes importadas
const objetosConImagenes = objetosData.map(obj => {
  let imagen
  if (obj.id === 'nave1') imagen = naveDragon
  else if (obj.id === 'nave2') imagen = spaceStation
  return { ...obj, imagen }
})

function ZonaCupula() {
  const [mostrarVentana, setMostrarVentana] = useState(false)
  const [ventanaSeleccionada, setVentanaSeleccionada] = useState(null)

  const abrirVentana = (id) => {
    const datos = objetosConImagenes.find(obj => obj.id === id)
    setVentanaSeleccionada(datos)
    setMostrarVentana(true)
  }

  return (
    <div className="zonaCupula">
      {objetosConImagenes.map(obj => (
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
