# 🚀 Stellar Anniversary

Un juego educativo e interactivo ambientado en la **Estación Espacial Internacional (ISS)**, donde los jugadores pueden explorar diferentes módulos, aprender sobre la vida en el espacio y disfrutar de mini-juegos temáticos.

El objetivo es combinar **aprendizaje + diversión**, ofreciendo una experiencia inmersiva inspirada en juegos como *The Past Within*, adaptada a un entorno espacial futurista.

---

## 🎮 ¿De qué trata el juego?

- Los jugadores comienzan con una **secuencia cinemática** de llegada a la estación espacial en una nave Dragon
- Exploran el **Módulo Harmony**, el hub central de la ISS
- Pueden moverse por diferentes **zonas temáticas** (cúpula, laboratorios, entrenamiento, etc.)
- Cada zona contiene **mini-juegos educativos** y contenido informativo
- La progresión desbloquea nuevos desafíos y contenido interactivo

---

## 🛠️ Tecnologías Utilizadas

Este proyecto utiliza el siguiente stack:

- **React 18.3.1** → Framework principal para componentes y UI
- **Vite 5.4.10** → Build tool rápido y dev server
- **React Router DOM 7.9.3** → Sistema de navegación entre páginas
- **CSS3** → Estilos, animaciones y efectos visuales
- **JavaScript (ESModules)** → Lógica del juego e interactividad

### Dependencias de Desarrollo
- ESLint → Linting y calidad de código
- Vite plugin-react → Integración React con Vite

---

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 16+ instalado
- npm o yarn

### Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone [URL_DEL_REPO]
cd StationBytes/StationByte_StellarAnniversary

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# El servidor se ejecuta en http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Genera build de producción
npm run preview  # Previsualiza build de producción
npm run lint     # Ejecuta ESLint para verificar código
```

---

## 🗺️ Estructura del Proyecto

```
StationByte_StellarAnniversary/
├── public/                    # Archivos estáticos
│   └── vite.svg
├── src/
│   ├── assets/               # Imágenes y recursos multimedia
│   │   ├── Background.png
│   │   ├── nave_dragon.png
│   │   ├── nave_station.png
│   │   ├── SpaceStation.png
│   │   └── Station_initial.png
│   ├── pages/                # Componentes de páginas/zonas
│   │   ├── PantallaInicio/
│   │   ├── ZonaDeLlegada/
│   │   ├── ZonaHarmony/
│   │   ├── ZonaCupula/
│   │   ├── ZonaDeEntrenamiento/
│   │   └── ZonaDeLaboratorios/
│   ├── App.jsx               # Componente principal y rutas
│   ├── App.css
│   ├── main.jsx              # Punto de entrada de React
│   └── index.css             # Estilos globales
├── CONTEXT.md                # Contexto detallado del proyecto
├── CHANGELOG.md              # Registro de cambios
├── RUTAS.md                  # Documentación de rutas
├── README.md                 # Este archivo
├── package.json
└── vite.config.js
```

---

## 🎯 Flujo del Juego Actual

```
┌─────────────────┐
│ Pantalla Inicio │  (/)
│   [Start →]     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Zona Llegada    │  (/llegada)
│                 │
│ Escena 1: 5s    │  ← Nave aproximándose
│ Escena 2: 3s    │  ← Acoplamiento
│ Escena 3: 7s    │  ← Interior de Harmony
└────────┬────────┘
         │ (Auto)
         ▼
┌─────────────────┐
│  Zona Harmony   │  (/harmony)
│   (Hub Central) │
│                 │  ← Efecto 3D con ratón
│  [Elegir zona]  │
└────────┬────────┘
         │
    ┌────┴────┬────────────┐
    ▼         ▼            ▼
┌────────┐ ┌────────┐ ┌──────────┐
│ Cúpula │ │ Entrena│ │Laborato- │
│        │ │ miento │ │   rios   │
└────────┘ └────────┘ └──────────┘
```

---

## 🎨 Características Implementadas

### ✨ Pantalla de Inicio
- Título animado "STELLAR ANNIVERSARY"
- Botón "Start" con animación de entrada
- Navegación hacia la secuencia de llegada

### 🚀 Secuencia de Llegada (Cinemática)
- **3 escenas animadas** con transiciones automáticas
- Efecto de perspectiva en la aproximación de la nave
- Información contextual sobre el módulo Harmony
- Duración total: 15 segundos

### 🌐 Zona Harmony (Hub Central)
- **Efecto 3D interactivo** usando imágenes 2D
- Seguimiento del movimiento del ratón
- Transiciones suaves entre 3 vistas (izquierda, centro, derecha)
- Sistema de opacidad dinámica

### 🛣️ Sistema de Rutas
- 7 rutas configuradas con React Router
- Navegación programática entre zonas
- Ruta 404 que redirige a inicio
- Ver `RUTAS.md` para detalles completos

---

## 📚 Documentación Adicional

- **[CONTEXT.md](./CONTEXT.md)** → Contexto completo del proyecto, decisiones de diseño, arquitectura
- **[CHANGELOG.md](./CHANGELOG.md)** → Registro detallado de todos los cambios por fecha
- **[RUTAS.md](./RUTAS.md)** → Documentación de todas las rutas y navegación

---

## 🚧 Estado del Proyecto

### ✅ Completado
- [x] Configuración inicial del proyecto
- [x] Sistema de navegación con rutas
- [x] Pantalla de inicio funcional
- [x] Secuencia completa de llegada (3 escenas)
- [x] Estructura base de Harmony con efecto 3D
- [x] Documentación básica

### 🔨 En Desarrollo
- [ ] Imágenes reales para las 3 vistas de Harmony
- [ ] Zonas clicables en Harmony para acceder a otras áreas
- [ ] Contenido educativo en cada zona

### 📋 Pendiente
- [ ] Mini-juegos interactivos
- [ ] Sistema de progresión
- [ ] Efectos de sonido
- [ ] Responsive design
- [ ] Accesibilidad
- [ ] Testing

---

## 👥 Equipo y Colaboración

### Cómo Contribuir
1. Revisar `CONTEXT.md` para entender el proyecto
2. Consultar `RUTAS.md` para ver rutas disponibles
3. Elegir una zona/característica para trabajar
4. Crear rama feature: `git checkout -b feature/nombre-feature`
5. Desarrollar y probar localmente
6. Actualizar documentación si es necesario
7. Commit con mensajes descriptivos
8. Pull request para revisión

### Convenciones
- Nombres de componentes en PascalCase
- Variables y funciones en camelCase
- CSS con clases descriptivas en camelCase
- Comentarios en español
- Commits descriptivos en español

---

## 🎯 Visión Futura

### Características Planeadas
- Three.js para visualizaciones 3D reales
- Mini-juegos educativos por cada zona temática
- Sistema de logros y progresión
- Modo historia con narrativa
- Información científica real de la NASA
- Multiidioma (español, inglés)

### Zonas Temáticas Planeadas
- 🔬 **Laboratorios** - Experimentos científicos
- 💪 **Entrenamiento** - Ejercicio en gravedad cero
- 🍽️ **Nutrición** - Alimentación espacial
- 🔭 **Cúpula** - Observación del espacio
- 📡 **Comunicaciones** - Contacto con la Tierra
- 🛏️ **Habitación** - Vida cotidiana en el espacio

---

## 📄 Licencia

[Por definir]

---

## 🙏 Agradecimientos

- NASA por la información sobre la ISS
- SpaceX por inspiración visual
- Comunidad de React y Vite

---

## 📞 Contacto

[Por definir - información de contacto del equipo]

---

**Versión Actual**: 0.0.0 (Pre-release)  
**Última Actualización**: 04 de Octubre 2024  
**Estado**: En desarrollo activo 🚧

