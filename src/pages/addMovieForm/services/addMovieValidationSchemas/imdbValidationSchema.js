const imdbValidationSchema = {
    required: "imdb link is required", 
    pattern:
        {
            value: /imdb\.com/,
            message: "not an imdb link"
        }
};

export default imdbValidationSchema;