const request = require('request');

const get_geo_info = (address, callback) => {
    const encode_address = encodeURIComponent(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encode_address}`;

    request( {
        url: url,
        json: true},
        (error, response, body)=>{
            if (error){
                callback('Unable to connect to Google server');
            } else if (body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST'){
                callback('Unable to find the address');
            } else if (body.status === 'OK'){
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
    });
};

//  export geocode_function
module.exports.get_geo_info = get_geo_info;
// module.exports.key = function_name

// module.exports = {
//     geocode_address: geocode_address
// }

// module.exports = {
//     geocode_address
// }
// in ES6, the key and value are the same. The shorter expression is like above.
