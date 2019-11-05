const Validator = require('validator')
const isEmpty = require('is-empty')

const validateLogin = (data) => {
    let errors = {}

    data.email    = !isEmpty(data.name) ? data.name : '';
    data.password = !isEmpty(data.name) ? data.name : '';

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }   
}

module.exports = validateLogin;