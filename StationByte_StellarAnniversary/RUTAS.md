# 🛣️ Rutas del Proyecto - Stellar Anniversary

Este documento contiene todas las rutas disponibles en la aplicación para evitar conflictos entre integrantes del equipo.

## Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | PantallaInicio | Pantalla de inicio del juego con título y botón Start |
| `/llegada` | ZonaDeLlegada | Secuencia animada de llegada a la estación (3 escenas) |
| `/harmony` | ZonaHarmony | Hub central con efecto 3D interactivo (ratón) |
| `/cupula` | ZonaCupula | Zona de la cúpula de observación |
| `/entrenamiento` | ZonaDeEntrenamiento | Zona de ejercicios y entrenamiento físico |
| `/laboratorios` | ZonaDeLaboratorios | Zona de laboratorios científicos |

## Flujo de Navegación Principal

```
PantallaInicio (/)
    ↓ [Click en "Start"]
ZonaDeLlegada (/llegada)
    ↓ [Animación automática - 15 segundos]
ZonaHarmony (/harmony)
    ↓ [Selección manual]
Zonas específicas (/cupula, /entrenamiento, /laboratorios)
```

## Cómo Navegar Programáticamente

```javascript
import { useNavigate } from 'react-router-dom'

function MiComponente() {
  const navigate = useNavigate()
  
  const irALaboratorios = () => {
    navigate('/laboratorios')
  }
  
  return <button onClick={irALaboratorios}>Ir a Laboratorios</button>
}
```

## Notas Importantes

- **Ruta 404**: Cualquier ruta no definida redirige automáticamente a `/` (PantallaInicio)
- **Sin Navbar**: El proyecto no tiene barra de navegación. Las transiciones son por botones o automáticas
- **React Router**: Usamos `react-router-dom` v7 para el manejo de rutas
- **Rutas Reservadas**: NO crear nuevas rutas sin coordinar con el equipo

## Para Agregar una Nueva Ruta

1. Crear el componente en `src/pages/NombreZona/`
2. Importar el componente en `src/App.jsx`
3. Agregar la ruta en el componente `<Routes>`
4. Actualizar este documento RUTAS.md
5. Notificar al equipo del cambio

## Última Actualización
- Fecha: 04 de Octubre 2024
- Rutas totales: 7 (incluyendo 404)
