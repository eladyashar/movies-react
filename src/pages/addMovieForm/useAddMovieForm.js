import { MoviesContext } from "../../providers/movies-provider";
import { useContext } from "react";
import { useForm } from "react-hook-form"
const useAddMovieForm = () => {
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
    return {register, handleSubmit, onSubmit, errors}
}
export default useAddMovieForm;