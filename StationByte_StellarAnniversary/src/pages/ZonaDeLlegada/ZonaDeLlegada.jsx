import { useState, useEffect } from 'react'
import './ZonaDeLlegada.css'
import naveDragon from '../../assets/nave_dragon.png'
import spaceStation from '../../assets/SpaceStation.png'

function ZonaDeLlegada() {
  const [escena, setEscena] = useState(1)
  const [infoVisible, setInfoVisible] = useState(null)

  useEffect(() => {
    if (escena === 1) {
      const timer = setTimeout(() => setEscena(2), 5000)
      return () => clearTimeout(timer)
    }
  }, [escena])

  const handleContinuar = () => {
    console.log('Continuar a Zona Harmony')
    // Aquí luego conectaremos la navegación a ZonaHarmony
  }

  const zonasInteractivas = {
    modulo1: {
      titulo: 'Módulo Harmony',
      descripcion: 'Módulo central de acoplamiento de la ISS. Conecta los diferentes segmentos de la estación.'
    },
    naveDragon: {
      titulo: 'Nave Dragon',
      descripcion: 'Cápsula espacial de SpaceX diseñada para transportar carga y tripulación a la estación espacial.'
    },
    panelesSolares: {
      titulo: 'Paneles Solares',
      descripcion: 'Generan la energía necesaria para alimentar todos los sistemas de la estación espacial.'
    }
  }

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
            
            {/* Zonas interactivas */}
            <div 
              className="zona-interactiva zona-harmony"
              onMouseEnter={() => setInfoVisible('modulo1')}
              onMouseLeave={() => setInfoVisible(null)}
            >
              <div className="punto-info">+</div>
            </div>
            
            <div 
              className="zona-interactiva zona-dragon"
              onMouseEnter={() => setInfoVisible('naveDragon')}
              onMouseLeave={() => setInfoVisible(null)}
            >
              <div className="punto-info">+</div>
            </div>
            
            <div 
              className="zona-interactiva zona-paneles"
              onMouseEnter={() => setInfoVisible('panelesSolares')}
              onMouseLeave={() => setInfoVisible(null)}
            >
              <div className="punto-info">+</div>
            </div>
          </div>

          {/* Panel de información */}
          {infoVisible && (
            <div className="panel-informacion">
              <h3>{zonasInteractivas[infoVisible].titulo}</h3>
              <p>{zonasInteractivas[infoVisible].descripcion}</p>
            </div>
          )}

          <div className="controles">
            <h2>¡Acoplamiento Exitoso!</h2>
            <p>Bienvenido al módulo Harmony de la Estación Espacial Internacional</p>
            <button className="boton-continuar" onClick={handleContinuar}>
              Ingresar a la Estación →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ZonaDeLlegada
