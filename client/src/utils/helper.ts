export const generateImagePath = (name: string): string => {
    return `${process.env.PUBLIC_URL}/images/${name}`
}