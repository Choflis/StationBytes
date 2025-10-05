import { useState, useEffect } from 'react'
import './PressureGame.css'

function PressureGame({ onComplete }) {
  const [dragonPressure, setDragonPressure] = useState(14.7) // psi (presión atmosférica normal)
  const [harmonyPressure, setHarmonyPressure] = useState(14.2) // psi
  const [timeLeft, setTimeLeft] = useState(45)
  const [gameStatus, setGameStatus] = useState('playing') // 'playing', 'won', 'lost'
  const [showHint, setShowHint] = useState(false)

  const targetPressure = 14.7 // Target pressure in psi
  const tolerance = 0.1 // Tolerance range

  useEffect(() => {
    if (gameStatus !== 'playing') return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameStatus('lost')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameStatus])

  useEffect(() => {
    // Check if pressures are balanced
    const dragonInRange = Math.abs(dragonPressure - targetPressure) <= tolerance
    const harmonyInRange = Math.abs(harmonyPressure - targetPressure) <= tolerance
    
    if (dragonInRange && harmonyInRange && gameStatus === 'playing') {
      setGameStatus('won')
      if (onComplete) {
        setTimeout(() => onComplete(), 1500)
      }
    }
  }, [dragonPressure, harmonyPressure, gameStatus, onComplete])

  const adjustDragonPressure = (change) => {
    setDragonPressure(prev => {
      const newValue = prev + change
      return Math.max(13.0, Math.min(16.0, newValue))
    })
  }

  const adjustHarmonyPressure = (change) => {
    setHarmonyPressure(prev => {
      const newValue = prev + change
      return Math.max(13.0, Math.min(16.0, newValue))
    })
  }

  const getPressureColor = (pressure) => {
    const diff = Math.abs(pressure - targetPressure)
    if (diff <= tolerance) return '#00ff00' // Green - perfect
    if (diff <= 0.3) return '#ffff00' // Yellow - close
    return '#ff6b6b' // Red - far
  }

  const getPressureStatus = (pressure) => {
    const diff = Math.abs(pressure - targetPressure)
    if (diff <= tolerance) return 'STABLE'
    if (diff <= 0.3) return 'ADJUSTING'
    return 'UNSTABLE'
  }

  const handleRetry = () => {
    setDragonPressure(14.7)
    setHarmonyPressure(14.2)
    setTimeLeft(45)
    setGameStatus('playing')
  }

  return (
    <div className="pressure-game">
      {/* Header */}
      <div className="game-header">
        <h2>🚀 PRESSURE STABILIZATION 🚀</h2>
        <div className="timer" style={{ color: timeLeft < 10 ? '#ff6b6b' : '#64C8FF' }}>
          TIME: {timeLeft}s
        </div>
      </div>

      {/* Instructions */}
      <div className="instructions">
        <p>Equalize pressure between Dragon and Harmony to <strong>{targetPressure} PSI</strong></p>
        <button 
          className="hint-button"
          onMouseEnter={() => setShowHint(true)}
          onMouseLeave={() => setShowHint(false)}
        >
          💡 HINT
        </button>
        {showHint && (
          <div className="hint-box">
            Use the valves to adjust pressure. Green = Perfect!
          </div>
        )}
      </div>

      {/* Pressure Gauges */}
      <div className="gauges-container">
        {/* Dragon Gauge */}
        <div className="gauge-section">
          <h3>DRAGON SPACECRAFT</h3>
          <div className="gauge-display">
            <div 
              className="pressure-bar"
              style={{
                height: `${((dragonPressure - 13) / 3) * 100}%`,
                background: getPressureColor(dragonPressure)
              }}
            />
            <div className="target-line" style={{ bottom: `${((targetPressure - 13) / 3) * 100}%` }}>
              <span className="target-label">TARGET</span>
            </div>
          </div>
          <div className="pressure-reading" style={{ color: getPressureColor(dragonPressure) }}>
            {dragonPressure.toFixed(2)} PSI
          </div>
          <div className="status-label" style={{ color: getPressureColor(dragonPressure) }}>
            {getPressureStatus(dragonPressure)}
          </div>
          
          {/* Controls */}
          <div className="controls">
            <button 
              className="valve-button decrease"
              onClick={() => adjustDragonPressure(-0.1)}
              disabled={gameStatus !== 'playing'}
            >
              ▼ RELEASE
            </button>
            <button 
              className="valve-button increase"
              onClick={() => adjustDragonPressure(0.1)}
              disabled={gameStatus !== 'playing'}
            >
              ▲ INCREASE
            </button>
          </div>
        </div>

        {/* Connection Symbol */}
        <div className="connection-symbol">
          <div className="connection-line"></div>
          <div className="connection-circle">
            {gameStatus === 'won' ? '✓' : '⚡'}
          </div>
        </div>

        {/* Harmony Gauge */}
        <div className="gauge-section">
          <h3>HARMONY MODULE</h3>
          <div className="gauge-display">
            <div 
              className="pressure-bar"
              style={{
                height: `${((harmonyPressure - 13) / 3) * 100}%`,
                background: getPressureColor(harmonyPressure)
              }}
            />
            <div className="target-line" style={{ bottom: `${((targetPressure - 13) / 3) * 100}%` }}>
              <span className="target-label">TARGET</span>
            </div>
          </div>
          <div className="pressure-reading" style={{ color: getPressureColor(harmonyPressure) }}>
            {harmonyPressure.toFixed(2)} PSI
          </div>
          <div className="status-label" style={{ color: getPressureColor(harmonyPressure) }}>
            {getPressureStatus(harmonyPressure)}
          </div>
          
          {/* Controls */}
          <div className="controls">
            <button 
              className="valve-button decrease"
              onClick={() => adjustHarmonyPressure(-0.1)}
              disabled={gameStatus !== 'playing'}
            >
              ▼ RELEASE
            </button>
            <button 
              className="valve-button increase"
              onClick={() => adjustHarmonyPressure(0.1)}
              disabled={gameStatus !== 'playing'}
            >
              ▲ INCREASE
            </button>
          </div>
        </div>
      </div>

      {/* Game Result */}
      {gameStatus === 'won' && (
        <div className="result-message success">
          <h3>✅ PRESSURE STABILIZED!</h3>
          <p>Hatch opening sequence initiated...</p>
        </div>
      )}

      {gameStatus === 'lost' && (
        <div className="result-message failure">
          <h3>❌ TIME EXPIRED!</h3>
          <p>Pressure stabilization failed. Retry required.</p>
          <button 
            className="retry-button"
            onClick={handleRetry}
          >
            TRY AGAIN
          </button>
        </div>
      )}
    </div>
  )
}

export default PressureGame
