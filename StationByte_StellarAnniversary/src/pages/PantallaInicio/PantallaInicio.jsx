import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PantallaInicio.css'
import nave from '../../assets/SpaceStation.png'

function PantallaInicio() {
  const [mostrarBoton, setMostrarBoton] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setMostrarBoton(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleIniciar = () => {
    navigate('/llegada')
  }

  return (
    <div className="pantallaInicio">
      <h1 className="tituloJuego">STELLAR ANNIVERSARY</h1>
      <img
        src={nave}
        alt="Estación Internacional"
        className="EstacionInternacional"
      />
      {mostrarBoton && (
        <button className="botonJugar" onClick={handleIniciar}>Start</button>
      )}
    </div>
  )
}

export default PantallaInicio