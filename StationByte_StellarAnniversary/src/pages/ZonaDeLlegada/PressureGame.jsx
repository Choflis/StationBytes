import { useState, useEffect } from 'react'
import './PressureGame.css'

function PressureGame({ onComplete }) {
  const [dragonPressure, setDragonPressure] = useState(14.7) // psi (presión atmosférica normal)
  const [harmonyPressure, setHarmonyPressure] = useState(14.2) // psi
  const [timeLeft, setTimeLeft] = useState(45)
  const [gameStatus, setGameStatus] = useState('intro') // 'intro', 'playing', 'won', 'lost'
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
      // Removed auto-close, player must click button to close
    }
  }, [dragonPressure, harmonyPressure, gameStatus])

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

  const handleStartGame = () => {
    setGameStatus('playing')
  }

  const handleComplete = () => {
    if (onComplete) {
      onComplete()
    }
  }

  // Intro Screen
  if (gameStatus === 'intro') {
    return (
      <div className="pressure-game">
        <div className="intro-screen">
          <h2> PRESSURE STABILIZATION </h2>
          
          <div className="info-section">
            <h3>Mission Briefing</h3>
            <p>
              After docking, the Dragon spacecraft and Harmony module need to equalize 
              their internal pressures before the hatch can be safely opened.
            </p>
            <p>
              <strong>Why is this important?</strong> A pressure difference between the two 
              vessels could cause rapid air flow when opening the hatch, potentially damaging 
              equipment and endangering the crew.
            </p>
            <p>
              <strong>Real procedure:</strong> In actual ISS operations, astronauts carefully 
              monitor and adjust pressure levels to ensure a smooth and safe transition between 
              modules. This process can take 1-2 hours in reality!
            </p>
          </div>

          <div className="objective-section">
            <h3>Your Objective</h3>
            <p>Adjust the pressure valves to bring both Dragon and Harmony to <strong>14.7 PSI</strong></p>
            <ul>
              <li>🟢 <strong>Green</strong> = Perfect pressure (ready to open)</li>
              <li>🟡 <strong>Yellow</strong> = Close, keep adjusting</li>
              <li>🔴 <strong>Red</strong> = Too far, needs correction</li>
            </ul>
            <p className="time-warning">⏱️ You have 45 seconds to complete the task!</p>
          </div>

          <button className="start-button" onClick={handleStartGame}>
            START MISSION
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pressure-game">
      {/* Header */}
      <div className="game-header">
        <h2> PRESSURE STABILIZATION </h2>
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
          
          <div className="success-info">
            <h4>🎓 What You Just Did:</h4>
            <p>
              You successfully equalized the pressure between Dragon and Harmony! 
              This is a critical safety step that real astronauts perform before 
              entering the ISS.
            </p>
            <p>
              <strong>Fun Fact:</strong> The ISS maintains an internal pressure of 14.7 PSI 
              (pounds per square inch), which is equivalent to sea level atmospheric 
              pressure on Earth. This ensures astronauts can breathe normally without 
              needing pressurized suits inside the station.
            </p>
          </div>

          <button className="continue-button" onClick={handleComplete}>
            CONTINUE
          </button>
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
