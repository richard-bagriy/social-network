export const required = (value) => (value ? undefined : "Field is required!")
export const maxLength = (max) => (value) => value && value.length > max ? `Must be ${max} character or less` : undefined
export const minLength = min => value => value && value.length < min ? `Must be ${min} character or higher` : undefined
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined
export const phoneNumber = value =>
    value && !/^(3|[1-9][0-9]{11})$/i.test(value)
      ? 'Invalid phone number, must be 12 digits: Example 380665190051'
      : undefined
export const selectChoosen = value => (value === '0' ? 'Please choose the option' : undefined)