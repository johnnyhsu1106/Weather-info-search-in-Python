On conmmlind prompt (Windows) or Terminal (Unix) <br>
address stands the real address <br>
$ node app.js -a address <br>
for example: 
$ node app.js -a 'Times Square, Manhattan, NY, USA' <br>

It will fetch the geo location information (.json) from Google Map API
and current weather information (.json) from Darksky.net. based on the adreess you type in.

The output will like the following:
{ address: 'Manhattan, NY 10036, USA',
  latitude: 40.758895,
  longitude: -73.985131 }
{ temperature: 74.27,
  apparent_temperature: 74.63,
  pressure: 1015.74,
  humidity: 0.69 }
  
  Feel free to revise the geo.js and weather.js so these funciton can return/fetch the information you want.
  
