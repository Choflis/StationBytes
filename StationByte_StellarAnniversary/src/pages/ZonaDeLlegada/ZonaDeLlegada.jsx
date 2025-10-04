import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ZonaDeLlegada.css'
import naveDragon from '../../assets/nave_dragon.png'
import spaceStation from '../../assets/SpaceStation.png'

function ZonaDeLlegada() {
  const [escena, setEscena] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    if (escena === 1) {
      // Después de 5 segundos, cambiar a escena 2
      const timer = setTimeout(() => setEscena(2), 5000)
      return () => clearTimeout(timer)
    } else if (escena === 2) {
      // Después de 3 segundos en escena 2, ir a Harmony
      const timer = setTimeout(() => navigate('/harmony'), 3000)
      return () => clearTimeout(timer)
    }
  }, [escena, navigate])

  return (
    <div className="zonaDeLlegada">
      {escena === 1 ? (
        <div className="escena escena1">
          <img src={spaceStation} alt="Estación Espacial" className="estacion" />
          <img src={naveDragon} alt="Nave Dragon" className="nave-aproximacion" />
          <div className="texto-escena">
            <h2>Aproximándose a la Estación Espacial Internacional</h2>
            <p>Nave Dragon en ruta al módulo Harmony...</p>
          </div>
        </div>
      ) : (
        <div className="escena escena2">
          <div className="contenedor-acoplamiento">
            <img src={spaceStation} alt="Estación Espacial" className="estacion-acoplada" />
            <img src={naveDragon} alt="Nave Dragon" className="nave-acoplada" />
          </div>

          <div className="texto-acoplamiento">
            <h2>¡Acoplamiento Exitoso!</h2>
            <p>Bienvenido al módulo Harmony de la Estación Espacial Internacional</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ZonaDeLlegada
