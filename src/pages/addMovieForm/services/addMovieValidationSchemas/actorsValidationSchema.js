const actorsValidationSchema = {
    required: "actors are required", 
    pattern:
        {
            value: /^[^,]+(,[^,]+)*$/,
            message: "Actors must be seperated with commas"
        }
};

export default actorsValidationSchema;