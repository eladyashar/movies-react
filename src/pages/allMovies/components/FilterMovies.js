import { useContext } from "react";
import { MoviesContext } from "../../../providers/movies-provider";
const FilterMovies = () => {
    const {setMovies, fetchMovies} = useContext(MoviesContext);
    const applyFilters = () => {
        fetchMovies().then(((movies)=> {
            const selectedGenre = document.getElementById("genre").value;
            const filteredMovies = movies.filter((movie) => movie.genre === selectedGenre || selectedGenre === "");
            setMovies(filteredMovies);
        }))
    }
    return (
        <div className="filter-header">
            <h3>Filter Movies</h3>
                <div className="filter">
                    <label htmlFor="genre">Genre:</label>
                    <select id="genre">
                        <option value="">Select Genre</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                </div>
                <div className="filter">
                    <label htmlFor="year">Release Year:</label>
                    <input type="range" id="year" min="1900" max="2024"></input>
                </div>
                <div className="filter">
                    <label htmlFor="rating">Minimum Rating:</label>
                    <select id="rating">
                        <option value="">Select Rating</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                    </select>
                </div>
            <button id="filter-btn" onClick={applyFilters}>Apply Filters</button>
        </div>
    )
}
export default FilterMovies;