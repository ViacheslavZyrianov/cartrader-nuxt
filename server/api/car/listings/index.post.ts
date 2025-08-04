import Joi from 'joi';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().min(20).max(1000).required(),
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().integer().min(1886).max(new Date().getFullYear() + 1).required(),
    miles: Joi.number().integer().min(0),
    city: Joi.string().min(2).max(255).required(),
    numberOfSeats: Joi.number().integer().min(1).max(32).required(),
    features: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
    listerId: Joi.string().required(),
    price: Joi.number().min(0).required(),
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { error } = schema.validate(body);

    if (error) {
        throw createError({
            statusCode: 400,
            statusMessage: error.message,
        });
    }

    return prisma.car.create({
        data: body
    });
})
