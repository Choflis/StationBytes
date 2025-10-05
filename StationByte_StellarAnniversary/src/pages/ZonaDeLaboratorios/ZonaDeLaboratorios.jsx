import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ZonaDeLaboratorios.css'
import VentanaEmergente from '../../components/VentanaEmergente/VentanaEmergente'

// Importa tu JSON
import objetosData from '../../data/objetos_laboratorio.json' //datos de los objetos dentro de las ventanas emergentes

// Imagenes
import naveDragon from '../../assets/nave_dragon.png'
import spaceStation from '../../assets/SpaceStation.png'
import Laptop from '../../assets/Laptopobject.png'

// Mapea el JSON para usar las imágenes importadas
const objetosConImagenes = objetosData.map(obj => {
  let imagen
  if (obj.id === 'Laptop') imagen = Laptop
  else if (obj.id === 'nave2') imagen = spaceStation
  return { ...obj, imagen }
})

function ZonaCupula() {
  const [mostrarVentana, setMostrarVentana] = useState(false)
  const [ventanaSeleccionada, setVentanaSeleccionada] = useState(null)
  const navigate = useNavigate()

  const abrirVentana = (id) => {
    const datos = objetosConImagenes.find(obj => obj.id === id)
    setVentanaSeleccionada(datos)
    setMostrarVentana(true)
  }

  return (
    <div className="zonaLaboratorios">
      {objetosConImagenes.map(obj => (
      <button key={obj.id} className={`botonAbrir ${obj.id}`} onClick={() => abrirVentana(obj.id)}>
        <img src={obj.imagen} alt={obj.titulo} className="imagenBoton" />
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

      {/* Botones de navegación */}
      <button className="boton-siguiente" onClick={() => navigate('/entrenamiento')}>
        💪 Training Module →
      </button>

      <button className="boton-retorno" onClick={() => navigate('/harmony')}>
        ← Back to Harmony
      </button>
    </div>
  )
}

export default ZonaCupula