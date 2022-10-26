const request = require('request')

const url = 'https://api.stormglass.io/v2/weather/point?lat=58.7984&lng=17.8081&params=airTemperature'

const forecast = (address, forecastFunction) => {
    request({
        url: url,
        json: true,
        headers: {
            'Authorization': 'ebf67de0-5142-11ed-b59d-0242ac130002-ebf67e44-5142-11ed-b59d-0242ac130002'
        }
    }, (error, response) => {
        forecastFunction(response.body.hours[1])
    })
}

module.exports = forecast
