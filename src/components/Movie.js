const Movie = ({movie}) => {
    return (
        <div className="movie">
            <img src={movie.imageUrl} alt={movie.title}></img>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
            <p><strong>Genere:</strong> {movie.genre}</p>
            <p><strong>raiting:</strong> {movie.raiting}</p>
            <p><strong>Release Date:</strong> {movie.publishDate}</p>
            <a href={movie.imdbLink} target="_blank" rel="noreferrer">IMDb Link</a>
        </div>
    )
}
export default Movie;