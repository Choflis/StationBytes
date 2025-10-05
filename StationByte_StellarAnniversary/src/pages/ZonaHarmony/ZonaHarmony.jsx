import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ZonaHarmony.css'
import columbusModule from '../../assets/Columbus_module.png'
import harmonyFrontal from '../../assets/Harmony_vistaFrontal.png'
import japanModule from '../../assets/Japan_module.png'

function ZonaHarmony() {
  const [mouseX, setMouseX] = useState(0.5)
  const navigate = useNavigate()

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    setMouseX(x)
  }

  // Calcular opacidades basadas en la posición del ratón
  const getOpacity = (position) => {
    if (position === 'left') {
      // Máxima opacidad cuando mouseX está entre 0 y 0.3
      if (mouseX <= 0.3) return 1
      if (mouseX > 0.3 && mouseX <= 0.5) return 1 - ((mouseX - 0.3) / 0.2)
      return 0
    }
    if (position === 'center') {
      // Máxima opacidad cuando mouseX está entre 0.3 y 0.7
      if (mouseX >= 0.3 && mouseX <= 0.7) return 1
      if (mouseX < 0.3) return 1 - ((0.3 - mouseX) / 0.3)
      if (mouseX > 0.7) return 1 - ((mouseX - 0.7) / 0.3)
      return 0
    }
    if (position === 'right') {
      // Máxima opacidad cuando mouseX está entre 0.7 y 1
      if (mouseX >= 0.7) return 1
      if (mouseX >= 0.5 && mouseX < 0.7) return 1 - ((0.7 - mouseX) / 0.2)
      return 0
    }
    return 0
  }

  return (
    <div className="zonaHarmony" onMouseMove={handleMouseMove}>
      <div className="contenedor-3d">
        {/* Vista izquierda - Columbus Module */}
        <div 
          className="vista vista-izquierda" 
          style={{ opacity: getOpacity('left') }}
        >
          <img src={columbusModule} alt="Columbus Module (Europe)" />
          <div className="etiqueta">Columbus Module 🇪🇺</div>
        </div>

        {/* Vista centro - Harmony Frontal */}
        <div 
          className="vista vista-centro" 
          style={{ opacity: getOpacity('center') }}
        >
          <img src={harmonyFrontal} alt="Harmony front view" />
          <div className="etiqueta">Harmony - Front View</div>
        </div>

        {/* Vista derecha - Japan Module */}
        <div 
          className="vista vista-derecha" 
          style={{ opacity: getOpacity('right') }}
        >
          <img src={japanModule} alt="Kibo Japanese Module" />
          <div className="etiqueta">Kibo Module 🇯🇵</div>
        </div>
      </div>

      <div className="indicador-posicion">
        <div className="barra-indicador">
          <div 
            className="marcador" 
            style={{ left: `${mouseX * 100}%` }}
          />
        </div>
        <p className="instruccion">Move your mouse to explore the Harmony module</p>
      </div>

      <div className="info-harmony">
        <h1>Harmony Module - Central Hub</h1>
        <p>
          Explore the different areas of the station. Move your mouse to change the view.
        </p>
      </div>

      {/* Botón de navegación a Laboratorios */}
      <button className="boton-laboratorios" onClick={() => navigate('/laboratorios')}>
        🔬 Laboratories Module →
      </button>

      {/* Botón de retorno a Llegada */}
      <button className="boton-retorno" onClick={() => navigate('/llegada')}>
        ← Back to Docking Area
      </button>
    </div>
  )
}

export default ZonaHarmony
