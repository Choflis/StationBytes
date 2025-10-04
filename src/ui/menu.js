import { navigateTo } from '../core/navigator.js';

export function showMenu() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>🚀 ISS Space Experience</h1>
    <button id="play">Jugar Minijuego 1</button>
  `;

  document.getElementById('play').onclick = () => navigateTo('game1');
}