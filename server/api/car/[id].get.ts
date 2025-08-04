import cars from '@/data/cars.json';

export default defineEventHandler((event) => {
    const car = cars.find(car => car.id === Number(event.context.params?.id)) || null;

    if (!car) {
        throw createError({
            statusCode: 404,
            statusMessage: `Car with id ${event.context.params?.id} not found`,
        });
    }

    return car
})
