const Joi = require('@hapi/joi');

module.exports.signInValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .required(),
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .required(),
        gender: Joi.string()
            .required()
    });

    return schema.validate(data);
};

module.exports.signUpValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .required()
    });

    return schema.validate(data);
}