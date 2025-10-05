# 📋 Contexto del Proyecto - Stellar Anniversary

## 🎯 Visión General del Proyecto

**Stellar Anniversary** es un juego educativo e interactivo ambientado en la Estación Espacial Internacional (ISS). Los jugadores experimentan la llegada a la estación y pueden explorar diferentes módulos, cada uno representando áreas temáticas (nutrición, ejercicio, laboratorios, etc.).

## 🎮 Concepto del Juego

El juego combina **aprendizaje + diversión**, ofreciendo:
- Exploración de módulos de la estación espacial
- Mini-juegos educativos en cada zona
- Animaciones cinematográficas
- Interacción visual con efecto 3D (usando imágenes 2D)
- Información científica sobre la vida en el espacio

## 🏗️ Arquitectura Actual

### Stack Tecnológico
- **React 18.3.1** - Framework principal
- **Vite 5.4.10** - Build tool y dev server
- **React Router DOM 7.9.3** - Navegación entre páginas
- **CSS puro** - Estilos y animaciones
- **Fuente**: Orbitron (estilo espacial/futurista)

### Estructura de Carpetas
```
StationByte_StellarAnniversary/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes y recursos
│   │   ├── Background.png
│   │   ├── nave_dragon.png
│   │   ├── nave_station.png
│   │   ├── SpaceStation.png
│   │   └── Station_initial.png
│   ├── pages/          # Componentes de páginas
│   │   ├── PantallaInicio/
│   │   ├── ZonaDeLlegada/
│   │   ├── ZonaHarmony/
│   │   ├── ZonaCupula/
│   │   ├── ZonaDeEntrenamiento/
│   │   └── ZonaDeLaboratorios/
│   ├── App.jsx         # Configuración de rutas
│   ├── App.css
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── RUTAS.md           # Documentación de rutas
├── CONTEXT.md         # Este archivo (contexto general)
└── package.json
```

## 🎬 Flujo del Juego (Implementado)

### 1. Pantalla de Inicio (`/`)
- Muestra título "STELLAR ANNIVERSARY"
- Imagen de la estación espacial
- Botón "Start" que aparece después de 1.2 segundos
- Al hacer clic, navega a `/llegada`

### 2. Zona de Llegada (`/llegada`)
**Secuencia de 3 escenas animadas (15 segundos total):**

**Escena 1 (5 seg)**: Aproximación de la nave Dragon
- La nave aparece grande a la izquierda (cerca del espectador)
- Se mueve hacia la derecha mientras se hace más pequeña
- Crea perspectiva: la nave se aleja del espectador hacia la estación
- Texto: "Aproximándose a la Estación Espacial Internacional"

**Escena 2 (3 seg)**: Acoplamiento exitoso
- Muestra imagen única de la nave acoplada a la estación
- Texto: "¡Acoplamiento Exitoso!"
- Fade-in suave

**Escena 3 (7 seg)**: Interior de la estación
- Muestra vista interior del módulo Harmony
- Panel informativo con:
  - Título: "Módulo Harmony - Nodo 2"
  - Descripción del módulo
  - Dato importante sobre las conexiones internacionales
- Transición automática a `/harmony`

### 3. Zona Harmony (`/harmony`)
**Hub central con efecto 3D interactivo:**
- Sistema de 3 imágenes superpuestas (izquierda, centro, derecha)
- Seguimiento del ratón para cambiar de vista
- Cuando el ratón está en el 30% izquierdo → muestra vista izquierda
- Cuando el ratón está en el centro (30%-70%) → muestra vista frontal
- Cuando el ratón está en el 30% derecho → muestra vista derecha
- Transiciones suaves de opacidad entre vistas
- **PENDIENTE**: Implementar botones/zonas para acceder a otras áreas

### 4. Zonas Específicas
**Rutas creadas pero contenido básico:**
- `/cupula` - Zona de la cúpula de observación
- `/entrenamiento` - Zona de ejercicios físicos
- `/laboratorios` - Zona de laboratorios científicos

## 🎨 Decisiones de Diseño

### Colores Temáticos
- **Fondo principal**: `#210535` (morado oscuro espacial)
- **Fondo degradado**: `#0a0015` → `#1a0a2e` (negro-morado)
- **Color acento**: `#87ceeb` (azul cielo) para títulos y elementos destacados
- **Texto**: Blanco con opacidad variable

### Animaciones
- **Fade-in**: Entrada suave de elementos (1-1.5s)
- **Slide-up**: Paneles que suben desde abajo
- **Scale**: Efectos de zoom en navegación
- **Transiciones**: 0.3s ease-out para interacciones

### Tipografía
- **Fuente principal**: Orbitron (sans-serif futurista)
- **Títulos grandes**: 2.5-3rem
- **Texto normal**: 1-1.2rem
- **Text-shadow**: Efectos de brillo en títulos importantes

## 🔧 Características Técnicas Implementadas

### Sistema de Navegación
- React Router con rutas declarativas
- Navegación programática con `useNavigate()`
- Ruta 404 que redirige a inicio
- Sin navbar (navegación contextual)

### Animaciones CSS
- Keyframes personalizados para cada animación
- Transform + opacity para transiciones suaves
- Timing functions variados (ease-in, ease-out, ease-in-out)

### Gestión de Estado
- `useState` para control de escenas
- `useEffect` para timers y transiciones automáticas
- Event handlers para interactividad (mousemove)

### Responsive (Pendiente)
- Actualmente diseñado para desktop
- TODO: Adaptar para tablets y móviles

## 📝 Convenciones del Código

### Nombres de Archivos
- Componentes: PascalCase (ej: `ZonaDeLlegada.jsx`)
- Estilos: mismo nombre que componente (ej: `ZonaDeLlegada.css`)
- Assets: snake_case o PascalCase (ej: `nave_dragon.png`, `SpaceStation.png`)

### Estructura de Componentes
```javascript
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' // si necesita navegación
import './ComponentName.css'
import assets from '../../assets/...'

function ComponentName() {
  // Estados
  const [state, setState] = useState(initialValue)
  const navigate = useNavigate() // si aplica
  
  // Efectos
  useEffect(() => {
    // lógica
  }, [dependencies])
  
  // Handlers
  const handleAction = () => {
    // lógica
  }
  
  return (
    <div className="componentName">
      {/* JSX */}
    </div>
  )
}

export default ComponentName
```

## 🚧 Estado Actual y Próximos Pasos

### ✅ Completado
- [x] Configuración inicial del proyecto con Vite + React
- [x] Sistema de rutas con React Router
- [x] Pantalla de inicio con animación
- [x] Secuencia completa de llegada (3 escenas)
- [x] Estructura base de Zona Harmony con efecto 3D
- [x] Rutas para todas las zonas
- [x] Documentación de rutas

### 🔨 En Desarrollo
- [ ] Implementar imágenes reales para las 3 vistas de Harmony
- [ ] Agregar botones/zonas clicables en Harmony para acceder a otras áreas
- [ ] Definir qué representa cada zona geográfica (EU, Europa, Japón)

### 📋 Pendiente
- [ ] Desarrollar contenido completo de cada zona específica
- [ ] Implementar mini-juegos educativos
- [ ] Sistema de progresión del jugador
- [ ] Información educativa en cada módulo
- [ ] Efectos de sonido y música
- [ ] Responsive design
- [ ] Sistema de guardado de progreso
- [ ] Testing

## 🎯 Visión a Futuro

### Zonas Planeadas
- **Zona de Nutrición**: Mini-juegos sobre alimentación en el espacio
- **Zona de Ejercicio**: Actividades sobre el entrenamiento de astronautas
- **Zona de Laboratorios**: Experimentos científicos interactivos
- **Zona de Comunicación**: Información sobre comunicación con la Tierra
- **Zona de la Cúpula**: Observación del espacio y educación astronómica

### Características Futuras
- Three.js para visualizaciones 3D reales (mencionado en README principal)
- Sistema de logros
- Modo multijugador (opcional)
- Traducciones a múltiples idiomas
- Accesibilidad mejorada

## 👥 Para el Equipo

### Cómo Contribuir
1. Consultar `RUTAS.md` para ver las rutas disponibles
2. Elegir una zona para trabajar
3. Crear/modificar el componente en `src/pages/`
4. Probar localmente con `npm run dev`
5. Actualizar documentación si es necesario
6. Commit con mensaje descriptivo

### Estilo de Código
- Usar comillas simples para strings
- Indentar con 2 espacios
- Nombres descriptivos en español (componentes y variables)
- Comentarios en español para secciones importantes
- Mantener consistencia con el código existente

### Comunicación
- Coordinar cambios en rutas principales
- Notificar si se agregan nuevas dependencias
- Documentar decisiones importantes
- Mantener actualizado el CHANGELOG

---

**Última actualización**: 04 de Octubre 2024
**Versión**: 0.0.0 (Pre-release)
