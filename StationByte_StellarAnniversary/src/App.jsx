import { useState } from 'react'
import PantallaInicio from './pages/PantallaInicio/PantallaInicio.jsx'
import ZonaDeLlegada from './pages/ZonaDeLlegada/ZonaDeLlegada.jsx'
import ZonaHarmony from './pages/ZonaHarmony/ZonaHarmony.jsx'
import './App.css'

function App() {
  const [pantallaActual, setPantallaActual] = useState('inicio')

  const navegarA = (pantalla) => {
    setPantallaActual(pantalla)
  }

  return (
    <div className="PantallaPrincipal">
      {pantallaActual === 'inicio' && <PantallaInicio onIniciar={() => navegarA('llegada')} />}
      {pantallaActual === 'llegada' && <ZonaDeLlegada onContinuar={() => navegarA('harmony')} />}
      {pantallaActual === 'harmony' && <ZonaHarmony />}
    </div>
  )
}

export default App