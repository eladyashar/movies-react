import {
    titleValidationSchema,
    imdbValidationSchema,
    actorsValidationSchema,
    genreValidationSchema
} from "./services/addMovieValidationSchemas";
import MovieFormInput from "./components/MovieFormInput"
import useAddMovieForm from "./useAddMovieForm";
const AddMovieForm = () => {
    const {register, handleSubmit, onSubmit, errors} = useAddMovieForm();
    return (
        <div className="form-main-content">
            <div className="form-card">
                <h2>Add a Movie</h2>
                <form className="needs-validation" id="add-movie-form" onSubmit={handleSubmit(onSubmit)} novalidate>
                    <MovieFormInput 
                        register={register}
                        validationSchema={titleValidationSchema}
                        name="title"
                        label="Title"
                        errorObject={errors.title}
                    />
                    <MovieFormInput 
                        register={register}
                        validationSchema={{required: true, minLength: 20, maxLength: 300}}
                        name="description"
                        label="Description"
                        errorObject={errors.description}
                    />
                    <MovieFormInput 
                        register={register}
                        validationSchema={imdbValidationSchema}
                        name="imdbLink"
                        label="IMDb Link"
                        errorObject={errors.imdbLink}
                    />
                    <MovieFormInput 
                        register={register}
                        validationSchema={{required: "Image URL is required"}}
                        name="imageUrl"
                        label="Image URL"
                        errorObject={errors.imageUrl}
                    />
                    <MovieFormInput 
                        register={register}
                        validationSchema={genreValidationSchema}
                        name="genre"
                        label="Genre"
                        errorObject={errors.genre}
                    />
                    <MovieFormInput 
                        register={register}
                        validationSchema={{required: "raiting is required"}}
                        name="raiting"
                        label="Raiting"
                        errorObject={errors.raiting}
                    />
                    <MovieFormInput 
                        register={register}
                        validationSchema={actorsValidationSchema}
                        name="actors"
                        label="Actors"
                        errorObject={errors.actors}
                    />
                    <MovieFormInput 
                        register={register}
                        validationSchema={{required: "Publish date is required"}}
                        name="publishDate"
                        label="Publish date"
                        errorObject={errors.publishDate}
                        type="date"
                    />
                    <button className="btn btn-primary" id="addMovieButton" type="submit">Submit Movie</button>
                </form>
            </div>
        </div>
    )
}
export default AddMovieForm;