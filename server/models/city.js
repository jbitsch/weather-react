const axios = require('axios');

exports.get = function(name) {
  return new Promise((resolve, reject) => {
    const appId = process.env.WEATHER_API_KEY;
    const city = encodeURIComponent(name);
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+city+",dk&appid="+appId+"&units=metric";
    //const url = "http://localhost:3000/cities/"+name;
    axios.get(url)
      .then(res => res.data)
      .then(data => {
        const weather = {
          "name" : data.name,
          "temperature" : data.main.temp,
          "humidity" : data.main.humidity,
          "wind" : data.wind.speed,
          "id" : data.name,
        };
        resolve(weather);
      }).catch(err => {
      reject(err);
    });
  });
};