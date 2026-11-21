# Práctica 7 - App de Películas con React
## Integrantes
- Diego Maximiliano Llamas Guerrero 
- Carlos Emanuel Plascencia Gonzalez
- Valeria Lizzeth Pérez Molgado
- Juan Pablo Ramirez Baltierra

##Objetivo
Desarrollar una pagina web con React y Vite que consume una API para mostrar un listado de detalles de peliculas desde The Movie Database, todo trabajandolo de forma colectiva y paso a paso.

## Tecnologías
-**React:** Biblioteca principal para la construcción de la interfaz de usuario basada en componentes.
-**Vite:** Entorno de desarrollo rápido y empaquetador para producción.
-**React Router DOM:** Gestión de navegación declarativa y rutas dinámicas (`BrowserRouter`, `Routes`, `Route`).
-**CSS3:** Estilizado responsivo para la cuadrícula de tarjetas y vistas de detalle[cite: 10, 12].
-**TMDB API:** Fuente de datos externa para obtener el catálogo, pósters, géneros y sinopsis de las películas[cite: 2, 4, 10].
-**Git y GitHub:** Control de versiones y flujo de trabajo colaborativo mediante ramas y commits[cite: 3, 11].
-**Netlify:** Plataforma de alojamiento y despliegue continuo en la nube[cite: 2, 13].

## Estructura generalk del proyecto 
```text
practica7-react-peliculas/
├── public/
│   └── _redirects          # Configuración de redirección para rutas SPA en Netlify
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx   # Componente individual de tarjeta de película
│   │   ├── MovieCard.css   # Estilos de la tarjeta
│   │   ├── MovieGrid.jsx   # Componente contenedor de la cuadrícula de películas
│   │   └── MovieGrid.css   # Estilos de la cuadrícula
│   ├── img/
│   │   └── placeholder.png # Imagen de respaldo cuando no existe póster
│   ├── pages/
│   │   ├── LandingPage.jsx # Página principal con el listado de películas
│   │   ├── MovieDetails.jsx# Vista de detalle de una película seleccionada
│   │   └── MovieDetails.css# Estilos de la vista de detalle
│   ├── routers/
│   │   └── AppRouter.jsx   # Configuración principal de rutas
│   ├── services/
│   │   └── httpClient.js   # Cliente HTTP para peticiones fetch a la API
│   ├── utils/
│   │   └── getMovieImg.js  # Helper para construir la URL de las imágenes
│   ├── App.jsx             # Componente raíz de la aplicación
│   ├── App.css             # Estilos globales de la aplicación
│   ├── index.css           # Estilos base
│   └── main.jsx            # Punto de entrada de React
├── .env                    # Variables de entorno (API Key - ignorado en Git)
├── .gitignore              # Archivos y carpetas excluidos del repositorio
├── index.html              # Plantilla HTML principal
├── package.json            # Dependencias y scripts del proyecto
└── vite.config.js          # Configuración de Vite
```

## Instalación y ejecución local
npm install
npm run dev

## Rutas utilizadas
- /
- /movies/:movieId

## API utilizada
The Movie Database (TMDB) (https://api.themoviedb.org/3

## Descripción de funcionamiento
Al acceder a la aplicación se muestra el título de la página "Películas", a su vez está hace una petición a TMDB y se despliega en la pantalla una serie de imagenes con el póster de peliculas y su titulo, al hacer clic en algun póster React Router redirige al usuario a /movies/:movieId y se muestra una imagen ampliada del póster, el título completo, la lista de géneros separados por comas y la descripción o resumen de la trama, ademas se muestra los nombres completos de los integrantes, datos del profesor, materia, calendario escolar, fecha y el escudo en el pie de página.
## Link del repositorio

## Link del despliegue en Netlify
https://practica7react.netlify.app
## Conclusiones
Integrante 1:
Integrante 2:
Integrante 3:

Integrante 4:

Práctica 7 • React + Vite + GitHub + Netlify

Guía didáctica para alumnos | Página 13

## Despliegue
GitHub: ...
Netlify: ...
