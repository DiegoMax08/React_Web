# Práctica 7 - App de Películas con React
## Integrantes
- Diego Maximiliano Llamas Guerrero 
- Carlos Emanuel Plascencia Gonzalez
- Valeria Lizzeth Pérez Molgado
- Juan Pablo Ramirez Baltierra


## Objetivo
Desarrollar una pagina web con React y Vite que consume una API para mostrar un listado de detalles de peliculas desde The Movie Database, todo trabajandolo de forma colectiva y paso a paso.


## Tecnologías
-**React:** Biblioteca principal para la construcción de la interfaz de usuario basada en componentes.<br>
-**Vite:** Entorno de desarrollo rápido y empaquetador para producción.<br>
-**React Router DOM:** Gestión de navegación declarativa y rutas dinámicas (`BrowserRouter`, `Routes`, `Route`).<br>
-**CSS3:** Estilizado responsivo para la cuadrícula de tarjetas y vistas de detalle.<br>
-**TMDB API:** Fuente de datos externa para obtener el catálogo, pósters, géneros y sinopsis de las películas.<br>
-**Git y GitHub:** Control de versiones y flujo de trabajo colaborativo mediante ramas y commits.<br>
-**Netlify:** Plataforma de alojamiento y despliegue continuo en la nube.<br>


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
**Para clonar el repositorio:**<br>
git clone [URL_DEL_REPOSITORIO](https://github.com/DiegoMax08/React_Web/tree/main)
   cd practica7-react-pelicula<br>
**Instalar las dependencias:**<br>  
npm install<br>
**Crea un archivo .env en la raíz del proyecto y agregar la API de The Movie Database (TMDB):**<br>
VITE_TMDB_API_KEY= https://api.themoviedb.org/3 <br>
**Ejecutar el servidor de desarrollo:**<br>
npm run dev


## Rutas utilizadas
- / = LandingPage. Página de inicio que renderiza el componente MovieGrid con el catálogo de películas descubiertas.
- /movies/:movieId = MovieDetails. Vista dinámica que captura el parámetro movieId de la URL para consultar y mostrar la información detallada de una película específica.


## API utilizada
The Movie Database (TMDB) https://api.themoviedb.org/3

## Descripción de funcionamiento
Al acceder a la aplicación se muestra el título de la página "Películas", a su vez está hace una petición a TMDB y se despliega en la pantalla una serie de imagenes con el póster de peliculas y su titulo, al hacer clic en algun póster React Router redirige al usuario a /movies/:movieId y se muestra una imagen ampliada del póster, el título completo, la lista de géneros separados por comas y la descripción o resumen de la trama, ademas se muestra los nombres completos de los integrantes, datos del profesor, materia, calendario escolar, fecha y el escudo en el pie de página.


## Link del repositorio
https://github.com/DiegoMax08/React_Web/tree/main


## Link del despliegue en Netlify
https://practica7react.netlify.app


## Conclusiones
**Integrante 1:**<br>
En esta actividad puse a prueba lo que aprendí acerca de las API en actividades pasadas, además de poner a prueba otros conocimientos/herramientas que se nos han enseñado con anterioridad en el curso, por ejemplo el uso de CSS o el uso de la herramienta de Netlify para que cualquiera pueda ver la página que se creó
Algo nuevo que aprendí en esta actividad fue el uso de React y Vite, que si bien ya había usado anteriormente, no lograba comprender del todo cuál era su utilidad. Además, no está de más poner a prueba lo que he aprendido sobre github, ya que es una herramienta muy importante para poder manejar este tipo de trabajos.<br>

**Integrante 2:**<br>
En esta actividad fue la primera vez que trabajo en conjunto utilizando github en simultáneo en distintas tareas, también es la primera vez que he visto en funcionamiento cosas como la separación de tareas y la definición de una ruta crítica de verdad. Independiente de lo anterior también me ayudó a aprender un poco más de react, a pesar de que ya lo había utilizado, el uso en este proyecto me ayudó a comprender un poco más el cómo utilizarlo, además de la utilización de APIs.<br>

**Integrante 3:**<br>
Desarrollar esta práctica de forma colaborativa en Git y GitHub nos ayudó al refuerzo de conocimientos teóricos sobre el funcionamiento de las API´s y su funcionalidad dentro de una aplicación, también la integración de herramientas como React, Vite y CSS  nos ayudó a facilitar el desarrollo, además dividir el proyecto en módulos nos permitió avanzar de forma ordenada logrando que cada integrante completara los commits necesarios para desarrollar la práctica.<br>

**Integrante 4:**<br>
En esta actividad pude aplicar y reforzar lo que hemos visto sobre el consumo de APIs y el desarrollo frontend, integrando herramientas como React, Vite y CSS para construir una interfaz funcional y clara. Aunque ya sabía trabajar en equipo utilizando GitHub me permitió coordinar cambios, manejar el flujo de trabajo del repositorio y ver en práctica cómo se reparten las responsabilidades dentro de un proyecto colaborativo. Más allá de lo técnico, esta experiencia ayudó a practicar cómo se conectan las distintas piezas de una aplicación web moderna desde el desarrollo hasta su organización en equipo.<br>
Práctica 7 • React + Vite + GitHub + Netlify

Guía didáctica para alumnos | Página 13

## Despliegue
GitHub: ...
Netlify: ...
