export const generateImagePath = (name: string): string => {
    return `${process.env.PUBLIC_URL}/images/${name}`
}

export const generateImageFromFolder = (folder: string) => (name: string): string => {
    return `${process.env.PUBLIC_URL}/images/${folder}/${name}`
}