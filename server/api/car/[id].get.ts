import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
    const { id } = event.context.params;

    const car = prisma.car.findUnique({
        where: {
            id: Number(id),
        }
    });

    if (!car) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Car not found',
        });
    }

    return car;
})
