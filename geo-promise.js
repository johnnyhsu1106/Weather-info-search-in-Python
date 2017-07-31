request = require('request');

const get_geo_info = (address) => {
    const encode_address = encodeURIComponent(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encode_address}`;

    return new Promise((resolve, reject) => {
        request(
            { url: url,
              json: true },
            (error, response, body) => {
              if (error){
                  reject('Unable to connect to Google server');
              } else if (body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST'){
                  reject('Unable to find the address');
              } else if (body.status === 'OK'){
                  resolve({
                          address: body.results[0].formatted_address,
                          latitude: body.results[0].geometry.location.lat,
                          longitude: body.results[0].geometry.location.lng
                  })
              }

            }
        );

    });
};

module.exports.get_geo_info = get_geo_info;


// const address = '144-87 41st Ave Flushing, NY 11355';
// get_geo_info(address).then(
//     (geo_info) => {console.log(geo_info);},
//     (error_message) => {console.log(error_message)}
// );
