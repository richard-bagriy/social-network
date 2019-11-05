const Validator = require('validator')
const isEmpty = require('is-empty')

const validateRegistration = (data) => {
    let errors = {}

    data.name     = !isEmpty(data.name) ? data.name : '';
    data.email    = !isEmpty(data.name) ? data.name : '';
    data.password = !isEmpty(data.name) ? data.name : '';

    // name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

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

module.exports = validateRegistration;