
import FilterMovies from '../components/FilterMovies';
import MovieLibrary from '../components/MovieLibrary';
const MoviesPage = () => {
    return (
        <>
            <aside>
                <FilterMovies/>
            </aside>
            <section>
                <MovieLibrary/>
            </section>
        </>
    )
}
export default MoviesPage;