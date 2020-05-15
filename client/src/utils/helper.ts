export const generateImagePath = (name: string): string => {
    return `${process.env.PUBLIC_URL}/images/${name}`
}

export const generateImageEventPath = (name: string): string => {
    return `${process.env.PUBLIC_URL}/images/event/cover/${name}`
}