# 📅 Changelog - Stellar Anniversary

Registro cronológico de todos los cambios importantes en el proyecto.

## [Sesión 05 de Octubre 2024]

### 🎮 Implementación de Minijuego - Pressure Stabilization
- **Creado**: Componente `PressureGame` en carpeta ZonaDeLlegada
- **Agregado**: Sistema completo de juego educativo sobre ecualización de presión
- **Mecánica**: Ajustar presiones de Dragon (14.7 PSI) y Harmony (14.2 PSI) a 14.7 PSI
- **Tiempo límite**: 45 segundos para completar la tarea
- **Controles**: Botones INCREASE/RELEASE para cada módulo
- **Indicadores visuales**: 
  - Verde = Presión perfecta (±0.1 PSI)
  - Amarillo = Cerca (±0.3 PSI)
  - Rojo = Lejos del objetivo
- **Estados**: STABLE, ADJUSTING, UNSTABLE
- **Integrado**: Con componente `VentanaMinijuegos` existente

#### Pantalla Introductoria del Minijuego
- **Mission Briefing**: Explica por qué es importante igualar presiones
- **Real Procedure**: Menciona que en realidad toma 1-2 horas
- **Objective**: Objetivos claros con código de colores
- **Botón START MISSION**: Verde brillante con animación pulsante

#### Pantalla de Victoria
- **Mensaje de éxito**: "PRESSURE STABILIZED!"
- **Información educativa**: Explica lo que el jugador acaba de hacer
- **Fun Fact**: ISS mantiene 14.7 PSI (equivalente a nivel del mar)
- **Botón CONTINUE**: Jugador controla cuándo cerrar (no cierre automático)

#### Características Visuales del Minijuego
- Medidores verticales animados con barras de presión
- Línea objetivo marcada en cada medidor
- Símbolo de conexión entre naves con efecto de flujo
- Temporizador con efecto pulsante (rojo cuando <10s)
- Hint button con tooltip
- Grid de fondo estilo futurista
- Scroll personalizado para pantallas largas

### 🚀 Zona de Llegada - Mejoras y Ajustes

#### Escena 1: Aproximación
- **Ajustado**: Efecto de perspectiva mejorado (scale 1.2 → 0.6)
- **Agregada**: Imagen SpaceStation de fondo
- **Optimizado**: Velocidad de reducción de tamaño más gradual

#### Escena 2: Acoplamiento
- **Modificado**: Imagen en pantalla completa (width: 100%, height: 100%, object-fit: cover)
- **Aumentado**: Duración de 3 a 5 segundos
- **Mejorado**: Texto con fondo semitransparente para mejor legibilidad
  - Background: rgba(10, 0, 21, 0.8)
  - Borde azul claro con efecto glass (backdrop-filter: blur)
  - Padding aumentado para mejor presentación
- **Reposicionado**: Texto movido más abajo (bottom: 10% → 5%)

#### Escena 3: Interior de la Estación
- **Modificado**: Imagen Station_initial.png en pantalla completa
- **Agregado**: Texto inicial "Welcome Aboard" con información contextual
- **Agregado**: Círculo brillante interactivo en el centro
  - Tamaño: 30px con animación de brillo pulsante
  - Efecto hover con scale y resplandor aumentado
  - Abre VentanaEmergente con información sobre IDA
- **Agregado**: Botón "Explore Harmony Module" (centro inferior)
- **Agregado**: Botón "🎮 Pressure Stabilization" (derecha inferior)
- **Eliminado**: Transición automática a Harmony (ahora requiere interacción)

#### Sistema de Ventanas Emergentes
- **Integrada**: VentanaEmergente para mostrar información sobre IDA
- **Contenido**: Información sobre International Docking Adapter
- **Imagen**: Usando IDA.png en lugar de Station_initial.png
- **Fuente**: https://www.nasa.gov/international-space-station/harmony-module/

### 🌐 Internacionalización
- **Traducido**: Todos los textos de ZonaDeLlegada a inglés
  - "Aproximándose..." → "Approaching the International Space Station"
  - "¡Acoplamiento Exitoso!" → "Docking Successful!"
  - "Bienvenido a Bordo" → "Welcome Aboard"
  - "Explorar Módulo Harmony" → "Explore Harmony Module"
- **Traducido**: Todos los textos de ZonaHarmony a inglés
  - "Módulo Columbus" → "Columbus Module"
  - "Vista Frontal" → "Front View"
  - "Módulo Kibo" → "Kibo Module"
  - "Mueve el ratón..." → "Move your mouse to explore..."
  - "Hub Central" → "Central Hub"
- **Traducido**: Información en VentanaEmergente a inglés

### 🎯 Zona Harmony - Efecto 3D Completo
- **Implementado**: Sistema de 3 vistas con imágenes diferentes
  - Vista izquierda (0-30%): Columbus_module.png 🇪🇺
  - Vista centro (30-70%): Harmony_vistaFrontal.png
  - Vista derecha (70-100%): Japan_module.png 🇯🇵
- **Agregado**: Etiquetas identificadoras para cada vista
- **Mejorado**: Transiciones de opacidad dinámicas basadas en posición del ratón
- **Agregado**: Indicador visual de posición con barra y marcador
- **Agregado**: Instrucciones para el usuario
- **Agregado**: Panel informativo flotante en la parte superior

### 🎨 Estilos y Animaciones Nuevas
- **Creado**: PressureGame.css con estilos completos para minijuego
- **Agregadas**: Animaciones:
  - `brillar`: Efecto pulsante para círculo interactivo
  - `fadeInRight`: Entrada del botón de minijuego desde la derecha
  - `fadeInUp`: Entrada del botón Harmony desde abajo
  - `timerPulse`: Pulsación del temporizador
  - `lineFlow`: Flujo animado en símbolo de conexión
  - `buttonPulse`: Pulsación de botones importantes
- **Mejorados**: Estilos de botones con gradientes y efectos hover
- **Agregado**: Scroll personalizado con colores del tema

### 📦 Nuevos Assets Utilizados
- `IDA.png` - International Docking Adapter (1.4MB)
- `Columbus_module.png` - Módulo europeo (1.2MB)
- `Harmony_vistaFrontal.png` - Vista frontal Harmony (1.3MB)
- `Japan_module.png` - Módulo Kibo japonés (1.4MB)
- `stationInSpaceAcoplamiento.png` - Nave acoplada a estación (279KB)

### 🐛 Correcciones
- **Corregido**: Pantalla intro del minijuego se salía del contenedor
  - Agregado overflow-y: auto con scroll personalizado
  - Ajustados tamaños de fuentes y paddings
  - Botón START MISSION siempre visible
- **Corregido**: Cierre automático muy rápido en pantalla de victoria
  - Eliminado setTimeout automático
  - Agregado botón CONTINUE para control manual
- **Corregido**: Texto sobre imagen en escena 2 difícil de leer
  - Agregado fondo semitransparente con blur
  - Mejorado contraste

### 📊 Métricas del Build
- **Módulos transformados**: 70 (antes: 57)
- **CSS generado**: 18.56 kB (antes: 6.84 kB)
- **JS generado**: 187.71 kB (antes: 180.16 kB)
- **Tiempo de build**: ~700-900ms
- **Assets totales**: 12 imágenes

---

## [Sesión 04 de Octubre 2024]

### 🎉 Inicialización del Proyecto
- Configuración inicial con Vite + React
- Instalación de dependencias: React 18, React Router DOM 7
- Estructura base de carpetas creada

### 🎨 Pantalla de Inicio
- **Agregado**: Componente `PantallaInicio`
- **Agregado**: Botón "Start" con animación de aparición (1.2s delay)
- **Agregado**: Imagen de la estación espacial de fondo
- **Agregado**: Título "STELLAR ANNIVERSARY" con fuente Orbitron
- **Configurado**: Navegación al hacer clic en Start → `/llegada`

### 🚀 Zona de Llegada - Secuencia Animada
- **Creado**: Componente `ZonaDeLlegada` con sistema de 3 escenas

#### Escena 1: Aproximación (5 segundos)
- Animación de la nave Dragon acercándose a la estación
- Efecto de perspectiva: nave grande → pequeña (alejándose hacia estación)
- Tamaño inicial: 300px, escala 1.2 → 0.35
- Posición: desde fuera de pantalla (-350px) hasta 55%
- Texto informativo: "Aproximándose a la Estación Espacial Internacional"

#### Escena 2: Acoplamiento (3 segundos)
- Imagen única de la nave acoplada (`nave_station.png`)
- Reemplazó implementación anterior con 2 imágenes separadas
- Fade-in suave con filtro de brillo
- Texto: "¡Acoplamiento Exitoso!"

#### Escena 3: Interior de la Estación (7 segundos)
- Muestra imagen del interior (`Station_initial.png`)
- Panel informativo sobre el Módulo Harmony
- Información educativa sobre las conexiones internacionales
- Transición automática a `/harmony` después de mostrar información

**Duración total**: 15 segundos

### 🌐 Sistema de Rutas
- **Instalado**: React Router DOM v7.9.3
- **Configurado**: BrowserRouter en `main.jsx`
- **Creado**: Sistema de rutas en `App.jsx`

#### Rutas Implementadas:
- `/` - PantallaInicio
- `/llegada` - ZonaDeLlegada
- `/harmony` - ZonaHarmony
- `/cupula` - ZonaCupula
- `/entrenamiento` - ZonaDeEntrenamiento
- `/laboratorios` - ZonaDeLaboratorios
- `*` - Ruta 404 (redirige a inicio)

### 🎯 Zona Harmony - Efecto 3D Interactivo
- **Creado**: Sistema de 3 vistas con transición por posición del ratón
- **Implementado**: Cálculo dinámico de opacidades basado en mouseX
- **Agregado**: Transiciones suaves entre vistas (izquierda, centro, derecha)

#### Lógica de Transición:
- Ratón en 0-30% de pantalla → Vista izquierda
- Ratón en 30-70% de pantalla → Vista centro
- Ratón en 70-100% de pantalla → Vista derecha
- Opacidades calculadas dinámicamente para transiciones fluidas

**Estado**: Estructura lista, pendiente agregar imágenes reales

### 📁 Assets Agregados
- `Background.png` - Fondo general
- `nave_dragon.png` - Nave Dragon para animación
- `nave_station.png` - Nave acoplada a la estación
- `SpaceStation.png` - Estación espacial externa
- `Station_initial.png` - Interior del módulo Harmony

### 📚 Documentación Creada
- **RUTAS.md**: Referencia completa de todas las rutas disponibles
- **CONTEXT.md**: Contexto general del proyecto y decisiones de diseño
- **CHANGELOG.md**: Este archivo (historial de cambios)

### 🎨 Estilos y Animaciones
- **Color theme**: Morado espacial (#210535, #0a0015, #1a0a2e)
- **Color acento**: Azul cielo (#87ceeb)
- **Fuente**: Orbitron (sans-serif futurista)

#### Animaciones CSS Creadas:
- `aproximarse` - Keyframes para movimiento de nave con perspectiva
- `fadeIn` - Entrada suave de elementos
- `slideUp` - Deslizamiento hacia arriba de paneles
- `pulsar` - Efecto pulsante para elementos interactivos

### 🔧 Mejoras Técnicas
- Sistema de timers con `useEffect` para transiciones automáticas
- Cleanup de timers para evitar memory leaks
- Event handler `onMouseMove` para interactividad en Harmony
- Cálculos de opacidad en tiempo real

### 🐛 Correcciones
- **Fixed**: Problema con instalación de dependencias (reinstalación completa)
- **Fixed**: Nombres de archivos de imágenes (case sensitivity)
- **Ajustado**: Tiempos de escenas para mejor legibilidad (escena 3: 4s → 7s)
- **Mejorado**: Animación de nave para crear efecto de perspectiva realista

## Componentes del Equipo Existentes (Pre-sesión)

### Páginas Base Creadas
- `ZonaCupula` - Estructura básica con título y descripción
- `ZonaDeEntrenamiento` - Estructura básica
- `ZonaDeLaboratorios` - Estructura básica

**Nota**: Estas páginas ya existían antes de esta sesión, actualmente tienen contenido placeholder.

## Próximas Sesiones - To Do

### Prioridad Alta
- [ ] Agregar 3 imágenes reales para vistas de Harmony (izquierda, centro, derecha)
- [ ] Implementar zonas clicables en Harmony para acceder a otras áreas
- [ ] Definir contenido de zonas geográficas (EU, Europa, Japón)

### Prioridad Media
- [ ] Desarrollar mini-juegos para cada zona
- [ ] Agregar más información educativa
- [ ] Mejorar transiciones entre páginas
- [ ] Implementar sistema de navegación de retorno

### Prioridad Baja
- [ ] Efectos de sonido
- [ ] Música de fondo
- [ ] Responsive design
- [ ] Accesibilidad (a11y)
- [ ] Tests

---

## Formato de Entradas Futuras

```markdown
## [Fecha de Sesión]

### Categoría
- **Tipo**: Descripción breve
- **Detalles**: Información adicional si es necesaria

Tipos comunes:
- Agregado (para nuevas características)
- Modificado (para cambios en características existentes)
- Corregido (para bugs solucionados)
- Eliminado (para características removidas)
- Mejorado (para optimizaciones)
```

---

**Última actualización**: 04 de Octubre 2024
