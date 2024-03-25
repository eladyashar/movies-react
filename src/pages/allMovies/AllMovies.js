
import FilterMovies from './components/FilterMovies';
import MovieLibrary from './components/MovieLibrary'
const AllMovies = () => {
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
export default AllMovies;