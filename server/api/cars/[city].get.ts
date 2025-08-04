import cars from '@/data/cars.json'

export default defineEventHandler(async (event) => {
    const { make, minPrice, maxPrice } = getQuery(event)

    let filteredCars = cars.filter(car => car.city.toLowerCase() === event.context.params?.city.toLowerCase())

    if (make) {
        filteredCars = filteredCars.filter(car => car.make.toLowerCase() === make.toString().toLowerCase())
    }

    if (minPrice) {
        filteredCars = filteredCars.filter(car => Number(car.price) >= Number(minPrice))
    }

    if (maxPrice) {
        filteredCars = filteredCars.filter(car => Number(car.price) >= Number(maxPrice))
    }

    return filteredCars
})
