const geo = require('./geo'); // extension can be removed or not
const weather = require('./weather');
// const request = require('request');
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
geo.get_geo_info(argv.address, (map_error_message, geo_info) => {
    if (map_error_message){
        console.log(map_error_message);
    } else {
        weather.get_weather_info(geo_info, (weather_error_message, weather_info)=> {
            if (weather_error_message) {
                console.log(weather_error_message);
            } else {
                console.log(geo_info);
                console.log(weather_info);
            }
        } );
    }
});



// varible.key
