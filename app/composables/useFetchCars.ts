export default async (city: string, query: Record<string, unknown>) => {
    const { data, error } = await useFetch(`/api/cars/${city}`, {
        query
    })

    if (error.value) {
        throw createError({
            statusCode: error.value.statusCode || 500,
            statusMessage: error.value.message || 'An error occurred while fetching cars'
        })
    }

    return data
}
