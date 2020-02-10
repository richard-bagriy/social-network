export const required = (value) => (value ? undefined : "Field is required!")
export const maxLength = (max) => (value) => value && value.length > max ? `Must be ${max} character or less` : undefined
export const minLength = min => value => value && value.length < min ? `Must be ${min} character or higher` : undefined