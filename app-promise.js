const geo = require('./geo-promise.js'); // extension can be removed or not
const weather = require('./weather-promise.js');
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


// call the google map API and fetch tne geo location (lan,lng) based on address as input
const address = argv.address;
geo.get_geo_info(address).then(
    (geo_info) => {
        console.log(geo_info);
        weather.get_weather_info(geo_info).then(
            (weather_info) => {console.log(weather_info);},
            (error_message) => {console.log(error_message);}
        );},

    (error_message) => { console.log(error_message)}

);
