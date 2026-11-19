import { useEffect, useState } from "react";
import { get } from "../data/httpClient";

function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie")
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <p>Películas recibidas: {movies.length}</p>
    </div>
  );
}

export default ContextMovieCard;
