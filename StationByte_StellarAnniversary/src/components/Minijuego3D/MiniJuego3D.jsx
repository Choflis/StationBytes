import { useState, useEffect, useRef } from "react";
import "./MiniJuego3D.css";

function MiniJuego3D() {
  const [yPos, setYPos] = useState(0);       // Posición vertical del astronauta
  const [velocity, setVelocity] = useState(0); // Velocidad vertical para gravedad
  const [obstacles, setObstacles] = useState([{ id: 1, x: 600, type: "meteor" }]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const gravity = -0.5;     // Gravedad suave
  const jumpPower = 10;     // Potencia del salto
  const astronautHeight = 60;
  const runnerRef = useRef();

  // Controles
  useEffect(() => {
    const handleKey = (e) => {
      if (gameOver) return;
      if (e.code === "Space" && yPos === 0) {
        setVelocity(jumpPower);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [yPos, gameOver]);

  // Actualiza posición y velocidad (física simple)
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setYPos((prev) => {
        let newPos = prev + velocity;
        let newVel = velocity + gravity;
        setVelocity(newVel);

        if (newPos < 0) { // piso
          setVelocity(0);
          return 0;
        }
        if (newPos > 120) { // techo máximo
          setVelocity(0);
          return 120;
        }
        return newPos;
      });

      // Obstáculos
      setObstacles((prev) =>
        prev
          .map((obs) => ({ ...obs, x: obs.x - 6 }))
          .filter((obs) => obs.x > -50)
      );

      if (Math.random() < 0.03) {
        setObstacles((prev) => [
          ...prev,
          {
            id: Date.now(),
            x: 600,
            type: Math.random() > 0.5 ? "meteor" : "satellite",
          },
        ]);
      }

      setScore((prev) => prev + 1);

      // Colisiones
      obstacles.forEach((obs) => {
        const runnerX = 50;
        const runnerYTop = yPos + astronautHeight;
        const runnerYBottom = yPos;
        const obsX = obs.x;
        const obsYTop = obs.type === "meteor" ? 50 : 25;
        const obsYBottom = 0;

        if (
          runnerX + 40 > obsX && runnerX < obsX + 30 && // colisión horizontal
          runnerYTop > obsYBottom && runnerYBottom < obsYTop // colisión vertical
        ) {
          setGameOver(true);
        }
      });
    }, 40);

    return () => clearInterval(interval);
  }, [yPos, velocity, obstacles, gameOver]);

  return (
    <div className="mini-juego-maraton-container">
      <h2>HELP THE ASTRONAUT</h2>
      <div className="mini-juego-maraton">
        <div
          ref={runnerRef}
          className="runner"
          style={{ bottom: `${yPos}px` }}
        />
        {obstacles.map((obs) => (
          <div
            key={obs.id}
            className={`obstacle ${obs.type}`}
            style={{ left: `${obs.x}px` }}
          />
        ))}
        {gameOver && <div className="game-over">GAME OVER</div>}
        <div className="particles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
              }}
            />
          ))}
        </div>
      </div>
      <p className="score">Score: {score}</p>
      <p className="instructions">SPACE to jump</p>
    </div>
  );
}

export default MiniJuego3D;
