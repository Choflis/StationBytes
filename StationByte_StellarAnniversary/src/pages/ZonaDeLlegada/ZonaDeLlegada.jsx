import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ZonaDeLlegada.css'
import naveDragon from '../../assets/nave_dragon.png'
import spaceStation from '../../assets/stationInSpaceAcoplamiento.png'
import naveStation from '../../assets/nave_station.png'
import stationInitial from '../../assets/Station_initial.png'
import idaImage from '../../assets/IDA.png'
import VentanaEmergente from '../../components/VentanaEmergente/VentanaEmergente'
import VentanaMinijuegos from '../../components/VentanaMinijuegos/VentanaMinijuegos'
import PressureGame from './PressureGame'

function ZonaDeLlegada() {
  const [escena, setEscena] = useState(1)
  const [mostrarVentana, setMostrarVentana] = useState(false)
  const [mostrarMinijuego, setMostrarMinijuego] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (escena === 1) {
      // Después de 5 segundos, cambiar a escena 2
      const timer = setTimeout(() => setEscena(2), 5000)
      return () => clearTimeout(timer)
    } else if (escena === 2) {
      // Después de 5 segundos en escena 2, cambiar a escena 3
      const timer = setTimeout(() => setEscena(3), 5000)
      return () => clearTimeout(timer)
    }
    // Escena 3 ya no tiene transición automática
  }, [escena])

  const handleIrAHarmony = () => {
    navigate('/harmony')
  }

  const handleAbrirInfo = () => {
    setMostrarVentana(true)
  }

  const handleCerrarVentana = () => {
    setMostrarVentana(false)
  }

  const handleAbrirMinijuego = () => {
    setMostrarMinijuego(true)
  }

  const handleCerrarMinijuego = () => {
    setMostrarMinijuego(false)
  }

  const handleMinijuegoCompletado = () => {
    setMostrarMinijuego(false)
    // Aquí podrías agregar lógica adicional como desbloquear algo
  }

  // TODO: Replace with official NASA information
  // Source: [Add NASA URL here]
  const infoModuloHarmony = {
    titulo: "International Docking Adapter (IDA) at Harmony",
    descripcion: 'This image shows the interior of the Harmony module with an International Docking Adapter (IDA) visible through a closed hatch. The IDA is an adapter that allows commercial crew spacecraft, such as SpaceX Crew Dragon or Boeing Starliner, to dock with the ISS. You can see the cylindrical structure of the module, the sealed hatch, and the IDA docking mechanism. Source: https://www.nasa.gov/international-space-station/harmony-module/',
    imagen: idaImage
  }

  return (
    <div className="zonaDeLlegada">
      {escena === 1 && (
        <div className="escena escena1">
          <img src={spaceStation} alt="Estación Espacial" className="estacion" />
          <img src={naveDragon} alt="Nave Dragon" className="nave-aproximacion" />
          <div className="texto-escena">
            <h2>Approaching the International Space Station</h2>
            <p>Dragon spacecraft en route to Harmony module...</p>
          </div>
        </div>
      )}

      {escena === 2 && (
        <div className="escena escena2">
          <img src={naveStation} alt="Nave acoplada a la estación" className="imagen-acoplamiento" />
          <div className="texto-acoplamiento">
            <h2>Docking Successful!</h2>
            <p>Welcome to the Harmony module of the International Space Station</p>
          </div>
        </div>
      )}

      {escena === 3 && (
        <div className="escena escena3">
          <img src={stationInitial} alt="Interior del módulo Harmony" className="interior-estacion" />
          
          {/* Texto inicial descriptivo */}
          <div className="texto-inicial">
            <h2>Welcome Aboard</h2>
            <p>
              You have completed docking with the Harmony Module, the heart of the 
              International Space Station. This node connects laboratories from 
              different nations, enabling scientific cooperation in microgravity.
            </p>
          </div>

          {/* Objeto interactivo en el centro - solo círculo brillante */}
          <button 
            className="objeto-interactivo objeto-centro"
            onClick={handleAbrirInfo}
            aria-label="Information about Harmony Module"
          >
          </button>

          {/* Botón para ir a Harmony */}
          <button className="boton-harmony" onClick={handleIrAHarmony}>
            Explore Harmony Module
          </button>

          {/* Botón para minijuego */}
          <button className="boton-minijuego" onClick={handleAbrirMinijuego}>
            🎮 Pressure Stabilization
          </button>

          {/* Ventana emergente */}
          {mostrarVentana && (
            <VentanaEmergente
              onCerrar={handleCerrarVentana}
              titulo={infoModuloHarmony.titulo}
              descripcion={infoModuloHarmony.descripcion}
              imagen={infoModuloHarmony.imagen}
            />
          )}

          {/* Ventana de minijuego */}
          {mostrarMinijuego && (
            <VentanaMinijuegos onCerrar={handleCerrarMinijuego}>
              <PressureGame onComplete={handleMinijuegoCompletado} />
            </VentanaMinijuegos>
          )}
        </div>
      )}
    </div>
  )
}

export default ZonaDeLlegada
