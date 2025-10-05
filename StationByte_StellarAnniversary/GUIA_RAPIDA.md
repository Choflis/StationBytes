# ⚡ Guía Rápida - Retomar el Trabajo

Esta guía te ayudará a ti y al equipo a retomar el trabajo rápidamente en la próxima sesión.

---

## 🎯 ¿Dónde quedamos?

### ✅ Lo que YA está funcionando:

1. **Pantalla de Inicio** (`/`) - Completamente funcional con botón Start
2. **Secuencia de Llegada** (`/llegada`) - 3 escenas animadas (15 segundos total)
3. **Zona Harmony** (`/harmony`) - Estructura lista con efecto 3D por ratón
4. **Sistema de Rutas** - 7 rutas configuradas y funcionando
5. **Documentación** - CONTEXT.md, CHANGELOG.md, RUTAS.md creados

### 🚧 Lo que está a medias:

1. **Zona Harmony** - Tiene el efecto 3D implementado PERO:
   - Usa placeholders en lugar de imágenes reales
   - No tiene botones/zonas clicables para ir a otras áreas
   - Falta definir qué módulos van en cada posición

2. **Otras Zonas** - Tienen estructura básica pero contenido placeholder:
   - ZonaCupula
   - ZonaDeEntrenamiento  
   - ZonaDeLaboratorios

---

## 🔥 Próximos Pasos Inmediatos

### 1. Completar Zona Harmony (Prioridad ALTA)

**Lo que necesitas:**
- 3 imágenes del módulo Harmony desde diferentes ángulos:
  - `harmony_izquierda.png` o similar
  - `harmony_centro.png` o similar  
  - `harmony_derecha.png` o similar

**Cómo agregarlas:**
```javascript
// En: src/pages/ZonaHarmony/ZonaHarmony.jsx

// 1. Importar las imágenes reales
import vistaIzq from '../../assets/harmony_izquierda.png'
import vistaCentro from '../../assets/harmony_centro.png'
import vistaDer from '../../assets/harmony_derecha.png'

// 2. Reemplazar los placeholders en el return:
<img 
  src={vistaIzq}  // Cambiar placeholder por vistaIzq
  alt="Vista Izquierda" 
  className="vista-imagen"
  style={{ opacity: opacidades.izquierda }}
/>
// ... hacer lo mismo para centro y derecha
```

**Agregar zonas clicables:**
```javascript
// Después de las imágenes, agregar botones/zonas
<div className="zonas-acceso">
  <button 
    className="zona-acceso zona-laboratorios"
    onClick={() => navigate('/laboratorios')}
  >
    🔬 Laboratorios
  </button>
  
  <button 
    className="zona-acceso zona-cupula"
    onClick={() => navigate('/cupula')}
  >
    🔭 Cúpula
  </button>
  
  <button 
    className="zona-acceso zona-entrenamiento"
    onClick={() => navigate('/entrenamiento')}
  >
    💪 Entrenamiento
  </button>
</div>
```

### 2. Desarrollar Contenido de Zonas Específicas

**Ejemplo para ZonaDeLaboratorios:**
```javascript
// src/pages/ZonaDeLaboratorios/ZonaDeLaboratorios.jsx

import { useNavigate } from 'react-router-dom'
import './ZonaDeLaboratorios.css'
import laboratoriosImg from '../../assets/laboratorios.png'

function ZonaDeLaboratorios() {
  const navigate = useNavigate()

  return (
    <div className="zonaLaboratorios">
      <img src={laboratoriosImg} alt="Laboratorios" className="fondo" />
      
      <div className="contenido">
        <h1>🔬 Zona de Laboratorios</h1>
        <p>Aquí se realizan experimentos en microgravedad...</p>
        
        {/* Agregar mini-juegos, información, etc. */}
        
        <button onClick={() => navigate('/harmony')}>
          ← Volver a Harmony
        </button>
      </div>
    </div>
  )
}

export default ZonaDeLaboratorios
```

---

## 🛠️ Comandos Útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Ver en navegador
# http://localhost:5173

# Navegar directamente a una ruta específica:
# http://localhost:5173/harmony
# http://localhost:5173/llegada
# etc.

# Verificar errores de código
npm run lint

# Hacer build de producción
npm run build
```

---

## 📁 Dónde está cada cosa

```
src/
├── assets/          ← AQUÍ van las imágenes
├── pages/
│   ├── ZonaHarmony/        ← Trabajar aquí para efecto 3D
│   ├── ZonaDeLaboratorios/ ← Desarrollar contenido aquí
│   ├── ZonaCupula/         ← Desarrollar contenido aquí
│   └── ZonaDeEntrenamiento/← Desarrollar contenido aquí
└── App.jsx          ← Aquí están definidas las rutas
```

---

## 🎨 Decisiones de Diseño Tomadas

### Colores del Proyecto
```css
/* Fondo principal */
background: #210535;  /* Morado oscuro espacial */

/* Degradados */
background: linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0a0015 100%);

/* Color acento (títulos, botones importantes) */
color: #87ceeb;  /* Azul cielo */

/* Texto normal */
color: white;
opacity: 0.8-0.9;
```

### Fuente
```css
font-family: 'Orbitron', sans-serif;
```

### Tiempos de Animación
- Fade-in: 1-1.5s
- Transiciones hover: 0.3s
- Escenas automáticas: 3-7s

---

## 🎯 Conceptos Clave Implementados

### 1. Efecto 3D con Imágenes 2D (Harmony)
- **Cómo funciona**: 3 imágenes superpuestas con diferentes opacidades
- **Trigger**: Posición del ratón en el eje X
- **Cálculo**: 
  - 0-30% pantalla → muestra izquierda
  - 30-70% pantalla → muestra centro
  - 70-100% pantalla → muestra derecha
- **Archivo**: `src/pages/ZonaHarmony/ZonaHarmony.jsx` líneas 11-33

### 2. Animación de Perspectiva (Nave en Llegada)
- **Cómo funciona**: La nave empieza grande (cerca) y termina pequeña (lejos)
- **Keyframes**: 4 puntos clave en la animación (0%, 30%, 70%, 100%)
- **Archivo**: `src/pages/ZonaDeLlegada/ZonaDeLlegada.css` líneas 21-37

### 3. Sistema de Escenas Secuenciales
- **Cómo funciona**: useState + useEffect con setTimeout
- **Patrón**:
```javascript
const [escena, setEscena] = useState(1)

useEffect(() => {
  if (escena === 1) {
    const timer = setTimeout(() => setEscena(2), 5000)
    return () => clearTimeout(timer) // Cleanup importante!
  }
}, [escena])
```
- **Archivo**: `src/pages/ZonaDeLlegada/ZonaDeLlegada.jsx`

---

## ⚠️ Problemas Conocidos / Pendientes

### No son bugs, simplemente están pendientes:

1. **Zona Harmony**:
   - Placeholders en lugar de imágenes reales
   - No hay navegación a otras zonas desde aquí
   - No tiene botón de volver a inicio

2. **Responsive Design**:
   - Todo está diseñado para desktop
   - En móvil no se verá bien (pendiente adaptar)

3. **Otras Zonas**:
   - Solo tienen contenido placeholder
   - Falta toda la información educativa
   - Faltan los mini-juegos

4. **No hay botón "Volver"**:
   - En las zonas específicas no hay forma de volver a Harmony
   - Hay que navegar manualmente con la URL

---

## 💡 Ideas para Implementar

### Sistema de Mini-juegos
```javascript
// Ejemplo: Mini-juego de memoria en laboratorios
const MiniJuegoMemoria = () => {
  const [cartas, setCartas] = useState([...])
  const [seleccionadas, setSeleccionadas] = useState([])
  // ... lógica del juego
}
```

### Sistema de Progreso
```javascript
// Usar Context API o estado global
const GameContext = createContext()

// Guardar qué zonas ha visitado
const [zonasVisitadas, setZonasVisitadas] = useState([])
const [minijuegosCompletados, setMinijuegosCompletados] = useState([])
```

### Botón de Navegación Universal
```javascript
// Componente reutilizable para todas las zonas
const BotonVolver = () => {
  const navigate = useNavigate()
  return (
    <button 
      className="boton-volver"
      onClick={() => navigate('/harmony')}
    >
      ← Volver a Harmony
    </button>
  )
}
```

---

## 📞 Preguntas Frecuentes (para el equipo)

**P: ¿Cómo agrego una nueva ruta?**
R: Ver `RUTAS.md` - hay instrucciones paso a paso

**P: ¿Dónde pongo las imágenes nuevas?**
R: En `src/assets/` y luego importarlas en el componente

**P: ¿Cómo navego de una página a otra?**
R: Usar `useNavigate()` de React Router:
```javascript
const navigate = useNavigate()
navigate('/ruta-destino')
```

**P: ¿Qué archivos NO debo modificar?**
R: No modificar: `main.jsx`, `vite.config.js`, `package.json` sin consultar

**P: ¿Cómo pruebo solo mi zona sin pasar por todo?**
R: Navega directamente: `http://localhost:5173/mi-zona`

---

## 🚀 Para la Próxima Sesión

### Checklist de inicio:
- [ ] Leer este archivo (GUIA_RAPIDA.md)
- [ ] Ejecutar `npm run dev`
- [ ] Probar que todo funcione navegando por las rutas
- [ ] Revisar `CONTEXT.md` si necesitas más detalles
- [ ] Coordinar con el equipo qué zona trabajará cada uno

### Sugerencias de tareas:
1. **Si tienes las imágenes**: Completar Zona Harmony
2. **Si eres diseñador**: Crear contenido visual para las zonas
3. **Si eres programador**: Empezar con los mini-juegos
4. **Si eres escritor**: Preparar contenido educativo para cada zona

---

**¡Buena suerte con el desarrollo! 🚀✨**

Cualquier duda, consulta los archivos de documentación:
- `CONTEXT.md` - Contexto completo
- `CHANGELOG.md` - Historial de cambios
- `RUTAS.md` - Sistema de navegación
