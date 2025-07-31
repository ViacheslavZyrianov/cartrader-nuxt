export const useUtilities =  () => {
    const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

    return {
        capitalize
    }
}
