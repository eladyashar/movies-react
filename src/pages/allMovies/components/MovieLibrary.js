import Movie from './Movie';
import { MoviesContext } from '../../../providers/movies-provider';
import { useState, useEffect, useContext } from 'react';
const MovieLibrary = () => {
    const {movies} = useContext(MoviesContext);
    const [moviesComponents, setMoviesComponents] = useState();
    useEffect(()=>{
            const tempMovies = [];
            movies.forEach((movie) => tempMovies.push(<Movie key={movie.id} movie={movie}/>));
            setMoviesComponents(tempMovies);
    },[movies])
    
    return (
        <div id="movie-library">
            {moviesComponents}
        </div>
    )
}
export default MovieLibrary;