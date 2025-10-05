function MiniJuego3D() {
  return (
    <div style={{
      width: "90%",
      height: "85%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#ffffff",
      fontSize: "2rem",
      fontFamily: "'Courier New', monospace",
      textAlign: "center",
      zIndex: 2,
      position: "relative",
      padding: "40px"
    }}>
      <h2 style={{ 
        marginBottom: "30px",
        fontSize: "2.5rem",
        textShadow: "0 0 20px rgba(100, 200, 255, 0.8)",
        letterSpacing: "4px",
        color: "#64C8FF"
      }}>
        🚀 HELP THE ASTRONAUT 🚀
      </h2>
      
      <div style={{
        background: "rgba(0, 0, 0, 0.5)",
        border: "2px solid rgba(100, 200, 255, 0.4)",
        borderRadius: "15px",
        padding: "30px 50px",
        marginBottom: "30px",
        backdropFilter: "blur(10px)"
      }}>
        <p style={{ 
          fontSize: "1.3rem",
          color: "#B4E7FF",
          margin: "0",
          textShadow: "0 0 10px rgba(100, 200, 255, 0.6)"
        }}>
          🎮 Mini Juego 3D aquí
        </p>
      </div>

      <div style={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        marginTop: "20px"
      }}>
        <div style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#00ff00",
          boxShadow: "0 0 10px #00ff00",
          animation: "blink 1.5s infinite"
        }}></div>
        <p style={{ 
          fontSize: "1rem",
          color: "#8FDFFF",
          margin: "0",
          letterSpacing: "2px"
        }}>
          [ Sistema inicializando... ]
        </p>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}

export default MiniJuego3D;