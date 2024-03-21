const RichInput = ({name, label, validationSchema, errorObject, register}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}:</label>
            <input id={name} name={name} {...register(name, validationSchema)}>
            </input>
            {errorObject && <p role="alert">{errorObject.message}</p>}
        </div>
    )
}
export default RichInput;