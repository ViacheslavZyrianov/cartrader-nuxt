import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { city } = event.context.params;
    const { make, minPrice, maxPrice } = getQuery(event);

    const where: Record<string, unknown> = {
        city: city.toLowerCase()
    }

    if (make) {
        where.make = make.toString().toLowerCase();
    }

    if (minPrice || maxPrice) {
        where.price = {}

        if (minPrice) {
            where.price.gte = Number(minPrice);
        }

        if (maxPrice) {
            where.price.lte = Number(maxPrice);
        }
    }

    return prisma.car.findMany({
        where
    })
})
