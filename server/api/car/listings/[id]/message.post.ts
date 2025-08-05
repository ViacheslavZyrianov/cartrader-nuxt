import Joi from 'joi';
import { PrismaClient } from '@/generated/prisma';

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).pattern(/^[0-9]+$/),
    message: Joi.string().min(20).required(),
})

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { id } = event.context.params;

    const { error } = schema.validate(body);

    if (error) {
        throw createError({
            statusCode: 400,
            statusMessage: error.message,
        });
    }

    return prisma.message.create({
        data: {
            ...body,
            listingId: Number(id)
        }
    })
})
