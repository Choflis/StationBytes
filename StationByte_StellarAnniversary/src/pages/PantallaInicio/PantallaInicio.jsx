import { useEffect, useState } from 'react'
import './PantallaInicio.css'
import nave from '../../assets/SpaceStation.png'

function PantallaInicio({ onIniciar }) {
  const [mostrarBoton, setMostrarBoton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMostrarBoton(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="pantallaInicio">
      <h1 className="tituloJuego">STELLAR ANNIVERSARY</h1>
      <img
        src={nave}
        alt="Estación Internacional"
        className="EstacionInternacional"
      />
      {mostrarBoton && (
        <button className="botonJugar" onClick={onIniciar}>Start</button>
      )}
    </div>
  )
}

export default PantallaInicio
