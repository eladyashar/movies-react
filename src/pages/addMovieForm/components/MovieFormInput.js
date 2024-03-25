const MovieFormInput = ({type, name, label, validationSchema, errorObject, register}) => {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={name}>{label}:</label>
            <input className={`form-control ${errorObject ? 'is-invalid' : ''}`} type={type} id={name} name={name} {...register(name, validationSchema)}>
            </input>
            <div class="invalid-feedback">
                {errorObject && errorObject.message}
            </div>
        </div>
    )
}
export default MovieFormInput;