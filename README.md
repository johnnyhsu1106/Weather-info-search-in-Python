On conmmlind prompt (Windows) or Terminal (Unix) <br>
Before running this app, please run the following command, so it will install all dependecies.<br> 
$ npm install <br>
Then, run the following command to run the code.<br>
$ node app.js -a address <br>
address is the real address you should type in, so you can fetch geo and weather info based on this address. <br>
For example: <br>
$ node app.js -a 'Times Square, Manhattan, NY, USA' <br>

It will fetch the geo location information (.json) from Google Map API <br>
and current weather information (.json) from Darksky.net. <br>
based on the adreess you type in.

The output will like the following: <br>
{ address: 'Manhattan, NY 10036, USA', <br>
  latitude: 40.758895, <br>
  longitude: -73.985131 } <br>
{ temperature: 74.27, <br>
  apparent_temperature: 74.63, <br>
  pressure: 1015.74, <br>
  humidity: 0.69 }   <br>
  
  Feel free to revise the geo.js and weather.js so these funciton can return/fetch the information you want.
  
