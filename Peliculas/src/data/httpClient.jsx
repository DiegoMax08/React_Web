const API_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export async function get(path) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (!response.ok) {
    throw new Error("Error en la solicitud: " + response.status);
  }

  return response.json();
}
