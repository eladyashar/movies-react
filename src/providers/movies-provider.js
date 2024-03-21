import {createContext, useEffect, useState} from "react";

// Create special context Object
export const MoviesContext = createContext(null);

export function MoviesProvider({children}) {
  const [movies, setMovies] = useState([]);
  async function fetchMovies() {
    const response = await fetch("http://localhost:3000/movies");
    const moviesJson = await response.json();
    return moviesJson;
  };
  useEffect(()=>{
    fetchMovies().then((movies) => {
      setMovies(movies);
    })
  },[]);

  const addMovie = async (movieData) => {
    return fetch("http://localhost:3000/movies", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData)
     })
  }

  const value = { movies, setMovies, fetchMovies, addMovie };
  return (
      <MoviesContext.Provider value={value}>
        {children}
      </MoviesContext.Provider>
  )
}
