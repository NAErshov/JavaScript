const myCity = {
    city: 'Kazan',
    info: {
        isPopular: true,
        country: 'Russia'
    }
}

delete myCity.info['isPopular']

console.log(myCity)
// console.log(myCity.info.isPopular)