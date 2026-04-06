# Sharum Web — Huellas de Ritmo

Proyecto React + Vite + Bootstrap para el cómic interactivo transmedia **Huellas de Ritmo**, creado por Sharum.

## Stack

- **React 19** + **Vite 8**
- **Bootstrap 5.3** + **Bootstrap Icons 1.13**
- **React Router DOM 7**

## Estructura

```
src/
├── main.jsx              # Punto de entrada
├── App.jsx               # Rutas principales
├── index.css             # Todos los estilos globales + por página
├── components/
│   ├── Navbar.jsx        # Barra de navegación
│   └── Footer.jsx        # Pie de página
└── pages/
    ├── Inicio.jsx        # Página de inicio (/)
    ├── Shakira.jsx       # Página de Shakira (/shakira)
    └── Nosotras.jsx      # Página Nosotras (/nosotras)
```

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build producción
npm run build

# Preview del build
npm run preview
```

## Páginas

| Ruta         | Descripción                                              |
|--------------|----------------------------------------------------------|
| `/`          | Hero + Playlist + Comic Banner                           |
| `/shakira`   | Sobre Shakira + Carousel de personajes                  |
| `/nosotras`  | Propósitos + Sobre Nosotras + Marca (con modales)       |

## Notas

- Los assets de imágenes provienen de Figma (URLs temporales con vigencia de ~7 días).
  Para producción, reemplazarlos por imágenes locales en `/public/`.
