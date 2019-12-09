export const required = (value) => (value ? undefined : "Field is required!")
export const maxLength = (max) => (value) => value && value.length > max ? `Must be ${max} character or less` : undefined