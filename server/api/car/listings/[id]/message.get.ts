// import Joi from 'joi';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;

    return prisma.message.findMany({
        where: {
            listingId: Number(id)
        }
    })
})
