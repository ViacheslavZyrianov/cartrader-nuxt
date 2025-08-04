// import Joi from 'joi';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { userId } = event.context.params;

    return prisma.car.findMany(({
        where: {
            listerId: userId,
        },
        select: {
            id: true,
            name: true,
            price: true,
            image: true
        }
    }))
})
