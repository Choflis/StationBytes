export function navigateTo(screen) {
  const app = document.getElementById("app");
  if (screen === "game1") {
    import("../minigames/game1.js").then(mod => mod.startGame1());
  } else {
    app.innerHTML = "<h2>Pantalla no encontrada</h2>";
  }
}