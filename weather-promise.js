const API_KEY = 'c28805b2e4c0458bb94c023f9ea2887c';
const request = require('request');


const get_weather_info = (geo_info) => {
    const lat = geo_info.latitude;
    const lng = geo_info.longitude;

    const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`;
    return new Promise((resolve, reject) => {
        request({
            url: url,
            json: true
            },
            (error, response, body) => {
                if (!error  && response.statusCode === 200) {
                    resolve({
                        temperature: body.currently.temperature,
                        apparent_temperature: body.currently.apparentTemperature,
                        pressure: body.currently.pressure,
                        humidity: body.currently.humidity
                    });
                } else {
                    reject('Unable to fetch weather info');

                }

            }
        );
    });

}

module.exports.get_weather_info = get_weather_info;
