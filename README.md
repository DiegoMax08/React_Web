# Práctica 7 - App de Películas con React

## Integrantes
- Diego Maximiliano Llamas Guerrero
- Carlos Emanuel Plascencia Gonzalez
- Valeria Lizzeth Pérez Molgado
- Juan Pablo Ramirez Baltierra

## Objetivo
Desarrollar una aplicación web con React y Vite que consume una API externa para mostrar un catálogo de películas y consultar la vista de detalle de cada título desde **The Movie Database (TMDB)**, trabajando de forma colaborativa mediante control de versiones y despliegue continuo.

## Tecnologías
- **React:** Biblioteca principal para la construcción de la interfaz de usuario basada en componentes reutilizables.
- **Vite:** Entorno de desarrollo rápido y empaquetador optimizado para producción.
- **React Router DOM:** Gestión de navegación declarativa y rutas dinámicas (`BrowserRouter`, `Routes`, `Route`).
- **CSS3 y CSS Modules:** Estilizado responsivo para la cuadrícula de tarjetas (`ContextMovieCard.css`), tarjetas individuales (`MovieCard.module.css`), pie de página (`Footer.css`) y vista de detalle (`MovieDetails.css`).
- **TMDB API:** Fuente de datos externa para obtener el catálogo, pósters, géneros, calificaciones y sinopsis de las películas.
- **Git y GitHub:** Control de versiones y flujo de trabajo colaborativo en equipo mediante ramas y commits.
- **Netlify:** Plataforma de alojamiento y despliegue continuo en la nube con soporte para rutas SPA.

## Estructura general del proyecto
```text
React_Web/
└── Peliculas/
    ├── public/
    │   ├── _redirects               # Configuración de redirección para rutas SPA en Netlify
    │   ├── favicon.svg              # Ícono principal de la pestaña del navegador
    │   └── icons.svg                # Recursos vectoriales públicos
    ├── src/
    │   ├── assets/
    │   │   ├── hero.png             # Recurso gráfico de portada
    │   │   ├── react.svg            # Logotipo de React
    │   │   └── vite.svg             # Logotipo de Vite
    │   ├── components/
    │   │   ├── ContextMovieCard.jsx # Contenedor de la cuadrícula y petición del catálogo
    │   │   ├── ContextMovieCard.css # Estilos de la cuadrícula de películas
    │   │   ├── Footer.jsx           # Componente de pie de página institucional y del equipo
    │   │   ├── Footer.css           # Estilos del pie de página
    │   │   ├── MovieCard.jsx        # Componente individual de tarjeta de película
    │   │   └── MovieCard.module.css # Estilos encapsulados de cada tarjeta
    │   ├── data/
    │   │   └── httpClient.jsx       # Cliente HTTP con fetch y autorización hacia TMDB API
    │   ├── img/
    │   │   ├── CUCEI.png            # Logotipo institucional utilizado en la interfaz
    │   │   └── placeholder.png      # Imagen de respaldo cuando una película no tiene póster
    │   ├── pages/
    │   │   ├── LandingPage.jsx      # Vista principal con el listado de películas
    │   │   ├── MovieDetails.jsx     # Vista de detalle de la película seleccionada
    │   │   └── MovieDetails.css     # Estilos de la vista de detalle
    │   ├── routers/
    │   │   └── routes.jsx           # Definición de rutas principales de la aplicación
    │   ├── utils/
    │   │   └── getMovieImg.jsx      # Helper para construir la URL del póster o usar respaldo
    │   ├── App.jsx                  # Componente raíz de la aplicación
    │   ├── App.css                  # Estilos globales de la aplicación
    │   ├── index.css                # Estilos base
    │   └── main.jsx                 # Punto de entrada de React
    ├── .gitignore                   # Archivos y carpetas excluidos del repositorio
    ├── eslint.config.js             # Reglas de linting del proyecto
    ├── index.html                   # Plantilla HTML principal
    ├── package.json                 # Dependencias y scripts del proyecto
    └── vite.config.js               # Configuración de Vite
```

## Instalación y ejecución local

1. Clonar el repositorio e ingresar a la carpeta de la aplicación:
   ```bash
   git clone [https://github.com/DiegoMax08/React_Web.git](https://github.com/DiegoMax08/React_Web.git)
   cd React_Web/Peliculas
   ```

2. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Configurar la clave o token de acceso de TMDB (si se emplea archivo `.env` local) 
   
   ejemplo de .env:
   ```bash
   VITE_TMDB_ACCESS_TOKEN= TOKEN
   ```

   y levantar el servidor de desarrollo:
   ```bash
   npm run dev
   ```


## Rutas utilizadas
- **`/` (`LandingPage.jsx`):** Ruta raíz que despliega el encabezado principal y la cuadrícula general de películas obtenidas desde la API.
- **`/movies/:movieId` (`MovieDetails.jsx`):** Ruta dinámica que captura el parámetro `movieId` de la URL para consultar y mostrar la ficha completa de la película seleccionada.
- **Redirección SPA (`public/_redirects`):** Redirige todas las rutas (`/* /index.html 200`) para evitar errores `404` al recargar vistas dinámicas directamente en Netlify.

## API utilizada
- **The Movie Database (TMDB) API v3:** `https://api.themoviedb.org/3`
  - `GET /discover/movie`: Obtiene el listado general de películas mostrado en la página principal.
  - `GET /movie/{movieId}`: Recupera los detalles específicos (título, póster, géneros y sinopsis) de una película individual.
  - **Servidor de imágenes (`https://image.tmdb.org/t/p/`):** Utilizado en `getMovieImg.jsx` para construir las rutas de los pósters y asignar `placeholder.png` cuando no existe imagen disponible.

## Descripción de funcionamiento
1. Al acceder a la aplicación en la ruta `/`, se renderiza el título principal **"Películas"** junto con el componente `LandingPage`, el cual monta `ContextMovieCard` y `Footer`.
2. `ContextMovieCard` ejecuta una petición asíncrona mediante `httpClient.jsx` hacia el endpoint de descubrimiento de TMDB y almacena los resultados en el estado del componente para renderizar cada elemento mediante `MovieCard`.
3. Al seleccionar cualquier tarjeta del catálogo, `React Router DOM` navega hacia `/movies/:movieId` sin recargar la página. En esta vista, `MovieDetails` toma el identificador de la URL, realiza una nueva consulta a TMDB y muestra la información detallada de la película junto con su póster y géneros.

## Enlaces de repositorio y despliegue
- **Repositorio en GitHub:** [https://github.com/DiegoMax08/React_Web](https://github.com/DiegoMax08/React_Web)
- **Despliegue en Netlify:** [https://practica7react.netlify.app](https://practica7react.netlify.app)

## Conclusiones
- **Diego Maximiliano Llamas Guerrero:** En esta actividad puse a prueba lo que aprendí acerca de las API en actividades pasadas, además de poner a prueba otros conocimientos/herramientas que se nos han enseñado con anterioridad en el curso, por ejemplo el uso de CSS o el uso de la herramienta de Netlify para que cualquiera pueda ver la página que se creó
Algo nuevo que aprendí en esta actividad fue el uso de React y Vite, que si bien ya había usado anteriormente, no lograba comprender del todo cuál era su utilidad. Además, no está de más poner a prueba lo que he aprendido sobre github, ya que es una herramienta muy importante para poder manejar este tipo de trabajos.

- **Carlos Emanuel Plascencia Gonzalez:** En esta actividad pude aplicar y reforzar lo que hemos visto sobre el consumo de APIs y el desarrollo frontend, integrando herramientas como React, Vite y CSS para construir una interfaz funcional y clara. Aunque ya sabía trabajar en equipo utilizando GitHub me permitió coordinar cambios, manejar el flujo de trabajo del repositorio y ver en práctica cómo se reparten las responsabilidades dentro de un proyecto colaborativo. Más allá de lo técnico, esta experiencia ayudó a practicar cómo se conectan las distintas piezas de una aplicación web moderna desde el desarrollo hasta su organización en equipo.

- **Valeria Lizzeth Pérez Molgado:** Desarrollar esta práctica de forma colaborativa en Git y GitHub nos ayudó al refuerzo de conocimientos teóricos sobre el funcionamiento de las API´s y su funcionalidad dentro de una aplicación, también la integración de herramientas como React, Vite y CSS  nos ayudó a facilitar el desarrollo, además dividir el proyecto en módulos nos permitió avanzar de forma ordenada logrando que cada integrante completara los commits necesarios para desarrollar la práctica. 

- **Juan Pablo Ramirez Baltierra:** En esta actividad fue la primera vez que trabajo en conjunto utilizando github en simultáneo en distintas tareas, también es la primera vez que he visto en funcionamiento cosas como la separación de tareas y la definición de una ruta crítica de verdad. Independiente de lo anterior también me ayudó a aprender un poco más de react, a pesar de que ya lo había utilizado, el uso en este proyecto me ayudó a comprender un poco más el cómo utilizarlo, además de la utilización de APIs


---

### Despliegue
- **GitHub:** https://github.com/DiegoMax08/React_Web
- **Netlify:** https://practica7react.netlify.app
