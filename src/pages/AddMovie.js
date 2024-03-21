
import { useForm } from "react-hook-form"
import titleValidationSchema from "./addMovieValidationSchemas/titleValidationSchema";
import RichInput from "../components/RichInput"
import { MoviesContext } from "../providers/movies-provider";
import { useContext } from "react";
const AddMovie = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    const {addMovie, movies} = useContext(MoviesContext);
    const onSubmit = (data) => {
        console.log(data)
        const movieJson = {...data, actors: data.actors.split(","), id: movies.length + 1}
        addMovie(movieJson).then((response) => {
            console.log(response);
        })
    }
    const imdbValidationSchema = {
        required: "imdb link is required", 
        pattern:
            {
                value: /imdb\.com/,
                message: "not an imdb link"
            }
    };

    return (
        <div className="form-main-content">
            <div className="form-card">
                <h2>Add a Movie</h2>
                <form id="add-movie-form" onSubmit={handleSubmit(onSubmit)}>
                    <RichInput 
                        register={register}
                        validationSchema={titleValidationSchema}
                        name="title"
                        label="Title"
                        errorObject={errors.title}
                    />
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" {...register("description", {required: true, minLength: 20, maxLength: 300})}></textarea>
                        {errors.description && <p role="alert">the title is to short</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="imdbLink">IMDb Link:</label>
                        <input id="imdbLink" name="imdbLink" {...register("imdbLink", imdbValidationSchema)}></input>
                        {errors.imdb && <p role="alert">{errors.imdb.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input id="imageUrl" name="imageUrl" {...register("imageUrl", {required: true})}></input>
                        {errors.image && <p role="alert">the title is to short</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre:</label>
                        <input id="genre" name="genre" {...register("genre", {required: true})}></input>
                        {errors.genre && <p role="alert">the title is to short</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="raiting">Raiting:</label>
                        <input id="raiting" name="raiting" {...register("raiting", {required: true})}></input>
                        {errors.raiting && <p role="alert">the title is to short</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="actors">Actors:</label>
                        <input id="actors" name="actors" {...register("actors", {required: true, pattern:"/^[^,]+(,[^,]+)*$"})}></input>
                        {errors.actors && <p role="alert">the title is to short</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="publishDate">Publish Date:</label>
                        <input type="date" id="publishDate" name="publishDate" {...register("publishDate", {required: true})}></input>
                        {errors.publishDate && <p role="alert">the title is to short</p>}
                    </div>
                    <button id="addMovieButton" type="submit">Submit Movie</button>
                </form>
            </div>
        </div>
    )
}
export default AddMovie;