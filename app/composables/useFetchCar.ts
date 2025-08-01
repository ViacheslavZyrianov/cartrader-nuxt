export default async (id: string) => {
    const { data, error } = await useFetch(`/api/car/${id}`)

    if (error.value) {
        throw createError({
            statusCode: error.value.statusCode || 500,
            statusMessage: error.value.message || 'An error occurred while fetching cars'
        })
    }

    return data
}
