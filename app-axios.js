const API_KEY = 'c28805b2e4c0458bb94c023f9ea2887c';

const axios = require('axios');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather info',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


const encode_address = encodeURIComponent(argv.address);
const address_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encode_address}`;

axios.get(address_url).then(


    (response) => {

    if (response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find the address');

    }
        const address = response.data.results[0].formatted_address;
        const latitude = response.data.results[0].geometry.location.lat;
        const longitude = response.data.results[0].geometry.location.lng;

        console.log({address, latitude, longitude});

        const weather_url = `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`;
        return axios.get(weather_url).then(
            (response) => {
                const temperature = response.data.currently.temperature;
                const apparent_temperature = response.data.currently.apparentTemperature;
                const pressure = response.data.currently.pressure;
                const humidity = response.data.currently.humidity;

                console.log({temperature, apparent_temperature, pressure, humidity});

        })

    }).catch((error) => {
        if (error.code === 'ENOTFOUND' ) {
        console.log('Unable to connect to API server');
        }
        else {
            console.log(error.message);
        }
    });
