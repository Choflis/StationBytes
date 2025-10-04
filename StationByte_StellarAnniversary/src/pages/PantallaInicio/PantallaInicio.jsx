import { useEffect, useState } from 'react'
import './PantallaInicio.css'

function PantallaInicio() {
  const [mostrarBoton, setMostrarBoton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMostrarBoton(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="pantallaInicio">
      <h1 className="tituloJuego">STELLAR ANNIVERSARY</h1>
      {mostrarBoton && (
        <button className="botonJugar">Start</button>
      )}
    </div>
  )
}

export default PantallaInicio
