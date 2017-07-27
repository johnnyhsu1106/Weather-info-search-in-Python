const API_KEY = 'c28805b2e4c0458bb94c023f9ea2887c';

const get_weather_info = (geo_info, callback) => {
    const lat = geo_info.latitude;
    const lng = geo_info.longitude;

    const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`;
    const request = require('request');
    request({
        url: url,
        json: true
        },
        (error, response, body) => {
            if (!error  && response.statusCode === 200) {
                callback(undefined, {
                    temperature: body.currently.temperature,
                    apparent_temperature: body.currently.apparentTemperature,
                    pressure: body.currently.pressure,
                    humidity: body.currently.humidity
                });
            } else {
                callback('Unable to fetch weather info');

            }

        }
    );
}

module.exports.get_weather_info = get_weather_info;
