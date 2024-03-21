const titleValidationSchema = {
    required: "you must enter title",
    minLength: {
        value: 3,
        message: "title must be at least 3 charecters"
    },
    maxLength: {
        value: 50,
        message: "title must be at max 50 charecters"
    }
};

export default titleValidationSchema;